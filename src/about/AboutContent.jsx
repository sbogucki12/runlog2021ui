import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import aboutIcons from './aboutIcons';

function AboutContent() {
	return (
		<div id="aboutContentContainer">
            <div className="aboutTitleContainer">
				<FontAwesomeIcon icon={faIdCardAlt} size="3x" className="aboutTitle" />
			</div>
			<div className="aboutContentBio">
				<div id="aboutContentImageContainer">
                 <div>
					 <img src="/images/steveAndDania.jpg" 
						 alt="Steve and Dania" 
						 title="Steve and Dania"
						 id="steveAndDaniaImage" />
				 </div>
                </div>
				<div className="aboutContentBioContainer">
					<p><b>www.DailyRun.net</b> owned by <a href="https://www.instagram.com/devbogoodski/" target="_blank" rel="noreferrer noopener">Steve B</a>.
                    </p>
					<p>Steve B., currently leads a cross-functional development team at{' '} 
						<a href="https://www.linkedin.com/company/yona-brixtel/" target="_blank" rel="noreferrer noopener">Yona-Brixtel</a>,
						is the product manager of a federal safety oversight application and owns{' '} 
						<a href="https://corregidortech.azurewebsites.net/" target="_blank" rel="noreferrer noopener">CorregidorTech.com</a>.
					</p>
					<p>An army veteran turned 🕊️.</p>
					    <p>Steve B. lives in San Diego with his <i>novia hermosa</i> and two dogs.
					</p>
				</div>
			</div>
			<div>
				<h4>Articles:</h4>
				<div id="aboutAticlesContainer">
				<div><a href="https://bogoodski.medium.com/cloud-based-system-architecture-for-the-federal-domain-ec77d12e4608" target="_blank" rel="noreferrer noopener">"Cloud-Based System Architecture for the Federal Domain"</a></div>
					<div><a href="https://medium.com/digital-diplomacy/agile-software-development-in-the-federal-government-domain-c6fa87b7569d?source=friends_link&sk=66a9aa487362de98783b8535b824baa0" target="_blank" rel="noreferrer noopener">"Agile Software Development in the Federal Government Domain"</a></div>
					<div><a href="https://bogoodski.medium.com/the-future-of-federal-safety-oversight-6992b3012740" target="_blank" rel="noreferrer noopener">"The Future of Federal Safety Oversight"</a></div>
					<div><a href="https://medium.com/swlh/migrating-from-mongodb-to-sql-b2d91d13c30d?source=friends_link&sk=7420676c3fbb0cfbb94dfb1e9cc02ccd" target="_blank" rel="noreferrer noopener">"Migrating From MongoDB to SQL"</a></div>
				</div>				
			</div>
			<div id="aboutArchiveTextContainer">
				<div>
					<b>This is the second version of the run log.</b> The original is archived <a href="https://bogoodski2019.azurewebsites.net/runlog/" target="_blank" rel="noreferrer noopener">HERE</a>.
				</div> 
			</div>
			<div id="aboutIconContainer">
				<div><a href="https://www.instagram.com/bogoodskiruns/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={aboutIcons[0].icon} /></a></div>
				<div><a href="https://www.linkedin.com/in/sbogucki12/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={aboutIcons[1].icon} /></a></div>
				<div><a href="https://twitter.com/devbogoodski" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={aboutIcons[2].icon} /></a></div>
                <div><a href="https://github.com/sbogucki12" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={aboutIcons[3].icon} /></a></div>				
			</div>
		</div>
	);
}

export default AboutContent; 
