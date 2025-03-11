import PolygonTop from './PolygonTop';
import PolygonBottom from './PolygonBottom';

const HeroSection = () => {
    return (
        <div id="heroSection" className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Forja tu entrenamiento, tu decides cómo entrenar.{' '}
              <a href="#featuresSection" className="font-semibold text-[#E13B3B]">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Workout <span className="text-[#E13B3B]">Forge</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            ¿Buscas variedad de entrenamientos o prefieres crear uno único que se ajuste a ti? Estás en el lugar perfecto para dar el siguiente paso en tu entrenamiento.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-10">
              <a
                href="/Workouts"
                className="bg-gradient-to-r from-[#E13B3B] to-[#ca0303] py-2 px-3 text-neutral-100 rounded-md transition duration-500 hover:scale-125"
              >
                Explore Workouts
              </a>
              <a href="#featuresSection" className="py-2 px-3 border rounded-md transition duration-500 hover:scale-125">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <br />
      </div>
);};

export default HeroSection;