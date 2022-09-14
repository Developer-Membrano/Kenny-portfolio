import NavigationBar from "./components/NavigationBar";
import About from "../styles/About.module.scss"
import { motion } from "framer-motion";




const about = () => {
    return (
        <>
            <NavigationBar />
            <motion.div
                initial="hidden" animate="visible" variants={{
                    hidden:{
                    y: 100,
                    opacity: 0,
                    },
                    visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                    delay: 1.6
                                    
                        }
                    },
                }}              
            
            >

            <div className={About.about_heading}>
                <div className={About.greetings}>
                    <h1>Words.</h1>
                    <h4>About Me</h4>
                    <p>
                        Im Passionate about Web Development. Im excited to pursue opportunities within many industries
                        and hoping to become a Fullstack Web Developer.
                    </p>

                    <div className={About.divImage}>
                        <img src={'/img/kenny_Membrano.jpg'} className={About.Image}></img>
                    </div>
                </div>
            </div>

            <section className={About.About_Me}>
                <div>
                    <p>
                        <strong>Kenny Membrano</strong> is a Front-end Developer/ Software Engineer based in Philippines. He earned his Bachelor of Science in Information Technology in
                        National Teachers College. During his internship he develop a Website (Student Affairs Services) to help the student Government also the School itself
                        to simply help the students to know more about the school activities, announcement, and students questions.

                    </p>
                </div>
            </section>

            <hr></hr>

            <section className={About.Tools}>
                <div>
                    <h1>Tools That I Use</h1>
                </div>
            </section>

            <section>
                <div className={About.ToolsIUse}>
                    <div>
                        <div className={About.Web_dev}>
                            <div className={About.Title}>
                                <h3>WEB DEVELOPMENT</h3>
                                <p>
                                    I can Develop Web Applications
                                    HTML, CSS, JAVASCRIPT | NODE JS | MYSQL
                                </p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-20 h-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                            </svg>

                        </div>
                    </div>


                    <div>
                        <div className={About.Web_dev}>
                            <div className={About.Title}>
                                <h3>DESIGN SERVICES</h3>
                                <p>
                                    I can create Designs
                                    FIGMA | Adobe ILLUSTRATION | Adobe PHOTOSHOP
                                </p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-20 h-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                            </svg>
                        </div>
                    </div>


                    <div>
                        <div className={About.Web_dev}>
                            <div className={About.Title}>
                                <h3>RESUME</h3>
                                <p>
                                    
                                    click to view or download my resume.
                                </p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="w-20 h-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>

                        </div>

                    </div>


                </div>
            </section>

            <hr></hr>

            <footer className={About.Footer}>
                <div>
                    <p>Need a Developer?</p>
                    <h1>Lets Work Together!</h1>
                    <h3>Job.KennyMembrano@gmail.com</h3>
                </div>
                <div className={About.Copyright}>
                     &#169; 2022 - Kenny Membrano, All rights reserved.
                </div>
            </footer>
        
        </motion.div>
        </>

    )
}

export default about;