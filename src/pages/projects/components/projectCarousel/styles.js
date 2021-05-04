import styled from 'styled-components';
import media from '../../../../styles/media.js';

const CarouselCSS = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0 4rem 0;

  .arrows {
    fill: #000;
    fill-opacity: 0.4;
  }
  .arrows:hover {
    fill: #fff;
  }

  .right-arrow {
    position: absolute;
    top: 50%;
    right: 1px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  
  .left-arrow {
    position: absolute;
    top: 50%;
    left: 1px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  
  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

  @media ${media.tablet} {
    .right-arrow {
      right: 110px;
    }
    .left-arrow {
      left: 110px
    }
  }

  @media ${media.laptop} {
    margin-top: 2rem;
    .right-arrow {
      right: 150px;
    }
    .left-arrow {
      left: 150px
    }
  }

  @media ${media.laptopL} {
    margin-top: 5rem;
    .right-arrow {
      right: 320px;
    }
    .left-arrow {
      left: 320px
    }
  }
`

export default CarouselCSS;