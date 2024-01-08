import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    function scrollHandler() {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        updateNavbar(false); // Scrolling down
      } else {
        updateNavbar(true); // Scrolling up or at the top
      }
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [prevScrollPos]);

  return (
    <Navbar
      fixed="top"
      expand="md"
      className={`navbar ${navColour ? "sticky" : ""} ${
        !navColour && prevScrollPos > 100 ? "navbar-hidden" : ""
      }`}
    >
      <Nav className="ms-auto" defaultActiveKey="#home">
        <Nav.Item>
          <Nav.Link href="#home" >
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#about" >
            <span style={{ display: 'flex', alignItems: 'center' }}>
              About
            </span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#projects">
            Projects
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
