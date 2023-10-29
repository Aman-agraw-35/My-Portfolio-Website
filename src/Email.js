import React,{ useState} from "react";
import emailjs from '@emailjs/browser';
import axios from "axios";

function Email(){
    
  const hover = () => {
    const trap = document.getElementById("amantrap");
    const cod = Math.floor(Math.random() * 130) * 10; 
    trap.style.marginLeft = cod + "px";
  }


    const [name ,setName] = useState("");
    const [email ,setEmail] = useState("");
    const [message ,setMessage] = useState("");

    const handleSubmit = async (e) => {
         e.preventDefault();
         const serviceId = 'service_n0ep3i';
         const templateId = 'template_z38nfvw';
         const publicKey = 'wn6T6pvJ_q445t_nd';

  
       const data ={
        service_id : serviceId ,
        template_id : templateId,
        user_id : publicKey,
        template_params : {
            from_name : name ,
            from_email : email ,
            to_name : "AMAN AGRAWAL" ,
            message : message 
          }
       }
    
       try {
        const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", JSON.stringify(data));
        console.log(res.data);
        setName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        console.error(error);
      }
    }
      

   return(
    <form onSubmit={handleSubmit}  >
    <input name="user_name" onChange={ (e) => setName(e.target.value)} className="mx-10 my-3 px-3 text-lg py-2 bg-[rgba(0,0,0,0.6)] rounded-sm text-white " placeholder="Enter your Name" value={name} type="text" /> <br />
    <input name="user_email" onChange={ (e) => setEmail(e.target.value)} className="mx-10 mb-3 px-3 text-lg py-2 bg-[rgba(0,0,0,0.6)] rounded-sm text-white " placeholder="Enter your Email" value={email} type="email" /> <br />
<textarea name="message" value={message} onChange={ (e) => setMessage(e.target.value)}  className="mx-10 text-lg px-3 py-2 bg-[rgba(0,0,0,0.6)] h-[50px] w-[1200px] text-white text-start flex flex-nowrap rounded-sm  placeholder:align-top " placeholder="Your message for me." type="message" />
    <input onClick={() => alert("Message sent successfully.")} onMouseEnter={hover} id="amantrap" className="mx-10  w-[90px] my-3 px-3 text-lg py-2 font-semibold bg-[white] cursor-pointer shadow-md shadow-black text-black rounded-lg hover:bg-[rgba(0,0,0,0.5)]   "  type="button" value="Submit"  />
 </form>
   )};

   export default Email;

