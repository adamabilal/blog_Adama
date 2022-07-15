// CONTACT ME FORM

import React, { useState } from "react";
import swal from "sweetalert"; //for alert box

import "./contactme.css";

function Contactme() 
{

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });


  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user)
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, number, message } = user;

    const res = await fetch(`https://portfolio-adama.herokuapp.com/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        number,
        message,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("S'il vous plait réessayer encore");
    } 
    
    else 
    {
      swal({
        title: "Message envoyé",
        text: "Merci !! (^‿^) \n je vous recontacterai bientôt. (❛‿❛)",
        icon: "success",
      });
    }
  };

  return (
    <>
      <div className="modal fade" id="contactModal">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="container-fluid overflow-hidden p-0">
                <div className="row p-0 ">
                  <div className="col-md-12 mdl2 px-5 pt-4 ">
                    <h2 className="position-absolute end-0 me-4">
                      <i
                        data-bs-dismiss="modal"
                        className="fa fa-close"
                      ></i>
                    </h2>
                    <br />
                    <h2 className="mb-5">Parlons !!</h2>
                    <h5 className="mb-5">
                      <b>Opportunité de Stage</b>, <b> Opportunité d'alternance</b> <br /> 
                      Cependant, si vous avez d'autres demandes ou questions, n'hésitez pas à me contacter via ce formulaire.
                    </h5>

{/* main form start-------------------------------------- */}

                    <form method="post">

                      <div className="mb-3">
                        <label className="form-label form_ip_anim1">
                          Nom *
                        </label>
                        <input
                          type="text"
                          className="form-control form_css form_ip_anim1"
                          placeholder="entrez votre nom"
                          name="name"
                          value={user.name}
                          onChange={handleInputs}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label form_ip_anim2">
                          Email *
                        </label>
                        <input
                          type="email"
                          className="form-control form_css form_ip_anim2"
                          placeholder="entrez votre email"
                          name="email"
                          value={user.email}
                          onChange={handleInputs}
                        />
                      </div>

                      <div className="mb-3 form_ip_anim1">
                        <label className="form-label">Numéro de Tél: *</label>
                        <input
                          type="text"
                          className="form-control form_css form_ip_anim1"
                          placeholder="tapez votre numéro de contact"
                          name="number"
                          value={user.number}
                          onChange={handleInputs}
                        />
                      </div>

                      <div className="mb-3 form_ip_anim2">
                        <label className="form-label">Message *</label>
                        <textarea
                          className="form-control form_css form_ip_anim2"
                          placeholder="ecrivez votre message"
                          name="message"
                          value={user.message}
                          onChange={handleInputs}
                        ></textarea>
                      </div>

                      <button id="submit" type="submit" className="mt-1 form_ip_anim3 pushable" onClick={postData}>
                        <span className="front">Soumettez <i className="fa-solid fa-paper-plane"></i> </span>
                      </button>
                    </form>

{/* main form end-------------------------------------- */}

                    {/* SOCIAL CONNECT ICONS */}
                    <center>
                      <a
                        href="https://www.linkedin.com/in/adama-traor%C3%A9-90136b175/"
                        target="_blank"
                      >
                        <i
                          title="Linkedin"
                          className="fa-brands fa-linkedin-in mdl_1_icon form_ip_anim3"
                        ></i>
                      </a>

                      <a
                        href="https://github.com/adamabilal"
                        target="_blank"
                      >
                        <i
                          title="GitHub"
                          className="fa-brands fa-github mdl_1_icon form_ip_anim3"
                        ></i>
                      </a>

                      <a href="mailto: adama.bilaltraore@gmail.com">
                        <i
                          title="G-Mail"
                          className="fa fa-envelope mdl_1_icon form_ip_anim3"
                        ></i>
                      </a>

                      <a href="tel: 0033-(0)6-64-01-40-96" target="_blank">
                        <i
                          title="Phone"
                          className="fa fa-phone mdl_1_icon form_ip_anim3"
                        ></i>
                      </a>
                    </center>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactme;