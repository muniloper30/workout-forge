import { supabase } from '/supabaseClient';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoNavBar from '../assets/logoNavBar.png';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    // Verificar si el usuario está autenticado
    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        fetchUser();
    }, []);

    // Alternar el menú hamburguesa
    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
        setIsOpen(!isOpen);
    };

    // Cerrar menú y navegar a la ruta seleccionada
    const handleNavClick = (path) => {
        setMobileDrawerOpen(false);
        window.scrollTo(0, 0); // Hace scroll hacia arriba
        setIsOpen(false);
        navigate(path);
    };

    // Manejar el clic en "Perfil"
    const handleProfileClick = () => {
        setMobileDrawerOpen(false);
        window.scrollTo(0, 0); // Hace scroll hacia arriba
        setIsOpen(false);

        if (!user) {
            setShowModal(true);
            navigate("/CreateAccount");
        } else {
            navigate("/Perfil");
        }
    };

    // Cerrar el modal y restaurar estado del menú
    const closeModal = () => {
        setShowModal(false);
        setMobileDrawerOpen(false);
        setIsOpen(false);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                <div className="container px-4 mx-auto relative text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                            <img src={logoNavBar} alt="Workout Forge Logo" className="h-15 w-15 mr-2" />
                            <a href='/HomePage' className="text-3xl cursor-pointer px-2 py-2 tracking-tight font-[Saira] hover:bg-[#E13B3B] transition duration-500">Workout Forge</a>
                        </div>
                        <ul className='hidden lg:flex ml-14 space-x-12'>
                            <li><a href="/HomePage" className="block px-3 py-2 text-neutral-100 hover:bg-[#E13B3B] transition duration-500 hover:scale-125">Home</a></li>
                            <li><a href="/Workouts" className="block px-3 py-2 text-neutral-100 hover:bg-[#E13B3B] transition duration-500 hover:scale-125">Workouts</a></li>
                            <li><a href="/CsgStudio" className="block px-3 py-2 text-neutral-100 hover:bg-[#E13B3B] transition duration-500 hover:scale-125">Csg</a></li>
                            <li><button onClick={handleProfileClick} className="block px-3 py-2 text-neutral-100 hover:bg-[#E13B3B] transition duration-500 hover:scale-125 cursor-pointer">Perfil</button></li>
                        </ul>
                        <div className="hidden lg:flex justify-center space-x-12 items-center">
                            <a href='/Login' className="py-2 px-3 border rounded-md transition duration-500 hover:scale-125">Login</a>
                            <a href="/CreateAccount" className="bg-gradient-to-r from-[#E13B3B] to-[#ca0303] py-2 px-3 text-neutral-100 rounded-md transition duration-500 hover:scale-125">Create an account</a>
                        </div>
                        <div className={`lg:hidden cursor-pointer transition-all duration-300 ${isOpen ? "text-red-500 rotate-90" : "text-white"}`} onClick={toggleNavBar}>
                            <button className="cursor-pointer">{mobileDrawerOpen ? <X size={50}/> : <Menu size={50}/> }</button>
                        </div>
                    </div>
                    {mobileDrawerOpen && (
                        <div className="fixed top-20 left-0 z-20 bg-neutral-900 w-screen h-[calc(100vh-4rem)] p-6 md:p-12 flex flex-col justify-center items-center lg:hidden transition-all duration-700 ease-in-out">
                            <ul className="flex flex-col items-center gap-5">
                                <li><button onClick={() => handleNavClick("/HomePage")} className="block px-3 py-2 text-neutral-100 text-2xl hover:bg-[#E13B3B] transition duration-500 hover:scale-125">Home</button></li>
                                <li><button onClick={() => handleNavClick("/Workouts")} className="block px-3 py-2 text-neutral-100 text-2xl hover:bg-[#E13B3B] transition duration-500 hover:scale-125">Workouts</button></li>
                                <li><button onClick={() => handleNavClick("/CsgStudio")} className="block px-3 py-2 text-neutral-100 text-2xl hover:bg-[#E13B3B] transition duration-500 hover:scale-125">Csg Studio</button></li>
                                <li><button onClick={handleProfileClick} className="block px-3 py-2 text-2xl text-neutral-100 hover:bg-[#E13B3B] transition duration-500 hover:scale-125 cursor-pointer">Perfil</button></li>
                            </ul>
                            <br /><br />
                            <div className="flex flex-col items-center gap-5">
                                <button onClick={() => handleNavClick("/Login")} className="py-2 px-3 border rounded-md transition duration-500 hover:scale-125 text-2xl">Login</button>
                                <button onClick={() => handleNavClick("/CreateAccount")} className="bg-gradient-to-r from-[#E13B3B] to-[#ca0303] py-2 px-3 text-neutral-100 rounded-md transition duration-500 hover:scale-125 text-2xl">Create an account</button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Modal de Advertencia */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-950/50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
                        <h2 className="text-xl font-bold text-red-500">¡Atención!</h2>
                        <p className="mt-2 text-gray-800">Debes registrarte para acceder al perfil.</p>
                        <button 
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
                            onClick={closeModal}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
