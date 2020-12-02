import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';

import "./ContactForm.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "80%",
      margin: "0 auto",
      marginBottom: "20px",
    },
  },
  btn: {
    display: "block",
    backgroundColor: "#0078e8"
  },

}));

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_3ul0pon', 'template_qz1uxro', e.target, 'user_ebYx9GZcrg6Vl3kSHz5Eb')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset();
}

function ContactForm() {
  const classes = useStyles();

  return (
    <div className='contact-form'>
      <form
        className={classes.root}
        id='form-containter'
        noValidate
        autoComplete='off'
        onSubmit={sendEmail}
      >
        <TextField className='text-field' label='Subject' variant='outlined' name = 'subject'/>
        <TextField className='text-field' label='Name' variant='outlined' name = 'name'/>
        <TextField className='text-field' label='Email' variant='outlined' name = 'email'/>
        <TextField
          id='message'
          className='text-field'
          label='Message'
          multiline
          rowsMax={4}
          variant='outlined'
          name = 'message'
        />
        <Button variant="contained" type = "submit" color="primary"  value="Send" className = {classes.btn}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
