import './bio.css'

import bio_img from '../../images/bio_img.jpeg'

import cv from '../../pdf/CV_Adama_TRAORÉ.pdf'

function Bio()
{
    return(
        <>
        
            <div className="container-fluid p-0 bio_text_cont" style={{"overflowX":"hidden"}}>

                <div className="row cutout_box">
                    <h1 className="cutout_text" id="bio">MA BIOGRAPHIE</h1>
                </div>

                <div className="row p-5">

                    <div className="col-lg-6 mx-auto text-center bio1_container bio_text" id="biotext_1">
                        
                        <h1> <mark>Developpeur</mark> <br /> Full Stack  & Étudiant<br /> <mark>En Licence 3 Informatique</mark> </h1>

                        <div className="text-center py-0"><img src={ bio_img } alt="" className="bio_img_size" /></div>

                    </div>

                    <div className="col-lg-5 mx-auto bio_text_2 text-center" id="biotext_2">
                        
                    <h4 className="tag_name mb-3"> bio</h4>

                        Actuellement en <b> Licence 3  Informatique </b> à L'université de Lille, je suis à la recherche d'un stage en informatique au sein 
                        de votre prestigieuse société. Les compétences en développement d'applications acquises au cours des projets de classe m'ont donné 
                        envie d'avoir une expérience pratique approfondie dans le domaine.
                        Toujours soucieux de m'améliorer, j'ai créé quelques projets en python, Javascript, java & MERN, 
                        que vous pouvez retrouver sur  mon <b> <a href="https://github.com/adamabilal?tab=repositories" target="_blank">Github</a></b> .
                        Je suis une personne responsable, motivée,qui apprend vite, très orientée client et je suis persuadé
                        que je dispose de toutes les compétences et atouts pour réussir au poste de stagiaire en informatique au sein de votre société.N'hésitez 
                        donc pas à me contacter si vous avez des questions supplémentaires. Merci pour votre temps et votre considération.

                    <h4 className="tag_name mb-3"> /bio </h4>

                    <button type="button" className="cv_button w-75 mt-4" 
                    title="SHOW CV">
                            <a href= {cv} target = "_blank">  
                                Curriculum Vitae (PDF) <i className="fa-solid fa-download ms-2"></i>
                            </a>
                    </button>
                    
                    </div>

                </div>
            </div>
        </>
    )
}

export default Bio;
