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

// con una sentencia switch vamos a poner las rutas cuando se redireccione
// en themeProvider es donde van a estar los temas y los valores que vamos a usar
// en lightTheme lo exportamos de un componente donde es un objeto con valores y lo usamos en main mediante props
function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/blog" component={BlogPage} />
					<Route exact path="/work" component={WorkPage} />
					<Route exact path="/skills" component={MySkillsPage} />
				</Switch>
			</ThemeProvider>
		</>
	);
}

export default App;
