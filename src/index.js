import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './components/app/App';
import JobsPage from "./components/pages/jobs-page";
import JobDetails from "./components/job-details";
import { dataJob } from './components/job/job';

import './index.css';
import './fonts/SFPro/SF-Pro-Display-Black.otf'
import './fonts/SFPro/SF-Pro-Display-Bold.otf'
import './fonts/SFPro/SF-Pro-Display-Heavy.otf'
import './fonts/SFPro/SF-Pro-Display-Light.otf'
import './fonts/SFPro/SF-Pro-Display-Medium.otf'
import './fonts/SFPro/SF-Pro-Display-Regular.otf'
import './fonts/SFPro/SF-Pro-Display-Semibold.otf'
import './fonts/SFPro/SF-Pro-Display-Thin.otf'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<App />} />
      <Route path='/jobs/:id' exact element={<JobDetails dataJob={dataJob} />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)

//REACT 18
// import { createRoot } from "react-dom/client";
// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<App />)