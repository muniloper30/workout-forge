import { useState } from "react";
import { supabase } from "/supabaseClient"; // Importa tu cliente de Supabase
import { useNavigate } from "react-router-dom";
import logoNavBar from "../assets/logoNavBar.png";
import logoCsgWeb from "../assets/logoCsgWeb.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Para redirigir después de iniciar sesión

  // Función para manejar el login con Supabase
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores anteriores

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    // Guardar la sesión del usuario
    localStorage.setItem("supabaseSession", JSON.stringify(data));

    // Redirigir al perfil si el login es exitoso
    navigate("/Perfil");
  };

  return (
    <section className="overflow-hidden  py-24 sm:py-32 mt-9">
      <div className="flex flex-col items-center justify-center py-6 sm:py-12 md:flex-row md:justify-center md:space-x-6 lg:space-x-12 p-4 sm:px-6 gap-16">
        <a
          href="#"
          className="mb-6 text-7xl font-semibold text-gray-900 dark:text-white font-[Saira]"
        >
          Workout<p className="text-[#E13B3B]">Forge</p>
        </a>

        <div className="w-full rounded-lg shadow-2xs md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-r from-[#E13B3B] to-[#ca0303]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Inicia sesión en tu cuenta
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-white rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="name@workoutForge.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-white rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="••••••••"
                  required
                />
              </div>
              {error && (
                <div className="bg-white text-red-600 border border-red-500 p-2 rounded-lg text-sm">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                ¿Aún no tienes una cuenta?{" "}
                <a
                  href="/CreateAccount"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign up
                </a>
                <div className="hidden sm:hidden md:flex flex-row items-center justify-center">
                  <img className="h-30 w-30" src={logoNavBar} alt="logo" />
                  <img className="h-20 w-80" src={logoCsgWeb} alt="logo" />
                </div>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
