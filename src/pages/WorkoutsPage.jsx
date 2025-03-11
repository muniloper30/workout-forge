import { useState, useEffect } from "react";

const WorkoutsPage = () => {
  // Estados principales
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const workoutsPerPage = 9; // Cantidad de workouts por página

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("https://workouts-fit-api.vercel.app/api/workouts");
        if (!response.ok) {
          throw new Error("Error al obtener los workouts.");
        }
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkouts();
  }, []);

  if (loading) {
    return <div className="text-3xl flex items-center justify-center h-screen">Cargando workouts...</div>;
  }

  if (error) {
    return <div className="text-3xl flex items-center justify-center h-screen">Error: {error}</div>;
  }

  // Calcular el índice de los workouts a mostrar en la página actual
  const indexOfLastWorkout = currentPage * workoutsPerPage;
  const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage;
  const currentWorkouts = workouts.slice(indexOfFirstWorkout, indexOfLastWorkout);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-10">
      
      <div className="flex flex-col items-center mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-2xl lg:mx-0 gap-1.5">
          <h2 className="text-4xl">Explore Workouts</h2>
          <p className="text-xl">¡Inicia Ahora! Echa un Vistazo a Nuestros Entrenamientos</p>
        </div>

        {/* Workouts Cards */}
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mt-4">
          {currentWorkouts.map((workout) => (
            <li
              className="card bg-gray-500/30 w-full max-w-[150px] sm:max-w-md mx-auto rounded-xl sm:rounded-3xl drop-shadow-lg p-3 sm:p-5 text-center hover:bg-[#e13b3b] hover:transition duration-500 hover:scale-105"
              key={workout.id}
            >
              <h2 className="text-sm sm:text-lg font-semibold">{workout.type}</h2>
              <h3 className="text-xs sm:text-lg font-semibold">{workout.name}</h3>
              <br />
              <p className="text-xs sm:text-base">
                <b>Descripción: </b> {workout.description}
              </p>
              <br />
              <p className="text-xs sm:text-base">
                <b>Dificultad: </b> {workout.difficulty}
              </p>
              <p className="text-xs sm:text-base">
                <b>Duración: </b> {workout.duration}
              </p>
              <br />
            </li>
          ))}
        </ul>

        {/* Paginación */}
<div className="mt-6 flex space-x-2">
  {/* Botón Anterior */}
  <button
    onClick={() => paginate(currentPage - 1)}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded-lg bg-gray-400 hover:bg-gray-600 transition ${
      currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
    Anterior
  </button>

  {/* Numeración de páginas (visible solo en pantallas medianas en adelante) */}
  <div className="hidden sm:flex space-x-2">
    {[...Array(Math.ceil(workouts.length / workoutsPerPage)).keys()].map((number) => (
      <button
        key={number + 1}
        onClick={() => paginate(number + 1)}
        className={`px-4 py-2 rounded-lg ${
          currentPage === number + 1 ? "bg-red-500 text-white" : "bg-gray-400 hover:bg-gray-600"
        } transition`}
      >
        {number + 1}
      </button>
    ))}
  </div>

  {/* Botón Siguiente */}
  <button
    onClick={() => {
    paginate(currentPage + 1);
    window.scrollTo({ top: 0 }); // Desplazar hacia arriba
  }}
    disabled={currentPage === Math.ceil(workouts.length / workoutsPerPage)}
    className={`px-4 py-2 rounded-lg bg-gray-400 hover:bg-gray-600 transition ${
      currentPage === Math.ceil(workouts.length / workoutsPerPage) ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
    Siguiente
  </button>
</div>
<br />
      </div>
    </div>
  );
};

export default WorkoutsPage;
