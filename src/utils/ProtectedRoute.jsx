import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "/supabaseClient";

// Componente para proteger rutas
const ProtectedRoute = () => {
  const session = supabase.auth.getSession();

  // Si no hay sesión, redirige a Login
  if (!session) {
    alert("Debes iniciar sesión para acceder a esta página.");
    return <Navigate to="/Login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
