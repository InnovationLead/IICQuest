import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-scroll';


const NAVIGATION_OFFSET = 66;


const Navbar = () => {
  const [isOffset, setIsOffset] = useState(false);
  const listenScrollEvent = e => {

    if (window.scrollY >= NAVIGATION_OFFSET) {
      console.log("scroll event has been fired")
      setIsOffset(true);
    } else {
      setIsOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <>
      <nav className={`lg:fixed w-[100%] h-[6rem] z-10  ${isOffset ? 'nav_bar-offset-crossed' : 'bg-main-bg-color'}`}>
        <ul className='flex flex-wrap text-[1.4rem] p-8  text-nav-font-color'>
        <li className='mx-6 px-2 cursor-pointer w-28'>
            <img src="/images/logo/IIC Quest.png" alt=""  className='mt-[-28px]'/>
          </li>
          <li className='mx-6 px-2 cursor-pointer'>
            <Link
            activeClass='active'
            to='home'
            smooth={true}
            duration={500}
            offset={-70}
            >Home</Link>
          </li>
          <li className='mx-6 px-2 cursor-pointer'>
            <Link
              activeClass='active'
              to='about'
              smooth={true}
              duration={500}
              offset={-70}
            >About</Link>
          </li>
          <li className='mx-6 px-2 cursor-pointer'>
            <Link
              activeClass='active'
              to='highlight'
              smooth={true}
              duration={500}
              offset={-70}
            >Events</Link>
          </li>
          <li className='mx-6 px-2 cursor-pointer'>
            <Link
              activeClass='active'
              to='faq'
              smooth={true}
              duration={500}
              offset={-70}
            >FAQ</Link>
          </li>
          <li className='mx-6 px-2 cursor-pointer'>
            <Link
             activeClass='active'
             to='prize'
             smooth={true}
             duration={500}
             offset={-70}
            >Prizes</Link>
          </li>
          <li className='mx-6 px-2 cursor-pointer'>
            <Link
             activeClass='active'
             to='gallery'
             smooth={true}
             duration={500}
             offset={-70}
            >Gallery</Link>
          </li>
        </ul>
      </nav>

    </>
  )
}

export default Navbar