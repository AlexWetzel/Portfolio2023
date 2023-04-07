import { Tabs, Tab, Row, Col } from "react-bootstrap";
import Resume from "../components/Resume.js";
import CoverLetter from "../components/CoverLetter.js";
import Explanation from "../components/Explanation.js";

function ResumePage() {
  return (
    <>
      <h1>Writing Example: Resume and Cover Letter</h1>
      <Explanation>
        <p>
          The purpose of this assignment was to choose a job listing and craft a 
          cover letter and resume that caters to the employer by using keywords and 
          emphasizing skills from the listing.
        </p>
        <p>
          The main challenge I faced when creating the cover letter was finding the 
          right words to highlight my own qualities in a professional tone.
          Ultimately, I'm satisfied with wording I selttled on.
        </p>
        <p>
          For my resume, I chose a simple but appealing template, added sections from 
          an older resume draft, updated the sections to reflect my current 
          experience, and revised some sections to be more effective. Specifically, 
          I removed fluff and repeats from my technical skills section, and added 
          proficiency level. For apps built, added action verbs to highlight how I 
          contributed to the projects.
        </p>
      </Explanation>
      <br />
      <Tabs
        defaultActiveKey="resume"
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
    </>
  );
}

export default ResumePage;