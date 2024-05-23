import React from 'react'
import hackathonLogo from '../../Module/Assets/hackathonLogo.png';
import { motion, AnimatePresence } from "framer-motion"


const AboutQuest = () => {
    return (

        <>
            <div id='about' className="main-wrapper pt-48 flex flex-col-reverse lg:flex-row sm:flex-col-reverse justify-center items-center xl:flex-row ">

                <div className="about-wrapper ml-48">
                    <h2 className="question text-5xl font-sans font-bold tracking-wider">
                        What is IIC Quest?
                    </h2>
                    <div className="answer font-sans w-3/4 text-2xl tracking-wide leading-relaxed text-opacity-100 text-gray-600 mt-4 text-justify">
                    <span className='font-bold'>IICQuest</span> is an annual event organized by the <span className='font-bold'>Innovation Lab</span> of <span className='font-bold'>Itahari International College (IIC)</span>. This event is designed to promote continuous research and development, providing a platform for participants to showcase their innovative ideas and solutions. Participants, working in teams, are encouraged to push the boundaries of innovation in their respective domains. The aim of IICQuest is not only to create meaningful impact through these solutions, but also to provide an unforgettable experience that participants will cherish for a lifetime.
                    </div>
                </div>

                <div className="logo sm:mr-0 lg:mr-30 xl:mr-80">
                    <motion.img
                    className='w-[10rem] lg:w-[40rem] xl:w-[60rem] md:w-[10rem] sm:w-[10rem]'
                        initial={{ y: -60 }} // Initial position (slightly above)
                        animate={{ y: 0 }} // Target position (normal)
                        transition={{
                            duration: 1,
                            type: 'spring',
                            stiffness: 20,
                            damping:20,
                            repeat:Infinity
                        }}
                        
                        src={hackathonLogo} alt=""
                    />
                </div>

            </div>


        </>
    )
}

export default AboutQuest