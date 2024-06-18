import React, { useCallback, useEffect, useState } from "react"
import { handleChanges } from "../utilitis/helper"

const Input = () => {
    const [data, setData] = useState({
        Name: "",
        Phone: "",
        Email: ""
    })

    const handelCahnge = (e) => {
        handleChanges(e.target.name,e.target.value,setData)
    }
    useEffect(()=>{
        (data.Phone?.length!=10 && data.Phone) ?setData(element => ({...element, ["error"]:"Invalid Phone" })):setData(element => ({...element, ["error"]:"" }))
    },[data.Phone])
    useEffect(()=>{
        (!data.Email?.includes("@") && data.Email) ?setData(element => ({...element, ["error1"]:"Invalid Email" })):setData(element => ({...element, ["error1"]:"" }))
    },[data.Email])


    const handleSubmit=useCallback(()=>{
        if(!data.Name || !data.Phone || !data.Email){
            alert("Please Fill All Inputs")
            }else{
            alert("Data Submitted");
            Object.keys(data).map(key => {
                localStorage.setItem(key, data[key]);
            });
        }
    },[data.Phone,data.Name ,data.Email])
    useEffect(()=>{
        Object.keys(data).map(element=>{
            setData(e=>({...e,[element]:localStorage.getItem(element)}))
        })
    },[])
    return (
        <div className="main_div">
            <div className="box_div">
                <label htmlFor="1">Name</label>
                <input id="1" type="text" className="form_input" value={data.Name} name="Name" onChange={(e) => { handelCahnge(e) }} />
                <label htmlFor="2">Phone</label>
                <input id="2" type="number" className="form_input" value={data.Phone} name="Phone" onChange={(e) => { handelCahnge(e) }} />
                <span style={{color:"red"}}>
                {data.error}
                </span>
                <label htmlFor="3">Email</label>
                <input id="3" type="text" className="form_input" value={data.Email} name="Email" onChange={(e) => { handelCahnge(e) }} />
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

