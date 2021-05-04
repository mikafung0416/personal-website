import styled from 'styled-components';
import media from '../../../../styles/media.js';

const SummaryCSS = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.8rem 0 1.5rem 0;
  color: #4B4453;
  div {
    width: 85%;
    text-align: justify;
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    border-radius: 10px;
    h6 {
      line-height: 1.5rem;
      margin-bottom: 0.8rem;  
    }   
  }
  @media ${media.tablet} {
    div>h6 {
      font-size: 1.8rem;
      line-height: 2.7rem;
    }
  }
  @media ${media.laptop} {
    margin-top: 2rem;
    div {
      width: 70%;
    }
  }
  @media ${media.laptopL} {
    margin-top: 1.5rem;
    div {
      width: 53%;
    }
    div>h6 {
        font-size: 1.3rem;
        line-height: 1.95rem;
    }
  }
`

export default SummaryCSS;