import './about.css';
import { Link } from 'react-router-dom';
import AboutContent from './AboutContent';

function About() {
	return (
		<div className="runLogMoreInfoContentContainer">
			<div className="runlogMoreInfoBox">				
                <div>
                    <AboutContent />
                </div>
                <div className="runlogMoreInfoButtonContainer">
				<Link to="/runlog">
					<button>{`<--`}</button>
				</Link>
			</div>
			</div>
		</div>
	);
}

export default About; 
