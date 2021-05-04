import styled from 'styled-components';
import media from '../../../../styles/media.js';

const CardCSS = styled.div`
  .card {
      min-height: 30rem;
  }
  .card-body {
      display: flex;
      flex-direction: column;
  }
  .btn {
      margin-top: auto;
      background-color: #3366cc;
      color: #fff;
  }
  @media ${media.mobileXS} {
    .card {
      width: 15rem;
    }
  }
  @media ${media.mobileM} {
    .card {
      width: 18rem;
    }
  }
  @media ${media.mobileL} {
    .card {
      width: 21rem;
    }
  }
  @media ${media.laptop} {
    .card {
      width: 25rem;
      min-height: 40rem;
    }
  }
  @media ${media.laptopL} {
    .card {
      width: 21rem;
      min-height: 30rem;
    }
  }
`

export default CardCSS;