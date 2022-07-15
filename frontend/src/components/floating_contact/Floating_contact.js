import ReactTooltip from "react-tooltip"
import swal from "sweetalert"; //for alert box

import './floating_contact.css'

import '../../js/floating_contact_anim.js'

import float_cont_img from '../../images/floating_contact.png'


function Float_contact()
{

    function contact_alert2() {
        swal({
            title: "ATTENTION !!",
            text: "Merci de votre intérêt !! 😄 \n \n Je ne pourrai pas recevoir votre message à partir du formulaire de contact suivant en raison des limitations du quota de domaine gratuit open source et de sa limitation pour héberger un site Web dynamique. Cependant, vous pouvez me contacter en utilisant l'un des liens sociaux ci-joints, courrier ou numéro de contact. Vous pouvez accéder au code source des composants dynamiques de ce même site Web sur mon compte GitHub. \n \n MERCI 😃",
            icon: "warning",})
    }

    return(
        <>
            <div className="float_con_2 p-0 text-end" id="float_contact" style={{"overflowX":"hidden"}}>
                <a href="#" data-bs-toggle="modal" data-bs-target="#contactModal">
                    <img src={ float_cont_img } alt="" className="float_cont_img_size"  data-tip="Entrez en contact avec moi !!" type="button" onClick={contact_alert2} />
                    <ReactTooltip place="top" type="light" effect="float"/>
                </a>    
            </div>
        </>
    )
}

export default Float_contact;