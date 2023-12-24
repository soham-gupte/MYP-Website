// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KnowYourRight } from './components/KnowYourRight';
import { OurProjects } from './components/OurProjects';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HeroSection/> */}
      {/* <AboutUs/> */}
      {/* <KnowYourRight/> */}
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <HeroSection />
              <AboutUs />
            </>
          } />

          <Route path='/our-projects' element={<OurProjects/>}/>
          <Route path='/know-your-right' element={<KnowYourRight />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
