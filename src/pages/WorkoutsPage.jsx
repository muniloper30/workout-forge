import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const WorkoutsPage = () => {
  // Estados principales
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const workoutsPerPage = 9; // Cantidad de workouts por página

  // Estados para los filtros
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState(""); // Tipo de workout
  const [selectedDifficulty, setSelectedDifficulty] = useState(""); // Dificultad

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

  // Obtener valores únicos para los filtros
  const workoutTypes = [...new Set(workouts.map((workout) => workout.type))];
  const difficulties = [...new Set(workouts.map((workout) => workout.difficulty))];

  // Filtrar los entrenamientos según los criterios seleccionados
  const filteredWorkouts = workouts.filter((workout) =>
    (searchTerm === "" || workout.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedType === "" || workout.type === selectedType) &&
    (selectedDifficulty === "" || workout.difficulty === selectedDifficulty)
  );

  // Calcular el índice de los workouts a mostrar en la página actual
  const indexOfLastWorkout = currentPage * workoutsPerPage;
  const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage;
  const currentWorkouts = filteredWorkouts.slice(indexOfFirstWorkout, indexOfLastWorkout);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="flex flex-col items-center mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-2xl lg:mx-0 gap-1.5 mt-10">
          <h2 className="text-4xl">Explore <span className="text-red-500">Workouts</span> </h2>
          <p className="text-center xl:text-xl">¡Inicia Ahora! Echa un Vistazo a Nuestros Entrenamientos</p>
          <p className="text-center text-xs xl:text-lg font-bold">
            ¿ Quieres crear tu workout personalizado ?{" "}
            <span><Link className="hover:underline text-red-500" to="/CreateWorkout">Pincha Aquí!</Link></span>
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-col gap-4 mt-6">
          <input
            type="text"
            placeholder="Buscar entrenamientos..."
            className="p-2 border border-gray-400 rounded-lg w-full max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="p-2 border bg-red-500 border-gray-400 rounded-lg"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Todos los tipos</option>
            {workoutTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <select
            className="p-2 border bg-red-500 border-gray-400 rounded-lg"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">Todas las dificultades</option>
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>{difficulty}</option>
            ))}
          </select>
        </div>

        {/* Workouts Cards */}
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mt-4">
          {currentWorkouts.length > 0 ? (
            currentWorkouts.map((workout) => (
              <li
                className="card bg-gray-500/50 w-full max-w-[150px] sm:max-w-md mx-auto rounded-xl sm:rounded-3xl drop-shadow-lg p-3 sm:p-5 text-center hover:bg-[#e13b3b] hover:transition duration-500 hover:scale-105"
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
            ))
          ) : (
            <p className="text-lg text-gray-500 mt-4">No se encontraron entrenamientos</p>
          )}
        </ul>

        {/* Paginación */}
        {filteredWorkouts.length > workoutsPerPage && (
          <div className="mt-6 flex space-x-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg bg-red-500 hover:bg-gray-600 transition cursor-pointer ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Anterior
            </button>

            <div className="hidden sm:flex space-x-2">
              {[...Array(Math.ceil(filteredWorkouts.length / workoutsPerPage)).keys()].map((number) => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === number + 1 ? "bg-red-500 text-white" : "bg-gray-400 hover:bg-gray-600 cursor-pointer"
                  } transition`}
                >
                  {number + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                paginate(currentPage + 1);
                window.scrollTo({ top: 0 });
              }}
              disabled={currentPage === Math.ceil(filteredWorkouts.length / workoutsPerPage)}
              className={`px-4 py-2 rounded-lg bg-red-500 hover:bg-gray-600 transition cursor-pointer ${
                currentPage === Math.ceil(filteredWorkouts.length / workoutsPerPage) ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutsPage;
