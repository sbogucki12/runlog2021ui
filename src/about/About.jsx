import './about.css';
import { Link } from 'react-router-dom';
import AboutContent from './AboutContent';
import CustomButton from '../components/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

function About() {
	return (
		<div className="runLogMoreInfoContentContainer">
			<div className="runlogMoreInfoBox">				
                <div>
                    <AboutContent />
                </div>
                <div className="runlogMoreInfoButtonContainer">
				<Link to="/runlog">
					<CustomButton>
						<FontAwesomeIcon icon={faArrowAltCircleLeft} />
					</CustomButton>
				</Link>
			</div>
			</div>
		</div>
	);
}

export default About; 
