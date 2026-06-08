const navItems = [
  { icon: '⊞', label: 'Dashboard', active: true },
  { icon: '▣', label: 'Projects' },
  { icon: '☑', label: 'Tasks' },
  { icon: '◎', label: 'Team' },
  { icon: '↗', label: 'Reports' },
  { icon: '◌', label: 'Settings' },
]

const stats = [
  { label: 'Active Projects', value: '24', change: '+3 this month', up: true },
  { label: 'Tasks Complete', value: '87%', change: '+4% vs last week', up: true },
  { label: 'Team Members', value: '12', change: '2 pending invite', up: false },
  { label: 'Revenue (MTD)', value: '$48k', change: '+12% vs last mo', up: true },
]

const projects = [
  { name: 'Client Portal v2', team: 'Frontend', status: 'active', progress: 68 },
  { name: 'API Integrations', team: 'Backend', status: 'review', progress: 92 },
  { name: 'Mobile Redesign', team: 'Design', status: 'done', progress: 100 },
  { name: 'Analytics Dashboard', team: 'Full Stack', status: 'active', progress: 35 },
]

const statusMap = {
  active: { cls: 'status-active', label: 'Active' },
  review: { cls: 'status-review', label: 'In Review' },
  done: { cls: 'status-done', label: 'Complete' },
}

export default function PremiumDemo() {
  return (
    <div className="dashboard">
      <aside className="dash-sidebar">
        <div className="dash-sidebar-logo">
          <div className="dash-sidebar-logo-text">FlowTrack</div>
          <div className="dash-sidebar-logo-sub">Project Suite</div>
        </div>
        <nav className="dash-nav">
          {navItems.map(item => (
            <div key={item.label} className={`dash-nav-item${item.active ? ' active' : ''}`}>
              <span className="dash-nav-icon">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>
      </aside>

      <div className="dash-main">
        <div className="dash-topbar">
          <div>
            <div className="dash-topbar-title">Dashboard</div>
            <div className="dash-topbar-date">Monday, June 9, 2025</div>
          </div>
          <div className="dash-user">
            <div className="dash-user-avatar">CF</div>
            <div className="dash-user-name">Chris F.</div>
          </div>
        </div>

        <div className="dash-content">
          <div className="dash-stats-grid">
            {stats.map(s => (
              <div key={s.label} className="dash-stat-card">
                <div className="dash-stat-label">{s.label}</div>
                <div className="dash-stat-value">{s.value}</div>
                <div className={`dash-stat-change ${s.up ? 'change-up' : 'change-down'}`}>
                  {s.up ? '↑' : '⚠'} {s.change}
                </div>
              </div>
            ))}
          </div>

          <div className="dash-table-card">
            <div className="dash-table-header">
              <div className="dash-table-title">Recent Projects</div>
              <div className="dash-table-action">View all →</div>
            </div>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Team</th>
                  <th>Status</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(p => (
                  <tr key={p.name}>
                    <td style={{ fontWeight: 600, color: '#0F172A' }}>{p.name}</td>
                    <td>{p.team}</td>
                    <td>
                      <span className={`dash-status ${statusMap[p.status].cls}`}>
                        {statusMap[p.status].label}
                      </span>
                    </td>
                    <td>
                      <div className="dash-progress">
                        <div className="dash-progress-bar">
                          <div className="dash-progress-fill" style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className="dash-progress-label">{p.progress}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
