import React,{useState} from 'react';
import Profile from './Profile';
const Contact=()=>{
    const [name,setName]=useState('Mohini')
    return(
        <>
        <h1>Name is : {name}</h1>
        <Profile name={name}/>
        <button onClick={()=>setName('Pallavi')}>Change</button>
        </>
    )
}

export default Contact;