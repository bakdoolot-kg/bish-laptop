import React from "react";
import {NavLink, useHistory} from "react-router-dom";
import {dataJob} from "../job/job";

const JobDetails = ({selectedItemId}) => {

  return (
    <div className='job-details'>
      {dataJob.map(item => <p>{item}</p>)}
    </div>
  )
}