import styled from 'styled-components';
import media from '../../../../styles/media.js';

const ProPicCSS = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;

  img {
    border-radius: 50%;
    border: 1px #fff solid;
  }

  @media ${media.mobileXS} {
    img {
      height: 8rem;
    }
  }

  @media ${media.tablet} {
    img {
      height: 12rem;
    }
  }
`

export default ProPicCSS;