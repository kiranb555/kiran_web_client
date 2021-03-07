import React, { useState, lazy, Suspense } from "react";
import "fontsource-roboto";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CircularProgress, IconButton } from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AppliedTheme from "./styles/theme.styles";
import useStyle from "./App.styles";

import NavBar from "./components/navBar";
import Error from "./pages/404";
import Footer from "./components/footer";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));

function App() {
  const classes = useStyle();
  // const history = useHistory();
  const [theme, setTheme] = useState(false);

  const appliedTheme = createMuiTheme({
    palette: {
      ...AppliedTheme.mypalette,
      type: theme ? "dark" : "light",
    },
  });

  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={appliedTheme}>
          <CssBaseline />
          <NavBar />
          <main className={classes.App}>
            <Suspense
              fallback={
                <div className={classes.suspense}>
                  <CircularProgress />
                </div>
              }
            >
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
              </Switch>
            </Suspense>
            <div className={classes.themeIcon}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => setTheme(!theme)}
              >
                {icon}
              </IconButton>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
