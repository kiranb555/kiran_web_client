import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  homePG: {
    backgroundColor: theme.palette.primary,
  },
  banner: {
    height: "350px",
    background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
    // background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderRight: "none",
    borderLeft: "none",
    borderTop: "none",
    clipPath: "polygon(0 0, 100% 0%, 100% 66%, 0 100%)",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
