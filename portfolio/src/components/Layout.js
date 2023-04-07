import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Navbar from "./Navbar.js"

function Layout(props) {
  return(
    <>
      <Navbar />

      
      <Container id="content" className="p-5">
        <br />
        <br />
        <Outlet />
        <hr />
        <sub>© 2023 Alexander Wetzel</sub>
      </Container>
    </>
  );
}

export default Layout;