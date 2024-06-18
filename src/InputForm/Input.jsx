import React, { useCallback, useEffect, useState } from "react"

const Input = () => {
    const [data, setData] = useState({
        Name: "",
        Phone: "",
        Email: ""
    })

    const handelCahnge = (e) => {
        const { name, value } = e.target
        setData(element => ({
            ...element, [name]: value
        }))
    }
    useEffect(()=>{
        (data.Phone?.length!=10 && data.Phone) ?setData(element => ({...element, ["error"]:"Invalid Phone" })):setData(element => ({...element, ["error"]:"" }))
    },[data.Phone])


    const handleSubmit=useCallback(()=>{
        if(!data.Name || !data.Phone || !data.Email){
            alert("Please Fill All Inputs")
        }else{
            alert("Data Submitted");
            Object.keys(data).map(key => {
                localStorage.setItem(key, data[key]);
            });
        }
    },[data])
    return (
        <div className="main_div">
            <div className="box_div">
                <label htmlFor="1">Name</label>
                <input id="1" type="text" className="form_input" value={data.Name} name="Name" onChange={(e) => { handelCahnge(e) }} />
                <label htmlFor="2">Phone</label>
                <input id="2" type="text" className="form_input" value={data.Phone} name="Phone" onChange={(e) => { handelCahnge(e) }} />
                <span style={{text:"red"}}>
                {data.error}
                </span>
                <label htmlFor="3">Email</label>
                <input id="3" type="text" className="form_input" value={data.Email} name="Email" onChange={(e) => { handelCahnge(e) }} />
                <button className="sub_btn" onClick={(e)=>handleSubmit(e)}>
                Submit
                </button>
            </div>
            
        </div>
    )
}

export default Input

