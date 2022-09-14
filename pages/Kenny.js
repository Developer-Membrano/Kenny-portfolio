import KennyPage from "../styles/Kenny.module.scss"
import { motion } from "framer-motion";

const Kenny = () => {
    return(

        <motion.div className={KennyPage.LoadingPage}
            initial="hidden" animate="visible" variants={{
                hidden:{
                    // scale: .8,
                    opacity: 0,
                    clipPath: "inset(54% 0 46% 0),"
                },
                visible: {
                    // scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .2,
                        clipPath: "inset(0 0 0 0)",
                    }
                },
            }}
        
        >
            <h1>Kenny Membrano</h1>
        </motion.div>
    )
}

export default Kenny;