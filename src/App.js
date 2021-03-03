import { BrowserRouter , Route ,Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact></Route>
        <Route component={About} path='/about' ></Route>
        <Route component={Skills} path='/skills' ></Route>
        <Route component={Project} path='/project' ></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
