import React from 'react'
import ejemplo from "../images/image 1.png"
import image from "../images/github.svg"
function Card() {
    return (
        <>
            <main className='w-90 h-150 rounded-2xl hover:-translate-y-5 duration-100 ' style={{ backgroundColor: "#1B293B" }}>
                <img className='rounded-3xl w-90 flex place-self-center p-2' src={ejemplo} alt="" />
                <h2 className='text-4xl font-bold place-self-center' style={{ color: "#279EFF", WebkitTextStroke: "1px black" }} >BlackJack</h2>
                <p className='text-amber-50 text-2xl text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eum ullam, laudantium amet qui facilis asperiores at aperiam quo maiores ipsum repellat, corrupti aliquid eligendi cupiditate, mollitia in voluptate voluptatem?</p>
                <button className='bg-amber-50 lg:w-30 h-10 hover:cursor-pointer text-2xl flex mt-5 place-self-center' style={{ borderRadius: "6px" }}>
                    <img src={image} alt="" />
                    github</button>
            </main>
        </>
    )
}

export default Card


