import React, { useCallback, useEffect, useMemo, useState } from "react"
import { handleChanges, isValid } from "../utilitis/helper"

const Input = () => {
    const [data, setData] = useState({
        Name: "",
        Phone: "", 
        Email: ""
    }) 
    const handelCahnge = (e) => {
        isValid(e.target.name,e.target.value,setData)
        handleChanges(e.target.name,e.target.value,setData)
    }

    const handleSubmit=useCallback(()=>{
        console.log(data);
        if(!data.Name || !data.Phone || !data.Email){
            alert("Please Fill All Inputs")
            }else if(data.error || data.error1){
                alert("Invalid Input type")
            }else{
            alert("Data Submitted");
            Object.keys(data).map(key => {
                localStorage.setItem(key, data[key]);
            });
        }
    },[data])
    console.log(data);
    useEffect(()=>{
        Object.keys(data).map(element=>{
            setData(e=>({...e,[element]:localStorage.getItem(element)}))
        })
    },[])
    return (
        <div className="main_div">
            <div className="box_div">
                <label htmlFor="1">Name</label>
                <div className="input">
                <input id="1" type="text" className="form_input" value={data.Name} name="Name" onChange={(e) => { handelCahnge(e) }} />
                </div>
                <label htmlFor="2">Phone</label>
                <div className="input">
                <input id="2" type="number" className="form_input" value={data.Phone} name="Phone" onChange={(e) => { handelCahnge(e) }} />
                </div>
                <span style={{color:"red"}}>
                {data.error}
                </span>
                <label htmlFor="3">Email</label>
                <div className="input">
                <input id="3" type="text" className="form_input" value={data.Email} name="Email" onChange={(e) => { handelCahnge(e) }} />
                </div>
                <span style={{color:"red"}}>
                {data.error1}
                </span>
                <button className="sub_btn" onClick={(e)=>handleSubmit(e)}>
                Submit
                </button>
            </div>
            
        </div>
    )
}

export default Input

