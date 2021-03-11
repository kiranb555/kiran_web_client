import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ theme }) =>
  createStyles({
    section: {
      margin: "20px 0",
      // border: "1px solid red",
    },
    section__header: {
      margin: "25px 0 20px 0",
      borderBottom: "1px solid red",
    },
    skillChip: {
      textTransform: "uppercase",
      margin: "0 10px 10px 0",
    },
    aboutPara: {
      "& span": {
        color: theme,
      },
    },
    paper: {
      margin: "10px 0",
      padding: "16px",
    },
    educationHolder: {
      display: "flex",
      "& span": {
        flex: "2",
      },
      "& span:first-child": {
        flex: "1",

        "@media (max-width : 425px)": {
          display: "none",
        },
      },
    },
  })
);

export default useStyles;
