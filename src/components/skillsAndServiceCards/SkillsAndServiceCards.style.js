import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    homeCardHolder: {
      flexGrow: 1,
    },
    homeCardContainer: {
      width: "100% !important",
      margin: "0",
    },
    homeCard: {
      width: "300px",
      height: "350px",
    },
    cardHeading: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      paddingBottom: "15px",
    },
  })
);

export default useStyles;
