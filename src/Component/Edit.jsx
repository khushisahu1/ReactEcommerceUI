import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Edit = () => {

    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [post,setPost]=useState('');
    const [salary, setSalary]=useState('');
    const [password,setPassword]=useState('');

    const navigate= useNavigate();
    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setPost(localStorage.getItem('post'));
        setEmail(localStorage.getItem('email'));
        setSalary(localStorage.getItem('salary'));
        setPassword(localStorage.getItem('password'));
    },[])

    const handelUpdate=(e)=>{
        e.preventDefault();
        axios.put(`https://66e673ac17055714e58996ac.mockapi.io/Crud/${id} `,{
            e_name:name,
            e_email:email,
            e_post:post,
            e_salary:salary,
            e_password:password,
        }).then(()=>{
            navigate('/read');
        });

    }


  return (
    <>
    <h1 style={{alignItems:'center'}} className='edithead'>Update data</h1>
    <form onSubmit={handelUpdate} className='formedit' >
        <table className='edittable'>
            <tbody className='edittbody'>
                <tr>
                    <td>Name</td>
                    <td><input type='text' value={name} onChange={(e)=>setName(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} /></td>

                </tr>
                <tr>
                    <td>Post</td>
                    <td><input type='text' value={post} onChange={(e)=>setPost(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Salary</td>
                    <td><input type='text' value={salary} onChange={(e)=>setSalary(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>password</td>
                    <td><input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type='submit' value='creat api' /></td>
                </tr>
            </tbody>
        </table>
    </form>
    </>
  )
}

export default Edit
