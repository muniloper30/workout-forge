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
      } else {
        navigate("/login"); // Redirige si no hay sesión activa
      }
    };

    getUser(); // Llamar la función para obtener los datos del usuario
  }, [navigate]);

  // Subir imagen de perfil
  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    console.log("📤 Archivo seleccionado:", file.name);

    const fileExt = file.name.split(".").pop();
    const fileName = `${user.id}-profile.${fileExt}`;
    const filePath = `${fileName}`;

    console.log("📂 Subiendo archivo con nombre:", filePath);

    // Subir imagen
    const { error } = await supabase.storage
      .from("profiles")
      .upload(filePath, file, { upsert: true });

    if (error) {
      console.error("❌ Error al subir imagen:", error.message);
      return;
    }

    console.log("✅ Imagen subida correctamente");

    // Obtener URL pública
    // Obtener URL pública
    const { data } = supabase.storage.from("profiles").getPublicUrl(filePath);

    console.log("🌍 URL pública obtenida:", data.publicUrl);

    if (!data.publicUrl) {
      console.error("⚠️ No se pudo obtener la URL de la imagen");
      return;
    }

    setImage(data.publicUrl);
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
    <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-10">
      {/* Navbar Lateral */}
      <div className="h-screen flex items-center justify-center">
      <div className="w-auto md:w-48 bg-gray-500/30 text-white p-3 rounded-lg shadow-md ">
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
      <div className=" p-10">
        {selectedSection === "descripcion" && (
          <div>
            <h1 className="text-3xl mb-6">Descripción</h1>
            <div className="flex gap-5 items-center">
              {console.log("🔍 Imagen actual en estado:", image)}
              {image ? (
                <img
                  src={image}
                  alt="Perfil"
                  className="w-24 h-24 rounded-full"
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
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 cursor-pointer hover:underline">
                Subir Imagen de Perfil <br />
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="mt-2"
                />
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
                className="mt-4 p-2 bg-gradient-to-r from-[#E13B3B] to-[#ca0303] rounded-md transition duration-500 hover:scale-110 text-white rounded-lg cursor-pointer"
              >
                Actualizar Nombre
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfilPage;
