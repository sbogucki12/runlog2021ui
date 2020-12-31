import './runLog.css';
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

function RunLogFooter (props) {
    return (
        <div id="runlogFooter">
            <div id="runlogFooterContainer">
                <div>
                    <Link to="/about">
                        <CustomButton>
                            About
                        </CustomButton>
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
