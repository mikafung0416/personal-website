import { Route, Switch } from "react-router-dom";
import HomePage from './pages/home';
import ExperiencePage from './pages/experience';
import ProjectPage from './pages/projects';
import ContactMePage from './pages/contactMe';
import { NavBar, Background } from './components';

function App() {
  return (
    <div>
      <Background/>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/experience" component={ExperiencePage} />
        <Route path="/projects" component={ProjectPage} />
        <Route path="/contact-me" component={ContactMePage} />
      </Switch>
    </div>
  );
}

export default App;
