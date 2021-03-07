import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme) =>
  createStyles({
    heading: {
      padding: "40px 0 20px 0",
    },
    contactHolder: {
      height: "100%",
      display: "flex",
      // justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  })
);
