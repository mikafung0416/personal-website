import React from 'react';
import { ProjectCarousel } from './components';
import { Heading } from '../../components';
import projectsContent from '../../static/projects';

const ProjectPage = () => {
    return (
        <div>
            <Heading heading={projectsContent.heading}/>
            <ProjectCarousel projects={projectsContent.projectsList}/>
        </div>
    )
}

export default ProjectPage;