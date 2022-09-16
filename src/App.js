import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Container customClass="min-height">
            <Route exact path="/"><Home /></Route>
            <Route path="/company"><Company /></Route>
            <Route path="/contact"><Contact /></Route>      
            <Route path="/newproject"><NewProject /></Route> 
            <Route path="/projects"><Projects /></Route>  
          </Container>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
