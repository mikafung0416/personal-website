import React from 'react';
import BackgroundCSS from './styles';

const Background = () => {
    return (
        <BackgroundCSS>
            <div>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
            </div> 
        </BackgroundCSS>
    )
}

export default Background;