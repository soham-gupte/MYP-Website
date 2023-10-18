// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      {/* <KnowYourRight/> */}
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path='/' element={
            <div>
              <HeroSection />
              <AboutUs />
            </div>
          } />

          <Route path='/know-your-right' element={<KnowYourRight/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
