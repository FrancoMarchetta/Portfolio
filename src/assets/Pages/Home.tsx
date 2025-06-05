import Card from "../components/Card"
import "../Animations.css"
import SplitText from "../components/SplitText"
import cv from "/Franco Marchetta.pdf"
//project assets
import blackjack from "../images/blackjack.png";
import inmovw from "../images/inmovw.png";
import starbucks from "../images/starbucks1.png";
import passwordGenerator from "../images/passwordGenerator.png";

import code from "../images/code.svg"
import info from "../images/info.svg"

//technologies
import js from "../images/js.png"
import ts from "../images/ts.png"
import css from "../images/css.png"
import html from "../images/html.png"
import git from "../images/git.png"
import tailwind from "../images/tailwind.png"
import figma from "../images/figma.png"
import supabase from "../images/supabase.png"
import reactjs from "../images/react.png"
import sql from "../images/sql.png"
import electron from "../images/electron.png"
import astro from "../images/astro.png"
//contact
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"
import { useNavigate } from "react-router-dom";
import Contact from "../components/Contact";
import { atom, useAtom } from "jotai";

import { atomLanguage } from '../components/NavBar';
import { useEffect } from "react";




function Home() {
    //si se deja el secondButtonText vacio, no se renderiza el boton. Epica solucion de mi parte
    const path = useNavigate();

    const [language,] = useAtom(atomLanguage)

    const goInfoInmoVW = () => {
        path("/InmoVW")
    }

    const goInfoBlackJack = () => {
        path("/BlackJack")
    }

    const goToCodeBlackJack = () => {
        window.open("https://github.com/FrancoMarchetta/TheBlackestOfJacksJS", "_blank")
    }

    const goToCodeStarbucks = () => {
        window.open("https://github.com/FrancoMarchetta/cafe-demo-Astro", "_blank")
    }

    const goInfoBlackStarbucks = () => {
        path("/Starbucks")
    }

    const goToCodePasswordGenerator = () => {
        window.open("https://github.com/FrancoMarchetta/PasswordGenerator", "_blank")
    }

    const goToInfoPasswordGenerator = () => {
        window.open("https://password-generator-eta-khaki.vercel.app/", "_blank")

    }


    return (
        <>



            <main id="home" className="h-dvh flex flex-col gap-8">


                <section>
                    <div className=" lg:w-300 flex justify-center">
                        <SplitText
                            className="text-7xl text drop-shadow-lg"
                            text="Franco Marchetta"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            threshold={0.2}
                            rootMargin="-50px"
                        />
                    </div>
                    <div className="fade-in flex flex-col justify-center text-amber-50 text-2xl max-w-3xl lg:ml-81 mt-20 mb-20 ">

                        <p>
                            {language == "Español" ? "Estudiante de Desarrollo de Software con enfoque en la creación de interfaces web dinámicas y adaptables. Me enfoco en construir soluciones digitales intuitivas. Valoro el trabajo en equipo, la comunicación clara y la disposición para aprender continuamente, lo que me permite adaptarme con facilidad a nuevos entornos y desafíos."
                                :
                                "Software Development student focused on creating dynamic and adaptive web interfaces. I focus on building intuitive digital solutions. I value teamwork, clear communication, and a willingness to continually learn, which allows me to easily adapt to new environments and challenges."}

                        </p>

                        <br />

                        <div className="flex gap-5">
                            <button style={{ borderRadius: "10px" }} className="bg-amber-50 hover:bg-amber-200 hover:cursor-pointer hover:-translate-y-2  duration-200 text-2xl lg:w-50 h-12 text-black ">
                                <a href={cv} download={"FrancoMarchetta.pdf"}>
                                    {language == "Español" ? "Descargar CV."
                                        :
                                        "Download CV."}
                                </a>

                            </button>
                            <br />
                        </div>




                    </div>

                    {/* <p className="fade-in">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam debitis quasi alias soluta quaerat dolorum? Magnam voluptatem animi vel consectetur beatae. Fugiat nam dolores mollitia assumenda ipsum incidunt nobis ad?
                            </p> */}

                </section>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />



                <section id="technologies" className="flex items-center gap-4 my-12 px-4">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <h2 className="text-3xl font-bold text-blue-400 whitespace-nowrap">{language == "Español" ? "Tecnologias."
                        :
                        "Technologies."}</h2>
                    <div className="flex-grow border-t border-gray-600"></div>
                </section>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <section id="technologies">

                    <div
                        id="technologies-container"
                        className="text-amber-50 w-full max-w-5xl mx-auto flex flex-wrap gap-8 justify-center items-center"
                    >
                        <div className="flex flex-col items-center w-24">
                            <img className="w-16 h-16" src={js} alt="Javascript" />
                            <p>Javascript</p>
                        </div>
                        <div className="flex flex-col items-center w-24">
                            <img className="w-16 h-16" src={reactjs} alt="React" />
                            <p>React</p>
                        </div>
                        <div className="flex flex-col items-center w-24">
                            <img className="w-16 h-16" src={electron} alt="Electron" />
                            <p>Electron JS</p>
                        </div>
                        <div className="flex flex-col items-center w-24">
                            <img className="w-16 h-16" src={css} alt="CSS" />
                            <p>CSS</p>
                        </div>
                        <div className="flex flex-col items-center w-24">
                            <img className="w-16 h-16" src={html} alt="HTML" />
                            <p>HTML</p>
                        </div>
                        <div className="flex flex-col items-center w-24">
                            <img className="w-16 h-16" src={git} alt="Git" />
                            <p>Git</p>
                        </div>
                        <div className="flex flex-col items-center w-24">
                            <img className="w-16 h-16" src={tailwind} alt="Tailwind" />
                            <p>Tailwind</p>
                        </div>
                        <div className="flex flex-col items-center w-24">
                            <img className="w-16 h-16" src={figma} alt="Figma" />
                            <p>Figma</p>
                        </div>
                        <div className="flex flex-col items-center w-24">
                            <img className="w-16 h-16" src={ts} alt="Typescript" />
                            <p>Typescript</p>
                        </div>
                        <div className="flex flex-col items-center w-24">
                            <img className="w-16 h-16" src={supabase} alt="Supabase" />
                            <p>Supabase</p>
                        </div>
                        <div className="flex flex-col items-center w-24">
                            <img className="w-16 h-16" src={sql} alt="SQL" />
                            <p>SQL</p>
                        </div>
                    </div>
                </section>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <section id="projects" className="flex items-center gap-4 my-12 px-4">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <h2 className="text-3xl font-bold text-blue-400 whitespace-nowrap">{language == "Español" ? "Proyectos."
                        :
                        "Projects."}</h2>
                    <div className="flex-grow border-t border-gray-600"></div>
                </section>



                {/* horas perdidas intentando hacer esta mierda responsive [7] */}

                <section className="w-250 flex-wrap place-self-center  gap-10 justify-center items-center">

                    <div>
                        <Card
                            img={inmovw}
                            projectName={language == "Español" ? "Inmovw" : "Inmovw"}
                            description={
                                language == "Español"
                                    ? "Aplicación web desarrollada con React, TypeScript, CSS y Supabase, diseñada para gestionar propiedades inmobiliarias. La plataforma permite a los usuarios buscar y filtrar propiedades de forma sencilla, visualizando las mejores opciones disponibles en su zona."
                                    : "Web application developed with React, TypeScript, CSS, and Supabase, designed to manage real estate properties. The platform allows users to easily search and filter properties, displaying the best options available in their area."
                            }
                            buttonText={language == "Español" ? "Info" : "Info"}
                            buttonImage={info}
                            secondButtonText=""
                            secondButtonImage={code}
                            goToInfo={goInfoInmoVW}
                            goToCode={""}
                        >
                            <div className="flex gap-4 w-fit">
                                <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-blue-700 text-amber-50 ">
                                    <img className="w-8" src={reactjs} alt="" />
                                    <p className="mt-0.5">React js</p>
                                </div>
                                <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-blue-950 text-amber-50 ">
                                    <img className="w-6 h-6 place-self-center" src={ts} alt="" />
                                    <p className="mt-0.5">Typescript</p>
                                </div>
                                <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-green-700 text-amber-50 ">
                                    <img className="w-8" src={supabase} alt="" />
                                    <p className="mt-0.5">Supabase</p>
                                </div>
                                <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-blue-700 text-amber-50 ">
                                    <img className="w-8" src={css} alt="" />
                                    <p className="mt-0.5">Css</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <br />
                    <br />
                    <br />

                    <div>
                        <Card
                            img={blackjack}
                            projectName={language == "Español" ? "Blackjack" : "Blackjack"}
                            description={
                                language == "Español"
                                    ? "Juego de cartas Blackjack, desarrollado con React y Tailwind CSS. El objetivo es sumar 21 puntos o lo más cercano posible sin pasarse."
                                    : "Blackjack card game, developed with React and Tailwind CSS. The goal is to reach 21 points or as close as possible without going over."
                            }
                            buttonText={language == "Español" ? "Info" : "Info"}
                            buttonImage={info}
                            secondButtonText={language == "Español" ? "Github" : "Github"}
                            secondButtonImage={code}
                            goToCode={goToCodeBlackJack}
                            goToInfo={goInfoBlackJack}
                        >
                            <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-blue-700 text-amber-50 ">
                                <img className="w-8" src={reactjs} alt="" />
                                <p className="mt-0.5">React js</p>
                            </div>

                            <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-blue-950 text-amber-50 ">
                                <img className="w-8" src={tailwind} alt="" />
                                <p className="mt-0.5">Tailwind</p>
                            </div>

                            <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-blue-700 text-amber-50 ">
                                <img className="w-8" src={css} alt="" />
                                <p className="mt-0.5">Css</p>
                            </div>

                            <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-blue-950 text-amber-50 ">
                                <img className="w-8" src={electron} alt="" />
                                <p className="mt-0.5">ElectronJS</p>
                            </div>

                        </Card>
                    </div>


                    <br />
                    <br />
                    <br />


                    <div>
                        <Card
                            img={starbucks}
                            projectName={language == "Español" ? "Clon de Starbucks" : "Starbucks Clone"}
                            description={
                                language == "Español"
                                    ? "Clon no oficial de la página web de Starbucks, creado únicamente con fines educativos y de práctica personal."
                                    : "Unofficial clone of the Starbucks website, created solely for educational and personal practice purposes."
                            }
                            buttonText={language == "Español" ? "Info" : "Info"}
                            buttonImage={info}
                            secondButtonText={language == "Español" ? "Github" : "Github"}
                            secondButtonImage={code}
                            goToCode={goToCodeStarbucks}
                            goToInfo={goInfoBlackStarbucks}
                        >
                            <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-orange-600 text-amber-50 ">
                                <img className="w-8 mt-0.5" src={astro} alt="" />
                                <p className="mt-0.5">Astro</p>
                            </div>

                            <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-blue-950 text-amber-50 ">
                                <img className="w-8" src={tailwind} alt="" />
                                <p className="mt-0.5">Tailwind</p>
                            </div>

                            <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-blue-700 text-amber-50 ">
                                <img className="w-8" src={css} alt="" />
                                <p className="mt-0.5">Css</p>
                            </div>



                        </Card>
                    </div>


                    <br />
                    <br />
                    <br />


                    <div>
                        <Card
                            img={passwordGenerator}
                            projectName={language == "Español" ? "Generador de contraseñas" : "Password Generator"}
                            description={
                                language == "Español"
                                    ? "Aplicacion simple para crear contraseñas aleatorias seguras."
                                    : "Simple app to create secure random passwords."
                            }
                            buttonText={language == "Español" ? "Info" : "Info"}
                            buttonImage={info}
                            secondButtonText={language == "Español" ? "Github" : "Github"}
                            secondButtonImage={code}
                            goToCode={goToCodePasswordGenerator}
                            goToInfo={goToInfoPasswordGenerator}
                        >

                            <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-blue-950 text-amber-50 ">
                                <img className="w-6 h-6 place-self-center" src={ts} alt="" />
                                <p className="mt-0.5">Typescript</p>
                            </div>


                            <div style={{ borderRadius: "8px" }} className="w-30 flex place-content-center bg-blue-700 text-amber-50 ">
                                <img className="w-8" src={css} alt="" />
                                <p className="mt-0.5">Css</p>
                            </div>



                        </Card>
                    </div>


                </section>





                {/**separador */}
                <section id="proyectos" className="flex items-center gap-0 my-12 px-4">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <div className="flex-grow border-t border-gray-600"></div>
                </section>
                {/**separador */}

                <section
                    id="contact"
                    className="flex flex-col lg:flex-row gap-10 text-amber-50 justify-center items-center px-4"
                >
                    <div className="flex flex-col gap-5 mt-5 w-full max-w-md">
                        <div>
                            <Contact />
                        </div>
                        <div className="flex flex-col sm:flex-row place-content-center gap-6 sm:gap-10 w-full">
                            <div
                                onClick={() => window.open("https://github.com/FrancoMarchetta", "_blank")}
                                className="flex justify-center items-center hover:text-blue-500 duration-200 cursor-pointer gap-2"
                            >
                                <img src={github} alt="GitHub" className="w-10 lg:w-12 brightness-0 invert" />
                                <p>GitHub</p>
                            </div>
                            <div
                                onClick={() => window.open("https://www.linkedin.com/in/franco-marchetta-a37195254/", "_blank")}
                                className="flex justify-center items-center hover:text-blue-500 duration-200 cursor-pointer gap-2"
                            >
                                <img src={linkedin} alt="Linkedin" className="w-8 lg:w-10 brightness-0 invert" />
                                <p>Linkedin</p>
                            </div>
                        </div>
                    </div>
                </section>

                <br />



            </main >
        </>
    )
}

export default Home

//arregla la poronga de error por no haber leido o usado "atom" en el deploy 
useEffect(() => {
    console.log(atom,);

})