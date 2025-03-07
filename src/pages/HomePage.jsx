import {Home, Search, User} from 'lucide-react';

const HomePage =  () =>{
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
      <h1 className="text-4xl font-semibold text-blue-700 mb-4">Bienvenido a la Página de Inicio</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        Esta es la vista inicial de nuestra aplicación React con React Router y Tailwind CSS. ¡Todo está
        configurado y listo para comenzar a crear tu proyecto! 🚀
      </p>
      <a
        href="/about"
        className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Ir a la página About
      </a>


    



    </div>

      

      


  );
}

export default HomePage;