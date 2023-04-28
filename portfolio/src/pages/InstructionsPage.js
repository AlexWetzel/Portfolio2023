import { Row, Col } from 'react-bootstrap';
import Instructions from '../components/Instructions';
import Explanation from '../components/Explanation';
import pdf from "../files/Project 1 - Instructions - Alexander Wetzel.pdf"

function InstructionsPage() {
  return(
    <div>
      <h1>Writing Sample: Instructions</h1>
      <br />
      <p className="document-link"><b>Document link - </b><a href={pdf} target = "_blank">Instructions.pdf</a></p>
      <Explanation>
        <p>
          The purpose of this assignment was to identify a process, break it down into 
          smaller parts, and describe it to my audience with clean and unambiguous  
          language.
        </p>
        <p>
          I chose my topic based on my passion for the video game series Monster 
          Hunter. Part of the challenge of assignment was deciding how to break down 
          the process into different steps in a logical progression; Because there 
          are different file formats for mods, the process for implementing a 
          particular mod can change slightly.
        </p>
        <p>
          Another challenge was deciding the degree of specificity for navigating menus, 
          operating systems, etc. Ultimately, I decided to assume my audience knew how 
          to navigate Windows directories, and provided the minimum necessary information 
          for other menus.
        </p>
      </Explanation>
      <br />
      {/* <a href={pdf} target = "_blank">Instructions.pdf</a> */}
      {/* <object data={pdf} type="application/pdf" width="100%" height="4000px"> */}
 {/* </object> */}
 {/* <embed src={pdf} width="100%" height="2100px" /> */}
      {/* <hr /> */}
      {/* <Row>
        <Col xl={{ span: 8, offset: 2 }}>
          <Instructions />

        </Col>
      </Row> */}
    </div>
  );
}

export default InstructionsPage;