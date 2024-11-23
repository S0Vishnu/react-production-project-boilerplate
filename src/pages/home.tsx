import React from "react";
import Navbar from "../components/layout/navbar";
import Header from "../components/layout/header";

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar
        links={[
          { label: "Home", href: "#" },
          { label: "About", href: "#" },
        ]}
        brandName="Boilderplate"
      />
      <Header title={"Learn React"} />
      
    </div>
  );
};

export default HomePage;
