import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import password from "../../Images/password.jpg"
import inp from "../../Images/input.png"
import Manage from "../Manage/manage";
import "./password.css"
const Password = () => {
    const [inpVal,setVal]=useState({
        domain:"",
        user:"",
        password:"",
        search:"",
        passwordShow:false,

    })
    const [domainLi,setLi]=useState([])
    
    const clickChange=()=>{
        setVal({...inpVal, passwordShow:!inpVal.passwordShow})
    }
    const changeSearch=event=>{
        setVal({...inpVal,search:event.target.value})
    }
    const DomainChange=(event)=>{
        setVal({...inpVal,domain:event.target.value})
    }
    const UserChange=(event)=>{
        setVal({...inpVal,user:event.target.value})
    }
    const PasswordChange=event=>{
        setVal({...inpVal,password:event.target.value})
    }
    const SubmitForm=event=>{
        event.preventDefault()
        if (inpVal.domain!==""&&inpVal.user!==""&&inpVal.password!==""){
        const enteredLi={
            id:uuidv4(),
            domain_details:inpVal.domain,
            user_details:inpVal.user,
            password_details:inpVal.password
        }
        setLi(((prev) => [...prev, enteredLi]))
        setVal({...inpVal,domain:"",user:"",password:""})
        
    }
    }

    return (
        <div className='password_cont'>
            <div className='outer_cont'>
               <div className='image_pass_cont'>
                <img src={password} alt="Wrong_url" className='img_password'/>
                <p className='password_para'>Password Management</p>
                </div>
                <div className='inner_cont'>
                    <div className="Inner_cont_2">
                    
                        <h1 className='password_head'>Add New Password</h1>
                        <form onSubmit={SubmitForm}>
                        <input className='inp_style' type="text" value={inpVal.domain} onChange={DomainChange} placeholder='Enter domain Usage'/>
                        <input className='inp_style' type="text" value={inpVal.user} onChange={UserChange} placeholder='Enter Username'/>
                        <input className='inp_style' type="password" value={inpVal.password} onChange={PasswordChange} placeholder="Enter password"/>
                        <button className='btn' onClick={SubmitForm} >Add</button>
                        </form>
                   </div>
                   <img src={inp} className="input_styling" alt="Wrong_url"/>
                </div>
          

            <div className='bottom_container'>
                <div className='bottom_cont_1'>
                <h1 className='password_head'>Your Passwords <span>{domainLi.length}</span></h1>
                <input  className='inp_style' type="search" value={inpVal.search} onChange={changeSearch} placeholder="Search domain" />
                </div>
            <hr className='hor_wid'/>
            <div className='check_cont'>
            <input type="checkbox" onChange={clickChange}/>
            <p >Show Password</p>
            </div>
            <ul>
                {domainLi.map((item)=>(
                    <Manage key={item.id} details={item}/>
                ))}
            </ul>
            </div>
        </div>
        </div>
    );
};

export default Password;