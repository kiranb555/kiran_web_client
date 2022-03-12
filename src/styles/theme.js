import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import {lightTheme,darkTheme} from "./common.theme.js";
import GlobalStyles from "./Global.styles";

const Theme = ({ children }) => {
    const {
        isThemeLight
    } = useSelector(state => state);
  const tm = isThemeLight ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={tm}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
