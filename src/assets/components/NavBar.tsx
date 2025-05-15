import React from 'react'

function NavBar({ children }: any) {
    return (
        <main
            id='nav-bar'
            className='fixed z-50 w-150 h-15 justify-center place-items-center text-amber-50 flex gap-10 font-bold text-lg bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg'
            style={{
                top: '20px',
                right: '40px'
            }}
        >
            {children}
        </main>
    )
}

export default NavBar