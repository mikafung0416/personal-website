import React from 'react';
import { ExpItem } from './components';
import { Heading } from '../../components';
import expContent from '../../static/experience';
import ExperiencePageCSS from './styles';

const ExperiencePage = () => {
    return (
        <ExperiencePageCSS>
            <Heading heading={expContent.heading}/>
            <div className="experiences">
                {expContent.experience.map((item, idx) => (
                    <ExpItem
                    selector={item.selector}
                    date={item.date}
                    title={item.title}
                    desc={item.desc}
                    key={idx}
                    />
                ))}
            </div>
        </ExperiencePageCSS>
    )
}

export default ExperiencePage;