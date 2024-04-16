import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import "fontsource-roboto";
import 'bootstrap/dist/css/bootstrap.min.css';
import store,{persistor} from "./redux/store";
import Theme from "./styles/theme";
import { MainWrapper } from "./App.styles";
import { ViewPortProvider } from "./components/ViewportProvider";
import NavBar from "./components/navBar/NavBarB.jsx";
import Error from "./pages/404";
import Footer from "./components/footer";
import ProtectedRoute from "./pages/protectedRoute/protectedRoute";
import Dashboard from "./pages/dashboard/dashboard";
import { Container } from "reactstrap";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Login = lazy(() => import("./pages/login"));
const Project = lazy(() => import("./pages/project"));
const Blog = lazy(() => import('./pages/blog'));
const BlogDetails = lazy(() => import('./pages/blog/BlogDetails.jsx'));
const BlogForm = lazy(() => import('./pages/blogForm'));

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
              <Container>
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/project" component={Project} />
                  <Route exact path="/blog" component={Blog} />
                  <Route exact path="/blog/:id" component={BlogDetails} />
                  <Route exact path="/myblog/add" component={BlogForm}/>
                      <Route exact path="/login" component={Login} />
                  <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
              </Container>
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
