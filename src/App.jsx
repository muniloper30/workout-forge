import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/HomePage';
import WorkoutsPage from './pages/WorkoutsPage';
import CsgPage from './pages/CsgPage';
import ProgressPage from './pages/ProgressPage';
import PolygonTop from './components/PolygonTop';
import PolygonBottom from './components/PolygonBottom';
import NavBar from './components/Navbar';
import FooterSection from './components/FooterSection';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';


function App() {
  return (
    <div>
      <PolygonTop />
      <NavBar />
      <Routes> /* En v6 usamos Routes en lugar de Route solo */
      <Route index element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Workouts" element={<WorkoutsPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/CsgStudio" element={<CsgPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/CreateAccount" element={<CreateAccountPage />} />
      </Routes>
      <PolygonBottom />
      <FooterSection />


    </div>
      
    
  );
}

export default App;
