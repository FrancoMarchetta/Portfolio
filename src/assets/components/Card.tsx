import React from 'react'
import ejemplo from "../images/image 1.png"
function Card() {
    return (
        <>
            <main className='w-100 h-150 rounded-2xl' style={{ backgroundColor: "#1B293B" }}>
                <img className='rounded-3xl w-90 flex place-self-center p-2' src={ejemplo} alt="" />
                <h2 className='text-4xl font-bold place-self-center' style={{ color: "#279EFF", WebkitTextStroke: "1px black" }} >BlackJack</h2>
            </main>
            
        </>
    )
}

export default Card