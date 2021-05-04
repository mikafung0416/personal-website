import styled from 'styled-components';
import media from '../../styles/media.js';

const HeadingCSS = styled.div`
  margin: 0.8rem 0 0.8rem 0;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 1.8rem;
    color: #fff;
  }
  @media ${media.laptop} {
    margin-bottom: 5rem;
    h1 {
      font-size: 2.5rem;
    }
  }
  @media ${media.laptopL} {
    margin-bottom: 2.5rem;
    h1 {
      font-size: 1.8rem;
    }
  }
`

export default HeadingCSS;