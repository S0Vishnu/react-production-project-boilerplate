import React from "react";
import logo from "../../assets/images/logo.svg"

interface HeaderProps {
  title: string; // The main title displayed in the header
  subtitle?: string; // Optional subtitle
  onLogoClick?: () => void; // Optional callback for logo click
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, onLogoClick }) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/pages/home</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </header>
  );
};

export default Header;
