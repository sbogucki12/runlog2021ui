function NewRunForm(){

    function handleSubmit(e) {
        e.preventDefault();        
        fetchPost(url, value);
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                Password:
                <input type="text" name="password" value={value} onChange={(e) => setValue(e.target.value)}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}