import BlurText from '../components/BlurText'
import blackJackImage from "../images/blackjack.png"
import code from "../images/code.svg"


function BlackJack() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <>
            <main className='h-dvh text-center justify-center'>
                <div className='place-self-center' style={{ color: "#279EFF", textShadow: "10px 7px 4px #000" }}>
                    <BlurText
                        text="The Blackest of Jacks"
                        delay={150}
                        animateBy="letters"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-8xl"
                    />
                </div>
                <br />
                <br />
                <br />


                <p className='fade-in p-4 text-amber-50 lg:w-210 text-2xl text-justify  place-self-center'>
                    Es un juego clásico de cartas desarrollado como aplicación web,
                    donde el objetivo es vencer al crupier alcanzando 21 puntos sin pasarse.
                    El proyecto está hecho con una interfaz simple y dinámica,
                    permitiendo jugar partidas rápidas directamente desde el navegador</p>

                {/**separador */}
                <section id="proyectos" className="flex items-center gap-0 my-12 px-4">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <div className="flex-grow border-t border-gray-600"></div>
                </section>
                {/**separador */}


                <img className='p-4 appearLeft lg:w-250 place-self-center' src={blackJackImage} alt="" />
                <button onClick={() => {
                    window.open("https://github.com/FrancoMarchetta/TheBlackestOfJacksJS", "_blank")
                }} style={{ borderRadius: "10px" }} className='hover:cursor-pointer text-2xl text-black border-2 w-50 h-20 bg-amber-50 flex items-center place-self-center justify-center gap-2'>
                    <img src={code} alt="info" className="w-10 h-10" />
                    Ir a ver
                </button>

                <br />
                <br />
                <br />

            </main>
        </>
    )
}

export default BlackJack