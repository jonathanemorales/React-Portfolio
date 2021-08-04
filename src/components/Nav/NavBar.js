import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const NavBar = (props) => (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://media-exp1.licdn.com/dms/image/C5603AQFeY91D53p6jg/profile-displayphoto-shrink_800_800/0/1527409934121?e=1632960000&v=beta&t=9KwuLvhEWh9lN2WCIBMXkcwaHqlayaJqo5DcvHg5VEw"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Jonathan Morales - Portfolio
                </Navbar.Brand>
            </Container>
        </Navbar>
    </>
);

export default NavBar;