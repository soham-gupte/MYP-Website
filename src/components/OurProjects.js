import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ProjectsData } from './ProjectsData';
import haha from "./myplogo.jpeg";
import "./OurProjectsStyles.css"

function ProjectGrid() {
    return (
        <Row xs={1} md={3} className="g-4">
            {ProjectsData.map((item, index) => (
                <Col key={index}>
                    <Card className='our-proj-card'>
                        <Card.Img variant="top" src= {haha}/>
                        <Card.Body>
                            <Card.Title>
                                <h2>{item.title}</h2>
                            </Card.Title>
                            <Card.Text>
                                <p>{item.desc}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export function OurProjects() {
    return (
        <div className='our-projects'>
            <ProjectGrid/>
        </div>
    )
}