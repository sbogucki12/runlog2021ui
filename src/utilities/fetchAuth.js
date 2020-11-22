async function fetchAuth(url, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ Password: password})
    };
    const result = await fetch(url, requestOptions);
    console.log(`fetch result: ${result}`);
    if(result.status === 200){
        return true;
    } else if (result.status >= 400){
        alert("Server Error");
        return false; 
    } else if(result.status !== 200) {        
        return false; 
    } 
}

export default fetchAuth;
