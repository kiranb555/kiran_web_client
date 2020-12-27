import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  error_404: {
    display: "flex",
    justifyContent: "center",
    width: "500px",
  },
  [theme.breakpoints.down("sm")]: {
    error_404: {
      display: "flex",
      justifyContent: "center",
      width: "300px",
    },
  },
}));
