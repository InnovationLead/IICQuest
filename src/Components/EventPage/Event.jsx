import React from 'react'
import Card from './Card'

const Event = () => {
    return (
        <>
        <h2 id='highlight' className='mt-40 font-oswald text-center text-6xl '>Event Highlights</h2>
            <div className="flex justify-evenly mt-6 pt-12">
                <Card event="Guest Lecture Session by Industry Experts" image='./images/events/Guest.png'/>
                <Card event="36 Hour Long Rigrious Hackthon" image='./images/events/Hackathon.png'/>
                <Card event="Panel Discussion on the buzzing Topic" image='./images/events/Panel.png'/>
            </div>

        </>
    )
}

export default Event