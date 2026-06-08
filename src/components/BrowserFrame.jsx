export default function BrowserFrame({ url, children }) {
  return (
    <div className="browser-frame">
      <div className="browser-bar">
        <div className="browser-dots">
          <div className="browser-dot dot-red" />
          <div className="browser-dot dot-yellow" />
          <div className="browser-dot dot-green" />
        </div>
        <div className="browser-url">{url}</div>
      </div>
      <div className="browser-content">
        {children}
      </div>
    </div>
  )
}
