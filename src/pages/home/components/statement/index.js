import React from 'react';
import StatementCSS from './styles';

const Statement = (props) => {
    const { content } = props;
    return (
        <StatementCSS>
            <div className="word-carousel">
                <h3>{content.salute}</h3>
                <div>
                    <ul className="flip2">
                        {content.wordList.map((item,idx) => (
                            <li key={idx}>
                                <h1>{item}</h1>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </StatementCSS>
    )
}

export default Statement;