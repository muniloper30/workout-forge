import { Dumbbell } from 'lucide-react';

const FeaturesSection = () => {
    return (
    <div id="featuresSection"  className="overflow-hidden  py-24 sm:py-32 mt-9">
      <div  className="mx-auto max-w-7xl px-6 lg:px-8">
        <div  className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl transition duration-500 hover:scale-110">
                <a className="font-[Saira] border rounded-md px-2" href="/Workouts">Explore Workouts</a>
            </p>
            <br />
              <h2 className="text-base/7 font-semibold text-white ml-0.5"> Entrenamientos Predefinidos a tu Alcance</h2>
              <br />
              <p className="text-base/7  text-white">¿No tienes tiempo o ganas de planificar tu rutina de ejercicios? ¡No te preocupes! Con nuestra función de Workouts, puedes olvidarte de la planificación y simplemente elegir un entrenamiento predefinido.</p>
              <br />
              
              <ul>
                <li>
                    <div className="flex items-center mt-4">
                        <Dumbbell size={50} className="text-[#E13B3B]" />
                        <span className="ml-3 text-base/7 text-white">Dirígete a la sección de Workouts y selecciona el plan que mejor se ajuste a tus necesidades, tu nivel de entrenamiento o incluso el que más te guste.</span>
                    </div>
                </li>
                <li>
                    <div className="flex items-center mt-4">
                        <Dumbbell size={52} className="text-[#E13B3B]" />
                        <span className="ml-3 text-base/7 text-white">Gran variedad de entrenamientos, desde entrenamientos Funcionales y Crossfit Benchmark hasta Hero Wods y HYROX, adaptados a diferentes niveles y objetivos</span>
                    </div>
                </li>
                <li>
                    <div className="flex items-center mt-4">
                        <Dumbbell size={61} className="text-[#E13B3B]" />
                        <span className="ml-3 text-base/7 text-white">Para una experiencia más personalizada, te invitamos a visitar Csg Studio, el centro de entrenamiento con el que colaboramos. Allí podrás llevar tus entrenamientos al siguiente nivel. </span>
                    </div>
                </li>
              </ul>
             
            </div>
          </div>
          <img
            alt="Workout screenshot"
            src="/src/assets/workoutScreenshot.png"
            width={2432}
            height={1442}
            className="w-full max-w-2xl rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[48rem] md:w-[57rem] lg:w-[60rem] xl:w-[70rem] lg:mt-10 hover:transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  )



 }


 export default FeaturesSection;