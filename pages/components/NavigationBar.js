import React, { useState } from 'react'
import Link from 'next/link'
import Header from '../../styles/Home.module.scss'
import { motion } from "framer-motion";

const NavigationBar = () =>{

    const [displayMenu, setDisplayMenu] = useState(false);

    let menuDisplayed;
    if (displayMenu) {
        menuDisplayed =
            <div className={Header.overlayMenu}>
                <div onClick={() => setDisplayMenu(!displayMenu)} className={Header.closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                
                </div>
                <Link href='/'><li>Works</li></Link>
                <Link href={'/projects'}><li>Posters</li></Link>
                <Link href={'/about'}><li>About</li></Link>
            </div>
    }


    return(
        <>  
            <motion.div 
             initial="hidden" animate="visible" variants={{
                hidden:{
                    opacity: 0,
                },
                visible: {
                    opacity: 1,
                    transition: {
                        delay: 2,
                    }
                },
            }}               
            >
                <header className={Header.header}>
                    <div><h4> Kenny Membrano </h4></div>
                    <div className={Header.BurgerLines} onClick={() => setDisplayMenu(!displayMenu)}>
                        <div className={Header.LongLine}></div>
                        <div className={Header.ShortLine}> </div>
                    </div>
                </header>
                {menuDisplayed}
            </motion.div>

        </>


    )
}

export default NavigationBar;