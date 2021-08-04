import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Github = (props) => (
    <GitHubUser UserName="jonathanemorales" />
);

function GitHubUser({ UserName }) {
    const [data, setData] = useState(null);

    if (data) {
        console.log(data);
        return (
            <>
                <a id="SocialLink" href={data.html_url}><FaGithub /></a>
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