import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: "bold",
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(20),
      color: theme.palette.text.secondary,
      textTransform: "capitalize",
    },
    ternaryHeading: {
      fontSize: theme.typography.pxToRem(16),
      color: theme.palette.text.secondary,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      verticalAlign: "bottom",
      height: 20,
      width: 20,
    },
    details: {
      flexDirection: "column",
    },
    column: {
      flexBasis: "33.33%",
    },
    chip: {
      margin: "5px 5px 5px 0",
      textTransform: "uppercase",
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2),
    },
  })
);

export default useStyles;
