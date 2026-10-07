
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">

      {/* TOP SOCIAL BAR */}
      <div className="social-top">

        <a href="mailto:info@dinkaheritage.org" title="Email">
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a href="#" title="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="#" title="TikTok">
          <i className="fa-brands fa-tiktok"></i>
        </a>

        <a href="#" title="Facebook">
          <i className="fa-brands fa-facebook"></i>
        </a>

        <a href="#" title="WhatsApp">
          <i className="fa-brands fa-whatsapp"></i>
        </a>

      </div>


      {/* NAVIGATION BAR */}
      <div className="navigation-row">

      <NavLink to="/" className="site-logo">
  <img
    src="/src/images/dinka-logo.png"
    alt="Dinka of South Sudan Logo"
  />

  <span>DINKA OF SOUTH SUDAN</span>
</NavLink>

        <nav className="site-nav">

          <NavLink to="/">Home</NavLink>

          <NavLink to="/about-dinka">
            About Dinka
          </NavLink>

          <NavLink to="/culture">
            Culture
          </NavLink>

       <div className="articles-dropdown">
  <NavLink to="/articles">Articles ▾</NavLink>

  <div className="articles-dropdown-menu">
    <NavLink to="/history-article">History & Heritage</NavLink>
    <NavLink to="/culture-article">Dinka Culture</NavLink>
    <NavLink to="/identity-article">Dinka Identity</NavLink>
    <NavLink to="/migration-article">Migration</NavLink>
    <NavLink to="/cattle-article">Cattle & Traditional Life</NavLink>
    <NavLink to="/community-article">Dinka Communities</NavLink>
  </div>
</div>

<NavLink to="/gallery">Gallery</NavLink>


          <NavLink to="/contact">
            Contact
          </NavLink>

          <NavLink to="/donation" className="donate-button">
            Donation
          </NavLink>

        </nav>

      </div>

    </header>
  )
}

export default Navbar