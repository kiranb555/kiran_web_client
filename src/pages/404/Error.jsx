import React from "react";
import { Grid } from "@material-ui/core";
import Error404 from "../../svg/404";
import useStyles from "./styles";

const Error = () => {
  const classes = useStyles();
  console.log(classes);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={classes.error_404}>
        <Error404 />
      </div>
    </div>
  );
};

export default Error;
