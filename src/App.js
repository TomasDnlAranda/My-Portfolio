// externo
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { lightTheme } from './components/Themes';
import { Switch, Route } from 'react-router-dom';

// componentes
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sound from './subComponents/Sound';

function App() {
	const location = useLocation();
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
				<Sound />
				{/*dasdsad */}
				<AnimatePresence>
					<Switch location={location} key={location.pathname}>
						<Route exact path="/" component={Main} />
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/blog" component={BlogPage} />
						<Route exact path="/work" component={WorkPage} />
						<Route exact path="/skills" component={MySkillsPage} />
					</Switch>
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
}

export default App;
