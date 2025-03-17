import { Dumbbell, MoveRight, Instagram } from "lucide-react";

const CsgPage = () => {
  return (
    <div className="overflow-hidden  py-24 sm:py-32 mt-9">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl transition duration-500 hover:scale-110">
                <a
                  className="font-[Saira] border rounded-md px-2"
                  href="/CsgStudio"
                >
                  <span className="text-[#E13B3B]">Csg</span> Studio
                </a>
              </p>
              <br />
              <h2 className="text-base/7 font-semibold text-white ml-0.5 flex items-center">
                Revisa nuestro perfil de Instagram
                <MoveRight className="ml-1.5" />
                <a href="https://www.instagram.com/csg.studio/?hl=es">
                  <Instagram className="ml-1.5 transition duration-500 hover:scale-120" />
                </a>
              </h2>
              <br />
              <p className="text-base/7 text-white">
                Nuestro centro ofrece diferentes servicios de entrenamiento para
                ayudar a todos aquellos que quieran alcanzar nuevos objetivos de
                salud y bienestar, desde entrenamientos funcionales,
                individuales, o en grupo, además de nuestros entrenamientos
                personales (con programas individualizados en base a su nivel
                actual y en constante evolución).
              </p>
              <br />
              <ul>
                <li>
                  <div className="flex items-center mt-4">
                    <span className="ml-3 text-base/7 text-white">
                      <strong>Entrenamiento Funcional:</strong> Sesiones basadas
                      en ejercicios de CrossFit e Hyrox para mejorar tu
                      condición física general, aumentar fuerza y resistencia
                      con entrenamientos de alta intensidad.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center mt-4">
                    <span className="ml-3 text-base/7 text-white">
                      <strong>Clases de Boxeo:</strong> Aprende desde cero o
                      mejora tu técnica con nuestras sesiones de boxeo. Clases
                      dinámicas enfocadas en resistencia, fuerza y coordinación.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center mt-4">
                    <span className="ml-3 text-base/7 text-white">
                      <strong>Talleres de Yoga y Movilidad:</strong> Enfocados
                      en mejorar la flexibilidad, reducir el estrés y fortalecer
                      el cuerpo con movimientos controlados y técnicas de
                      respiración.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <a href="https://www.instagram.com/csg.studio/?hl=es">
            <img
              alt="Instagram Csg"
              src="/src/assets/csgInstragram.png"
              className="w-full max-w-2xl rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[5rem] md:w-[20rem] lg:w-[20rem] xl:w-[20rem] lg:mt-10 hover:transition duration-500 hover:scale-105"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CsgPage;
