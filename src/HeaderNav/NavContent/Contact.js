import React from 'react'
import {useForm} from 'react-hook-form'

const Contact=()=>{
   const { register} = useForm();
   // let email="mycentryting@gmial.com";
   // const onSubmit = (to,data) => { console.log(data)};
   return(
            <form method="POST" action="mailto:mycentryting@gmial.com">
            <div>Name</div> 
            <div><input type="text" id="name" name="name" ref={register({ required: true })}/></div> 
            <div>Email Address</div> 
            <div><input type="text" id="email" name="email" ref={register({ required: true })}/></div> 
            <div>Phone Number</div> 
            <div><input type="number" id="telephone" name="telephone" ref={register({ required: true })}/></div> 
            <label>Type of session?</label>
            <div><select name="session" ref={register({ required: true })}>
               <option value="option A">option A</option>
               <option value="option B">option B</option>
               <option value="option C">option C</option>
            </select></div>
            <div>Message</div> 
            <div><textarea name="message" id="message" rows="10" cols="70" placeholder="Please write your message here" ref={register}/></div>
           <button type="submit">Submit</button>
            </form> 
   ) 
}


export default Contact;