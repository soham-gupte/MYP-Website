// import logo from './logo.svg';
import './App.css';
import { AboutUs } from './components/AboutUs';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KnowYourRight } from './components/KnowYourRight';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <HeroSection/> */}
      {/* <AboutUs/> */}
      <KnowYourRight/>
    </div>
  );
}

export default App;
