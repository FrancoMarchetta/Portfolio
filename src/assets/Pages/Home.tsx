import Card from "../components/Card"
import NavBar from "../components/NavBar"
import "../Animations.css"
import SplitText from "../components/SplitText"
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

function Home() {
    return (
        <>
            <main className="h-dvh flex flex-col gap-8 ">
                <div className="h-30 self-end mr-8 " style={{ top: "0", position: "sticky" }}>
                    <NavBar></NavBar>
                </div>

                <section>


                    <div className=" lg:w-300 flex justify-center">
                        <SplitText
                            className="text-7xl drop-shadow-lg"
                            text="Franco Marchetta"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            threshold={0.2}
                            rootMargin="-50px"
                        />
                    </div>

                    <div className="flex justify-center text-amber-50 text-2xl max-w-3xl lg:ml-81 mt-20 mb-20 ">

                        {/* Soy desarrollador frontend con enfoque en la creación de interfaces web modernas y responsivas. <br />
                        Trabajo con tecnologías como React, TypeScript y CSS.
                        <br /><br />
                        Me interesa transformar ideas en experiencias digitales claras, funcionales y agradables. */}

                        <p className="fade-in">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam debitis quasi alias soluta quaerat dolorum? Magnam voluptatem animi vel consectetur beatae. Fugiat nam dolores mollitia assumenda ipsum incidunt nobis ad?
                        </p>
                    </div>
                </section>

                <div className=" min-h-20 bg-amber-50 flex justify-center items-center text-4xl ">
                    <h1 className="drop-shadow-lg font-bold text-shadow-8xs" style={{
                        color: "#279EFF", WebkitTextStroke: "1px black"
                    }}>Proyectos</h1>
                </div>


                <section className="flex flex-col lg:flex-row gap-10 justify-center items-center">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </section>

                <div className=" min-h-20 bg-amber-50 flex justify-center items-center text-4xl ">
                    <h1 className="drop-shadow-lg font-bold text-shadow-8xs" style={{
                        color: "#279EFF", WebkitTextStroke: "1px black"
                    }}>Tecnologías</h1>
                </div>

                <section>

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


            </main>
        </>
    )
}

export default Home