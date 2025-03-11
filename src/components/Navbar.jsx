import logoNavBar from '../assets/logoNavBar.png';
import { Menu, X } from 'lucide-react'

import { useState } from 'react';

const NavBar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false); //Estado para el menú hamburguesa
    const [isOpen, setIsOpen] = useState(false);


    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
        setIsOpen(!isOpen);
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"> {/*Componente Navbar  */}
        <div className="container px-4 mx-auto relative text-sm">
           <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0"> {/* Contenedor img logo y nombre app */}
                    <img src= {logoNavBar} alt="Workout Forge Logo" className="h-15 w-15 mr-2" /> {/* Logo de la web */}
                    <a href='/' className="text-3xl cursor-pointer px-2 py-2 tracking-tight font-[Saira] hover:bg-[#E13B3B] transition duration-500">Workout Forge</a>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'> {/* Contenedor de los links de navegación */}
                   <li>
                       <a href="/" className="block px-3 py-2 text-neutral-100 hover:bg-[#E13B3B] transition duration-500 hover:scale-125">Home</a>
                   </li>
                   <li>
                       <a href="/Workouts" className="block px-3 py-2 text-neutral-100 hover:bg-[#E13B3B] transition duration-500 hover:scale-125">Workouts</a>
                   </li>
                   <li>
                       <a href="/CsgStudio" className="block px-3 py-2 text-neutral-100 hover:bg-[#E13B3B] transition duration-500 hover:scale-125">Csg</a>
                   </li>
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className="py-2 px-3 border rounded-md transition duration-500 hover:scale-125">
                        Login
                    </a>
                    <a href="#" className="bg-gradient-to-r from-[#E13B3B] to-[#ca0303] py-2 px-3 text-neutral-100 rounded-md transition duration-500 hover:scale-125">
                    Create an account
                    </a>          
                </div>
                <div  className={`lg:hidden cursor-pointer transition-all duration-300 ${
    isOpen ? "text-red-500 rotate-90" : "text-white"
  }`} onClick={() => setIsOpen(!isOpen)}>
                         <button className="cursor-pointer" onClick={toggleNavBar}>
                            {mobileDrawerOpen ? <X size={50}/> : <Menu size={50}/> }
                         </button>
                </div>
           </div>
           {mobileDrawerOpen && (
                <div className={`fixed top-20 left-0 z-20 bg-neutral-900 w-screen h-[calc(100vh-4rem)] p-6 md:p-12 flex flex-col justify-center items-center lg:hidden transition-all duration-700 ease-in-out ${
    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
  }`}>
                <ul className="flex flex-col items-center gap-5"> {/* Contenedor de los links de navegación */}
                   <li>
                       <a href="/" className="block px-3 py-2 text-neutral-100 text-2xl hover:bg-[#E13B3B] transition duration-500 hover:scale-125">Home</a>
                   </li>
                   <li>
                       <a href="/Workouts" className="block px-3 py-2 text-neutral-100 text-2xl hover:bg-[#E13B3B] transition duration-500 hover:scale-125">Workouts</a>
                   </li>
                   <li>
                       <a href="/CsgStudio" className="block px-3 py-2 text-neutral-100 text-2xl hover:bg-[#E13B3B] transition duration-500 hover:scale-125">Csg Studio</a>
                   </li>
                </ul>
                <br />
                <br />
                <div className="flex flex-col items-center gap-5">
                    <a href="#" className="py-2 px-3 border rounded-md transition duration-500 hover:scale-125 text-2xl">
                        Login
                    </a>
                    <a href="#" className="bg-gradient-to-r from-[#E13B3B] to-[#ca0303] py-2 px-3 text-neutral-100 rounded-md transition duration-500 hover:scale-125 text-2xl">
                    Create an account
                    </a>          
                </div>
                </div>
           )}
        </div>
    </nav>
  );
}

export default NavBar;