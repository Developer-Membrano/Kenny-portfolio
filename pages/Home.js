
import Link from "next/link"
import styles from "../styles/BreakPoints.module.scss"
import Header from "../styles/Home.module.scss"
import NavigationBar from "./components/NavigationBar"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Kenny from "./Kenny";
import { useState } from "react";


const Home = () => {
    const router = useRouter();
    const [showTitle, setShowtTitle] = useState(true);
    setTimeout(() => {
        setShowtTitle(false);
    }, 2000);

    return (
        <>
        { showTitle && (    
          <Kenny />
        )}
   
        <AnimatePresence exitBeforeEnter>
            <motion.div className={styles.responsive_test}
                key = {router.route}
                initial ="initialState"
                animate="animateState"
                exit = "exitState"
                transition={{
                    duration: 1.5,
                }}
                variants={{
                    intialState: {
                        opacity: 0,
                        clipPath: "circle(6s.5% at 50% 50%)",
                        
                    },
                    animateState: {
                        opacity: 1,
                        clipPath: "circle(200vh at 100% 100%)"
                    },
                }} 
            >


                <NavigationBar/>



                <div className={Header.MainContainer}>
                    <div>
                        
                            <motion.div initial="hidden" animate="visible" variants={{
                            hidden:{
                                // scale: .8,
                                y: 300,
                                opacity: 0,
                            },
                            visible: {
                                // scale: 1,
                                y: 0,
                                opacity: 1,
                                transition: {
                                    delay: .4
                                    
                                }
                            },
                        }}>Hi there! Im Kenny </motion.div> 
                        <h1>
                            <br />
                            <span className={Header.intro}> Passionate and an Enthusiast in Technological industry  with an experience in developing web applications
                            creating backend and designing user interface.
                            </span> 
                        </h1>


                        <p className={Header.Description}>
                            Lorem ipsum dolor sit amet  consectetur adipiscing elit  sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. 
                        </p>
                    </div>

                    <hr></hr>

                    <section className="mt-4 mb-4">
                        <h4>Student Affairs Services Official Website <i>The National Teachers College</i></h4>
                        <p className="mb-4">August - July 2022</p>

                        <div className={Header.ImageContainer}>
                            <Link href={"https://sas-website-rho.vercel.app/"}><img src="/img/Homepage_NTC.jpg" className={Header.image} alt="Student Affairs Service Official Website" /></Link>
                            <p className="mt-4">
                                Worked on multiple staff to gather datas that are needed to be placed in the website.
                                Designed a user interface that will be officially used by the institution (National Teachers College).
                                Used different Programming languages (React Js  Next Js  TypeScript  Sanity) to developed the website.
                            </p>
                        </div>
                    </section>


                </div>

                <hr></hr>


                <div className="mt-4">
                    <h1>Previous Projects</h1>
                    <h5>Project Name <i>Description</i></h5>
                        <div className={Header.ImageContainer}>
                            {/* <Image>

                            </Image> */}
                        </div>
                </div>


                <footer className={Header.footer}>
                    <div><h1> Email | </h1></div>
                    <div><h1> LinkedIn | </h1></div>
                    <div><h1> Resume</h1></div>
                </footer>

            </motion.div>
        </AnimatePresence>
        </>
    )
}

export default Home;