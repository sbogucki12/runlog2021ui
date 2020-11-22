import { Link } from 'react-router-dom';
//import fetchPost from '../utilities/fetchPost';

//const pw = 'qwlhws12';
//const url = 'http://localhost:51563/api/authentication';

function Home () {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/newrun">Add Run</Link>
            {/*<button onClick={() => fetchPost(url, pw)}>Fetch Post</button>*/}
        </div>
    )
}

export default Home; 
