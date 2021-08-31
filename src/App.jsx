import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';


function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Banner />
        <Projects />
        <About />
        <Skills />
        <Timeline />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
