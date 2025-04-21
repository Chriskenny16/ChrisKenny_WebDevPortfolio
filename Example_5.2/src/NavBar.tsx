// File: NavBar.tsx
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

type NavBarProps = {
  toggleFunction: (which: string) => void;
};

function NavBar({ toggleFunction }: NavBarProps) {
  const [clickCount, setClickCount] = useState(0);
  
  const handleClick = () => {
    setClickCount(clickCount + 1);
    console.log("Clicked " + clickCount + " times!");
  };
  
  return (
    <div className="nav-body-tertiary">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">EDM World</Navbar.Brand>
          <img 
            height="40" 
            className="d-inline-block align-top" 
            alt="EDM Logo" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQi9Z8_D5zEkAE_aPXXbfUgWpJPHwxZKPqw&usqp=CAU" 
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => toggleFunction("showHome")}>Home</Nav.Link>
              <Nav.Link href="#genres" onClick={() => toggleFunction("showHTML")}>Genres</Nav.Link>
              <Nav.Link href="#artists" onClick={() => toggleFunction("showJS")}>Artists</Nav.Link>
              <NavDropdown title="Explore" id="basic-nav-dropdown">
                <NavDropdown.Item href="#explore" onClick={() => toggleFunction("showExplore")}>Explore Other Music</NavDropdown.Item>
                <NavDropdown.Item href="#labels" onClick={() => toggleFunction("showLabels")}>Record Labels</NavDropdown.Item>
                <NavDropdown.Item href="#history" onClick={() => toggleFunction("showHistory")}>History of EDM</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;