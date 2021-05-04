import styled from "styled-components";
import media from '../../../../styles/media.js';

const StatementCSS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1.5rem;
  .word-carousel {
    color: #eee;
    div {
      overflow: hidden;
      height: 70px;
      padding-top: 10px;
      margin-top: -10px;
      ul {
          padding-left: 0;
      }
      li {
        color: #eee;
        padding: 0 5px;
        height: 47px;
        margin-bottom: 45px;
        display: block;

        h1 {
          font-weight: 900;
          margin-bottom: 0;
        }
      }
    }
  }

  .flip2 {
    animation: flip2 4s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
  }
  .flip3 {
    animation: flip3 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
  }
  .flip4 {
    animation: flip4 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
  }

  @keyframes flip2 {
    0% {
      margin-top: -180px;
    }
    5% {
      margin-top: -90px;
    }
    50% {
      margin-top: -90px;
    }
    55% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }

  @keyframes flip3 {
    0% {
      margin-top: -270px;
    }
    5% {
      margin-top: -180px;
    }
    33% {
      margin-top: -180px;
    }
    38% {
      margin-top: -90px;
    }
    66% {
      margin-top: -90px;
    }
    71% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }

  @keyframes flip4 {
    0% {
      margin-top: -360px;
    }
    5% {
      margin-top: -270px;
    }
    25% {
      margin-top: -270px;
    }
    30% {
      margin-top: -180px;
    }
    50% {
      margin-top: -180px;
    }
    55% {
      margin-top: -90px;
    }
    75% {
      margin-top: -90px;
    }
    80% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }
  @media ${media.mobileXS} {
    h1 {
      font-size: 2rem;
    }
  }
  @media ${media.mobileM} {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media ${media.laptop} {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default StatementCSS;
