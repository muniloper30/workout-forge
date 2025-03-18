import { useState, useEffect } from "react";
import { supabase } from "/supabaseClient"; // Asegúrate de tener la configuración de Supabase
import { useNavigate } from "react-router-dom";

const PerfilPage = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSection, setSelectedSection] = useState("descripcion");
  const navigate = useNavigate();

  // Cargar los datos del usuario cuando se carga la página
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser(); // Obtener los datos del usuario actual

      if (user) {
        setUser(user);
        setName(user.user_metadata.name || "Nombre no disponible");
        setEmail(user.email);

        // Cargar la imagen de perfil si existe en los metadatos del usuario
        if (user.user_metadata.avatar_url) {
          setImage(user.user_metadata.avatar_url); // Actualizar el estado de la imagen
        }
      } else {
        navigate("/login"); // Redirige si no hay sesión activa
      }
    };

    getUser(); // Llamar la función para obtener los datos del usuario
  }, [navigate]);

  // Subir imagen de perfil
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileExt = file.name.split(".").pop();
    const fileName = `${user.id}.${fileExt}`; // Usamos solo el id del usuario para el nombre del archivo
    const filePath = `profiles/${fileName}`; // Corrige la ruta, solo profiles/${fileName}

    try {
      // Subir la imagen al bucket "profiles"
      let { error: uploadError } = await supabase.storage
        .from("profiles")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Obtener la URL pública de la imagen
      const { data } = supabase.storage.from("profiles").getPublicUrl(filePath);
      const imageUrl = data.publicUrl;

      // Actualizar los metadatos del usuario con la URL de la imagen
      const { error: updateError } = await supabase.auth.updateUser({
        data: { avatar_url: imageUrl },
      });

      if (updateError) throw updateError;

      // Actualizar el estado de la imagen en el frontend
      setImage(imageUrl);
      alert("Imagen subida y perfil actualizado correctamente");
    } catch (error) {
      console.error("Error al subir la imagen:", error.message);
    }
  };

  // Manejar cambios en el nombre
  const handleNameChange = async () => {
    const { error } = await supabase.auth.updateUser({
      data: { name },
    });

    if (error) {
      console.error("Error al actualizar el nombre:", error.message);
    } else {
      // Obtener los datos actualizados del usuario después de la actualización
      alert("Nombre actualizado correctamente");
      console.log("Nombre actualizado correctamente");
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setName(data.user.user_metadata.name); // Actualizamos el nombre en el estado
      }
    }
  };

  // Cerrar sesión
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error al cerrar sesión:", error.message);
    } else {
      navigate("/login"); // Redirige al login al cerrar sesión
    }
  };

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {" "}
      {/* Ajusta el alto para evitar tanto espacio */}
      <div className="flex flex-col gap-3.5 md md:flex-row md:items-start md:justify-center md:gap-10 mt-10 flex-grow">
        {/* Navbar Lateral */}
        <div className="flex items-start justify-center">
          <div className="px-26 py-3 md:px-5 md:py-10 w-auto md:w-48 bg-gray-500/30 text-white p-3 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
              Mi Perfil
            </h2>
            <ul className="space-y-2">
              <li
                className={`cursor-pointer py-2 px-3 rounded-md ${
                  selectedSection === "descripcion"
                    ? "bg-gray-600"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setSelectedSection("descripcion")}
              >
                Descripción
              </li>
              <li
                className={`cursor-pointer py-2 px-3 rounded-md ${
                  selectedSection === "configuracion"
                    ? "bg-gray-600"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setSelectedSection("configuracion")}
              >
                Configuración
              </li>
              <li
                className="cursor-pointer py-2 px-3 rounded-md text-red-500 hover:bg-red-600 hover:text-white"
                onClick={handleSignOut}
              >
                Cerrar sesión
              </li>
            </ul>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="px-6 py-4 sm:px-8 sm:py-5 bg-gray-500/50 text-white rounded-lg shadow-md w-full md:w-auto">
          {selectedSection === "descripcion" && (
            <div>
              <h1 className="text-3xl mb-6">Descripción</h1>
              <div className="flex gap-5 items-center">
                {image ? (
                  <img
                    src={image}
                    alt="Perfil"
                    className="md:w-24 md:h-24 w-20 h-20 rounded-full"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-300 rounded-full" />
                )}
                <div>
                  <p>
                    <strong>Nombre:</strong> {name}
                  </p>
                  <p>
                    <strong>Email:</strong> {email}
                  </p>
                </div>
              </div>
              <div className="relative mt-6">
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer inline-block bg-gradient-to-r from-[#E13B3B] to-[#ca0303] py-2 px-3 text-neutral-100 rounded-md transition duration-500 hover:scale-115"
                >
                  Subir Imagen
                </label>
              </div>
            </div>
          )}

          {selectedSection === "configuracion" && (
            <div>
              <h1 className="text-3xl mb-6">Configuración</h1>
              <div>
                <label className="block text-sm font-medium text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 p-2 border rounded-lg w-full"
                />
                <button
                  onClick={handleNameChange}
                  className="mt-4 p-2 bg-gradient-to-r from-[#E13B3B] to-[#ca0303] transition duration-500 hover:scale-110 text-white rounded-lg cursor-pointer"
                >
                  Actualizar Nombre
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerfilPage;
