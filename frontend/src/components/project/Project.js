import swal from "sweetalert"; //for alert box

import './project.css'

import p_img1 from '../../images/p1.png';
import p_img2 from '../../images/p2.png';
import p_img3 from '../../images/p3.png';
import p_img4 from '../../images/p4.png'
import p_img5 from '../../images/p5.png'



function Project()
{

    function message()
    {
        swal({
            title: "Bienvenue !! ",
            text: 'Vous êtes déjà sur le projet.',
            icon: "warning",
        })
    } 

    return(
        <>
            <div className="container-fluid project_container" style={{"overflowX":"hidden"}}>

                {/* project heading */}
                <div className="row project_hding ">
                    <h4 className="mt-5" id="project"> MES RÉALISATIONS </h4> <br />
                    <h1><b> projets effectués </b></h1>
                </div>

                <div className="row py-5">

                    {/* project 1 */}
                    <div className="col-md-3 py-3 mt-3 project_card mx-auto" id="project3">
                        
                        <div className="project_img text-center ">
                            <img src= {p_img3} alt="" className="project_img_size" />   
                        </div>

                        <div className="project_intro mt-4">
                            <h3>SITE DE E-COMMERCE</h3> 
                            <h4>MERN Stack / site dynamique de e-commerce</h4>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>

                        <h5 className='text-start'>Les caractéristiques</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li>Intégration de manière dynamique de toutes les fonctionnalités clés d'un site e-commerce.</li>
                                    <li>Création de plusieurs API personnalisées à l'aide de Nodejs et intégration avec une configuration React.</li>
                                    <li>Suivi des meilleures pratiques de code tout en développant un code dynamique et réutilisable.</li>
                                </ul>
                            </h6>       

                        </h5>

                        <h6 className='project_tech_hd'>Technologies utilisées</h6>
                        <h3 className='mb-2 text-light'>
                            <i class="fa-brands fa-html5 mx-2"></i>
                            <i class="fa-brands fa-css3-alt mx-2"></i>
                            <i class="fa-brands fa-js-square mx-2"></i>
                            <i class="fa-brands fa-bootstrap mx-2"></i>
                            <i class="fa-brands fa-react mx-2"></i>
                            <i class="fa-brands fa-node mx-2"></i>
                            <i class="fa-brands fa-npm mx-2"></i>
                            <i class="fa-brands fa-git-alt mx-2"></i>
                            <i class="fa-brands fa-envira mx-2"></i>
                        </h3>

                        <center><button className="btn btn_effect ms-4 p-2 my-1 project_links"  style={{"float":"left"}}>
                            <a href='https://ecommerce-application-adama.netlify.app/' target="_blank">
                            Démo en Ligne  <i class="fa-solid fa-arrow-right-long ms-1"></i>
                            </a>
                        </button></center>

                        <center><button className="btn btn_effect me-4 p-2 my-1 project_links"  style={{"float":"right"}}>
                            <a href='https://github.com/adamabilal/github/tree/master/ecommerce' target="_blank">
                            Code Source <i className="fa-solid fa-arrow-right-long ms-1"></i>
                            </a>   
                         </button></center>
                            

                    </div>

                    {/* project 2 */}
                    <div className="col-md-3 p-2 mt-3 project_card mx-auto" id="project2">
                        
                        <div className="project_img text-center ">
                            <img src= {p_img2} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2> MON PORTFOLIO</h2>
                            <h3>Site Web de portfolio conçu avec react & nodejs</h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                        <h5 className='text-start'>Les caractéristiques</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> La partie frontend et backend sont entiérement responsive.</li>
                                    <li>Création de tous les composants à partir de zéro en utilisant React et Javascript.</li>
                                    <li>Amination personnalisée codée à la main en utilisant css et Jquery pour rendre le site Web interactif.</li>
                                    <li>Travailler sur la façon de déployer un site Web en direct.</li>
                                </ul>
                            </h6>       

                        </h5>

                        <h6 className='project_tech_hd'>Technologies utilisées</h6>
                        <h3 className='mb-2 text-light'>
                            <i class="fa-brands fa-html5 mx-2"></i>
                            <i class="fa-brands fa-css3-alt mx-2"></i>
                            <i class="fa-brands fa-js-square mx-2"></i>
                            <i class="fa-brands fa-bootstrap mx-2"></i>
                            <i class="fa-brands fa-react mx-2"></i>
                            <i class="fa-brands fa-node mx-2"></i>
                            <i class="fa-brands fa-git-alt mx-2"></i>
                            <i class="fa-brands fa-npm mx-2"></i>
                            <i class="fa-brands fa-envira mx-2"></i>
                        </h3>

                        <center><button className="btn btn_effect my-1 ms-4 p-2 project_links" onClick={message} style={{"float":"left"}}>
                        Démo en Ligne 
                        <i class="fa-solid fa-arrow-right-long ms-1"></i> 
                        </button></center>
                        
                        <center><button className="btn btn_effect me-4 p-2 my-1 project_links"  style={{"float":"right"}}>
                            <a href='https://github.com/adamabilal/github/tree/master/blog_Adama' target="_blank" rel="noreferrer">
                                 Code Source <i className="fa-solid fa-arrow-right-long ms-1"></i>
                            </a>     
                        </button></center>

                    </div>

                    {/* project 3  */}
                    <div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {p_img1} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>SITE DE RESTAURANT</h2>
                            <h3>Site restaurant statique Frontend </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Les caractéristiques</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Cette page web est statique et responsive. ce n'est que la partie frontend qui est codée.</li>
                                    <li>Gestion des couleurs, de l'illustration, de la typographie et de l'image de marque.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technologies utilisées</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-github-alt mx-2"></i>
                        </h3>

                             <center><button className="btn btn_effect ms-4 my-1 p-2 project_links" style={{"float":"left"}}> 
                                <a href="https://restaurant-lagastro.netlify.app/" target="_blank" rel="noreferrer"> Démo en Ligne <i class="fa-solid fa-arrow-right-long ms-1"></i>
                                </a> 
                            </button></center>

                            <center><button className="btn btn_effect my-1 me-4 p-2 project_links" style={{"float":"right"}}> 
                                <a href="https://github.com/adamabilal/github/tree/master/restaurant" target="_blank" rel="noreferrer">  Code Source <i className="fa-solid fa-arrow-right-long ms-1"></i> 
                                </a> 
                            </button></center>

                    </div>
                    {/* project 4  */}
                    <div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {p_img4} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>SITE DE VOYAGE</h2>
                            <h3>Site de voyage responsive Frontend </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Les caractéristiques</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Cette page web est responsive. ce n'est que la partie frontend qui est codée.</li>
                                    <li>Gestion des couleurs, de l'illustration, de la typographie et de l'image de marque.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technologies utilisées</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-github-alt mx-2"></i>
                        </h3>

                             <center><button className="btn btn_effect ms-4 my-1 p-2 project_links" style={{"float":"left"}}> 
                                <a href="https://voyage-touristique.netlify.app/" target="_blank" rel="noreferrer"> Démo en Ligne <i class="fa-solid fa-arrow-right-long ms-1"></i>
                                </a> 
                            </button></center>

                            <center><button className="btn btn_effect my-1 me-4 p-2 project_links" style={{"float":"right"}}> 
                                <a href="https://github.com/adamabilal/voyage" target="_blank" rel="noreferrer">  Code Source <i className="fa-solid fa-arrow-right-long ms-1"></i> 
                                </a> 
                            </button></center>

                    </div>
                    {/* project 5  */}
                    <div className="col-md-3 py-2 mt-3 project_card mx-auto" id="project1">
                        
                        <div className="project_img text-center ">
                            <img src= {p_img5} alt="" className="project_img_size" />
                        </div>

                        <div className="project_intro mt-4 ">
                            <h2>Visite officielle de la commune de ma ville</h2>
                            <h3>Site responsive Frontend </h3>
                        </div>

                        <h5 className='text-center mx-2 my-3 project_desc'>
                        
                            <h5 className='text-start'>Les caractéristiques</h5>
                            <h6 className='text-start' style={{"lineHeight":1.5}}>
                                <ul>
                                    <li> Cette page web est  responsive. ce n'est que la partie frontend qui est codée.</li>
                                    <li>Gestion des couleurs, de l'illustration, de la typographie et de l'image de marque.</li>
                                </ul>
                            </h6>        
                        
                        </h5>

                        <h6 className='mb-2 project_tech_hd'>Technologies utilisées</h6>
                        <h3 className='text-light'>
                        <i class="fa-brands fa-html5 mx-2"></i>
                        <i class="fa-brands fa-css3-alt mx-2"></i>
                        <i class="fa-brands fa-js-square mx-2"></i>
                        <i class="fa-brands fa-github-alt mx-2"></i>
                        </h3>

                             <center><button className="btn btn_effect ms-4 my-1 p-2 project_links" style={{"float":"left"}}> 
                                <a href="https://bokidiawe.netlify.app/" target="_blank" rel="noreferrer"> Démo en Ligne <i class="fa-solid fa-arrow-right-long ms-1"></i>
                                </a> 
                            </button></center>

                            <center><button className="btn btn_effect my-1 me-4 p-2 project_links" style={{"float":"right"}}> 
                                <a href="https://github.com/adamabilal/bokidiawe" target="_blank" rel="noreferrer">  Code Source <i className="fa-solid fa-arrow-right-long ms-1"></i> 
                                </a> 
                            </button></center>

                    </div>

                    <h4 className='mt-4 pe-4 text-end andmore'>
                        <a href='https://github.com/adamabilal?tab=repositories' target='_blank' rel="noreferrer">
                             voir plus...
                        </a>
                    </h4>

                </div>

            </div>

        </>
    )
}

export default Project;