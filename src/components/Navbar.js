import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    function scrollHandler() {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        updateNavbar(false); // Scrolling down
      } else {
        updateNavbar(true); // Scrolling up
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
          <Nav.Link href="#home">
            <AiOutlineHome style={{ marginBottom: "2px" }} />
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#about">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <AiOutlineUser style={{ marginBottom: "2px" }} />
              About
            </span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#projects">
            <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
            Projects
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
