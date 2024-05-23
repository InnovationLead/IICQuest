import React from 'react'

const Card = ({ event, image }) => {
    return (


        <div
            className="block rounded-lg w-[26rem] bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <a href="#!">
                <img
                    className="rounded-t-lg"
                    src={image}
                    alt="" />
            </a>
        </div>
    )
}

export default Card