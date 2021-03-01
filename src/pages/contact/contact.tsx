import React, { useState, FC } from "react";
import { Grid, TextField, Paper, Button, Typography } from "@material-ui/core";
import useStyles from "./contact.styles";

const initialInputs = {
  firstName: "",
  secondName: "",
  email: "",
  phone: "",
  message: "",
};

interface initialIps {
  firstName: string;
  secondName: string;
  email: string;
  phone?: string | number;
  message?: string;
}

const Contact: FC<{}> = () => {
  const [values, setValues] = useState<initialIps>(initialInputs);

  const classes = useStyles();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <Paper className={classes.contactPaper}>
      <div className={classes.contact}>
        <Typography variant="h4" align="center">
          CONTACT
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={5} alignContent="center">
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                label="Second Name"
                name="secondName"
                value={values.secondName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                label="Phone"
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                label="Message"
                name="message"
                value={values.message}
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
                // fullWidth
                // endIcon={<ArrowForwardIosIcon>send</ArrowForwardIosIcon>}
                onClick={(e) => alert("1")}
              >
                submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <div>form submitted popup / snack bar</div>
    </Paper>
  );
};

export default Contact;
