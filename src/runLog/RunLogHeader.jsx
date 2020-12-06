import './runLog.css';
import { Link } from 'react-router-dom';

function RunLogHeader (props) { 
    return (
        <div id="runLogHeaderContainer">
            {/*<button className="runLogHeaderBtn" onClick={() => props.setShowModal(true)}>Reports</button>*/}
            <Link to="/admin"><button className="runLogHeaderBtn">Admin</button></Link>
        </div>
    )
}

export default RunLogHeader;
