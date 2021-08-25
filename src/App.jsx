import './App.css';
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
      </div>
    </div>
  );
}

export default App;
