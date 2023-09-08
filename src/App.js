// import logo from './logo.svg';
import './App.css';
import { AboutUs } from './components/AboutUs';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
    </div>
  );
}

export default App;
