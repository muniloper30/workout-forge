import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import WorkoutsPage from "./pages/WorkoutsPage";
import CsgPage from "./pages/CsgPage";
import NavBar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import PerfilPage from "./pages/PerfilPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import CreateWorkout from "./pages/CreateWorkout";


function App() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <NavBar className="flex flex-col min-h-screen" />
      <div className="flex-grow">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Workouts" element={<WorkoutsPage />} />
        <Route path="/CsgStudio" element={<CsgPage />} />
        <Route path="/CreateWorkout" element={<CreateWorkout />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />} />
        <Route path="/CreateAccount" element={<CreateAccountPage />} />
        <Route path="/Perfil" element={<PerfilPage />} />
        
      </Routes>
      </div>
      
      <FooterSection />
    </div>
  );
}

export default App;
