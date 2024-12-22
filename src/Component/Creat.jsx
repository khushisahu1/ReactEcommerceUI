import axios from 'axios';
import  { useState } from 'react'

const Creat = () => {
   const [ name, setname]=useState(" ");
   const [email, setemail]=useState(" ");
   const [ post, setpost]=useState(" ");
   const [salary, setsalary]=useState(" ");
   const [ password, setpassword]=useState(" ");

   const handelsubmit =(e)=>{
               e.preventDefault();
             axios.post("https://66e673ac17055714e58996ac.mockapi.io/Crud",{
                e_name:name,
                e_email:email,
                e_post:post,
                e_salary:salary,
                e_password:password,
                // name:name,
                // email:email,
                // post:post,
                // salary:salary,
                // password:password
             })
   }

  return (
    
        
       
        <form onSubmit={handelsubmit}>
            <table>
                <tbody>
                <tr>
                    <td>Name </td>
                    <td><input  type='text' onChange={(e)=>setname(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input  type='email' onChange={(e)=>setemail(e.target.value)}  /></td>
                </tr>
                <tr>
                    <td>Post</td>
                    <td><input type='text' onChange={(e)=>setpost(e.target.value)}  /></td>
                </tr>
                <tr>
                    <td>salary</td>
                    <td><input type="text" onChange={(e)=>setsalary( e.target.value)}  /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type='password' onChange={(e)=>setpassword(e.target.value)}  /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type='submit' value='creat Api' /></td>
                </tr>
                </tbody>
            </table>
        </form>
           
     
    
  )
}

export default Creat
