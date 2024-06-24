import React from "react";
import Table from "../TableList/TAble";
import users from "../assets/userdata";

const UserTable=()=>{

  const headItems=["Name","Email","Phone"]
  const bodyItems=users

    return(
        <div>
            <Table headItems={headItems} bodyItems={bodyItems}/>
        </div>
    )
}

export default UserTable