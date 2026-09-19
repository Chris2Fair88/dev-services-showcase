export default function TempoDiagram() {
  return (
    <div className="tempo-diagram-wrap">
      <svg
        viewBox="0 0 720 240"
        role="img"
        aria-label="Architecture diagram: mockData.js is the single source of records. It feeds two paths: one to the Tempo dashboards (admin, teacher, and student pages) viewed in a browser, and one to Tempo_MCP_Showcase's five read-only tools, which answer Claude."
        className="tempo-diagram"
      >
        <defs>
          <marker id="tempo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--primary-dark)" />
          </marker>
        </defs>

        {/* Source -> top path */}
        <path d="M160,105 C210,105 210,47 255,47" fill="none" stroke="var(--primary-dark)" strokeWidth="2" markerEnd="url(#tempo-arrow)" />
        {/* Source -> bottom path */}
        <path d="M160,135 C210,135 210,193 255,193" fill="none" stroke="var(--primary-dark)" strokeWidth="2" markerEnd="url(#tempo-arrow)" />
        {/* Top path: dashboards -> browser */}
        <path d="M430,47 L515,47" fill="none" stroke="var(--primary-dark)" strokeWidth="2" markerEnd="url(#tempo-arrow)" />
        {/* Bottom path: mcp tools -> claude */}
        <path d="M430,193 L515,193" fill="none" stroke="var(--primary-dark)" strokeWidth="2" markerEnd="url(#tempo-arrow)" />

        {/* Source node */}
        <rect x="20" y="90" width="140" height="60" rx="10" fill="white" stroke="var(--dark)" strokeWidth="2" />
        <text x="90" y="115" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--dark)">mockData.js</text>
        <text x="90" y="133" textAnchor="middle" fontSize="11" fill="var(--text-light)">in-memory records</text>

        {/* Top path boxes */}
        <rect x="260" y="20" width="170" height="55" rx="10" fill="var(--light)" stroke="var(--border)" strokeWidth="2" />
        <text x="345" y="42" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--dark)">Tempo Dashboards</text>
        <text x="345" y="59" textAnchor="middle" fontSize="10.5" fill="var(--text-light)">admin / teacher / student</text>

        <rect x="520" y="20" width="170" height="55" rx="10" fill="var(--light)" stroke="var(--border)" strokeWidth="2" />
        <text x="605" y="42" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--dark)">Browser</text>
        <text x="605" y="59" textAnchor="middle" fontSize="10.5" fill="var(--text-light)">visitor scrolls the dashboard</text>

        {/* Bottom path boxes */}
        <rect x="260" y="165" width="170" height="55" rx="10" fill="#EFF6FF" stroke="var(--primary-dark)" strokeWidth="2" />
        <text x="345" y="187" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--dark)">Tempo_MCP_Showcase</text>
        <text x="345" y="204" textAnchor="middle" fontSize="10.5" fill="var(--text-light)">5 read-only tools</text>

        <rect x="520" y="165" width="170" height="55" rx="10" fill="#EFF6FF" stroke="var(--primary-dark)" strokeWidth="2" />
        <text x="605" y="187" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--dark)">Claude</text>
        <text x="605" y="204" textAnchor="middle" fontSize="10.5" fill="var(--text-light)">visitor asks a question</text>
      </svg>
    </div>
  )
}
