import React from 'react'
import image from "../images/github.svg"
import "./css/Card.css"

function Card({ img, projectName, goToInfo, goToCode, description, buttonImage, buttonText, secondButtonImage, secondButtonText, children }: { img: string, projectName: string, description: string, goToInfo: any, goToCode: any, buttonImage: string, buttonText: string, secondButtonImage: string, secondButtonText: string, children: React.ReactNode }) {
    return (
        <>
            <section className='lg:flex gap-4' >
                <div>
                    <img className='rounded-3xl max-w-130 min-w-120 flex place-self-center p-3' src={img} alt="" />
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
                    <br />
                    {/**botones de info y code </> */}
                    {/** el primero es de informacion y el segundo debe ser opcionar (por si el codigo es privado en github) */}
                    <div className='flex gap-6 w-80'>
                        <div className='flex'>
                            <button
                                onClick={goToInfo}
                                className='flex items-center justify-center w-full h-full px-4 py-2 bg-amber-50 font-bold rounded-lg shadow-md hover:bg-amber-200 hover:cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400'
                            >
                                <img className='size-8 mr-2' src={buttonImage} alt="" />
                                <p>{buttonText}</p>
                            </button>
                        </div>

                        <div className={secondButtonText == "" ? "hide-button" : 'flex'}>
                            <button
                                onClick={goToCode}
                                className='flex items-center justify-center w-full h-full px-4 py-2 bg-amber-50 font-bold rounded-lg shadow-md hover:bg-amber-200 hover:cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400'
                            >
                                <img className='size-8 mr-2' src={secondButtonImage} alt="" />
                                <p>{secondButtonText}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card


