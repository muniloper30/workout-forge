import { useState } from "react";
import { supabase } from "/supabaseClient"; // Importa tu cliente de Supabase
import logoCsgWeb from "../assets/logoCsgWeb.png";
import logoNavBar from "../assets/logoNavBar.png";

const CreateAccountPage = () => {
  // Estado para los valores del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Estado para manejar errores o mensajes de éxito
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir recarga de la página

    // Verificar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      // Llamar a Supabase para crear el usuario
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { name: formData.name }, // Aquí pasamos el nombre en los metadatos
        },
      });

      if (error) {
        setError(error.message);
        setSuccess("");
      } else {
        setSuccess("Cuenta creada exitosamente 🎉");
        setError("");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });

        // Cerrar el popup después de 3 segundos
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      }
    } catch (error) {
      setError("Error al crear la cuenta");
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <h1 className="font-[Saira] text-5xl font-semibold text-white sm:text-7xl  text-center">
        Workout <span className="text-[#E13B3B]">Forge</span>
      </h1>

      <div className="flex items-center justify-center p-3 md:p-22">
        <div className="w-full sm:max-w-md bg-gradient-to-r from-[#E13B3B] to-[#ca0303] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Crear Cuenta
          </h2>

          {/* Mensajes de error o éxito */}
          {error && (
            <p className="bg-white py-2 px-4 mb-2 rounded-lg shadow-lg text-red-500 text-center">
              {error}
            </p>
          )}
          {success && (
            <div className=" right-5 left-1/2  bg-green-500 text-white py-2 px-4 mb-2 rounded-lg shadow-lg">
              {success}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-white">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="workoutForge@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <button
                type="submit"
                className="w-full text-white bg-gray-800 hover:bg-gray-900 transition-colors font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Crear cuenta
              </button>
              <a href="/Login" className="text-white text-sm hover:underline">
                ¿Ya tienes una cuenta? Inicia sesión
              </a>
              <div className="hidden sm:hidden md:flex flex-row items-center justify-center">
                <img className="h-30 w-30" src={logoNavBar} alt="logo" />
                <img className="h-20 w-80" src={logoCsgWeb} alt="logo" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
