import React from 'react'
import { GiLaurelsTrophy } from "react-icons/gi";
import { GiTrophy } from "react-icons/gi";



const PrizeSection = () => {
    return (
        <>
            <div id='prize' className="prizezsection mx-10 mt-20 pb-24 bg-[#f3effe] rounded-lg">
                <h2 className='text-5xl text-center pt-12 font-extrabold'>Prize Section</h2>
                <div className="prizepool flex flex-col justify-center items-center mt-11 gap-3">
                    <GiLaurelsTrophy className='text-[10rem] text-blue-400' />
                    <div className="flex flex-col items-center">
                        <h2 className='text-3xl font-sans font-semibold'>Prize Pool</h2>
                        <h2 className='text-2xl captilize text-gray-500 mt-4'>Total Prize Pool of <span className='font-bold'>Rs. 155000</span></h2>
                    </div>
                </div>
                <div className="each_prizes flex flex-wrap gap-4 mt-20 flex-col md:flex-row lg:flex-row justify-around">
                    <div className="first flex items-center flex-col gap-3">
                        <GiTrophy className='text-[8rem] text-blue-400' />
                        <div className="description flex flex-col">
                            <h2 className='text-3xl font-sans font-semibold text-center'>Frist Prize</h2>
                            <h2 className='text-2xl captilize text-gray-500 mt-4'>First Prize of <span className='font-bold'>Rs. 75000</span></h2>

                        </div>
                    </div>
                    <div className="second flex items-center flex-col gap-3">
                        <GiTrophy className='text-[8rem] text-blue-400' />
                        <div className="description flex flex-col">
                            <h2 className='text-3xl font-sans font-semibold text-center'>Second  Prize</h2>
                            <h2 className='text-2xl captilize text-gray-500 mt-4'>Second Prize of <span className='font-bold'>Rs. 50000</span></h2>

                        </div>
                    </div>
                    <div className="second flex items-center flex-col gap-3">
                        <GiTrophy className='text-[8rem] text-blue-400' />
                        <div className="description flex flex-col">
                            <h2 className='text-3xl font-sans font-semibold text-center'>Category Winner</h2>
                            <h2 className='text-2xl captilize text-gray-500 mt-4'>Prizes worth <span className='font-bold'>Rs. 15000</span> -Two Teams </h2>

                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default PrizeSection