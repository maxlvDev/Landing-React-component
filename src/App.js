import './styles/App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro.jsx'
import Features from './components/Features/Features';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import './styles/media.css'


function App() {
  return (
    <>
    <div className="App">
    <Header/>  
    <Intro/>
    <Features/>
    <About/>
    <Services/>
    <Gallery/>
    <Team/>
    <Contact/>
    </div>
  </>
  );
}



export default App;
