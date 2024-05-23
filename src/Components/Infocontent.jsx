import React from 'react'
import Maininfo from './Fragments/Maininfo'
import TypewriteText from './Fragments/TypewriteText'
import GeneralInfo from './Fragments/GeneralInfo'
import CalenderSegment from './Fragments/CalenderSegment'
import ButtonsSection from './Fragments/ButtonsSection'
import SocialHandle from './Fragments/SocialHandle'

const Infocontent = () => {
  return (
    <div id='home' className='bg-main-bg-color pt-[6rem]'>
      <div className='flex gap-4 flex-col lg:flex-row  align-around pt-14 bg-main-bg-color'>
        <div className="ml-32 text-white">
          <Maininfo />
          <TypewriteText />
          <GeneralInfo />
          <ButtonsSection />
        </div>
        <CalenderSegment />
      </div>
      <div className="socialmedia flex flex-col items-center gap-5 mt-12 text-white">
        <h3 className='text-2xl capitalize text-white'>Follow us on social media for updates</h3>
        <div className="icons">
          <SocialHandle/>
        </div>
      </div>
    </div>
  )
}

export default Infocontent