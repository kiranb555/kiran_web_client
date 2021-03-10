import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ theme }) =>
  createStyles({
    section: {
      margin: "20px 0",
      // border: "1px solid red",
    },
    skillChip: {
      textTransform: "uppercase",
      margin: "0 10px 10px 0",
    },
    paper: {
      margin: "10px 0",
      padding: "10px",
    },
  })
);

export default useStyles;
