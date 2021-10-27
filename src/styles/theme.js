import { ThemeProvider } from "styled-components";
import theme from "./common.theme.js";
import GlobalStyles from "./Global.styles";

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		{children}
	</ThemeProvider>
);

export default Theme;
