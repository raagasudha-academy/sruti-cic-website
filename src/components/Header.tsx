import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import AppLink from "./AppLink";
import { navItems, registrationUrl } from "../data/navigation";
import srutiLogo from "../assets/sruti-logo.png";

type HeaderProps = {
  path: string;
};

export default function Header({ path }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [path]);

  // Close with Escape and return focus to the menu button.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Close when the user clicks outside the menu.
  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (
        menuButtonRef.current?.contains(target) ||
        mobileNavRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <AppLink
        to="/"
        className="brand"
        aria-label="Śruti CIC home"
      >
        <img
          src={srutiLogo}
          alt=""
          aria-hidden="true"
        />

        <div className="brand-copy">
          <strong>Śruti</strong>
          <span>CIC</span>
        </div>
      </AppLink>

      <nav
        className="desktop-nav"
        aria-label="Primary navigation"
      >
        {navItems.map(([label, href]) => {
          const isCurrent = path === href;

          return (
            <AppLink
              key={href}
              to={href}
              className={isCurrent ? "active" : ""}
              aria-current={isCurrent ? "page" : undefined}
            >
              {label}
            </AppLink>
          );
        })}
      </nav>

      <a
        className="header-cta"
        href={registrationUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Register or enquire, opens in a new tab"
      >
        Register / Enquire
      </a>

      <button
        ref={menuButtonRef}
        className="menu-button"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        {open ? (
          <X aria-hidden="true" />
        ) : (
          <Menu aria-hidden="true" />
        )}
      </button>

      {open && (
        <nav
          ref={mobileNavRef}
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Primary navigation"
        >
          {navItems.map(([label, href]) => {
            const isCurrent = path === href;

            return (
              <AppLink
                key={href}
                to={href}
                className={isCurrent ? "active" : ""}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </AppLink>
            );
          })}

          <a
            href={registrationUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Register or enquire, opens in a new tab"
            onClick={() => setOpen(false)}
          >
            Register / Enquire
          </a>
        </nav>
      )}
    </header>
  );
}