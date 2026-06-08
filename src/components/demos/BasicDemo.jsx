export default function BasicDemo() {
  return (
    <div className="bakery">
      <header className="bakery-header">
        <div className="bakery-logo">☀ Sunrise Bakery</div>
        <nav className="bakery-nav">
          <span>Menu</span>
          <span>About</span>
          <span>Hours</span>
        </nav>
      </header>

      <div className="bakery-hero">
        <div className="bakery-hero-label">Maplewood's Favorite Bakery Since 2008</div>
        <h1>Fresh Baked Daily</h1>
        <p>Artisan breads, pastries, and custom cakes — made with love every morning.</p>
        <span className="bakery-cta">Order Online</span>
      </div>

      <div className="bakery-section">
        <h2>This Week's Menu</h2>
        <p>Our bakers start at 4am so your favorites are ready when you arrive.</p>
        <div className="bakery-menu-grid">
          <div className="bakery-item">
            <div className="bakery-item-img" style={{ background: '#FEF3C7' }}>🍞</div>
            <div className="bakery-item-info">
              <div className="bakery-item-name">Country Sourdough</div>
              <div className="bakery-item-price">$8.00</div>
              <div className="bakery-item-desc">Slow-fermented, crispy crust</div>
            </div>
          </div>
          <div className="bakery-item">
            <div className="bakery-item-img" style={{ background: '#FEF9C3' }}>🥐</div>
            <div className="bakery-item-info">
              <div className="bakery-item-name">Butter Croissant</div>
              <div className="bakery-item-price">$3.50</div>
              <div className="bakery-item-desc">Flaky, golden, classic</div>
            </div>
          </div>
          <div className="bakery-item">
            <div className="bakery-item-img" style={{ background: '#FCE7F3' }}>🎂</div>
            <div className="bakery-item-info">
              <div className="bakery-item-name">Custom Cake</div>
              <div className="bakery-item-price">from $45</div>
              <div className="bakery-item-desc">Order 48 hrs in advance</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bakery-hours">
        <div>
          <h3>Hours</h3>
          <p>Mon – Sat: 7am – 6pm<br />Sunday: 8am – 2pm</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>142 Maple Street<br />Maplewood, MN 55109</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>(555) 012-3456<br />hello@sunrisebakery.com</p>
        </div>
      </div>
    </div>
  )
}
