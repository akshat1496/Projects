import Button from './Button.jsx'
import styles from './ContactForm.module.css'
import { LuMessageCircle } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { useState } from 'react';

const ContactForm = () => {


const[name,setName] = useState("userName")
const[email,setEmail] = useState("user@google.com")
const[message,setMessage] = useState("Feedback")
  const onSubmit = (e)=>{
   e.preventDefault();
    console.log(e);
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setMessage(e.target[2].value)
  }

  return (
    <section className={`${styles.container } container`}>
        <div className={`${styles.ContactFormContent}`}>
            <div className={`${styles.top_button}`}>
            <Button  text="VIA SUPPORT CHAT"  icon={<LuMessageCircle fontSize="24px"/> }/>
            <Button text="VIA CALL"icon={<IoCallOutline fontSize="24px"/>} />
            </div>
              <Button  isMail={true} text="VIA MAIL" icon={<IoMdMail fontSize="24px"/> }/>


              <form onSubmit={onSubmit}>
                  <div className={styles.form_control}>
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name"/>
                  </div>
                  <div className={styles.form_control}>
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email"/>
                  </div>
                  <div className={styles.form_control}>
                      <label htmlFor="message">Message</label>
                      <textarea  name="message" rows={5}/>
                  </div>
                 <div style={{display:"flex",justifyContent:"end",}}>
                 <Button text="SUBMIT" />
                 </div>
                 <div>{"User: "+ name+"   Email: "+email+"   Feedback:"+message}</div>
              </form>


        </div>
        <div className="ContactFormImage">
          <img src="images/contact.svg" alt="Contact Image" />
        </div>

    </section>                               
  )
}

export default ContactForm
