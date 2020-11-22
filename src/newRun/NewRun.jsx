import { Link } from 'react-router-dom';
import PasswordForm from './PasswordForm';
import { useState } from 'react';
import NewRunForm from './NewRunForm';

function NewRun () {
    const [showForm, setShowForm] = useState(false);
    let view = 
    <div>
        <PasswordForm setShowForm={setShowForm}/>
    </div>;

    if(showForm){
        view =
        <div>
            <NewRunForm />
        </div>
    }
    return (
        <div>
            <h1>New Run</h1>
            <div>                
                {view}
            </div>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NewRun; 
