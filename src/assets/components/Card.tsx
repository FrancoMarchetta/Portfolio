import React from 'react'
import ejemplo from "../images/image 1.png"
import image from "../images/github.svg"
function Card({ img, projectName, description, children }: { img: string, projectName: string, description: string, children: React.ReactNode }) {
    return (
        <>
            <section className='lg:flex gap-4'>
                <div>
                    <img className='rounded-3xl max-w-130 min-w-130 flex place-self-center p-2' src={img} alt="" />
                </div>

                <div>
                    <div className='flex flex-col gap-4 lg:place-content-center'>
                        <h2 className='h-fit text-4xl font-bold' style={{ color: "#279EFF", WebkitTextStroke: "1px black" }} >{projectName}</h2>
                        <div className='lg:flex lg:gap-5'>
                            {children}
                        </div>
                    </div>
                    <br /><br />
                    <p className='text-amber-50 text-2x1 '>{description}</p>
                </div>
            </section>
        </>
    )
}

export default Card


