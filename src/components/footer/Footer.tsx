import React from "react";
import { Grid, Icon, Typography, IconButton } from "@material-ui/core";
import useStyles from "./Footer.styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <Typography variant="h5" color="inherit">
            Get in touch
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <MailIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <Typography variant="body1">
            &copy; Kiran 2021, made with &#x2764;
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
