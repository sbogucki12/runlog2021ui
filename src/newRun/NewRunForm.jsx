import { useState, Fragment } from 'react';
import fetchPostRun from '../utilities/fetchPostRun';
import fields from './formFields';
import constants from '../utilities/constants';

function NewRunForm(){
    const [value, setValue] = useState({
        runDate: undefined,
        runDuration: undefined,
        runDistance: undefined,
        runEnvironment: "",
        runSurface: ""
        //runImage: ""
    });    
    
    async function handleSubmit(e) {
        e.preventDefault();
        const url = constants.RUNSAPIDEV;        

        const body = {
            Date: value.runDate.toString(),
            Duration: value.runDuration.toString(),
            Length: Number(value.runDistance),
            //ImageUrl: null,
            Type: value.runEnvironment.toString(),
            Surface: value.runSurface.toString()
        } 
        const result = await fetchPostRun(url, body);
        console.log(result);
    }

    const list = fields.map((field) => 
    <Fragment key={field.name}>
         {field.title}
                <input type={field.type} name={field.name} value={value[field.name]} step={0.01} onChange={(e) => {
                    setValue({
                        ...value,
                        [field.name]: e.target.value
                    })}}/>
    </Fragment>
     )

    return (
        <div>
            <h3>New Run Form</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                {list}
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
};

export default NewRunForm; 
