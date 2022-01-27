import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

// Imports all the top level component's we'll be using
import Nav from './Components/Nav/Nav';
import MobileNav from './Components/MobileNav/MobileNav';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import PageNotFound from './Components/PageNotFound/PageNotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* One component for desktop nav and another for mobile nav */}
        <Nav />
        <MobileNav />
        {/* The components with actual content & our error 404 component */}
        <main>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
