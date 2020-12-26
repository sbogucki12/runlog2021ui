import './runLog.css';
import { Link } from 'react-router-dom';

function RunLogFooter (props) {
    return (
        <div id="runlogFooter">
            <div id="runlogFooterContainer">
                <div>
                    <Link to="/about">
                        <button>
                            About
                        </button>
                    </Link>
                </div>
                <div onClick={() => props.setShowFooter(false)}>
                <span role="img" aria-label="exit" id="footerExitIcon">
					❌
				</span>
                </div>
            </div>
        </div>
    )
}

export default RunLogFooter; 
