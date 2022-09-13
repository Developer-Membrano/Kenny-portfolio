import NavigationBar from "./components/NavigationBar";
import About from "../styles/About.module.scss"




const about = () => {

   


    return (
        <>
            <NavigationBar />
            <div className={About.about_heading}>
                <div className={About.greetings}>
                    <h1>HELLO</h1>
                    <p>
                        Anim ad consectetur excepteur adipisicing magna do duis adipisicing quis occaecat irure. Sit aute id nulla amet proident et do aliquip occaecat incididunt non aliquip officia. Amet ad cupidatat ex eu cillum nisi et officia dolore.
                        Mollit ipsum officia velit proident consequat..
                    </p>

                    <div className={About.divImage}>
                        <img src={'/img/kenny_Membrano.jpg'} width={100} height={100} className={About.Image}></img>
                    </div>
                </div>
            </div>

            <section className={About.About_Me}>
                <div>
                    <p>
                        Consequat qui laborum reprehenderit sit non. Laborum aliquip reprehenderit elit Lorem non do do aliquip sunt ut voluptate exercitation. Cupidatat qui enim aliquip nulla proident magna. Lorem occaecat irure incididunt voluptate mollit occaecat commodo mollit pariatur sunt ex. Do dolore incididunt ut adipisicing tempor ipsum aute fugiat enim id dolor.
                        Minim sit aliqua do ex sint nostrud dolore ex dolor Lorem et ut irure. Ex cillum ea nisi et mollit adipisicing. Magna aliqua qui occaecat ut est sunt labore laboris sit ullamco tempor. Do dolor laborum eu id ullamco minim non irure. Eiusmod velit ullamco labore enim eu dolor ea nostrud minim aliqua aliquip esse irure sint. Ex cupidatat do id consectetur exercitation quis fugiat commodo incididunt occaecat.
                        Sit veniam proident elit non eiusmod ullamco anim fugiat. Culpa anim eiusmod dolor ut enim adipisicing ullamco voluptate id adipisicing occaecat. Laborum ad anim non aliquip et in ea eu Lorem ipsum deserunt sint. Deserunt ad velit labore velit reprehenderit sint qui id magna ad id minim.
                        Officia dolor Lorem enim nostrud incididunt ipsum officia aliquip dolore ea. Excepteur labore aliqua in ad voluptate incididunt dolore voluptate exercitation aliquip laborum.
                    </p>    
                    <br></br>
                    <p>   
                        Adipisicing amet voluptate incididunt commodo amet sunt ullamco aliqua laborum anim. Nostrud amet occaecat proident anim irure veniam velit eu deserunt reprehenderit voluptate aute labore cupidatat.
                        Exercitation magna qui sunt deserunt nulla voluptate id ad anim minim fugiat proident aliquip. Esse est ad voluptate Lorem anim incididunt do anim duis reprehenderit sit id dolore. Sint ut non anim nisi est enim velit ex occaecat culpa. Nostrud nulla irure id Lorem reprehenderit commodo ex ea laboris ut ea sit.
                        Officia sit enim amet exercitation elit est. Aliquip ipsum pariatur cillum culpa velit adipisicing ad id consectetur quis. Commodo amet tempor sunt eiusmod duis in tempor eu. Cupidatat sint mollit do et enim do qui culpa sit qui. Fugiat qui consectetur voluptate nostrud enim.
                        Consectetur proident aliqua duis ut nisi nulla ex. Eu minim aliqua commodo aliqua. Ipsum aliquip non esse nostrud velit ullamco sint quis occaecat laborum sunt aliqua.
                    </p>
                </div>
            </section>
        </>

    )
}

export default about;