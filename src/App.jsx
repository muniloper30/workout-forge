import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/HomePage';
import WorkoutsPage from './pages/WorkoutsPage';
import CsgPage from './pages/CsgPage';
import ProgressPage from './pages/ProgressPage';
import PolygonTop from './components/PolygonTop';
import PolygonBottom from './components/PolygonBottom';
import NavBar from './components/Navbar';
import FooterSection from './components/footerSection';


function App() {
  return (
    <div>
      <PolygonTop />
      <NavBar />
      <Routes> /* En v6 usamos Routes en lugar de Route solo */
        <Route path="/" element={<HomePage />} />
        <Route path="/Workouts" element={<WorkoutsPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/CsgStudio"element={<CsgPage />} />
      </Routes>
      <FooterSection />
      <PolygonBottom />


    </div>
      
    
  );
}

export default App;
