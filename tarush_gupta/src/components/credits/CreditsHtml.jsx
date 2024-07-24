import './credits.css'

export default function CreditsHtml({ idx }) {
    const textureList = [
        { link: 'https://polyhaven.com/a/dark_wood', name: 'Wood', websiteName: 'polyheaven.com' },
        { link: 'https://hdri-haven.com/', name: 'Envitronment Map', websiteName: 'hdri-haven.com' },
        { link: 'https://in.pinterest.com/pin/3096293488443914/', name: 'Carpet', websiteName: 'pinterest.com/LorenWong' },
        { link: 'https://in.pinterest.com/pin/46161964925481004/', name: 'Table', websiteName: 'pinterest.com/Pinterest' },
    ]
    
    const modelList = [
        { link: 'https://sketchfab.com/NameSsis', name: 'Paper Tablet', websiteName: 'sketchfab.com/NameSsis' },
        { link: 'https://sketchfab.com/samrat33k', name: 'Ipad Stand', websiteName: 'sketchfab.com/MD.Jobair Hossain' },
        { link: 'https://free3d.com/user/ericlim_1995', name: 'Ipad', websiteName: 'free3d.com/ericlim_1995' },
        { link: 'https://sketchfab.com/aliosa123', name: 'Chair', websiteName: 'sketchfab.com/aliosa123' },
        { link: 'https://sketchfab.com/kryik1023', name: 'Drone', websiteName: 'sketchfab.com/Renafox' },
        { link: 'https://sketchfab.com/francesca.cepparulo', name: 'Alexa', websiteName: 'sketchfab.com/francesca.cepparulo' },
        { link: 'https://sketchfab.com/patrakeevasveta', name: 'Bug', websiteName: 'sketchfab.com/patrakeevasveta' },
        { link: 'https://sketchfab.com/pengedarseni', name: 'Github', websiteName: 'sketchfab.com/pengedarseni' },
        { link: 'https://sketchfab.com/PhantomXD', name: 'Java', websiteName: 'sketchfab.com/PhantomXD' },
        { link: 'https://www.turbosquid.com/Search/Artists/Baris-Ergul', name: 'Computer', websiteName: 'turbosquid.com/Baris-Ergul' },
        { link: 'https://www.turbosquid.com/Search/Artists/darick-productions', name: 'Phone', websiteName: 'turbosquid.com/darick-productions' },
        { link: 'https://sketchfab.com/dylanheyes', name: 'Table', websiteName: 'sketchfab.com/dylanheyes' },
        { link: 'https://sketchfab.com/inven2000', name: 'Cup', websiteName: 'sketchfab.com/inven2000' },
    ]
    
    const iconList = [
        { link: 'https://www.flaticon.com', name: 'Flaticon', websiteName: 'flaticon.com' },
    ]
    return <div className={idx===9?"creditsContainer":"creditsContainer hidden"}>
        <div className="creditsWrapper">
            <div className="left">
                <h2>Credits and Acknowledgements</h2>
                <section>
                    <strong>Set Up</strong>
                    <ul>
                        <li>
                            <span className="name">Vighnesh Aggarwal</span>
                            <a href="https://www.linkedin.com/in/vighnesh-aggarwal-703155267/" target='_blank'>linked-in</a>
                        </li>
                    </ul>
                </section>
                <section>
                    <strong>Icons</strong>
                    <ul>
                        {
                            iconList.map((item, index) => {
                                return <li key={index}>
                                    <span className="name">
                                        {item.name} 
                                    </span>
                                    <a href={item.link} target='_blank'>{item.websiteName}</a>
                                </li>
                            })
                        }
                    </ul>
                </section>

                <section>
                    <strong>Textures</strong>
                    <ul>
                        {
                            textureList.map((item, index) => {
                                return <li key={index}>
                                    <span className="name">
                                        {item.name} 
                                    </span>
                                    <a href={item.link} target='_blank'>{item.websiteName}</a>
                                </li>
                            })
                        }
                    </ul>
                </section>
            </div>
            <div className="mid">
                If you notice that any credit is missing or incorrect, please contact me to update the information.
            </div>
            <div className="right">
                
                <section>
                    <strong>Models</strong>
                    <ul>
                        {
                            modelList.map((item, index) => {
                                return <li key={index}>
                                    <span className="name">
                                        {item.name} 
                                    </span>
                                    <a href={item.link} target='_blank'>{item.websiteName}</a>
                                </li>
                            })
                        }
                    </ul>
                </section>
            </div>
        </div>
    </div>
}