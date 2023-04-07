import { Tabs, Tab, Row, Col } from "react-bootstrap";
import Resume from "../components/Resume.js";
import CoverLetter from "../components/CoverLetter.js";

function ResumePage() {
  return (
    <>
      <h1>Writing Example: Resume and Cover Letter</h1>
      <p>About...</p>
      <br />
      <Tabs
        defaultActiveKey="cover-letter"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="resume" title="Resume">
          <Row>
            <Col xl={{ span: 8, offset: 2 }}>
              <Resume />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="cover-letter" title="Cover Letter">
          <Row>
            <Col xl={{ span: 8, offset: 2 }}>
              <CoverLetter />
            </Col>
          </Row>
        </Tab>   
      </Tabs>
      <hr />
    </>
  );
}

export default ResumePage;