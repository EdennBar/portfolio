

import Grid from '@material-ui/core/Grid';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import './Contact.css';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Button from '@material-ui/core/Button';

import SendIcon from '@material-ui/icons/Send';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({

  field: {

    marginBottom: 20,
    marginTop: 20,
    display: 'block',




  }, headerTitle: {
    fontFamily: "Nunito",
    fontSize: '2rem',

  },
})

const Contact = () => {
  const [send, setSend] = useState('');
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  function sendMessage(e) {
    if (!email || !name || !message) {
      setSend('You must fill in all the blank fields')

    } else {
      setSend('Thank you for contacting me ')
    }
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_jktdb5i', 'template_g9k6709', '.contact-form', 'user_QBGCBtGCiu1fwKr17UmrU')
      .then((result) => {

      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div style={{ marginTop: "4%" }}>
      <h1 className={classes.headerTitle}>Contact Me</h1>
      <Box display="flex" style={{ flexWrap: "Wrap" }} justifyContent="center" m={1} p={1} >
        <Grid container xs={12}>



          <Grid item xs={12} sm={12} md={6} lg={6} className="email-form">

            <form className="contact-form" onSubmit={sendEmail}>
              <TextField
                onChange={(e) => setName(e.target.value)}
                label="Your Name"
                name="contact_number"
                variant="outlined"
                color="secondary" fullWidth required />
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                className={classes.field} label="Email" name="user_name"
                variant="outlined" color="secondary" fullWidth required />
              <TextField
                onChange={(e) => setMessage(e.target.value)}
                className={classes.field} label="Message" name="message" variant="outlined" color="secondary" multiline rows={4} fullWidth required />
              <Button endIcon={<SendIcon />} onClick={sendMessage} className="sendButton" type="submit" variant="contained" color="primary">SEND</Button>
              {send}
            </form>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img className="contactImage"
              src="https://raw.githubusercontent.com/saadpasta/developerFolio/master/src/assets/images/contactMailDark.svg"
              alt="new"></img>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Contact;


