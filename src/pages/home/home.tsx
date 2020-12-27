import React, { FC } from "react";
import { withRouter } from "react-router-dom";
import { Button, Typography, Grid } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import HomeCard from "../../components/homeCards";
import useStyles from "./home.styles.js";
// import Design from "../../svg/design";
// import JsReact from "../../svg/jsReact";
// import DataViz from "../../svg/dataViz";

const Home: FC<{}> = (props) => {
  const classes: any = useStyles();
  const handleRoute = (props: any) => {
    props.history.push("/about");
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
            onClick={() => handleRoute(props)}
          >
            know more <KeyboardArrowRight />
          </Button>
        </div>
      </div>
      <div
        style={{
          fontSize: "28px",
          textAlign: "center",
          margin: "35px 0 20px 0",
        }}
      >
        skills & services
      </div>
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Grid container item justify="center" spacing={4}>
          <Grid item>
            <HomeCard>
              <Typography gutterBottom variant="h5" component="h2">
                React js
              </Typography>
              <div style={{ height: "300px", width: "100%" }}>
                {/* <JsReact /> */}
              </div>
            </HomeCard>
          </Grid>
          <Grid item>
            <HomeCard>
              <Typography gutterBottom variant="h5" component="h2">
                Have a Design
              </Typography>
              <div style={{ height: "50%", width: "100%" }}>
                {/* <Design /> */}
              </div>
            </HomeCard>
          </Grid>
          <Grid item>
            <HomeCard>
              <Typography gutterBottom variant="h5" component="h2">
                Data Visualization
              </Typography>
              <div style={{ height: "300px", width: "100%" }}>
                {/* <DataViz /> */}
              </div>
            </HomeCard>
          </Grid>

          <Grid item>
            <HomeCard>
              <Typography gutterBottom variant="h5" component="h2">
                React js
              </Typography>
              <div style={{ height: "300px", width: "100%" }}>
                {/* <JsReact /> */}
              </div>
            </HomeCard>
          </Grid>
          <Grid item>
            <HomeCard>
              <Typography gutterBottom variant="h5" component="h2">
                Have a Design
              </Typography>
              <div style={{ height: "50%", width: "100%" }}>
                {/* <Design /> */}
              </div>
            </HomeCard>
          </Grid>
          <Grid item>
            <HomeCard>
              <Typography gutterBottom variant="h5" component="h2">
                Data Visualization
              </Typography>
              <div style={{ height: "300px", width: "100%" }}>
                {/* <DataViz /> */}
              </div>
            </HomeCard>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withRouter(Home);
