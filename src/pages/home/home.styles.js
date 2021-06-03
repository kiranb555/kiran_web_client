import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  homePG: {
    backgroundColor: theme.palette.primary,
  },
  banner: {
    minHeight: "300px",
    height: "35vh",
    background: `linear-gradient(-213deg, #5e31dc 0%, #3155dc 100%)`,
    // background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderRight: "none",
    borderLeft: "none",
    borderTop: "none",
    // clipPath: "polygon(0 0, 100% 0%, 100% 66%, 0 100%)",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
