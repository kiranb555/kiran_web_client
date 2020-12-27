import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  App: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      height: `calc(100vh - 56px)`,
    },
    height: `calc(100vh - 64px)`,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
  },
  suspense: {
    fontSize: "30px",
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  themeIcon: {
    position: "fixed",
    left: "10px",
    bottom: "100px",
  },
}));
