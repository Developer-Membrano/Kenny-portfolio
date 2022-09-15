import NavigationBar from "./components/NavigationBar";
import Projects from "../styles/Projects.module.scss"
import { motion } from "framer-motion";


const projects = () => {
    return(
        <>
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
                            src="https://cdn.lordicon.com/bgywtgwo.json"
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
                    delay: 1.2
                                    
                        }
                    },
                }}            
            
            >            
                <section>

                    <div className= {Projects.parent}>
                        <div className={Projects.div1}>
                            <img src={"/img/Main-Poster_Audition.png"} />
                        </div>
                        <div className={Projects.div2}> 
                            <img src={"/img/Feb_Event_poster.png"} />
                        </div>
                        <div className={Projects.div3}> 
                            <img src={"/img/Solo_Group_Audition.png"} />
                        </div>
                        <div className={Projects.div4}> 
                            <img src={"/img/womens_month.jpg"} />
                        </div>
                        <div className={Projects.div5}> 
                            <img src={"/img/women_empowerment.png"} />
                            <img src={"/img/stream_background.png"} />        
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    )
}


export default projects;