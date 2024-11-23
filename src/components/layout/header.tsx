import React from 'react';

interface HeaderProps {
  title: string; // The main title displayed in the header
  subtitle?: string; // Optional subtitle
  onLogoClick?: () => void; // Optional callback for logo click
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, onLogoClick }) => {
  return (
    <header className="header">
      <div className="header-logo" onClick={onLogoClick}>
        logo
      </div>
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        {subtitle && <h2 className="header-subtitle">{subtitle}</h2>}
      </div>
    </header>
  );
};

export default Header;
