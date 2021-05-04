import React from 'react';
import CardCSS from './styles';
import { Card } from 'react-bootstrap';

const ProjectCard = (props) => {
    return (
        <CardCSS>
            <Card>
                <Card.Img variant="top" src={props.photo} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <a href={props.link} target="_blank" rel="noreferrer" className="btn proj-link">Explore</a>
                </Card.Body>
            </Card>
        </CardCSS>
    )  
}

export default ProjectCard;