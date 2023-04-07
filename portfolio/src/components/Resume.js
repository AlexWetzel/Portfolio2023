import { Row, Col } from 'react-bootstrap';

function Resume() {
  return(
    <div id="resume">
    <p className="center-text">
      <h3>Alexander Wetzel</h3>
      wetzela@live.com | 407-913-8453 | Winter Garden, Florida<br />
      Linkedin | GitHub | Portfolio<br />
      <br />

      <i>
        Computer Science student seeking an internship to refine my skills and contribute as a team player working to create exceptional software. <br />
      </i>
      <br />
    </p>




    <p id="technical-skills">
      <h4>Technical Skills</h4>
        <Row xs={1} sm={2} lg={3}>
          <Col><b>HTML / CSS</b> – Intermediate<br /></Col>
          <Col><b>JavaScript</b> – Intermediate<br /></Col>
          <Col><b>React</b> – Intermediate<br /></Col>
          <Col><b>Node</b> – Intermediate<br /></Col>
          <Col><b>Github</b> – Intermediate<br /></Col>
          <Col><b>MongoDB</b> - Intermediate<br /></Col>
          <Col><b>MySQL</b> – Novice<br /></Col>
          <Col><b>Java</b> - Beginner<br /></Col>     
          <Col><b>C</b> – Novice<br /></Col>
          <Col><b>PHP</b> - Beginner<br /></Col>
        </Row>
      <br />
      
    </p>
    <p>  
    
      <h4>Education</h4>
      <b>University of Central Florida</b> 2020-2023
      <ul><li>BS - Computer Science</li></ul>

      <b>University of Central Florida</b> 2017-2018
      <ul><li>Certificate - Full Stack Web Development Program.</li></ul>

      <b>Valencia College</b> 2010-2014
      <ul><li>Associate in Arts - General Education</li></ul>

      <h4>Apps Built</h4>
      <b>Tunnelight</b> (Senior Project) 2022-2023<br />
      <i>Backend Developer</i>
      <ul>
        <li>Web application connecting homeless people to resources.</li>
        <li>Collaborated with 4 other students and sponsor to design and develop application from scratch.</li>
        <li>Contributed to design document consisting of over 150 pages.</li>
        <li>Held weekly meetings reviewing progress and planning tasks. </li>
      </ul>
      <br />
      
      <b>Sandwich Store</b> (Personal Project) 2018-2019<br />
      <i>Full Stack Developer</i>
      <ul>
        <li>A mock point-of-sale kiosk app where users can order food.</li>
        <li>Designed system to track inventory as food is prepared.</li>
      </ul>
      <br />

      <b>Monster Hunter Arms</b> (Personal Project)	2018<br />
      <i>Full Stack Developer</i><br />
      <ul>
        <li>Weapon tutorial site and interactive flowchart for the video game Monster Hunter World</li>
        <li>Implemented gamepad API to simulate game inputs.</li>
      </ul>
      <br />
      
      <h4>Previous Experience</h4>
      <b>Barback</b> (Orlando, FL)	2021-present <br />
      <i>The Boathouse Disney Springs</i><br />
      <ul>
        <li>Maintain well-stocked bars for bartenders to provide efficient service.</li>
        <li>Communicated with guests to answer questions and ensure a quality experience. </li>
      </ul>
      <br />

      <b>Food and Beverage Steward</b> (Orlando, FL)	2017<br />
      <i>Walt Disney World</i><br />
      <ul>
        <li>Adapt to different roles in the cleaning process to clean dishes efficiently.</li>
        <li>Remain informed on health and safety regulations.</li>
      </ul>
      <br />

      <b>Busser/Food Runner</b> (Huntersville, NC)	2015-2016<br />
      <i>Smoke Modern Barbeque</i><br />
      <ul>
        <li>Remain knowledgeable of menu options to optimize customer experience.</li>
        <li>Coordinated with front and back of house to work efficiently.</li>
      </ul>
      <br />
    </p>
    </div>
  )
}

export default Resume;