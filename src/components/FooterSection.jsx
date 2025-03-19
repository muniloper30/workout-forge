import logoNavBar from '../assets/logoNavBar.png';
import logoCsgWeb from '../assets/logoCsgWeb.png';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className='text-center '>
    <div className="max-w-screen-xl mx-auto p-4 md:py-8 ">
        <div className="md:flex md:flex-row md:items-center md:justify-between justify-center items-center flex flex-col pt-35">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse ">
                <img src= {logoNavBar}  className="pt h-15 w-15 md:h-15 md:w-15 hidden md:block" alt="Workout Forge Logo" />
                <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-[Saira]">Workout <span className="text-red-500">Forge</span> </p>
            </a>
            <Link to="/CsgStudio" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src= {logoCsgWeb} className="h-15" alt="Csg Logo" />
            </Link>
            <ul className="flex flex-wrap justify-center items-center mb-2 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" class="hover:underline">Workout Forge™</a>. All Rights Reserved.</span>
    </div>
</footer>
  );
}

export default FooterSection;