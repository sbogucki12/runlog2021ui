import './runLog.css';
import RunLogBtn from './RunLogBtn';

function RunLogModalContent(props) {
	return (
		<div id="myModal" className="modal">
			<div className="modal-content">
				<span className="close" onClick={() => props.setShowModal(false)}>
					&times;
				</span>
				<h3>Sort By: </h3>
				<RunLogBtn>Date</RunLogBtn>
				<RunLogBtn>Length</RunLogBtn>
				<RunLogBtn>Pace</RunLogBtn>

				<h3>Average Daily:</h3>
				<RunLogBtn>Pace</RunLogBtn>
				<RunLogBtn>Distance</RunLogBtn>

				<h3>Show:</h3>
				<RunLogBtn>All</RunLogBtn>
				<RunLogBtn>Recent 25</RunLogBtn>
				<RunLogBtn>Top 10 Fastest</RunLogBtn>
				<RunLogBtn>Top 10 Longest</RunLogBtn>
			</div>
		</div>
	);
}

export default RunLogModalContent;
