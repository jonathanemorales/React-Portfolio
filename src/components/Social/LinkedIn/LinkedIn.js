import { Badge, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const LinkedIn = (props) => (
    <>
        <Container>
            <h1><Badge bg="primary">Linked In</Badge></h1><br />
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="moralesejonathan" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/moralesejonathan?trk=profile-badge"></a></div>
        </Container>
    </>
);

export default LinkedIn;