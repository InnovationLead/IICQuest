import React from 'react'
import './style.css'

const Maps = () => {
    return (
        
            <div className='responsive-map w-[100%] lg:w-[50%]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114116.62448473033!2d87.25984969526718!3d26.643855007445907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6ea070e7b18b%3A0x2959e2a3e2bf54e0!2sItahari%20International%20College!5e0!3m2!1sen!2snp!4v1716028954071!5m2!1sen!2snp"
                    width="600" height="450"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

    )
}

export default Maps