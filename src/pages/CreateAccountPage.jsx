import logoCsgWeb from "../assets/logoCsgWeb.png";
import logoNavBar from "../assets/logoNavBar.png";



const CreateAccountPage = () => {
  return (
    <div className="flex flex-col items-center p-10">
<h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl mt-10">
              Workout <span className="text-[#E13B3B]">Forge</span>
            </h1>

<div className=" flex items-center justify-center p-22 ">
      <div className="w-full sm:max-w-md bg-gradient-to-r from-[#E13B3B] to-[#ca0303] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Crear Cuenta
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="workoutForge@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-white"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
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
