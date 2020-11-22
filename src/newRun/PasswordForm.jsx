import { useState } from 'react';
import fetchAuth from '../utilities/fetchAuth';
import constants from '../utilities/constants';

function PasswordForm(props) {    
    const [value, setValue] = useState("");
    const url = constants.POSTRUNDEVURL;
    
    async function handleSubmit(e) {
        e.preventDefault();  
        let isAuth = false;       
        isAuth = await fetchAuth(url, value);            
        if(isAuth){            
            setValue(""); 
            return props.setShowForm(true);        
        }

        setValue("");
        
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                Password:
                <input type="password" name="password" value={value} onChange={(e) => setValue(e.target.value)}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default PasswordForm;
