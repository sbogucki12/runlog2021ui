import { Link } from 'react-router-dom';

function Home () {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/newrun">Add Run</Link>
        </div>
    )
}

export default Home; 
