import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./hover.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ScrollToTop from "react-scroll-to-top";
import "./components/Footers/Footer.css"
import Footer from "./components/Footers/Footer";



ReactDOM.render(
  <React.StrictMode>
    <App />
    <ScrollToTop

     smooth 
     color="white"
     viewBox="0 0 28 32"
     svgPath="M28 9.401c0-6.326-4.579-9.401-14-9.401s-14 3.075-14 9.401c0 7.275 13.173 15.668 13.733 16.021 0.001 0.001 0.003 0 0.005 0.001 0.011 0.007 0.023 0.007 0.035 0.013 0.072 0.038 0.148 0.064 0.227 0.064s0.155-0.026 0.227-0.063c0.011-0.006 0.024-0.006 0.035-0.013 0.001-0.001 0.003 0 0.005-0.001 0.56-0.354 13.733-8.746 13.733-16.022zM18 9.401c0 5.56-2.876 12.121-4 14.473-1.124-2.351-4-8.909-4-14.473 0-7.53 2.283-8.401 4-8.401s4 0.871 4 8.401zM9 9.401c0 4.797 1.979 10.141 3.331 13.236-2.742-2.897-7.331-8.456-7.331-13.236 0-4.69 1.918-7.327 5.977-8.132-1.324 1.448-1.977 4.142-1.977 8.132zM19 9.401c0-3.99-0.652-6.684-1.977-8.132 4.059 0.805 5.977 3.443 5.977 8.132 0 4.78-4.589 10.338-7.331 13.236 1.352-3.094 3.331-8.439 3.331-13.236zM1 9.401c0-3.971 1.987-6.47 6.156-7.632-2.114 1.532-3.156 4.064-3.156 7.632 0 4.203 3.135 8.792 5.838 11.973-3.858-3.068-8.838-7.83-8.838-11.973zM18.162 21.374c2.703-3.181 5.838-7.769 5.838-11.973 0-3.568-1.042-6.101-3.156-7.632 4.169 1.162 6.156 3.661 6.156 7.632 0 4.143-4.98 8.905-8.838 11.973zM11.5 27c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.841 0.659 1.5 1.5 1.5h3c0.841 0 1.5-0.659 1.5-1.5v-3c0-0.276-0.224-0.5-0.5-0.5h-5zM16 30.5c0 0.294-0.206 0.5-0.5 0.5h-3c-0.294 0-0.5-0.206-0.5-0.5v-2.5h4v2.5z"
     />
     <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();