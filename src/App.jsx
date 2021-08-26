import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Projects from './components/Projects';


function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Banner />
        <Projects />
        <About />
      </div>
    </div>
  );
}

export default App;
