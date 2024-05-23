import React from 'react'
import ShinyButton from '../Fragments/ShinyButton'
import Maps from './Maps'
import SocialHandle from '../Fragments/SocialHandle'

const MyFooter = () => {
    return (
        <>
            <div className='bg-main-bg-color'>
                <div className='pt-2 flex-col md:flex-row sm:gap-3 flex md:gap-24  lg:gap-96'>
                    <Maps />
                    <div className="content flex flex-col md:mt-12 md:mr-16 md:block sm:flex sm:flex-col sm:items-center">
                        <ShinyButton text='Register Now' link='https://forms.gle/onEoempEwpePvFR49'/>
                        <div className="info mt-5 flex flex-col justify-center items-center">
                            <h1 className="contact-info text-2xl text-white">Contact us on: </h1>
                            <h1 className='font-sans italic cursor-pointer text-blue-400 text-2xl'>innovation.lab@iic.edu.np</h1>
                            <h1 className='text-blue-400 mt-2'>Contact No: 9801597008, 9801597005</h1>
                        </div>
                        <div className="social-media flex justify-center text-white bg-main-bg-color pt-10">
                            <SocialHandle />
                        </div>
                    </div>
                </div>
            </div>

            <div className="closing-line bg-[#202020] py-5 text-white">
                <h2 className=' text-1xl font-sans text-center'>CopyRight &copy; 2024. All Rights reserved in <a className='text-blue-400 cursor-pointer' target='_blank' href='https://iic.edu.np/'>Itahari International College</a></h2>
                <p className='text-center mt-2'>Made with ❤️ by <span className='text-blue-400'>Innovation Lab</span></p>
            </div>
        </>
    )
}

export default MyFooter