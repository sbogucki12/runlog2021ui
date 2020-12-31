import './components.css';

function CustomButton(props) {
    return (
        <div id="backButtonContainer">
            <div id="backButtonDiv">
            <button id="backButton">
                {props.children}
            </button>
            </div>           
        </div>
    )
}

export default CustomButton; 
