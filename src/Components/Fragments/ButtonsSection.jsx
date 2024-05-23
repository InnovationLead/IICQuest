import React from 'react'
import ShinyButton from './ShinyButton'

const ButtonsSection = () => {
  return (
    <div className='mt-7 flex flex-col  md:flex-row gap-10'>
    <ShinyButton text='Join us on Facebook' link='#'/>
    <ShinyButton text='Register' link='https://forms.gle/onEoempEwpePvFR49'/>
    </div>
  )
}

export default ButtonsSection