import React,{useState,useEffect} from 'react'
import axios from "axios"

function UserList() {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=> {console.log(res)
        setUsers(res.data)
    }).catch(err=>console.log(err))
    },[])
    return ( <div>
             <table>
    <thead>
        <tr>
            <th className="Title">User List</th>
        </tr>
    </thead>
    <div className="User-list">
        <tbody>
    <tr>    <td className="prop">Id</td>
            <td className="prop">Name</td>
            <td className="prop">Username</td>
            <td className="prop">Phone</td>
            <td className="prop">email</td>
    </tr>
        {users.map(user=><tr className="table-item"  key={user.id}>
        <td>{user.id}</td> 
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
      </tr>
    )}  
    </tbody>
    </div>  
    </table>  
  </div>

    )
}

export default UserList
