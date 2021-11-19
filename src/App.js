import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
