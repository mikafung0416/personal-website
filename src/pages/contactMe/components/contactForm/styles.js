import styled from 'styled-components';
import media from '../../../../styles/media';

const ContactFormCSS = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 2rem;
  padding: 1.5rem 0 1.5rem 0;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  width: 85%;
  border-radius: 10px;
  
  form {
    display: flex;
    flex-direction: column;
    width: 75%;
  }
  input {
    width: 100%;
    border: solid 1px #cedeb5;
    border-radius: 5px;
    height: 2.5rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px 0px;
  }
  label {
    margin-left: -97%;
    color: #c2d1f0;
  }
  .input-field {
    margin-bottom: 2rem;
  }
  textarea {
    width: 100%;
    height: 8rem;
    border: solid 1px #dce2eb;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px 0px;
    ::placeholder {
      color: #c2d1f0;
    }
  }
  textarea:focus::placeholder {
    color: transparent;
  }
  .focus {
    transform: translateY(-120%);
    transition: 0.3s;
    margin-left: -97%;
    color: #3366cc;
  }
  label {
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }
  .btn {
    background-color: #3366cc;
    color: #fff;
    position: relative;
  }
  .btn-text {
    transition: all 0.2s;
  }
  .btn-spinner::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 24px;
    height: 24px;
    border: 4px solid transparent;
    border-top-color: #fff;
    border-radius: 50%;
    animation: btn-loading 1s linear infinite;
  }
  .btn-spinner .btn-text {
    visibility: hidden;
    opacity: 0;
  }
  @keyframes btn-loading {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
  }
  @media ${media.tablet} {
    width: 70%;
    textarea {
      height: 12rem;
    }
  }
  @media ${media.laptop} {
    width: 70%;
  }
  @media ${media.laptopL} {
    width: 50%;
    form {
      width: 50%;
    }
  }
`

export default ContactFormCSS;