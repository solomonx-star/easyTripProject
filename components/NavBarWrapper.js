import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function NavBarWrapper({ children }) {
  return (
    <main>
      <div>
        <Navbar />
        {children}
      </div>
    </main>
  );
}

export default NavBarWrapper;
