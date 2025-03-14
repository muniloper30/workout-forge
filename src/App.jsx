import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/HomePage';
import WorkoutsPage from './pages/WorkoutsPage';
import CsgPage from './pages/CsgPage';
import PolygonTop from './components/PolygonTop';
import PolygonBottom from './components/PolygonBottom';
import NavBar from './components/Navbar';
import FooterSection from './components/FooterSection';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import PerfilPage from './pages/PerfilPage';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <div>
      <PolygonTop />
      <NavBar />
      <Routes> /* En v6 usamos Routes en lugar de Route solo */
      <Route index element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Workouts" element={<WorkoutsPage />} />
        <Route path="/CsgStudio" element={<CsgPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />} />
        <Route path="/CreateAccount" element={<CreateAccountPage />} />
        <Route path="/Perfil" element={<PerfilPage />} />
      </Routes>
      <PolygonBottom />
      <FooterSection />


    </div>
      
    
  );
}

export default App;
