import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import "fontsource-roboto";
import store,{persistor} from "./redux/store";
import Theme from "./styles/theme";
import { MainWrapper } from "./App.styles";
import { ViewPortProvider } from "./components/ViewportProvider";
import NavBar from "./components/navBar/NavBar.jsx";
import Error from "./pages/404";
import Footer from "./components/footer";
import ProtectedRoute from "./pages/protectedRoute/protectedRoute";
import Dashboard from "./pages/dashboard/dashboard";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Login = lazy(() => import("./pages/login"));
// const Blog = lazy(() => import('./pages/blog'));

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <ViewPortProvider>
            <NavBar />
            <MainWrapper>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path={["/", "/home"]} component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  {/* <Route exact path="/blog" component={Blog} /> */}
                  <Route exact path="/login" component={Login} />
                  <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
                  <Route component={Error} />
                </Switch>
              </Suspense>
              <Footer />
            </MainWrapper>
          </ViewPortProvider>
          </Theme>
           </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
