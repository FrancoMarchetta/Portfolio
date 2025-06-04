import { useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavigation = (e: React.MouseEvent, path: string, elementId?: string) => {
        e.preventDefault();

        // Si estamos en la misma ruta, solo hacemos scroll
        if (location.pathname === path) {
            if (elementId) {
                document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                scrollToTop();
            }
        } else {
            // Si estamos en otra ruta, navegamos y el useEffect manejará el scroll
            navigate(path);
        }
    };

    // Este efecto se ejecutará cuando cambie la ruta
    useEffect(() => {
        scrollToTop();
    }, [location.pathname]);


    //solo verificar que el idioma funcione
    // useEffect(() => {
    //     console.log(language)
    // },[language])

    return (
        <main
            id='nav-bar'
            className='fixed z-50 lg:w-150 h-15 justify-center place-items-center text-amber-50 flex gap-10 font-bold text-lg bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg'
            style={{
                top: '20px',
                right: '40px'
            }}
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

            {/* <select onChange={(e) => { setLanguage(e.target.value) }} className="hover:text-blue-400 cursor-pointer" name="" id="">
                <option className='text-black' value="Español">Español</option>
                <option className='text-black' value="English">English</option>
            </select>
             */}
        </main>
    )
}

export default NavBar