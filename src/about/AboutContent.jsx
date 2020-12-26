import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutIcons from './aboutIcons';

function AboutContent() {
	return (
		<div id="aboutContentContainer">
            <div>
				<h2>About</h2>
			</div>
			<div id="aboutContentBio">
				<div id="aboutContentImageContainer">
                 <p>
                    Profile Image
                 </p>
                </div>
				<div id="aboutContentBioContainer">
					<p>www.DailyRun.net is maintained by Steve B.
                    </p>
					<p>Steve B., an Army veteran, is currently the manager of a cross-functional development team and
						the product owner of a federal safety oversight application and also owns CorregidorTech.com.
					</p>
					    <p>Steve B. lives in San Diego with his <i>novia hermosa</i> and two dogs.
					</p>
				</div>
			</div>
			<div>
				<h4>Articles:</h4>
				<ul>
					<li>Article 1</li>
					<li>Article 2</li>
				</ul>
			</div>
			<div id="aboutIconContainer">
				<div><FontAwesomeIcon icon={aboutIcons[0].icon} /></div>
				<div><FontAwesomeIcon icon={aboutIcons[1].icon} /></div>
				<div><FontAwesomeIcon icon={aboutIcons[2].icon} /></div>
				<div><FontAwesomeIcon icon={aboutIcons[3].icon} /></div>
			</div>
		</div>
	);
}

export default AboutContent; 
