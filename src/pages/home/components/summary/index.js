import React from 'react';
import SummaryCSS from './styles';

const Summary = (props) => {
    const { content } = props;
    return (
        <SummaryCSS>
            <div>
                {content.selfIntro.map((item,idx) => (
                    <h6 key={idx}>{item}</h6>
                ))}
            </div>
        </SummaryCSS>
    )
}

export default Summary;