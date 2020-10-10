import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./ContactForm.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "80%",
      margin: "0 auto",
      marginBottom: "20px",
    },
  },
}));

function ContactForm() {
  const classes = useStyles();

  return (
    <div className='contact-form'>
      <form
        className={classes.root}
        id='form-containter'
        noValidate
        autoComplete='off'
      >
        <TextField className='text-field' label='Name' variant='outlined' />
        <TextField className='text-field' label='Email' variant='outlined' />
        <TextField
          id='message'
          className='text-field'
          label='Message'
          multiline
          rowsMax={4}
          variant='outlined'
        />
      </form>
    </div>
  );
}

export default ContactForm;
