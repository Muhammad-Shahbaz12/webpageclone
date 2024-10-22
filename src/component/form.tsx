
'use client'

import { useState } from "react"

const ContactForm = () => {
//   const [Fullname,setFullname]=useState("")
//   const [email,setEmail]=useState('')
//   const [message,setMessage]=useState('')
//    const handleSubmit=(e)=>{e.preventDefault();

//   console.log("Full name:",Fullname);
//   console.log("Email:",email);
//   console.log("Message:",message);
 // }
  return (
    <>
     <form 
     //onSubmit={handleSubmit}
     className='p-4  mt-4 border-t   gap-5'> 
        <div>
        <label htmlFor='Fullname'>Fullname</label>
         <input
        //  onChange={(e)=>setFullname(e.target.value)} 
        //  value={Fullname} 
         type="text"  
         id='Fullname' 
         placeholder='john dee'/>
        </div>
        <div> 
        <label htmlFor='email'>Emaili</label>
        <input 
        //  onChange={(e)=>setEmail(e.target.value)}
        // value={email}
        type="email" 
        id="email"  
        placeholder='johndee@gmail'/>
        </div>
        <div>
        <label htmlFor='Message'>Message</label>
        <textarea
        //  onChange={(e)=>setMessage(e.target.value)}
        //  value={message}
        className='h-24'  
        id="message"
        placeholder='Type your message here.'
        ></textarea>
        </div>
        <div className='button'>
<button className='bg-green-700 p-3 text-white'
 type='submit'>Send</button></div>

 <div className='bg-slate-100 flex flex-col'>
  <div className='text-red-600 px-5 py-2'>Error message</div>
 </div>

    </form>
    </>
  )
}

export default ContactForm
