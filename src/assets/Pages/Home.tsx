import NavBar from "../components/NavBar"

function Home() {
    return (
        <>
            <main className="h-dvh flex flex-col gap-8">
                <div className="h-20 ">
                    <NavBar></NavBar>
                </div>

                <div className=" lg:w-300 flex justify-center">
                    <h1 style={{ color: "#279EFF", textShadow: "10px 7px 4px #000" }} className="text-7xl drop-shadow-lg">
                        Franco Marchetta
                    </h1>
                </div>

                <div className=" flex justify-center text-amber-50 text-2xl max-w-3xl lg:ml-81 ">
                    Soy desarrollador frontend con enfoque en la creación de interfaces web modernas y responsivas. <br />
                    Trabajo con tecnologías como React, TypeScript y CSS, y sigo aprendiendo cada día para mejorar la calidad de mis proyectos.
                    <br /><br />
                    Me interesa transformar ideas en experiencias digitales claras, funcionales y agradables.
                </div>

                <div className="h-20 bg-amber-50 flex justify-center items-center text-4xl ">
                    <h1 className="drop-shadow-lg font-bold text-shadow-8xs" style={{
                        color: "#279EFF", WebkitTextStroke: "1px black"
                    }}>Proyectos</h1>
                </div>
            </main>
        </>
    )
}

export default Home