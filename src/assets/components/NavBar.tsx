import React from 'react'

function NavBar() {
    return (
        <main id='nav-bar' className='w-150 h-15 justify-center place-items-center text-amber-50 flex gap-10 font-bold float-end text-lg -translate-x-10 translate-y-5' >
            <p className='hover:cursor-pointer hover:text-blue-400 duration-305'>Inicio</p>
            <p className='hover:cursor-pointer hover:text-blue-400 duration-305'>Projectos</p>
            <p className='hover:cursor-pointer hover:text-blue-400 duration-305'>Tecnologias</p>
            <p className='hover:cursor-pointer hover:text-blue-400 duration-305'>Contacto</p>
            <select name="" id="">
                <option className='text-black' value="">Español</option>
                <option className='text-black' value="">English</option>
            </select>
        </main>
    )
}

export default NavBar