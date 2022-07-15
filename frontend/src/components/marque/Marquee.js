import './marquee.css'

import m1 from '../../images/html.png'; 
import m2 from '../../images/css.png'; 
import m3 from '../../images/bootstrap.png'; 
import m4 from '../../images/ja.png'; 
import m5 from '../../images/express.png'; 
import m6 from '../../images/sql.png'; 
import m7 from '../../images/react.png'; 
import m8 from '../../images/git.png'; 
import m9 from '../../images/node.png'; 
import m10 from '../../images/npm.png'; 
import m11 from '../../images/mongo.png'; 
import m12 from '../../images/java.png'; 
import m13 from '../../images/python.png'; 


function Marquee()
{
    return(
        <>
            <div className="container-fluid" style={{"overflowX":"hidden"}}>
                <div className="row mq_cont py-4">
                    
                    <div className="col-md-10 mx-auto marquee_bg">
                        
                        <marquee className="pt-4" scrollamount="15" behavior="alternate">
                        
                        <img src={m1} alt="" className="m_size_1 mx-5" />
                        <img src={m2} alt="" className="m_size_2 mx-5" />
                        <img src={m3} alt="" className="m_size_3 mx-5" />
                        <img src={m4} alt="" className="m_size_1 mx-5" />
                        <img src={m5} alt="" className="m_size_1 mx-5" />
                        <img src={m6} alt="" className="m_size_1 mx-5" />
                        <img src={m7} alt="" className="m_size_1 mx-5" />
                        <img src={m8} alt="" className="m_size_6 mx-5" />
                        <img src={m9} alt="" className="m_size_1 mx-5" />
                        <img src={m10} alt="" className="m_size_5 mx-5" />
                        <img src={m11} alt="" className="m_size_1 mx-5" />
                        <img src={m12} alt="" className="m_size_1 mx-5" />
                        <img src={m13} alt="" className="m_size_6 mx-5" />
                        
                    </marquee>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Marquee;