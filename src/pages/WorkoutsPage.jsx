import NavBar from "../components/Navbar";
import {useState, useEffect} from 'react';




const WorkoutsPage = () => {


 // Crear un state para almacenar los datos de workouts
 const [workouts, setWorkouts] = useState([]);
 const [loading, setLoading] = useState(true); // Para mostrar un mensaje de carga mientras obtenemos los datos
 const [error, setError] = useState(null); // Para manejar errores

 // Usamos useEffect para obtener los datos de la API cuando el componente se monte
 useEffect(() => {
   // Función para obtener los datos de la API
   const fetchWorkouts = async () => {
     try {
       const response = await fetch("https://workouts-fit-api.vercel.app/api/workouts"); // Cambia esta URL a la de tu API
       if (!response.ok) {
         throw new Error("Error al obtener los workouts.");
       }
       const data = await response.json(); // Convertimos la respuesta a JSON
       setWorkouts(data); // Guardamos los datos en el state
       setLoading(false); // Dejamos de mostrar el mensaje de carga
     } catch (error) {
       setError(error.message); // Guardamos el mensaje de error si ocurre alguno
       setLoading(false); // Dejamos de mostrar el mensaje de carga
     }
   };

   fetchWorkouts(); // Llamamos a la función para obtener los datos
 }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

 // Si estamos cargando, mostramos un mensaje de carga
 if (loading) {
   return <div>Cargando workouts...</div>;
 }

 // Si ocurre un error, lo mostramos
 if (error) {
   return <div>Error: {error}</div>;
 }

 
 







    return (
      <div>
        <NavBar/>
        <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#f75555] to-[#fc8989] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
          {/* Poligono background parte inferior */}
       <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#fa3131] to-[#fc8989] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        
      </div>
      
 
   <div className="flex flex-col items-center mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-2xl lg:mx-0 gap-1.5">
          <h2 className="text-4xl ">Explore Workouts</h2>
          <p className="text-xl">¡Inicia Ahora! Echa un Vistazo a Nuestros Entrenamientos</p>
      </div>
   
     <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
       {workouts.map((workout) => (
         <li className="card bg-gray-500/30 w-full max-w-lg mx-auto rounded-3xl drop-shadow-lg card-content p-5  text-center hover:bg-[#e13b3b] hover: transition duration-500 hover:scale-105 " key={workout.id}>
           <h2 className="font-semibold">{workout.name}</h2>
           <br />
           <p><b>Descipción: </b>  {workout.description}</p>
           <br />
           <p><b>Dificultad: </b>  {workout.difficulty}</p>
           <p><b>Duración:  </b>  {workout.duration}</p>
           <br />
         </li>
       ))}
     </ul>
   </div>




</div>
        
      
);};
        
 

export default WorkoutsPage;