import { Badge, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Github from '../Social/Github/Github';
import LinkedIn from '../Social/LinkedIn/LinkedIn';

const About = (props) => (
    <>
        <Container>
            <h1><Badge bg="primary">About Me</Badge></h1><br />
            <p>
                Professional software developer with 3 years of experience maintaining and improving a Software as a service solution. Having strong communication, teamwork skills, and a foundational technical background, I am eager to join a role that will leverage and expand my knowledge of technology.
            </p>
            <div id="SocialDiv">
                <Github />
                <LinkedIn />
            </div>
        </Container>
    </>
);

export default About;