import Card from "../components/Card"
import "../Animations.css"
import SplitText from "../components/SplitText"

//project assets
import blackjack from "../images/blackjack.png";
import inmovw from "../images/inmovw.png";

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
//contact
import email from "../images/email.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"
import { useNavigate } from "react-router-dom";


function Home() {
    //si se deja el secondButtonText vacio, no se renderiza el boton. Epica solucion de mi parte
    const path = useNavigate();

    const goInfoInmoVW = () => {
        path("/InmoVW")
    }

    const goInfoBlackJack = () => {
        path("/BlackJack")
    }

    const goToCodeBlackJack = () => {
        window.open("https://github.com/FrancoMarchetta/TheBlackestOfJacksJS", "_blank")
    }


    return (
        <>



            <main id="home" className="h-dvh flex flex-col gap-8">

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


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
                            Estudiante de desarrollo de software con un enfoque en la creación de
                            interfaces web dinámicas y adaptables. Me enfoco en convertir
                            conceptos en soluciones digitales intuitivas.
                        </p>
                        <br />

                        <div className="flex gap-5">
                            <button style={{ borderRadius: "10px" }} className="bg-amber-50 hover:bg-amber-200 hover:cursor-pointer duration-500 text-2xl w-50 h-12 text-black ">Descargar CV</button>

                            <button
                                onClick={() => { window.open("https://github.com/FrancoMarchetta", "_blank") }}
                                style={{ borderRadius: "10px" }}
                                className="bg-amber-50 flex items-center justify-center gap-2 hover:bg-amber-200 hover:cursor-pointer duration-500 text-2xl w-50 h-12 text-black"
                            >
                                <img src={github} alt="GitHub" className="w-10" />
                                <p>GitHub</p>
                            </button>


                        </div>



                        {/* <p className="fade-in">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam debitis quasi alias soluta quaerat dolorum? Magnam voluptatem animi vel consectetur beatae. Fugiat nam dolores mollitia assumenda ipsum incidunt nobis ad?
                            </p> */}
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



                <section id="technologies" className="flex items-center gap-4 my-12 px-4">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <h2 className="text-3xl font-bold text-blue-400 whitespace-nowrap">Tecnologias</h2>
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

                    <div id="technologies-container" className="text-amber-50 w-200 flex place-self-center flex-wrap flex-col lg:flex-row gap-10 justify-center items-center">
                        <div className="flex flex-col items-center">
                            <img className="w-20 h-20" src={js} alt="Javascript" />
                            <p>Javascript</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-20 h-20" src={reactjs} alt="React" />
                            <p>React</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-20 h-20" src={electron} alt="Electron" />
                            <p>Electron JS</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img className="w-20 h-20" src={css} alt="CSS" />
                            <p>CSS</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-20 h-20" src={html} alt="HTML" />
                            <p>HTML</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-20 h-20" src={git} alt="Git" />
                            <p>Git</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-20 h-20" src={tailwind} alt="Tailwind" />
                            <p>Tailwind</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-20 h-20" src={figma} alt="Figma" />
                            <p>Figma</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-20 h-20" src={ts} alt="Typescript" />
                            <p>Typescript</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-20 h-20" src={supabase} alt="Supabase" />
                            <p>Supabase</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img className="w-20 h-20" src={sql} alt="SQL" />
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
                    <h2 className="text-3xl font-bold text-blue-400 whitespace-nowrap">Proyectos</h2>
                    <div className="flex-grow border-t border-gray-600"></div>
                </section>




                <section className="w-250 flex-wrap place-self-center  gap-10 justify-center items-center">

                    <div>
                        <Card
                            img={inmovw}
                            projectName="Inmovw"
                            description="Aplicación web para la gestión de propiedades inmobiliarias. Desarrollada con React, CSS y Supabase. Permite a los usuarios buscar y filtrar propiedades mientras ."
                            buttonText="Info"
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
                            projectName="Blackjack"
                            description="Juego de cartas Blackjack, desarrollado con React y Tailwind CSS. El objetivo es sumar 21 puntos o lo más cercano posible sin pasarse."
                            buttonText="info"
                            buttonImage={info}
                            secondButtonText="Github"
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
                        {/* <Card></Card> */}
                    </div>

                </section>





                {/**separador */}
                <section id="proyectos" className="flex items-center gap-0 my-12 px-4">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <div className="flex-grow border-t border-gray-600"></div>
                </section>
                {/**separador */}

                <section id="contact" className=" flex gap-33 text-amber-50 lg:flex-row justify-center items-center">

                    {/* <div className="w-10 text-1xl text-center group">
                        <img src={github} alt="" className="brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300" />
                        <p>GitHub</p>
                    </div> */}

                    <div className="w-10 text-1xl text-center group">
                        <img src={linkedin} alt="" className="brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300" />
                        <p>LinkedIn</p>
                    </div>

                    <div className="w-10 text-1xl text-center group">
                        <img src={email} alt="" className="brightness-0 invert hover:brightness-100 hover:invert-0 duration-300" />
                        <p>Email</p>
                    </div>
                </section>


            </main >
        </>
    )
}

export default Home