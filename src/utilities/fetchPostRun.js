async function fetchPostRun(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    };
    const result = await fetch(url, requestOptions);    
    if(result.status < 300){
        alert("Run Accepted!")
        return true;
    } else if (result.status >= 400){
        alert("Server Error!");
        return result.status; 
    } else {        
        alert("Run Rejected!")
        return result.status; 
    } 
}

export default fetchPostRun;