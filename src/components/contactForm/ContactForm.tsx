import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField, Paper, Button, Typography } from "@material-ui/core";
import {
  formInputHandler,
  forSubmitHandler,
} from "../../redux/contact/contactActions";
import useStyles from "./ContactForm.styles.js";

interface FDO {
  first_name: String;
  second_name: String;
  phone: any;
  email: String;
  message: String;
}
interface FD {
  formData: FDO;
}
interface CO {
  contact: FD;
}

const ContactForm: FC<{}> = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: CO) => state.contact.formData);
  const classes = useStyles();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let { name, value } = e.target;
    dispatch(formInputHandler({ key: name, value }));
  };

  const formSubmitHandler = (e: any) => {
    // prevent default will
    // prevent form data displaying in url
    e.preventDefault();
    dispatch(forSubmitHandler());
  };
  return (
    <Paper className={classes.contactPaper}>
      <div className={classes.contact}>
        <form onSubmit={formSubmitHandler}>
          <Grid container spacing={5} alignContent="center">
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                label="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                label="Second Name"
                name="second_name"
                value={formData.second_name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                label="Message"
                name="message"
                multiline
                value={formData.message}
                onChange={handleChange}
                fullWidth
                spellCheck
              />
            </Grid>
            <Grid
              item
              md={12}
              sm={12}
              xs={12}
              className={classes.contactSubmitBtnHolder}
            >
              <Button
                variant="contained"
                size="large"
                color="secondary"
                type="submit"
              >
                submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Paper>
  );
};

export default ContactForm;
