import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


const TypewriteText = () => {
  return (
    <div className='text-5xl mt-8 font-sans'>
    <Typewriter words={['36 Hours Hackathon','Be Ready for Arena']} cursor={true} loop={false} typeSpeed={80} deleteSpeed={10}/>
    </div>
  )
}

export default TypewriteText