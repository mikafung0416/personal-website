import styled from 'styled-components';
import media from '../../styles/media.js';

const NavBarCSS = styled.div`
  margin-top: 0.5rem;
  img {
    height: 1.5rem;
  }
  h5 {
    margin: 0 0.4rem 0 0.4rem;
  }
  .navbar-brand {
    padding-bottom: 0.5rem;
  }
  @media ${media.tablet} {
      display: flex;
      justify-content: center;
  }
  @media ${media.laptop} {
    margin-bottom: 5rem;
  }
  @media ${media.laptopL} {
    margin-bottom: 0;
  }

`

export default NavBarCSS;