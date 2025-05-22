import BlurText from '../components/BlurText';
import dbmanagerimage from '../images/dbmanagerimage.png';


function InmoVW() {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      <main className='h-dvh text-center justify-center'>
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

        <p className='fade-in text-amber-50 lg:w-210 text-2xl  place-self-center'>Creé una web para una inmobiliaria, donde los usuarios pueden explorar propiedades filtrando por zona, precio, cantidad de habitaciones y más. Cada publicación incluye imágenes y todos los detalles necesarios para ayudar a tomar decisiones. Usé React para construir la interfaz y Supabase como backend para manejar los datos y el almacenamiento de imágenes. El objetivo fue lograr una experiencia fluida y accesible desde cualquier dispositivo.</p>

        {/**separador */}
        <section id="proyectos" className="flex items-center gap-0 my-12 px-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <div className="flex-grow border-t border-gray-600"></div>
        </section>
        {/**separador */}

        <p className='fade-in text-amber-50 w-210 text-2xl place-self-center'>Tiene un gestor de propiedades para la dueña</p>
      <p className='text-amber-50'>(Esta imagen solo  contiene informacion de ejemplo)</p>
        <br />
        <br />
        <br />

        <img className='appearLeft lg:w-300 place-self-center' src={dbmanagerimage} alt="" />
        <br />
        <br />
        <br />

        {/**separador */}
        <section id="proyectos" className="flex items-center gap-0 my-12 px-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <div className="flex-grow border-t border-gray-600"></div>
        </section>
        {/**separador */}



        <p className='fade-in text-amber-50 lg:w-210 text-2xl place-self-center'>Tambien una zona en la que explorar las propiedades disponibles y filtrar de acuerdo a las preferencias y necesidades de cada persona</p>


      </main>
    </>
  )
}

export default InmoVW