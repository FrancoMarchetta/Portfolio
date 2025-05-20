import React from 'react'
import { useRef } from 'react';
import BlurText from '../components/BlurText';

function InmoVW() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      <main className='border-4 h-dvh lg:w-dvw flex justify-center'>
        <div style={{ color: "#279EFF", textShadow: "10px 7px 4px #000" }}>
          <BlurText
            text="InmoVW"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-7xl"
          />
        </div>

      </main>
    </>
  )
}

export default InmoVW