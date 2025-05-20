import { useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    // Handle scroll after navigation
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return (
        <main
            id='nav-bar'
            className='fixed z-50 w-150 h-15 justify-center place-items-center text-amber-50 flex gap-10 font-bold text-lg bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg'
            style={{
                top: '20px',
                right: '40px'
            }}
        >
            <Link
                to="/"
                className='hover:text-blue-400 duration-300'
                onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                }}
            >
                Inicio
            </Link>
            <Link
                to=""
                className='hover:text-blue-400 duration-300'
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
                    navigate("/#technologies")
                }}
            >
                Tecnologías
            </Link>
            <Link
                to=""
                className='hover:text-blue-400 duration-300'
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    navigate("/#projects")
                }}
            >
                Proyectos
            </Link>
            <select className="hover:text-blue-400 cursor-pointer" name="" id="">
                <option className='text-black' value="">Español</option>
                <option className='text-black' value="">English</option>
            </select>
        </main>
    )
}

export default NavBar