import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

   function SetDataToStore(id,name,email,post,salary){
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('post',post);
    localStorage.setItem('salary',salary);
   }


    const[myapi ,setapi]=useState([]);

    function getdata(){
        axios.get('https://66e673ac17055714e58996ac.mockapi.io/Crud')
        .then((response) =>{
            // console.log(response.data);
            setapi(response.data);
        })

    }
    // getdata();
    useEffect(()=>{
        getdata();
    },[])
  return (
    <div className='tablediv'>
       <table  border={'5'} className='table'>
        <tbody className='tablebody'>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>email</th>
                <th>post</th>
                <th>salary</th>
                <th>password</th>
                <th>Edit</th>
                <th>Delet</th>
                </tr>
        </tbody>
        <tbody className='tablebody2'>
            {myapi.map((item)=>{
                return(
                    <>

                    <tr>
                        <td>{item.id}</td>
                        <td>{item.e_name}</td>
                        <td>{item.e_email}</td>
                        <td>{item.e_post}</td>
                        <td>{item.e_salary}</td>
                        <td>{item.e_password}</td>
                        <td>
                           
                         <Link to='/edit'>
                         <button  onClick={()=>SetDataToStore(item.id, item.e_name,item.e_email,item.e_post,item.e_salary,item.e_password)} className='edit'  >Edit</button>
                         </Link>

                        </td>
                        <td>Delet</td>
                    </tr>
                    </>
                )
            })}
        </tbody>
       </table>
      
    </div>
  )
}

export default Read
