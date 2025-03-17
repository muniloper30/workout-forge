import { Dumbbell, MoveRight, Instagram } from "lucide-react";

const CsgPage = () => {
  return (
    <div className="overflow-hidden min-h-screen">
      {/* Sección de inicio de page Csg */}
      <section
        id="inicio"
        className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-16 bg-[url(/src/assets/bg-cesar-fondo.png)] bg-cover bg-center"
      >
        <div className="text-center lg:text-left max-w-2xl">
          <div className="flex items-center space-x-2 text-lg text-gray-700">
            <span className="text-red-500">
              Revisa nuestro perfil de Instagram
            </span>{" "}
            <a href="https://www.instagram.com/csg.studio/?hl=es">
              <Instagram
                className="text-red-500 hover:transition duration-500 hover:scale-115"
                size={24}
              />
            </a>
            <i className="bi bi-arrow-right"></i>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mt-4">
            Somos <span className="text-red-500">Csg</span> Studio
          </h2>
          <p className="text-lg text-white mt-4">
            Nuestro centro ofrece diferentes servicios de entrenamiento para
            ayudar a todos aquellos que quieran alcanzar nuevos objetivos de
            salud y bienestar, desde entrenamientos funcionales, individuales, o
            en grupo, además de nuestros entrenamientos personales (con
            programas individualizados en base a su nivel actual y en constante
            evolución).
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Email address"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gradient-to-r from-[#E13B3B] to-[#ca0303] py-2 px-3 text-neutral-100 rounded-md transition duration-500 hover:scale-110 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
        <div className="hidden lg:block ml-10">
          <a href="https://www.instagram.com/csg.studio/">
            <img
              src="/src/assets/csgInstragram.png"
              alt="ig-csg"
              className="w-96 h-auto rounded-lg shadow-lg hover:transition duration-500 hover:scale-105"
            />
          </a>
        </div>
      </section>
      {/* Separador entre secciones */}
      <hr className=" py-4 bg-red-500"></hr>
      {/* Sección de Features de page Csg */}
      <section className="flex flex-row flex-wrap gap-x-4 gap-y-4 items-start min-h-screen px-6 pb-6 lg:flex-col lg:items-center lg:justify-center lg:px-16 ">
        <div className="text-center max-w-2xl">
          <h3 className="md:text-5xl text-3xl font-bold text-white mt-15 md:mb-0">
            Personal Training with{" "}
            <span className="text-red-500">Cesar Serrano</span>
          </h3>
          <a href="https://www.instagram.com/cesarserranocoach/?hl=es" className="text-center flex justify-center gap-1.5 pt-4 hover:transition duration-500 hover:scale-105 cursor-pointer">@cesarserranocoach <span><Instagram></Instagram></span></a>
          <p className="text-lg text-white mt-4">
            Échale un ojo a nuestro asesoramiento personal para obtener un mejor
            rendimiento y una vida más saludable.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center md:mt-20 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            <div className="flex items-start space-x-4">
              <div>
                <h4 className="text-xl font-semibold text-red-500  ">
                  Mente y cuerpo
                </h4>
                <p className="text-white">
                  Estudio corporal y de salud previo al entrenamiento.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div>
                <h4 className="text-xl font-semibold text-red-500">
                  Programación
                </h4>
                <p className="text-white">
                  Entrenamientos personalizados en base al nivel actual y en
                  constante evolución para alcanzar los objetivos deseados.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div>
                <h4 className="text-xl font-semibold text-red-500">
                  Entrenamientos en grupo
                </h4>
                <p className="text-white">
                  Ejercicios tanto de fuerza como cardiovasculares, 
                  todo ello en grupos bien organizados para trabajar en equipo e individualmente.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div>
                <h4 className="text-xl font-semibold text-red-500">Boxeo</h4>
                <p className="text-white">
                  Empezar a entrenar y boxear no tiene por qué ser difícil,
                  aprende desde 0 con nuestras clases de boxeo de lunes a
                  jueves.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block ml-10">
          <a href="https://www.instagram.com/cesarserranocoach/?hl=es"> </a>
            <img
              src="/src/assets/cesarSerrano.png"
              alt="imagen-box"
              className="w-96 h-auto rounded-lg shadow-lg bg-gray-500/20 drop-shadow-lg p-3 sm:p-5 text-center hover:bg-[#e13b3b] hover:transition duration-500 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </section>

      <hr className=" py-4 bg-red-500"></hr>
    </div>
  );
};

export default CsgPage;

{
  /* <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl transition duration-500 hover:scale-110">
<a
  className="font-[Saira] border rounded-md px-2"
  href="/CsgStudio"
>
  <span className="text-[#E13B3B]">Csg</span> Studio
</a>
</p> */
}
