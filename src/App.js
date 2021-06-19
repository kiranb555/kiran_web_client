import React, { lazy, Suspense } from 'react';
import 'fontsource-roboto';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/Global.styles';
import { MainWrapper } from './App.styles';
import { ViewPortProvider } from './components/ViewportProvider';
import NavBar from './components/navBar/NavBar.jsx';
import Error from './pages/404';
import Footer from './components/footer';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));

function App() {
	return (
		<Router>
			<Provider store={store}>
				<GlobalStyles />
				<ViewPortProvider>
					<NavBar />
					<MainWrapper>
						<Suspense fallback={<div>Loading...</div>}>
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/home' component={Home} />
								<Route exact path='/about' component={About} />
								<Route
									exact
									path='/contact'
									component={Contact}
								/>
								<Route component={Error} />
							</Switch>
						</Suspense>
						<Footer />
					</MainWrapper>
				</ViewPortProvider>
			</Provider>
		</Router>
	);
}

export default App;
