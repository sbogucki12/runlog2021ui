import { Link } from 'react-router-dom';
import PasswordForm from './PasswordForm';

function NewRun () {
    return (
        <div>
            <h1>New Run</h1>
            <div>
                <PasswordForm  />
            </div>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NewRun; 
