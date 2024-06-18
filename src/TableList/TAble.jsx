import React from "react"
const arr=[]

const Table =()=>{
    const env = import.meta.env.VITE_API_URL
    return (
        
        <div className="main_table_div">
            <div className="table_box">
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                xxxx
                            </td>
                            <td>
                                xxxx
                            </td>
                            <td>
                                xxxx
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table