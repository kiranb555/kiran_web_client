import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const useStyle = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  selectedClr: {
    color: colors.yellow[500],
  },
  logo: {
    // fontStyle: "italic",
    fontFamily: '"Segoe UI"',
  },
});

export default useStyle;
