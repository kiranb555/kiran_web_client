import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme) =>
  createStyles({
    contactPaper: {
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
      width: "600px",
      margin: "45px auto",
    },
    contact: {
      flexGrow: 1,
      padding: "20px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    contactSubmitBtnHolder: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);
