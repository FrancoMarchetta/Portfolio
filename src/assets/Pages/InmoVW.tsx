import BlurText from '../components/BlurText';
import dbmanagerimage from '../images/dbmanagerimage.png';
import propExample from "../images/propertysexample.png";
import smallExample from "../images/smallExample.png";
import smallExample2 from "../images/smallExample2.png";
import info from "../images/info.svg"


function InmoVW() {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      <main className='h-dvh justify-center text-center'>
        <div className='place-self-center' style={{ color: "#279EFF", textShadow: "10px 7px 4px #000" }}>
          <BlurText
            text="InmoVW"
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

        <p className='fade-in lg:w-210 text-justify place-self-center text-2xl text-amber-50'>
          Creé una web para una inmobiliaria, donde los usuarios pueden explorar propiedades.
          Tiene un sistema de filtrado y cada publicación incluye imágenes y todos los detalles necesarios
          para ayudar a tomar decisiones. Usé React para construir la interfaz y Supabase como backend para manejar los
          datos y el almacenamiento de imágenes. El objetivo fue lograr una experiencia fluida y accesible desde cualquier
          dispositivo.
        </p>

        {/**separador */}
        <section id="proyectos" className="my-12 flex items-center gap-0 px-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <div className="flex-grow border-t border-gray-600"></div>
        </section>
        {/**separador */}

        <p className='fade-in w-210 place-self-center text-2xl text-amber-50'>Tiene un gestor de propiedades para el cliente</p>
        <p className='text-amber-50'>(Esta imagen solo  contiene informacion de ejemplo)</p>
        <br />
        <br />
        <br />

        <img className='appearLeft lg:w-300 place-self-center' src={dbmanagerimage} alt="" />
        <br />
        <br />
        <br />

        {/**separador */}
        <section id="proyectos" className="my-12 flex items-center gap-0 px-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <div className="flex-grow border-t border-gray-600"></div>
        </section>
        {/**separador */}



        <p className=' lg:w-210 place-self-center text-2xl text-amber-50'>Tambien una zona en la que explorar las propiedades disponibles y filtrar de acuerdo a las preferencias y necesidades de cada persona</p>

        <img className='lg:w-300 place-self-center' src={propExample} alt="" />

        {/**separador */}
        <section id="proyectos" className="my-12 flex items-center gap-0 px-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <div className="flex-grow border-t border-gray-600"></div>
        </section>
        {/**separador */}
        <p className='lg:w-210 place-self-center text-2xl text-amber-50'>Es totalmente responsiva y se adapta a pantallas mas pequeñas</p>

        <div className='flex place-self-center gap-32 '>
          <img className='lg:w-140' src={smallExample} alt="" />
          <img className='lg:w-140' src={smallExample2} alt="" />
        </div>
        <br />
        <br />
        <br />

        <button style={{ borderRadius: "10px" }} className='hover:cursor-pointer text-2xl text-black border-2 w-50 h-20 bg-amber-50 flex items-center place-self-center justify-center gap-2'>
          <img src={info} alt="info" className="w-10 h-10" />
          Ir a ver
        </button>

        <br />
        <br />
        <br />
      </main>
    </>
  )
}

export default InmoVW