import React from "react";
import './HeaderSection.css'


//import { makeStyles } from "@material-ui/core/styles";

export default function HeaderSection(props) {
  return (
    <div className='header-section'>
      <h1 className='title'>{props.title}</h1>
      <p className='info'>
        {props.info}
      </p>
    </div>
  );
}
