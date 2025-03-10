import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/HomePage';
import WorkoutsPage from './pages/WorkoutsPage';
import ProgressPage from './pages/ProgressPage';

function App() {
  return (
    
      <Routes> /* En v6 usamos Routes en lugar de Route solo */
        <Route path="/" element={<HomePage />} />
        <Route path="/Workouts" element={<WorkoutsPage />} />
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
    
  );
}

export default App;
