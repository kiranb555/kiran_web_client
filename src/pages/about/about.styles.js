import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ theme }) =>
  createStyles({
    section: {
      margin: "20px 0",
      border: "1px solid red",
    },
  })
);

export default useStyles;
