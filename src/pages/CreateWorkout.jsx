import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateWorkout = () => {
  // Estados para los campos del formulario
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación simple de campos
    if (!type || !name || !description || !difficulty || !duration) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Enviar los datos al backend a través de la API
      const response = await fetch("https://workouts-fit-api.vercel.app/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, name, description, difficulty, duration }),
      });

      if (!response.ok) {
        throw new Error("Error al crear el workout.");
      }

      const data = await response.json();
      console.log("Workout creado correctamente:", data);

      // Redirigir a la página de Workouts
      navigate("/workouts");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-3 md:p-22 overflow-hidden  py-24 sm:py-32 mt-9">
      <div className="w-full sm:max-w-md bg-gradient-to-r from-[#E13B3B] to-[#ca0303] p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center max-w-2xl lg:mx-0 gap-1.5">
          <h2 className="text-4xl">Crear Nuevo Workout</h2>
          <p className="text-xl">Crea un entrenamiento personalizado para ti.</p>
        </div>

        {/* Formulario de creación */}
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-6">
          {/* Tipo de Workout */}
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-white">Tipo de Workout</label>
            <input
              id="type"
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-2 p-2 border rounded-lg w-full"
              placeholder="Ej. Cardio, Fuerza, Flexibilidad"
            />
          </div>

          {/* Nombre */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white">Nombre del Workout</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-2 border rounded-lg w-full"
              placeholder="Ej. Entrenamiento HIIT"
            />
          </div>

          {/* Descripción */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-white">Descripción</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 p-2 border rounded-lg w-full"
              placeholder="Detalles sobre el workout"
            />
          </div>

          {/* Dificultad */}
          <div className="mb-4">
            <label htmlFor="difficulty" className="block text-sm font-medium text-whit">Dificultad</label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="mt-2 p-2 border rounded-lg w-full bg-red-600"
            >
              <option value="">Seleccionar Dificultad</option>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
          </div>

          {/* Duración */}
          <div className="mb-4">
            <label htmlFor="duration" className="block text-sm font-medium text-white">Duración (en minutos)</label>
            <input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="mt-2 p-2 border rounded-lg w-full"
              placeholder="Duración del workout en minutos"
            />
          </div>

          {/* Mensajes de error */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          {/* Botón de Enviar */}
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-gradient-to-r from-[#535050] to-[#3f3838] text-white font-semibold rounded-lg transition duration-300 hover:scale-105 cursor-pointer"
          >
            {loading ? "Cargando..." : "Crear Workout"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateWorkout;
