import { Outlet } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from "./Navbar.js"

function Layout(props) {
  return(
    <>

      <Container >
        <Row>
          <Col id="content" className="p-5" xl={{ span: 10, offset: 1 }}>

            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <Outlet />
            <hr />
            <sub>© 2023 Alexander Wetzel</sub>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Layout;