import React from 'react';
import HeadingCSS from './styles';

const Heading = (props) => {
    return (
        <HeadingCSS>
            <h1>{props.heading}</h1>
        </HeadingCSS>
    )
}

export default Heading;