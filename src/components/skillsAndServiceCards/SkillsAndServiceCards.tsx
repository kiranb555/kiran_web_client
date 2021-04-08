import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

import dataviz from "./dataviz.jpg";
import code from "./code.jpg";
import responsive from "./responsive.jpg";
import useStyles from "./SkillsAndServiceCards.style";

const skillsAndServiceCards = (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        style={{
          padding: "30px 0",
        }}
      >
        Skills & services
      </Typography>
      <div className={classes.homeCardHolder}>
        <Grid
          container
          justify="center"
          spacing={4}
          className={classes.homeCardContainer}
        >
          <Grid item>
            <Card className={classes.homeCard}>
              <CardMedia
                component="img"
                alt="responsive"
                image={responsive}
                title="responsive"
                height="180"
              ></CardMedia>
              <CardContent>
                <div className={classes.cardHeading}>
                  Responsive Web Development
                </div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  Going responsive in modern world of web development is very
                  important, To appear optimally in wide variety of screen size.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.homeCard}>
              <CardMedia
                component="img"
                alt="code"
                image={code}
                title="code"
                height="180"
              ></CardMedia>
              <CardContent>
                <div className={classes.cardHeading}>React js</div>
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
            <Card className={classes.homeCard}>
              <CardMedia
                component="img"
                alt="dataviz"
                image={dataviz}
                title="data visualization"
                height="180"
              ></CardMedia>
              <CardContent>
                <div className={classes.cardHeading}>Data visualization</div>
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
    </>
  );
};

export default skillsAndServiceCards;
