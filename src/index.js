import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalCSS from './styles/global.js';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalCSS>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
        <App />
      </GlobalCSS>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);
