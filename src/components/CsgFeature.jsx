import csgFeature from "../assets/csgFeature.png";

const CsgFeature = () => {
  return (
    <div id="csg-feauture" className="overflow-hidden">
      <section className="mt-9 text-white py-16 px-6 flex flex-col items-center md:flex-row  md:justify-center gap-10">
        <div className=" flex justify-center">
          <img
            src={csgFeature}
            alt="Business team working"
            className="md:ml-30 md:mt-32 md:w-auto rounded-lg w-full max-w-m shadow-lg shadow-gray-800 hover:transition duration-500 hover:scale-105"
          />
        </div>
        <div className="max-w-2xl md:w-1/2 space-y-6 text-center md:text-left md:ml-20">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-red-500">CSG</span> Studio: Tu centro de entrenamiento
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            En nuestra aplicación de workouts, queremos destacar la colaboración
            con <a href="/CsgStudio" className="hover:underline"><strong>CSG Studio</strong></a>, un centro de entrenamiento
            profesional que lleva el rendimiento físico al siguiente nivel.
            Descubre cómo CSG Studio complementa tu experiencia de entrenamiento
            con instalaciones de calidad y entrenadores expertos
          </p>
          <div className="space-y-4">
            <FeatureItem
              title="Entrenamiento Personalizado"
              description="Accede a planes de entrenamiento diseñados por profesionales para mejorar tu rendimiento físico y alcanzar tus objetivos más rápido."
            />
            <FeatureItem
              title="Equipamiento de última generación"
              description="Disfruta de un centro equipado con tecnología de vanguardia para que cada sesión de entrenamiento sea efectiva y segura."
            />
            <FeatureItem
              title="Comunidad y soporte"
              description="Forma parte de una comunidad motivadora donde entrenadores y compañeros te ayudarán a mantenerte enfocado y motivado en tu progreso."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureItem = ({ title, description }) => {
  return (
    <div className="bg-[#1d1e1f] p-4 rounded-lg  text-center md:text-left shadow-sm shadow-gray-300 hover:transition duration-500 hover:scale-105 active:transition active:scale-105 ">
      <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-1 text-sm md:text-base">{description}</p>
      <a
        href="/CsgStudio"
        className="text-red-400 mt-2 inline-block hover:underline text-sm md:text-base "
      >
        Learn more →
      </a>
    </div>
  );
};

export default CsgFeature;
