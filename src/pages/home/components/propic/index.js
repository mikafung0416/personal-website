import React from 'react';
import ProPicCSS from './styles';

const ProPic = (props) => {
    return (
        <ProPicCSS>
            <img src={props.propic} alt='profile' />
        </ProPicCSS>
    )
}

export default ProPic;