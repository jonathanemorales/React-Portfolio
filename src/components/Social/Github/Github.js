import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Badge, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Github = (props) => (
    <GitHubUser UserName="jonathanemorales" />
);

function GitHubUser({ UserName }) {
    const [data, setData] = useState(null);

    if (data) {
        console.log(data);
        return (
            <>
                <Container>
                    <h1 id="projects"><Badge bg="primary">Projects</Badge></h1><br />
                    <h1>GitHub <FaGithub /> </h1>
                    <img src={data.avatar_url} alt="Jonathan's Github Profile Avatar" width={100}></img>
                    <p>Username: {data.login}</p>
                    <p>Bio: {data.bio}</p>
                    <span>Public Repositories <Badge bg="success">{data.public_repos}</Badge></span>
                </Container >
            </>)
    } else {
        fetch(`https://api.github.com/users/${UserName}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error)
    }

    return null;
};

export default Github;