import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedinIn } from 'react-icons/fa'



const SocialHandle = () => {
  return (
    <div className='flex text-3xl gap-10 mb-10 cursor-pointer'>
      <a href="https://www.instagram.com/iic.nepal?igsh=MTh3ZHgyZGhocTZ4aQ%3D%3D&utm_source=qr"
        target='_blank'
      >
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/share/XVkEjV2rGSuPZQ3q/?mibextid=LQQJ4d"
        target='_blank'
      >
        <FaFacebook />
      </a>
      <a href="https://www.linkedin.com/school/itahari-international-college/?originalSubdomain=np"
        target='_blank'
      >
        <FaLinkedinIn />

      </a>
    </div>
  );
}

export default SocialHandle