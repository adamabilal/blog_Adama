import swal from "sweetalert"; //for alert box

import './common_css.css'
import './button.css'

import '../../js/fullpage_anim.js'

import Progressbar from '../progressbar/Progressbar';
import Floating_social from '../floating/Floating_social';
import Openingpage from '../openpage/Openingpage';
import Counter from '../counter/Counter';
import Bio from '../bio/Bio';
import Abtme from '../about/Abtme';
import Marquee from '../marque/Marquee';
import Contactme from '../contactme/Contactme';
import Totop from '../toptop/Totop';
import Project from '../project/Project';
import Footer from '../footer/Footer';
import Float_contact from '../floating_contact/Floating_contact';

function App()
{

    window.onload = function(){
        swal({
            title: "Bonjour !! 😃✌",
            text: "Ce site Web a été conçu et développé  par Adama TRAORÉ. \n \n  Merci!! 😃",
            icon: "success",})
    }

    return(
        <>
            <Openingpage />
            <Counter />
            <Bio />
            <Abtme />
            <Marquee />
            <Project />
            <Footer />

{/* -------------------------------------------------------------- */}

            <Progressbar />
            <Floating_social />
            <Totop />
            <Float_contact />
            <Contactme />


        </>
    )
}

export default App;