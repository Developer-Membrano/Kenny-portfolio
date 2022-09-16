import NavigationBar from "./components/NavigationBar";
import Projects from "../styles/Projects.module.scss"
import { motion } from "framer-motion";
import Head from "next/head";
import Footer from "./components/Footer";


const projects = () => {
    return(
        <>
              <Head>
              <link rel="icon" type="image" href="img/Logo-WhiteBG.png"></link>
                <title>Kenny portfolio</title>
              </Head>
            <NavigationBar />
                <div className={Projects.Heading}>
                    <motion.div
                        initial="hidden" animate="visible" variants={{
                            hidden:{
                                // scale: .8,
                                x: -100,
                                opacity: 0,
                            },
                            visible: {
                                // scale: 1,
                                x: 0,
                                opacity: 1,
                                transition: {
                                    delay: 1
                                    
                                }
                            },
                        }}>
                        <h1>POSTERS</h1>
                    </motion.div>
                    
                    <motion.div
                        initial="hidden" animate="visible" variants={{
                            hidden:{
                                x: -100,
                                opacity: 0,
                            },
                            visible: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    delay: 1   
                                }
                            },
                        }}                    
                    >
                        <lord-icon
                            trigger="hover"
                            colors="primary:#121331,secondary:#08a88a"
                            stroke="55"
                            style={{width: '200px', height: '200px'}}>
                        </lord-icon>
                    </motion.div>

                </div>
            <motion.div
                initial="hidden" animate="visible" variants={{
                    hidden:{
                    x: -100,
                    opacity: 0,
                    },
                    visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                    delay: 1
                                    
                        }
                    },
                }}            
            
            >            
                <section className = {Projects.listOfProject}>
                    <div className={Projects.ProjectTitleContainer}>
                        <h3 className={Projects.ProjectTitle}>Posters I created for being a member of HATAW TANGLAW CLUB <i>- September 2020 - 2022</i> </h3>
                        
                    </div>
                    <div className= {Projects.parent}>
                        <div className={Projects.div1}>
                            <img src={"/img/Main-Poster_Audition.webp"} />
                        </div>
                        <div className={Projects.div2}> 
                            <img src={"/img/Feb_Event_poster.webp"} />
                        </div>
                        <div className={Projects.div3}> 
                            <img src={"/img/Solo_Group_Audition.webp"} />
                        </div>
                        <div className={Projects.div4}> 
                            <img src={"/img/womens_month.webp"} />
                        </div>
                        <div className={Projects.div5}> 
                            <img src={"/img/women_empowerment.webp"} />
                            <img src={"/img/stream_background.webp"} />        
                        </div>
                    </div>
                </section>

                <Footer />
            </motion.div>
        </>
    )
}


export default projects;