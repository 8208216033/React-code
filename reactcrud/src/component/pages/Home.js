import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';

const Home = () => {
    const [users,setUsers]=useState([]);
    const history=useNavigate()
    useEffect(()=>
    {
        loadUsers();
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:3003/users");
        setUsers(result.data)
    }

    const  deleteUser= async (id)=>
    {
         await axios.delete(`http://localhost:3003/users/${id}`)
         loadUsers();
    }
  return (
    <div className='container'>
    <div className='py-4'>
   
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
        users.map((user,index)=>
        (
            <tr> <th scope='row'>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link className="btn btn-primary" to={`/user/veiw/${user.id}`}>View</Link>
                <button className="btn btn-outline-primary" onClick={()=>deleteUser(user.id)}>Delete</button>
                <Link className='btn btn-danger' to={`/user/edit/${user.id}`}>Edit</Link>
            </td>
            </tr>
           
        ))
    }
   
  </tbody>
</table>  
    </div>
   
    </div>
  )
}

export default Home