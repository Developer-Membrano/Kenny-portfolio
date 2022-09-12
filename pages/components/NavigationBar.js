import React, { useState } from 'react'
import Link from 'next/link'

import Header from '../../styles/Home.module.scss'

const NavigationBar = () =>{

    const [displayMenu, setDisplayMenu] = useState(false);

    let menuDisplayed;
    if (displayMenu) {
        menuDisplayed =
            <div className={Header.overlayMenu}>
                <div onClick={() => setDisplayMenu(!displayMenu)} className={Header.closeMenu}>X</div>
                <Link href='/'><li>Works</li></Link>
                <Link href={'/projects'}><li>Projects</li></Link>
                <Link href={'/about'}><li>About</li></Link>
            </div>
    }


    return(
        <>
            <header className={Header.header}>
                <div><h4> Kenny Membrano </h4></div>
                <div className={Header.BurgerLines} onClick={() => setDisplayMenu(!displayMenu)}>
                    <div></div>
                    <div></div>
                </div>
            </header>
            {menuDisplayed}
        </>


    )
}

export default NavigationBar;