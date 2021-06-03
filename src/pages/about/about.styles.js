import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    section: {
      margin: "20px 0",
    },
    section__header: {
      margin: "25px 0 20px 0",
      "section__header::after": {
        content: "",
        borderBottom: "1px solid red",
      },
    },
    skillChip: {
      textTransform: "uppercase",
      margin: "0 10px 10px 0",
    },
    aboutPara: {
      "& span": {
        color: "red",
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
        color: theme.palette.text.secondary,

        "@media (max-width : 425px)": {
          display: "none",
        },
      },
    },
  })
);

export default useStyles;
