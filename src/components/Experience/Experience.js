import React from 'react';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { EqualHeight, EqualHeightElement } from 'react-equal-height';
import { Badge, Button } from 'react-bootstrap';
import logo from '../../includes/images/Westchester.png'

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


const Experience = (props) => (
    <>
        <Container>
            <h1 id="experience"><Badge bg="primary">Experience</Badge></h1><br />
            <div className="row">
                <EqualHeight>
                    {JobsList.map(job => (
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
    </>
);

export default Experience;