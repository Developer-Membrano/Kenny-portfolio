import NavigationBar from "./components/NavigationBar";
import Projects from "../styles/Projects.module.scss"


const projects = () => {
    return(
        <>
        <NavigationBar />
            <div className={Projects.Heading}>
                <h1>POSTERS</h1>
                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className= "w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3" />
                    </svg>
                

            </div>

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
           
        </>
    )
}


export default projects;