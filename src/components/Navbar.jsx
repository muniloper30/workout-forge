import logoNavBar from '../assets/logoNavBar.png';



const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"> {/*Componente Navbar  */}
        <div className="container px-4 mx-auto relative text-sm">
           <div className="flex justify-center items-center">
                <div className="flex items-center flex-shrink-0"> {/* Contenedor img logo y nombre app */}
                    <img src= {logoNavBar} alt="Workout Forge Logo" className="h-10 w-10 mr-2" /> {/* Logo de la web */}
                    <span className="text-xl tracking-tight">Workout Forge</span>
                </div>
                <ul className='hidden lg:flex lg:items-center lg:w-auto'>
                   
                </ul>
           </div>
        </div>
    </nav>
  );
}

export default NavBar;