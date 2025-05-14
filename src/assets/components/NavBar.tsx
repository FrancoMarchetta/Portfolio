import React from 'react'

function NavBar() {
    return (
        <main className='text-amber-50 flex gap-10 font-bold float-end text-lg -translate-x-50 translate-y-5' >
            <p className='hover:cursor-pointer'>Inicio</p>
            <p className='hover:cursor-pointer'>Projectos</p>
            <p className='hover:cursor-pointer'>Contacto</p>
        </main>
    )
}

export default NavBar