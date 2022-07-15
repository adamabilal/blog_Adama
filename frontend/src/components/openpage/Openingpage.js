import './openingpage.css'
import Navbar from '../navbar/Navbar';


function Openingpage()
{
    return(
        <>
            <div className="container-fluid opening_page mt-2 pb-0" style={{"overflowX":"hidden"}}>

                <Navbar></Navbar>
                
                <div className="row mt-5 mb-1 pt-5 ">

                <div className="col-lg-5 offset-md-1 intro mb-2 mx-auto text-center">
                    Bonjour, <br /> Je suis Adama TRAORÉ,
                    <div class="morph_cont">
                    <div class="morph_word">Étudiant en Licence 3 Informatique</div>
                    <div class="morph_word"> Développeur Full Stack</div>
                    </div>
                    <p style={{color:"white"}}> À la <b>recherche d'un stage </b> d'une durée de 4 à 5 mois à partir du 10 Avril 2023 pour la validation de ma licence 3 informatique.</p>
                </div>

                {/* <div className="col-lg-5 text-center intro_img mb-5 text-center offset-md-1 mx-auto">
                    AT.
                </div> */}

                </div>

                 {/* wave start */}

                <div className="row">

                <div className="wave_anim" style={{"height": 250}}>
                    <div className="wave wave1"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                    <div className="wave wave4"></div>
                </div>

                </div>

                {/* wave end */}

            </div>

        </>
    )
}    

export default Openingpage;