import { Row, Col } from 'react-bootstrap';
import Instructions from '../components/Instructions';

function InstructionsPage() {
  return(
    <>
      <h1>Writing Sample: Instructions</h1>
      <p>Instructions...</p>
      <br />
      <hr />
      <Row>
        <Col xl={{ span: 8, offset: 2 }}>
          <Instructions />
        </Col>
      </Row>
      <hr />
    </>
  );
}

export default InstructionsPage;