import './progressbar.css'
import '../../js/scrollprogbar.js'

function Progbar()
{
    return(
        <>
            <div className="header" style={{"overflowX":"hidden"}}>
                <div className="progress-container">
                   <div className="progress-bar" id="myBar"></div>
                </div>  
            </div>
        </>
    )
}

export default Progbar;