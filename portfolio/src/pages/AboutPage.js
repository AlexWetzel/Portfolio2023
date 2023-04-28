import { Row, Col } from 'react-bootstrap';

function AboutPage() {
  return(
    <>
      <h1>About Me</h1>
      <br />
      {/* <Row>
        <Col xl={{ span: 8, offset: 2 }}> */}
          <p>
            
          </p>
          <h2>My Education</h2>
          <p>
            I'm a Computer Science major in my final semester, set to graduate soon. 
            As a part of this program, I learned theoretical computer science concepts of abstract 
            datatypes, runtime analysis, sorting algorithms, object-oriented programming, 
            computer architecture, security, and much more. I've also dabbled in artificial 
            intelligence, machine learning, digital forensics, and computer vision 
            as elective courses.
          </p>
          <p> 
            I've also gained experience learning how to work in teams to develop software. 
            Right now I'm working with a team of other students to finish our senior 
            project, a web application to help fight homelessness.
          </p>
          <br />
          <h2>My Experience</h2>
          <p>
            In the past, I've worked in food service to develop my work ethic. I've 
            developed my communication skills with guests and coworkers, learned to 
            divide up tasks, and to provide and ask for help when needed. I've also 
            learned skills I use to work independantly; 
            To divide my work into smaller tasks, to prioritize to make sure the most 
            important tasks get done, and anticipate problems and peoples' needs.
          </p>
          <br />
          <h2>My Skills</h2>
          <p>
            I've not only learned theoretical concepts, but also had hands-on 
            experience coding, and creating functioning programs in different languages.
          </p>
          <p>  
            <b>Web Development:</b> I'm most confident with web development, and am experienced in creating 
            full-stack web applications, particularly with React and Node. I'm also 
            well-versed with MongoDB, and have prior experience with MySQL.
          </p>
          <p>
            <b>Git:</b> Version control is an important part of developing programs, especially in teams. 
            I have experience cloning, committing, merging, deleting, rolling back, 
            and more.
          </p>
          <p>
            <b>Python:</b> I've also learned a modest amount of Python from my electives. With it, I was 
            able to process data, manipulate images, and create machine learning 
            algorithms. In particular, I find this language interesting.
          </p>
          <p>
            <b>C:</b> Another prominent language from my Computer Science program. 
            My greatest accomplishment was building a program that compiles assembly
            code into computer instructions, and then emulates instruction set 
            architecture to run the code.
          </p>
          <p>
            <b>Java:</b> I'm still a beginner, but I was able to 
            learn object-oriented programming concepts, as well as multithreading 
            in this language.
          </p>
          <br />
        {/* </Col>
      </Row> */}
    </>
  )
}

export default AboutPage;