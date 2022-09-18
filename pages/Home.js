import Link from "next/link";
import HomeStyles from "../styles/HomeStyles.module.scss"
import NavigationBar from "./components/NavigationBar"
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Kenny from "./Kenny";
import { useState } from "react";
import Footer from "./components/Footer";


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
            <motion.div className={HomeStyles.overstyles}
                key = {router.route}
                initial ="initialState"
                animate="animateState"
               
                transition={{
                    delay: 2,
                    duration: 2,
                }}
                variants={{
                    intialState: {
                        opacity: 0,
                    },
                    animateState: {
                        opacity: 1,
                    },
                }} 
            >
                <NavigationBar/>
                <div className={HomeStyles.HomePage}>
                    <div>
                        <h1 className={HomeStyles.intro}>
                            <span>KENNY MEMBRANO</span>  is a Front-end Web Developer &#38; User Interface Designer &#44;
                                based in Philippines.
                            
                        </h1>
                        <div className={HomeStyles.DescriptionContainer}>
                            <p className={HomeStyles.introductionWord}>INTRODUCTION</p>
                            <p className={HomeStyles.Description}>
                                Passionate and an Enthusiast in Technological industry  with an experience in developing web applications
                                creating backend and designing user interface.
                                Lets help each other and turn your ideas to make
                                your business more profitable.
                            </p>
                        </div>
                    </div>
                    
                    <hr></hr>
                

                    <section className={HomeStyles.ProjectSection}>
                        <h4>Student Affairs Services Official Website <i>The National Teachers College</i></h4>
                        <h5>August - July 2022</h5>

                        <div className={HomeStyles.ImageContainer}>
                            <Link href={"https://sas-website-rho.vercel.app/"}><img src="/img/Homepage_NTC.jpg" className={HomeStyles.image} alt="Student Affairs Service Official Website" /></Link>
                            <p>
                                Worked on multiple staff to gather datas that are needed to be placed in the website.
                                Designed a user interface that will be officially used by the institution (National Teachers College).
                                Used different Programming languages (React Js  Next Js  TypeScript  Sanity) to developed the website.
                            </p>
                        </div>
                    </section>


                


                <hr></hr>


                    <div className="mt-4">
                        <h1 className={HomeStyles.ProjectTitle}>User Interface Design Projects</h1>
                        <h5>E-commerce Landing Page Design</h5>
                        <Link href={"https://www.figma.com/file/1lSJH2FnpGYx5rVKJJWqym/UI-Designs?node-id=4%3A90"}>
                            <img src="/img/E-commerce_project.webp" className={HomeStyles.ecommerce}></img>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <h1 className={HomeStyles.ProjectTitle}>Side Projects</h1>
                        <h5>Friend List Application</h5>
                        <Link href={"https://friendlist-application.000webhostapp.com/src/index.php"}>
                            <img src="/img/friend.webp" className={HomeStyles.friendapp}></img>
                        </Link>
                    </div>


                    <footer className={HomeStyles.footer}>
                        <div><h1> Email | </h1></div>
                        <div> <Link href={'https://www.linkedin.com/in/kenny-m-2041911b6'}><h1> LinkedIn | </h1></Link> </div>
                        <div><h1> Resume</h1></div>
                    </footer>
                </div>

            <Footer />   
            </motion.div>
        </AnimatePresence>
        </>
    )
}

export default Home;