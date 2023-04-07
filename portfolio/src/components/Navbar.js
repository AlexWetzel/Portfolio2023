import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

function Layout(props) {
  return(
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>Alexander Wetzel</Navbar.Brand>
        <Nav className="me-auto">
          <Link class="nav-link" to="/">Home</Link>
          <Link class="nav-link" to="/resume">Resume</Link>
          <Link class="nav-link" to="/instructions">Instructions</Link>
          <Link class="nav-link disabled" to="/proposal">Proposal</Link>
        </Nav>
      </Container>
    </Navbar>
    // <ul class="nav nav-underline justify-content-center">
    //   <li class="nav-item">
    //     <Link class="nav-link active" aria-current="page" to="/">Home</Link>
    //   </li>
    //   <li class="nav-item">
    //     <Link class="nav-link" to="/resume">Resume</Link>
    //   </li>
    //   <li class="nav-item">
    //     <Link class="nav-link" to="/instructions">Instructions</Link>
    //   </li>
    //   <li class="nav-item">
    //     <Link class="nav-link disabled" to="/proposal">Disabled</Link>
    //   </li>
    // </ul>
  );
}

export default Layout;