import React, { FC } from "react";
import { Paper, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "300px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const HomeCard: FC<{}> = (props) => {
  const classes = useStyles();

  return (
    <Fade in>
      <Paper className={classes.root} elevation={3}>
        {props.children}
      </Paper>
    </Fade>
  );
};

export default HomeCard;
