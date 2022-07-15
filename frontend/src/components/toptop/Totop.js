import './totop.css'
import '../../js/totop_anim.js'


function Totop()
{
    return(
        <>
            <div className="totop_container" id="totop" style={{"overflowX":"hidden"}}>
                <a href="#page_top"><i title="TO TOP" className="fa-solid fa-angles-up"></i> </a>
            </div>
        </>
    )
}

export default Totop;