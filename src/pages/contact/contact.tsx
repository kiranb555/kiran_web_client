import React, { FC } from "react";
import { Snackbar, Typography, Container } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { useSelector } from "react-redux";
import ContactForm from "../../components/contactForm";
import useStyles from "./contact.styles";

const Contact: FC<{}> = () => {
  const classes = useStyles();

  interface CF {
    contact: {
      fromSubmit: Boolean;
      formSubmitFailure: Boolean;
      formSubmitSuccess: Boolean;
    };
  }
  const contact = useSelector((state: CF) => state.contact);

  console.log(contact);
  console.log(contact.fromSubmit);

  function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <section className={classes.contactHolder}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" className={classes.heading}>
          CONTACT
        </Typography>

        <ContactForm />
        {contact.formSubmitSuccess && (
          <Snackbar open={true}>
            <Alert severity="success">
              Your Details submitted successfully. We will contact you ASP,
              Thank you
            </Alert>
          </Snackbar>
        )}
        {contact.formSubmitFailure && (
          <Snackbar open={true}>
            <Alert severity="error">
              Failed to submit details, please try again later.
            </Alert>
          </Snackbar>
        )}
      </Container>
    </section>
  );
};

export default Contact;
