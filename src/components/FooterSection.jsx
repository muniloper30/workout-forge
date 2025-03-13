import logoNavBar from '../assets/logoNavBar.png';
import logoCsgWeb from '../assets/logoCsgWeb.png';

const FooterSection = () => {
  return (
    <footer className="py-3 backdrop-blur-lg  border-neutral-700/80 position-fixed bottom-0 w-full">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src= {logoNavBar}  className="h-15 w-15" alt="Workout Forge Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-[Saira]">Workout Forge</span>
            </a>
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src= {logoCsgWeb} className="h-15" alt="Workout Forge Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#heroSection" className="hover:underline me-4 md:me-6">About</a>
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
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" class="hover:underline">Workout Forge™</a>. All Rights Reserved.</span>
    </div>
</footer>
  );
}

export default FooterSection;