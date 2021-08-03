import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Badge, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { EqualHeight, EqualHeightElement } from 'react-equal-height';
import logo from './images/Westchester.png'

const location = "Chicago, IL"
const Me = { firstName: "Jonathan", lastName: "Morales", location: location, currentPostion: "Web Application Developer" }
const HawkSearch = ["Maintain front end and back end components for advanced search and merchandising", "Scope and develop client-specific requirements on time", "Implement customizations surrounding functionality that may require manipulation of large scale data", "Enhance existing solutions and implement automated processes to deliver an accelerated experience", "Orchestrate & develop new and existing features in the existing BigCommerce integration while maintaining scalability", "Provide technical support daily and work with various client technical teams such as Coca-Cola Amatil & Hewlett Packard & PHE Inc. etc.", "Point person to account managers when issues arise of urgent nature", "Research and development based on a Lucene/Elasticsearch foundation"]
const FedEx = ["Retrieved packages that were requested for pickup in an efficient manner", "Delivered packages with efficiency", "Operated vehicles safely", "Loaded and unloaded incoming and outgoing aircraft", "Safely operated vehicles used in operations", "Coordinated outgoing freight according to manifests"]
const Westchester = ["Provided support for hardware components, desktop operating system software, and application software", "Performed minor repairs to equipment and arranged for other servicing needs", "Assisted in maintaining inventory records and documentation for equipment", "Responded to user requests for service, analyzed problems, and helped develop solutions."];
const JobsList = [
  { company: "Hawksearch", title: "Web Application Developer", duration: "06/2018 - Present", details: HawkSearch, image: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_48ad19308d3b130b9e91e923e01bb153/hawksearch.png" },
  { company: "FedEx Express", title: "Courier / Material Handler", duration: "10/2015 - 05/2018", details: FedEx, "image": "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f2cd558d91f7d60e1fe30750fd621da5/fedex-cross-border.jpg" },
  { company: "Westchester Public School District 92.5", title: "Information Tehcnology Intern", duration: "07/2017 - 02/2018", details: Westchester, "image": logo }
];
// function GitHubUser({ UserName }) {
//   const [data, setData] = useState(null);

//   if (data) {
//     return <div>
//       GitHub Username: {data.login}
//       <img src={data.avatar_url} width={100}></img>
//     </div>
//   }

//   fetch(`https://api.github.com/users/${UserName}`)
//     .then(res => res.json())
//     .then(setData)
//     .catch(console.error)
//   if (data) {
//     return <div>
//       GitHub Username: {data.login}
//       <img src={data.avatar_url} width={100}></img>
//     </div>
//   }

//   return null;
// };

function LinkedIn() {
  return (
    <>
      <Container>
        <h1><Badge bg="primary">Linked In</Badge></h1><br />
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="moralesejonathan" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/moralesejonathan?trk=profile-badge"></a></div>
      </Container>
    </>
  )
}

function AboutMe() {
  return (
    <>
      <h1>{Me.firstName} {Me.lastName}</h1>
      <h2>{Me.currentPostion} - {Me.location}</h2>
    </>
  );
}

function NavBar() {
  return <>
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
}

function ResumeHistory({ jobs }) {
  return (
    <Container>
      {/* < GitHubUser UserName='morchize' /> */}
      <h1 id="experience"><Badge bg="primary">Experience</Badge></h1><br />
      <div className="row">
        <EqualHeight>
          {jobs.map(job => (
            // <div key={job.company}>
            //   <h2>{job.company}</h2>
            //   <h3>{job.title} - {job.duration}</h3>
            //   <ul>
            //     {job.details.map(info => <li>{info}</li>)}
            //   </ul>
            //   <br />
            // </div>
            <div key={job.company} className="col-lg-4 col-sm-12">
              <Card style={{ width: '100%' }}>
                <Card.Img className="companyImages" variant="top" src={job.image} />
                <Card.Body>
                  <EqualHeightElement name="Title">
                    <Card.Title>{job.company}</Card.Title>
                  </EqualHeightElement>
                  <EqualHeightElement name="Subtitle">
                    <Card.Subtitle className="mb-2 text-muted">{job.title}</Card.Subtitle>
                  </EqualHeightElement>
                  <EqualHeightElement name="Description">
                    <ul>
                      {job.details.map((info, index) => <li key={job.company + index}>{info}</li>)}
                    </ul>
                  </EqualHeightElement>
                  <Button variant="primary">Website</Button>
                </Card.Body>
              </Card>

            </div>
          ))}
        </EqualHeight>
      </div>
    </Container>
  );
}

ReactDOM.render(
  <>
    <NavBar />
    <div id="mainDiv">
      <LinkedIn />
      <br />
      {/* <AboutMe /> */}
      <br />
      <ResumeHistory jobs={JobsList} />
    </div>
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
