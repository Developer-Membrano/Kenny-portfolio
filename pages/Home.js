
import Link from "next/link"
import styles from "../styles/BreakPoints.module.scss"
import Header from "../styles/Home.module.scss"
import NavigationBar from "./components/NavigationBar"

const Home = () => {


    return (
        <div className={styles.responsive_test}>
            <NavigationBar />
            <div className={Header.MainContainer}>
                <div>
                    <h1 >
                        Hi there! Im Kenny  <br />
                        <span className={Header.intro}> Passionate and an Enthusiast in Technological industry  with an experience in developing web applications 
                        testing and designing user interface.</span> 
                    </h1>

                    <p className={Header.Description}>
                        Lorem ipsum dolor sit amet  consectetur adipiscing elit  sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. 
                        Tristique et egestas quis ipsum suspendisse ultrices gravida. Sed pulvinar proin gravida hendrerit lectus. 
                        Amet venenatis urna cursus eget nunc. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. 
                    </p>
                </div>

                <hr></hr>

                <section>
                    <h4>Student Affairs Services Official Website- <i>The National Teachers College</i></h4>
                    <p>August - July 2022</p>

                    <div className={Header.ImageContainer}>
                         <Link href={"https://sas-website-rho.vercel.app/"}><img src="/img/Homepage_NTC.jpg" className={Header.image} alt="Student Affairs Service Official Website" /></Link>
                        <p>
                            Worked on multiple staff to gather datas that are needed to be placed in the website.
                            Designed a user interface that will be officially used by the institution (National Teachers College).
                            Used different Programming languages (React Js  Next Js  TypeScript  Sanity) to developed the website.
                        </p>
        
                    </div>
                </section>


            </div>

            <div className={Header.MainContainer}>
                <hr></hr>

                <section>
                    <h4>Student Affairs Services Official Website- <i>The National Teachers College</i></h4>
                    <p>August - July 2022</p>

                    <div className={Header.ImageContainer}>
                        {/* <Image>

                        </Image> */}
                    </div>
                </section>
            </div>


            <div>
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
        </div>
    )
}

export default Home;