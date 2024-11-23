import React from "react";

interface NavbarProps {
  links: { label: string; href: string }[]; // Array of navigation links
  onLinkClick?: (label: string) => void; // Callback for link clicks
  brandName?: string; // Optional brand name
  brandLogo?: string; // Optional brand logo URL
}

const Navbar: React.FC<NavbarProps> = ({
  links,
  onLinkClick,
  brandName,
  brandLogo,
}) => {
  return (
    <nav className="navbar flex-sb">
      <div className="navbar-brand">
        {brandName && <span className="navbar-name">{brandName}</span>}
      </div>
      <ul className="navbar-links flex">
        {links.map((link, index) => (
          <li key={index} className="navbar-item">
            <a
              href={link.href}
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault(); // Prevent default navigation for custom behavior
                if (onLinkClick) onLinkClick(link.label);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
