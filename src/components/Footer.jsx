import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-about">
          <h2>DINKA<span> HERITAGE</span></h2>

          <p>
            Preserving, celebrating and sharing the history, culture,
            traditions and identity of the Dinka people of South Sudan.
          </p>
        </div>


        <div className="footer-links">
          <h3>Quick Links</h3>

         <NavLink to="/">Home</NavLink>
        <NavLink to="/about-dinka">About Dinka</NavLink>
        <NavLink to="/culture">Culture</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>


        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 info@dinkaheritage.org</p>
          <p>📍 South Sudan</p>
          <p>🌍 Dinka Communities Worldwide</p>
        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Dinka Heritage. All rights reserved.
        </p>

        <p>
          Preserving Our Heritage • Strengthening Our Identity
        </p>

      </div>

    </footer>
  )
}

export default Footer