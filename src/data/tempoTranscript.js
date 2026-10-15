// One recorded session through the live Tempo_MCP_Showcase server (not the
// static mockSnapshot data used elsewhere in the Tempo app). Turns must be
// reproduced verbatim: no rewording answers, reordering turns, or combining
// separate runs. Allowed edits: trimming whitespace, removing UI chrome, and
// truncating long tool output with a visible "[output shortened]" marker.
//
// This project avoids em dashes in its own framing copy, but this transcript
// is a verbatim record, so any em dash present in real recorded output stays.
//
// turns: Array<
//   | { role: 'user', text: string }
//   | { role: 'tool', toolName: string }
//   | { role: 'assistant', text: string }
// >
//
// Recorded 2026-10-01 (local time) in Claude Code with only the
// tempo-mcp-showcase server connected. Tool names keep the server name and drop
// only the client's mcp__ prefix, so "mcp__tempo-mcp-showcase__list_teachers"
// shows as "tempo-mcp-showcase: list_teachers". The session made 4 tool calls:
// 1 client tool-loading step (ToolSearch, omitted, hence toolLoadingOmitted),
// then list_teachers, get_teacher_availability (no arguments), and
// get_teacher_availability (teacher_id tch_d03), all shown below.
export const tempoTranscript = {
  recordedOn: '2026-10-01',
  toolLoadingOmitted: true,
  turns: [
    {
      role: 'user',
      text: 'Using only the tempo-mcp-showcase MCP tools, which teachers have open lesson slots this week, what do they teach, and when exactly are they free?',
    },
    {
      role: 'assistant',
      text: "I'll start by listing the teachers, then check each one's availability for this week.",
    },
    { role: 'tool', toolName: 'tempo-mcp-showcase: list_teachers' },
    { role: 'tool', toolName: 'tempo-mcp-showcase: get_teacher_availability' },
    {
      role: 'assistant',
      text: 'Only one teacher has open slots this week: Priya Nair (Violin, Viola — Lakeside zone), with 3 open slots totaling 90 minutes. Let me pull her exact slot times.',
    },
    { role: 'tool', toolName: 'tempo-mcp-showcase: get_teacher_availability' },
    {
      role: 'assistant',
      text: `Across all active teachers, only Priya Nair (Violin, Viola — Lakeside zone) has open lesson slots in the near term. Everyone else (Daniel Okafor, Hannah Goldberg, Liam Chen, Marcus Webb, Maya Reyes, Sofia Bianchi, Theo Martins) is fully booked with no open slots.

Priya Nair — open slots:
- Thu, Oct 1 (today), 2:00–2:30 PM — this week
- Tue, Oct 6, 2:00–2:30 PM — next week
- Thu, Oct 8, 2:00–2:30 PM — next week

If "this week" means through Sunday Oct 4, only the Thursday Oct 1, 2:00–2:30 PM slot qualifies — the other two fall into next week. All three are 30-minute "Available Slot" openings in her schedule (note: the availability labels are provisional per the tool, derived from freeform calendar category names, though busy/lesson time is confirmed reliable).`,
    },
  ],
}
