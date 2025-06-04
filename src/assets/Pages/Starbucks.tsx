import BlurText from '../components/BlurText'
import starbucksImage from "../images/starbucks1.png"
import starbucksImage2 from "../images/starbucks2.png"
import code from "../images/code.svg"
function Starbucks() {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <>
            <main className='h-dvh text-center justify-center'>
                <div className='place-self-center' style={{ color: "#279EFF", textShadow: "10px 7px 4px #000" }}>
                    <BlurText
                        text="Starbucks Clone"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-8xl"
                    />
                </div>
                <br />
                <br />
                <br />


                <p className='fade-in text-amber-50 lg:w-210 text-2xl text-justify  place-self-center p-4'>
                    Clon no oficial de la página web de Starbucks, creado únicamente con fines educativos y de práctica personal.</p>

                {/**separador */}
                <section id="proyectos" className="flex items-center gap-0 my-12 px-4">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <div className="flex-grow border-t border-gray-600"></div>
                </section>
                {/**separador */}


                <img className='appearLeft lg:w-300 place-self-center p-4' src={starbucksImage} alt="" />

                <br />
                <br />
                <br />

                {/**separador */}
                <section id="proyectos" className="flex items-center gap-0 my-12 px-4">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <div className="flex-grow border-t border-gray-600"></div>
                </section>
                {/**separador */}

                <img className='lg:w-300 p-4 place-self-center' src={starbucksImage2} alt="" />
                <br />
                <button onClick={() => {
                    window.open("https://github.com/FrancoMarchetta/cafe-demo-Astro", "_blank")
                }} style={{ borderRadius: "10px" }} className='hover:cursor-pointer text-2xl text-black border-2 w-50 h-20 bg-amber-50 flex items-center place-self-center justify-center gap-2'>
                    <img src={code} alt="info" className="w-10 h-10" />
                    Ir a ver
                </button>
            </main>
        </>
    )
}

export default Starbucks