import React from "react";
import logo from "../Shared/Images/SR_logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import HeaderNavigation from "../MaterialUI/Components/appBar";
import { variables } from "../Routes/Variables";

function Header({ username }) {
  // fetch(variables.API_URL + "authentication")
  //   .then((response) => response.json())
  //   .then((json) => console.log("authentication : ", json));

  return (
    <>
      <HeaderNavigation username={username} />
      {/* <Navbar className="main-header" fixed="top" variant="dark" expand="lg">
        <Container>
          <img id="logo" className="brand-icon" src={logo} alt="Logo" />;
          <NavLink className="navlink-header-button" id="nav-uar" to="/">
            User Access Review
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="ADMINISTRATIVE PORTAL"
                id="responsive-nav-dropdown"
              >
                <NavLink
                  className="tim-admin-header-tab btn rounded-0 px-3  mx-0   w-100 btn-secondary "
                  to="TimAdminRequestsForChange"
                >
                  Tim
                </NavLink>

                <NavLink
                  className="tim-admin-header-tab btn rounded-0 px-3  mx-0   w-100 btn-secondary "
                  to="EclipseAdminRequestsForChange"
                >
                  Eclipse
                </NavLink>
              </NavDropdown>

              <NavDropdown
                title="MANAGEMENT PORTAL"
                id="responsive-nav-dropdown"
              >
                <NavLink
                  className="tim-admin-header-tab btn rounded-0 px-3  mx-0   w-100 btn-secondary "
                  to="timManagerPending"
                >
                  Tim
                </NavLink>
                <NavLink
                  className="tim-admin-header-tab btn rounded-0 px-3  mx-0   w-100 btn-secondary "
                  to="EclipseMangerPending"
                >
                  Eclipse
                </NavLink>
              </NavDropdown>
              <Nav.Link className="website-management-btn" href="">
                WEBSITE MANAGEMENT
              </Nav.Link>
              <Navbar.Text id="welcome-user">Welcome, {username}</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
}

export default Header;

Header.defaultProps = {
  username: "admin",
};
