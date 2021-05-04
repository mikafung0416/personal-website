import React from 'react';
import SocialMediaCSS from './styles';

const SocialMedia = (props) => {
    return (
        <SocialMediaCSS>
            {props.content.map((elm, idx) => (
                <a href={elm.link} target="_blank" rel="noreferrer" key={idx}>
                    <img src={elm.icon} alt={elm.name} className="icons" />
                </a>
            ))}   
        </SocialMediaCSS>
    )
}

export default SocialMedia;