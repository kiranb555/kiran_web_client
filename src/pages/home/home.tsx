import React, { FC, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Snackbar,
} from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { KeyboardArrowDownOutlined } from "@material-ui/icons";
// import HomeCard from "../../components/homeCards";
import useStyles from "./home.styles.js";
import dataviz from "./dataviz.jpg";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Home: FC<{}> = (props) => {
  const classes: any = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className={classes.homePG}>
      <div className={classes.banner}>
        <div>
          <Typography variant="h2">I'm Kiran </Typography>
          <Typography variant="h6">Front-end Developer</Typography>

          <Button
            variant="contained"
            color="secondary"
            style={{ margin: "10px" }}
            href="kiran_2021.pdf"
            onClick={handleClick}
            download
          >
            Download Resume <KeyboardArrowDownOutlined />
          </Button>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Resume Downloaded successfully !
        </Alert>
      </Snackbar>
      <Typography variant="h4" align="center">
        Skills & services
      </Typography>
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Grid container justify="center" spacing={4}>
          <Grid item>
            <Card
              style={{
                width: "300px",
                height: "350px",
              }}
            >
              <CardMedia
                component="img"
                alt="dataviz"
                image={dataviz}
                title="data visualization"
                height="180"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Responsive Web Development
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  I value the historical data, representing data in
                  visualization is really important in modern web development
                  trend.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card
              style={{
                width: "300px",
                height: "350px",
              }}
            >
              <CardMedia
                component="img"
                alt="dataviz"
                image={dataviz}
                title="data visualization"
                height="180"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  React js
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  React js is my framework of choice
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card
              style={{
                width: "300px",
                height: "350px",
              }}
            >
              <CardMedia
                component="img"
                alt="dataviz"
                image={dataviz}
                title="data visualization"
                height="180"
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Data visualization
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  I value the historical data, representing data in
                  visualization is really important in modern web development
                  trend.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div>add material skeliton to cards</div>
      <h2>projects</h2>
    </div>
  );
};

export default withRouter(Home);

// https://mattfarley.ca/
