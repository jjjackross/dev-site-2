import {
  BrowserRouter,
  Route
} from "react-router-dom";

import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <main>
          <Route exact path="/"><About /></Route>
          <Route path="/work"><Work /></Route>
          <Route path="/contact"><Contact /></Route>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
