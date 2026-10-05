import AppLink from "./AppLink";
import { navItems } from "../data/navigation";
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
          {navItems.slice(1).map(([label, href]) => (
            <AppLink key={href} to={href}>
              {label}
            </AppLink>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>Śruti CIC</span>
        <span>UK not-for-profit community interest company</span>
      </div>
    </footer>
  );
}
