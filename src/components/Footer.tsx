import AppLink from "./AppLink";
import { aboutNavItems, navItems } from "../data/navigation";
import srutiLogo from "../assets/sruti-logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <img src={srutiLogo} alt="Śruti School of Veda and Vedanta" />
          <div>
            <h3>Śruti CIC</h3>
            <p>Vedas are Universal</p>
          </div>
        </div>

        <div className="footer-maxims">
          <strong>Help Ever. Hurt Never.</strong>
          <strong>Love All. Serve All.</strong>
        </div>

        <div className="footer-links">
          <span>Explore</span>
          <div className="footer-explore-columns">
            <nav className="footer-explore-primary" aria-label="Footer main navigation">
              {navItems.filter(([, href]) => href !== "/about").map(([label, href]) => (
                <AppLink key={href} to={href}>{label}</AppLink>
              ))}
            </nav>
            <nav className="footer-explore-about" aria-label="Footer about navigation">
              <AppLink to="/about" className="footer-about-heading">About</AppLink>
              <div className="footer-submenu">
                {aboutNavItems.map(([label, href]) => (
                  <AppLink key={href} to={href}>{label}</AppLink>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="footer-contact">
          <span>Contact</span>
          <a href="mailto:sruticic@gmail.com">sruticic@gmail.com</a>
          <a href="tel:+447841354590">Mr Srikailash Venkitadri<br />07841 354590</a>
          <a href="tel:+447702785815">Mrs Praveena Srikailash<br />07702 785815</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Śruti CIC</span>
        <span>UK not-for-profit community interest company</span>
      </div>
    </footer>
  );
}
