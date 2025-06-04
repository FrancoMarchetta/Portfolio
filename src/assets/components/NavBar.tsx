import { useEffect, useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavigation = (e: React.MouseEvent, path: string, elementId?: string) => {
        e.preventDefault();

        if (location.pathname === path) {
            if (elementId) {
                document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                scrollToTop();
            }
        } else {
            navigate(path);
        }
        setMenuOpen(false); // Close menu on navigation (for mobile)
    };

    useEffect(() => {
        scrollToTop();
    }, [location.pathname]);

    // Close menu on window resize if desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav
            id='nav-bar'
            className='fixed z-50 top-5 right-10'
        >
            {/* Hamburger Button */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-black/80 rounded-lg"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((open) => !open)}
            >
                <span className={`block h-1 w-6 bg-amber-50 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-1 w-6 bg-amber-50 rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-1 w-6 bg-amber-50 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Menu */}
            <main
                className={`
                    ${menuOpen ? 'flex' : 'hidden'}
                    md:flex
                    flex-col md:flex-row
                    gap-6 md:gap-10
                    font-bold text-lg
                    bg-black/90 md:bg-black/80
                    backdrop-blur-sm
                    px-6 py-4 md:px-4 md:py-2
                    rounded-lg
                    text-amber-50
                    absolute md:static
                    top-14 right-0 md:top-0 md:right-0
                    shadow-lg md:shadow-none
                    transition-all duration-300
                `}
            >
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
            </main>
        </nav>
    )
}

export default NavBar