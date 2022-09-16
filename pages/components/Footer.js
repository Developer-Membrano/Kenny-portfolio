import FooterStyles from '../../styles/Footer.module.scss'


const Footer = () => {
    return(
        <>
            <div className={FooterStyles.FooterClassStyle}>
                <footer className={FooterStyles.Footer}>
                    <div>
                        <p>Need a Developer?</p>
                        <h1>Lets Work Together!</h1>
                        <h3>Job.KennyMembrano@gmail.com</h3>
                    </div>
                    <div className={FooterStyles.Copyright}>
                        Copyright &#169; 2022 - Kenny Membrano, All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;