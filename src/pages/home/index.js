import React from 'react';
import HomePageCSS from './styles';
import { ProPic, Statement, Summary } from './components';
import homeContent from '../../static/home';


const HomePage = () => {
    return (
        <HomePageCSS>
            <ProPic propic={homeContent.propic}/>
            <Statement content={homeContent.statement}/>
            <Summary content={homeContent.summary}/>
        </HomePageCSS>
    )
}

export default HomePage;