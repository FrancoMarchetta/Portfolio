import { useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { atom, useAtom } from 'jotai'
import { useState } from 'react'

export const atomLanguage = atom("Español");

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [language, setLanguage] = useAtom(atomLanguage);
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavigation = (e: React.MouseEvent, path: string, elementId?: string) => {
        e.preventDefault();
        setMenuOpen(false);

        if (location.pathname === path) {
            if (elementId) {
                document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                scrollToTop();
            }
        } else {
            navigate(path);
        }
    };

    useEffect(() => {
        scrollToTop();
    }, [location.pathname]);

    useEffect(() => {
        console.log(language)
    }, [language])

    // Close menu on window resize if desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <main
            id='nav-bar'
            className='fixed z-50 w-full max-w-[600px] h-auto justify-center place-items-center text-amber-50 flex flex-col md:flex-row gap-2 md:gap-10 font-bold text-lg bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg top-5 right-1/2 md:right-10 md:top-5 md:translate-x-0 translate-x-1/2'
            style={{
                // Responsive handled by Tailwind classes
            }}
        >
            {/* Hamburger for mobile */}
            <div className="w-full flex md:hidden justify-end">
                <button
                    aria-label="Open menu"
                    className="text-2xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>
            {/* Menu */}
            <nav className={`flex-col md:flex-row flex w-full md:w-auto items-center gap-2 md:gap-10 ${menuOpen ? 'flex' : 'hidden'} md:flex bg-black/80 md:bg-transparent p-2 md:p-0 rounded-lg`}>
                <Link
                    to="/"
                    className='hover:text-blue-400 duration-300'
                    onClick={(e) => handleNavigation(e, "/")}
                >
                    Inicio
                </Link>
                <Link
                    to="/#technologies"
                    className='hover:text-blue-400 duration-300'
                    onClick={(e) => handleNavigation(e, "/", "technologies")}
                >
                    Tecnologías
                </Link>
                <Link
                    to="/#projects"
                    className='hover:text-blue-400 duration-300'
                    onClick={(e) => handleNavigation(e, "/", "projects")}
                >
                    Proyectos
                </Link>
                <Link
                    to="/#contact"
                    className='hover:text-blue-400 duration-300'
                    onClick={(e) => handleNavigation(e, "/", "contact")}
                >
                    Contacto
                </Link>
                <select
                    onChange={(e) => { setLanguage(e.target.value) }}
                    className="hover:text-blue-400 cursor-pointer "
                    value={language}
                >
                    <option className='text-black' value="Español">Español</option>
                    <option className='text-black' value="English">English</option>
                </select>
            </nav>
        </main>
    )
}

export default NavBar
