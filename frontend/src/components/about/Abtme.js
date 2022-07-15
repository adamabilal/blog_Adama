import { useState } from "react";
import './abtme.css'


function Abtme() 
{
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
      <>

    <div className="container-fluid abtme_bg pb-5" style={{"overflowX":"hidden"}}>

{/* ------------------------ heading start -------------------- */}
        <div class="row">
            <div class="col-md-5 mx-auto text-center abt_me_heading" id="abt_me">
                À PROPOS DE MOI
            </div>
        </div>
{/* ------------------------ heading end -------------------- */}

{/* ------------------- abt me complete sections start -------------------- */}

        <div className="container-fluid overflow-x-hidden">

            {/* about me on click tabs */}
            <div className="row">
                <div className="col-md-6 mx-auto d-flex flex-wrap mt-2 mb-4 justify-content-center bio_tabs">

                    <div className={toggleState === 1 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(1)}>
                        MES COMPÉTENCES  
                    </div>

                    <div className={toggleState === 3 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(3)}>
                        MES FORMATIONS  
                    </div>

                    <div className={toggleState === 4 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(4)}>
                        MES ÉXPERICENCES  
                    </div>

                    <div className={toggleState === 2 ? "tabs active flex-item mx-auto tablinks bio_tabs_item" : "tabs flex-item mx-auto tablinks bio_tabs_item"} onClick={() => toggleTab(2)}>
                    MES COMPÉTENCES SUPPLÉMENTAIRES
                    </div>

                </div>
            </div>
            {/* about me on click tabs end */}

            {/* about me tabs content start */}
            <div className="row">
                
                {/* skills start */}
                <div className={toggleState === 1 ? "content_abtme  active-content_abtme" : "content_abtme"}>
                    
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 mx-auto abt_cont pb-4">
                                <div className="row d-flex flex-wrap">
                                    
                                    <div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom": "10px solid #CBB26A"}}>
                                        <h5 style={{"color": " #CBB26A"}}><b>LANGAGE DE BALISAGE ET DE STYLE</b></h5>			
                                        <div className="text-center px-4" style={{"float": "left"}}> <i className="fa-brands fa-html5" style={{"color": "rgba(255,103,57,.9)"}}></i> <h6>HTML</h6> </div> 
                                        <div className="text-center"> <i className="fa-brands fa-css3-alt" style={{"color": "#5DADE2"}}></i> <h6>CSS</h6> </div> 
                                    </div>

                                    <div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom": "10px solid #CBB26A"}}>
                                        <h5 style={{"color": "#CBB26A"}}> <b> FRAMEWORK CSS </b></h5>			
                                        <div className="text-center"> <i className="fa-brands fa-bootstrap" style={{"color": "#AF7AC5"}}></i> <h6>BOOTSTRAP</h6> </div> 
                                    </div>

                                        <div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom": "10px solid #CBB26A"}}>
                                        <h5 style={{"color":"#CBB26A"}}> LANGAGE DE PROGRAMMATION</h5>			
                                        <div className="text-center"> <i className="fa-brands fa-js-square" style={{"color": "yellow"}}></i> <h6>JAVASCRIPT</h6> </div> 
                                    </div>
                                </div>

                                <div className="row d-flex flex-wrap">

                                    <div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color": "#CBB26A"}}> FRAMEWORK JAVASCRIPT </h5>			
                                        <div className="text-center"> <i className="fa-brands fa-react" style={{"color": "#61dafb"}}></i> <h6>REACTJS</h6> </div> 
                                    </div>

                                    <div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color": "#CBB26A"}}>GESTION DES PACKAGES</h5>			
                                        <div className="text-center"> <i className="fa-brands fa-npm" style={{"color": "#cb0000"}}></i> <h6>NPM</h6> </div> 
                                    </div>

                                    <div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color":"#CBB26A"}}>GESTION DE BASE DE DONNÉES</h5>			
                                        <div className="text-center px-4" style={{"float": "left"}}> <i className="fa-solid fa-database" style={{"color": "#3E6E93"}}></i> <h6>MYSQL</h6> </div> 
                                        <div className="text-center"> <i className="fa-brands fa-envira" style={{"color": "#82E0AA"}}></i> <h6>MONGODB</h6> </div> 
                                    </div>
                                </div>

                                <div className="row d-flex flex-wrap">		
                                    <div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color":"#CBB26A"}}>INTÉGRATION CONTINUE</h5>			
                                        <div className="text-center px-4" style={{"float": "left"}}> <i className="fa-brands fa-github" style={{"color": "black"}}></i> <h6>GITHUB</h6> </div> 
                                        <div className="text-center"> <i className="fa-brands fa-git-alt" style={{"color": "#f14e32"}}></i> <h6>GIT</h6> </div> 
                                    </div>

                                    <div className="skill_boxtype2 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color": "#CBB26A"}}>BACKEND</h5>			
                                        <div className="text-center px-4" style={{"float": "left"}}> <i className="fa-brands fa-node" style={{"color": "#27AE60"}}></i> <h6>NODEJS</h6> </div> 
                                        <div className="text-center"> <i className="fa-brands fa-node-js" style={{"color": "#259dff"}}></i> <h6>EXPRESSJS</h6> </div> 
                                    </div>

                                    <div className="skill_boxtype1 mt-5 text-center mx-auto" style={{"borderBottom":"10px solid #CBB26A"}}>
                                        <h5 style={{"color":"#CBB26A"}}>PROGRAMMATION</h5>			
                                        <div className="text-center"> <i className="fa-brands fa-java" style={{"color": "#f89820"}}></i> <h6>JAVA</h6> </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                
                </div>
                {/* skills end */}

                {/* extra skills start */}
                <div className={toggleState === 2 ? "content_abtme  active-content_abtme" : "content_abtme"}>

                    <div className="container-fluid abt_anim">
                        <div className="row text-center">
                            <div className="col-md-6 mx-auto abt_cont extra_skill_text">
                                                
                                <h2 style={{"color": "#CBB26A", "lineHeight":1.5}}>SOFT SKILLS</h2>
                                
                                <h4 className='text-start text-white'>
                                    <ul>
                                        <li> Compétences en communication & relations interpersonnelles
                                            <h6 className='ms-5 mt-2'>J'ai la capacité de communiquer efficacement le message souhaité tout en gardant l'auditeur engagé.</h6>
                                        </li>

                                        <li>Adaptabilité & perséverance
                                            <h6 className='ms-5 mt-2'>Je suis un étudiant perséverant et je m'adapte facilement. Je suis déterminé à résoudre les problèmes et à trouver rapidement une solution efficace</h6>
                                        </li>

                                        <li> Résolution de problèmes avec efficacité
                                            <h6 className='ms-5 mt-2'> J'ai la capacité de résoudre des problèmes et de déterminer la cause du problème. Identifier, hiérarchiser et sélectionner des alternatives pour une solution ; et mise en place d'une solution.</h6>
                                        </li>
                                    </ul>
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
                {/* extra skills end */}

                {/* education start */}
                <div className={toggleState === 3 ? "content_abtme  active-content_abtme" : "content_abtme"}>

                    <div className="container-fluid abt_anim">
                        <div className="row text-center justify-content-center">

                            <div className="col-lg-4 text-start abt_cont edu_cont p-3 mt-2 me-2">
                                            
                                            <i className="fa-solid fa-user-graduate mt-2 mb-3" style={{"color":"#CBB26A", "fontSize":50}}></i>
                                            <h5>2014-2016</h5>
                                            <h5>Physique Appliquée</h5>
                                            <h4 className='text-white'>Licence Physique</h4>
                                            <h5>Université Cheikh Anta DIOP, DAKAR (SÉNÉGAL)</h5>
                                            <hr />
                                            <i className="fa-solid fa-user-graduate mt-2 mb-3" style={{"color":"#CBB26A", "fontSize":50}}></i>
                                            <h5>2017-2020</h5>
                                            <h5>Physique Fondamentale</h5>
                                            <h4 className='text-white'>Master  Physique</h4>
                                            <h5>Université Lille, Cité Scientifique, 59650 Villeneuve-d'Ascq (FRANCE)</h5>
                            </div>

                            <div className="col-lg-4 text-start abt_cont edu_cont p-3 mt-2 ms-2">  
                                            <i className="fa-solid fa-user-graduate mt-2 mb-3" style={{"color":"#CBB26A", "fontSize":50}}></i>
                                            <h5>2021-2023</h5>
                                            <h5>Informatique</h5>
                                            <h4 className='text-white'>Licence Informatique</h4>
                                            <h5>Université Lille, Cité Scientifique, 59650 Villeneuve-d'Ascq (FRANCE)</h5>

                            </div>



                        </div>
                    </div>

                </div>
                {/* education end */}

                {/* experience start */}
                <div className={toggleState === 4 ? "content_abtme  active-content_abtme" : "content_abtme"}>

                    <div className="container-fluid abt_anim">
                    <div className="row text-center">
                        <div className="col-md-7 mx-auto abt_cont edu_cont">
                                        
                                        <i className="fa-solid fa-laptop-code my-3" style={{"color":"#CBB26A", "fontSize":50}}></i>
                                        <h5>Février 2019 - Juillet 2019 </h5>
                                        <h5>Calcul ab -initio dans le système Ni-Cr.</h5>
                                        <h3 className="my-2">STAGIAIRE</h3>
                                        <h5>Unité Matériaux et Transformations (UMET) - Villeneuve d'Ascq 59650</h5>               
                        </div>
                    <hr />
                    <div className="col-md-7 mx-auto abt_cont edu_cont">
                                        
                                        <i className="fa-solid fa-laptop-code my-3" style={{"color":"#CBB26A", "fontSize":50}}></i>
                                        <h5>Avril 2018 - Juin 2018 </h5>
                                        <h5>Simulation à l’échelle atomique des propriétés thermiques des nanomatériaux.</h5>
                                        <h3 className="my-2">STAGIAIRE</h3>
                                        <h5>Institut Électronique, Microélectronique et de Nanotechnologie (IEMN)- Villeneuve d'Ascq 59650</h5>               
                        </div>
                    </div>
                    </div>

                </div>    
                {/* experience end */}

            </div>
            {/* about me tabs content end */}

        </div>

{/* ------------------- abt me complete sections end -------------------- */}

    </div>
    
    </>
  )
}

export default Abtme;