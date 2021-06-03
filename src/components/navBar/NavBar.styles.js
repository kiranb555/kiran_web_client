import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const useStyle = makeStyles({
  appbar: {
    height: "56px !important",
    background: 'linear-gradient(-213deg, #5e31dc 0%, #3155dc 100%)',
    
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
});

export default useStyle;
