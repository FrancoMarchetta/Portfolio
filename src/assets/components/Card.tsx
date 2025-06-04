import React from 'react'
import image from "../images/github.svg"
import "./css/Card.css"

function Card({
    img,
    projectName,
    goToInfo,
    goToCode,
    description,
    buttonImage,
    buttonText,
    secondButtonImage,
    secondButtonText,
    children
}: {
    img: string,
    projectName: string,
    description: string,
    goToInfo: any,
    goToCode: any,
    buttonImage: string,
    buttonText: string,
    secondButtonImage: string,
    secondButtonText: string,
    children: React.ReactNode
}) {
    return (
        <section className="flex flex-col lg:flex-row gap-4 p-4">
            <div className="flex justify-center items-center mb-4 lg:mb-0">
                <img
                    className="rounded-3xl w-full max-w-xs min-w-0 sm:max-w-sm md:max-w-md lg:max-w-130 flex place-self-center p-3"
                    src={img}
                    alt=""
                />
            </div>

            <div className="flex-1 flex flex-col">
                <div className="flex flex-col gap-4 lg:place-content-center">
                    <h2
                        className="h-fit tracking-tight text-2xl sm:text-3xl md:text-4xl font-bold"
                        style={{ color: "#279EFF", WebkitTextStroke: "1px black" }}
                    >
                        {projectName}
                    </h2>
                    <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
                        {children}
                    </div>
                </div>
                <div className="my-4">
                    <p className="text-amber-50 text-base sm:text-lg">{description}</p>
                </div>
                {/* botones de info y code */}
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                    <div className="flex flex-1">
                        <button
                            onClick={goToInfo}
                            className="flex items-center justify-center w-40 px-4 py-2 bg-amber-50 font-bold rounded-lg shadow-md hover:bg-amber-200 hover:cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        >
                            <img className="size-8 mr-2" src={buttonImage} alt="" />
                            <p>{buttonText}</p>
                        </button>
                    </div>
                    {secondButtonText !== "" && (
                        <div className="flex flex-1 mt-2 sm:mt-0">
                            <button
                                onClick={goToCode}
                                className="flex items-center justify-center w-40 px-4 py-2 bg-amber-50 font-bold rounded-lg shadow-md hover:bg-amber-200 hover:cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            >
                                <img className="size-8 mr-2" src={secondButtonImage} alt="" />
                                <p>{secondButtonText}</p>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Card
