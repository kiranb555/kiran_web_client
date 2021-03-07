import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const useStyle = makeStyles({
  appbar: {
    height: "56px !important",
  },
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
    fontFamily: "Segoe UI",
  },
});

export default useStyle;
