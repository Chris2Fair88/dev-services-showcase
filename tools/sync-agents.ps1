<#
.SYNOPSIS
    Syncs .claude/agents/*.md from this repo to ~/.claude/agents/.

.DESCRIPTION
    Copies agent definition files from the repo's .claude/agents directory to the
    user-level ~/.claude/agents directory, so the same agents are available across
    repos. Dry run by default: prints what WOULD happen without touching anything.
    Pass -Apply to actually copy files. Never deletes anything. If a destination
    file already exists with different content than the source, the script prints
    a diff and skips that file unless -Force is given. Only copies *.md files from
    the source agents directory; nothing else, and no git commands are ever run.

.PARAMETER Apply
    Actually perform the copy. Without this switch, the script only reports what
    it would do.

.PARAMETER Force
    When a destination file exists with different content than the source, copy
    over it anyway (only meaningful together with -Apply).

.EXAMPLE
    ./tools/sync-agents.ps1
    Dry run: reports what would be copied/skipped/conflicted.

.EXAMPLE
    ./tools/sync-agents.ps1 -Apply
    Copies new files and identical-content files. Conflicting files are skipped
    unless -Force is also given.
#>

[CmdletBinding()]
param(
    [switch]$Apply,
    [switch]$Force
)

$ErrorActionPreference = 'Stop'

# --- Resolve paths -----------------------------------------------------

$RepoRoot = Split-Path -Parent $PSScriptRoot
$SourceDir = Join-Path $RepoRoot '.claude/agents'
$DestDir = Join-Path $HOME '.claude/agents'

# Resolve to full, canonical paths for safety checks below.
$SourceDirFull = [System.IO.Path]::GetFullPath($SourceDir)
$DestDirFull = [System.IO.Path]::GetFullPath($DestDir)

function Write-Log {
    param([string]$Message)
    $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    Write-Host "[$timestamp] $Message"
}

Write-Log "Source: $SourceDirFull"
Write-Log "Destination: $DestDirFull"
Write-Log "Mode: $(if ($Apply) { 'APPLY' } else { 'DRY RUN' })$(if ($Force) { ' (Force enabled)' })"

# --- Safety: refuse any destination outside ~/.claude/agents -----------

$UserAgentsRootFull = [System.IO.Path]::GetFullPath((Join-Path $HOME '.claude/agents'))
if ($DestDirFull -ne $UserAgentsRootFull) {
    Write-Log "ERROR: Refusing to write outside of $UserAgentsRootFull (resolved destination was $DestDirFull)."
    exit 1
}

# --- Validate source -----------------------------------------------------

if (-not (Test-Path -LiteralPath $SourceDirFull -PathType Container)) {
    Write-Log "ERROR: Source directory not found: $SourceDirFull"
    exit 1
}

$sourceFiles = Get-ChildItem -LiteralPath $SourceDirFull -Filter '*.md' -File
if ($sourceFiles.Count -eq 0) {
    Write-Log "No *.md files found in $SourceDirFull. Nothing to do."
    exit 0
}

# --- Ensure destination directory exists (create only in -Apply mode) --

if (-not (Test-Path -LiteralPath $DestDirFull -PathType Container)) {
    if ($Apply) {
        New-Item -ItemType Directory -Path $DestDirFull -Force | Out-Null
        Write-Log "Created destination directory: $DestDirFull"
    }
    else {
        Write-Log "Would create destination directory: $DestDirFull"
    }
}

# --- Plan actions --------------------------------------------------------

$toCopy = @()
$toSkipIdentical = @()
$toConflict = @()

foreach ($file in $sourceFiles) {
    $destPath = Join-Path $DestDirFull $file.Name
    $destPathFull = [System.IO.Path]::GetFullPath($destPath)

    # Re-verify every resolved destination path stays inside the user agents root.
    if (-not $destPathFull.StartsWith($UserAgentsRootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
        Write-Log "ERROR: Refusing destination outside $UserAgentsRootFull : $destPathFull"
        exit 1
    }

    if (-not (Test-Path -LiteralPath $destPathFull -PathType Leaf)) {
        $toCopy += [pscustomobject]@{ Source = $file.FullName; Dest = $destPathFull; Name = $file.Name }
        continue
    }

    $srcContent = Get-Content -LiteralPath $file.FullName -Raw
    $destContent = Get-Content -LiteralPath $destPathFull -Raw

    if ($srcContent -eq $destContent) {
        $toSkipIdentical += [pscustomobject]@{ Source = $file.FullName; Dest = $destPathFull; Name = $file.Name }
    }
    else {
        $toConflict += [pscustomobject]@{ Source = $file.FullName; Dest = $destPathFull; Name = $file.Name }
    }
}

# --- Report plan -----------------------------------------------------------

Write-Log "New files to copy: $($toCopy.Count)"
foreach ($f in $toCopy) { Write-Log "  NEW: $($f.Name)" }

Write-Log "Identical files (no-op): $($toSkipIdentical.Count)"
foreach ($f in $toSkipIdentical) { Write-Log "  IDENTICAL: $($f.Name)" }

Write-Log "Conflicting files (differ from destination): $($toConflict.Count)"
foreach ($f in $toConflict) {
    Write-Log "  CONFLICT: $($f.Name)"
    Write-Host "----- diff: $($f.Name) (destination vs source) -----"
    $diff = Compare-Object -ReferenceObject (Get-Content -LiteralPath $f.Dest) -DifferenceObject (Get-Content -LiteralPath $f.Source) -IncludeEqual:$false
    if ($diff) {
        foreach ($line in $diff) {
            $marker = if ($line.SideIndicator -eq '<=') { 'DEST  >' } else { 'SRC   >' }
            Write-Host "  $marker $($line.InputObject)"
        }
    }
    Write-Host "----- end diff -----"
}

# --- Apply (or not) ---------------------------------------------------

if (-not $Apply) {
    Write-Log "Dry run complete. No files were modified. Re-run with -Apply to copy new/identical files."
    if ($toConflict.Count -gt 0) {
        Write-Log "NOTE: $($toConflict.Count) conflicting file(s) would be skipped unless -Force is also given."
    }
    exit 0
}

foreach ($f in $toCopy) {
    Copy-Item -LiteralPath $f.Source -Destination $f.Dest -Force
    Write-Log "COPIED (new): $($f.Name)"
}

foreach ($f in $toSkipIdentical) {
    Write-Log "SKIPPED (identical, no-op): $($f.Name)"
}

foreach ($f in $toConflict) {
    if ($Force) {
        Copy-Item -LiteralPath $f.Source -Destination $f.Dest -Force
        Write-Log "COPIED (conflict overridden by -Force): $($f.Name)"
    }
    else {
        Write-Log "SKIPPED (conflict, use -Force to overwrite): $($f.Name)"
    }
}

Write-Log "Done."
