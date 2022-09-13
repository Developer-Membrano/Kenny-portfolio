import NavigationBar from "./components/NavigationBar";
import Projects from "../styles/Projects.module.scss"


const projects = () => {
    return(
        <>
        <NavigationBar />
            <div className={Projects.Heading}>
                <h1>PROJECTS</h1>
                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className= "w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3" />
                    </svg>
                

            </div>
           
        </>
    )
}


export default projects;