import swal from "sweetalert"; //for alert box

import './navbar.css'

import nav_logo from '../../images/logo.png'; 


export default function Navbar()
{

        function openNav() {
            document.getElementById("myNav").style.width = "100%";
        }
      
        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }

        function contact_alert() {
            swal({
                title: "ATTENTION !!",
                text: "Merci de votre intérêt !! 😃 \n \n Je ne pourrai pas recevoir votre message à partir du formulaire de contact suivant en raison des limitations du quota de domaine gratuit open source et de sa limitation pour héberger un site Web dynamique. Cependant, vous pouvez me contacter en utilisant l'un des liens sociaux ci-joints, courrier ou numéro de contact. Vous pouvez accéder au code source des composants dynamiques de ce même site Web sur mon compte GitHub. \n \n MERCI 😃",
                icon: "warning",})
        }

    return(
        <>
            <div className="row" id="page_top" style={{"overflowX":"hidden"}}>
                <div className="col-md-10 offset-md-1 mt-3 navbar_bg">
                    <nav className="navbar navbar-expand-lg w-100">
                    <div className="container-fluid">
                        <a href="#"> <img src={ nav_logo } alt="" className="logo_size" /> </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
                        
                        <span> <i onClick={openNav} className="fa-solid fa-bars-staggered nav_toggler"> </i> </span>
                        </button>
                            <div className="collapse offset-md-4 navbar-collapse">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <a className="nav-link nav_text btn btn_effect" href="#abt_me"> À PROPOS DE MOI </a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link nav_text btn btn_effect" href="#" data-bs-toggle="modal" data-bs-target="#contactModal" onClick={contact_alert}> CONTACTEZ-MOI </a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link nav_text btn btn_effect" href="#project"> MES PROJETS </a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    </nav>
                </div>
            </div>

            {/* responsive navbar start */}

            <div id="myNav" className="overlay">

                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <div className="overlay-content">
                <a href="#" data-bs-toggle="modal" data-bs-target="#contactModal" className="btn_effect" onClick={closeNav} >CONTACTEZ-MOI</a>
                <a href="#abt_me" className="btn_effect" onClick={closeNav}>À PROPOS DE MOI</a>
                <a href="#project" className="btn_effect" onClick={closeNav}> MES PROJETS</a>
                </div>

            </div>

            {/* responsive navbar end */}
        </>
    );
}