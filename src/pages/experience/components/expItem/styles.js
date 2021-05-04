import styled from 'styled-components';
import media from '../../../../styles/media.js';

const ExpItemCSS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .exp {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80vw;
      margin: 1.5rem 2rem;
      border-radius: 4px 4px 0 0;
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 100%;
    border-radius: 4px 4px 0 0;
  }
  .right {
    width: 100%;
    border: solid 1px #fff;
    background-color: #fff;
    padding: 1rem 1rem;
  }
  .title {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .date {
    font-size: 1.3rem;
  }
  
  .left-odd {
    background-color: #3366cc;
  }
  .date-odd {
    color: #99b3e6;
  }
  .title-odd {
    color: #3366cc;
  }
  .left-even {
    background-color: #a3cc33;
  }
  .date-even {
    color: #d1e699;
  }
  .title-even {
    color: #a3cc33;
  }
  @media ${media.tablet} {
      .exp {
        flex-direction: row;
        align-items: stretch;
        border-radius: 4px 0 0 4px;
      }
      .left {
        height: auto;
        border-radius: 4px 0 0 4px;
        width: 20rem;
      }
  }
`

export default ExpItemCSS;