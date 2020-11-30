import { useState } from 'react';
import fetchAuth from '../utilities/fetchAuth';
import constants from '../utilities/constants';

function PasswordForm(props) {    
    const [value, setValue] = useState("");
    const [showPasswordWarning, setShowPasswordWarning] = useState(false)

    let url; 
    if(window.location.hostname.includes("localhost")){
        url = constants.POSTPWDEVURL;  
    }    
    
    let validation = <p><i>Enter Password.</i></p>

    if(showPasswordWarning){
        validation = <p><i>Wrong Password.</i></p>
    }

    async function handleSubmit(e) {
        e.preventDefault();  
        let isAuth = false;       
        isAuth = await fetchAuth(url, value);            
        if(isAuth){            
            setValue("");         
            return props.setShowForm(true);        
        }      
        setShowPasswordWarning(true);
        setValue("");        
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                Password:
                <input type="password" name="password" value={value} onChange={(e) => setValue(e.target.value)}/>
                {validation}
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default PasswordForm;
