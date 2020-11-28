import './runLog.css';

function RunLogBtn(props){
    return( 
        <button className="runLogModalBtn">
                {props.children}
        </button>
    )
}

export default RunLogBtn;
