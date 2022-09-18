import React, { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../styles/NavigationBar.module.scss'
import { motion } from "framer-motion";

const NavigationBar = () =>{

    const [displayMenu, setDisplayMenu] = useState(false);

    let menuDisplayed;
    if (displayMenu) {
        menuDisplayed =
            <div className={Navigation.overlayMenu}>
                <div onClick={() => setDisplayMenu(!displayMenu)} className={Navigation.closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <div className={Navigation.List}>
                    <Link href='/'><li>Works</li></Link>
                    <Link href={'/projects'}><li>Posters</li></Link>
                    <Link href={'/about'}><li>About</li></Link>
                </div>

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
                <div className={Navigation.NavigationStyles}>
                    <header className={Navigation.header}>
                        <Link href='/'><div><h4> Kenny Membrano </h4></div></Link>
                        <div className={Navigation.BurgerLines} onClick={() => setDisplayMenu(!displayMenu)}>
                            <div className={Navigation.LongLine}></div>
                            <div className={Navigation.ShortLine}> </div>
                        </div>
                    </header>
                    {menuDisplayed}
                </div>

            </motion.div>

        </>


    )
}

export default NavigationBar;