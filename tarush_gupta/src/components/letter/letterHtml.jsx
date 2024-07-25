import { useRef } from 'react';
import './letter.css'
import emailjs from '@emailjs/browser';

export default function LetterHtml({idx}) {
    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3v2t0b7', 'template_4fv0o6l', form.current, { publicKey: 'Hfeso__-f4gFcNp2-', })
            .then(
                () => { 
                    window.alert('Message sent successfully')
                 },
                (error) => { window.alert('FAILED...', error.text); },
            );
    };

    return <section className={idx===8?`letterContainer`:`letterContainer hidden`} id='letterContainer'>
        <strong>Let's have a talk</strong>
        <form ref={form} onSubmit={sendEmail}>
            <div className="name"><input type="text" placeholder='Name' name="user_name" required /></div>
            <div className="email"><input type="mail" placeholder='Email' name="user_email" required/></div>
            <div className="message"><textarea name="message" placeholder='Message' required /></div>
            <button type="submit">send</button>
        </form>
        <div>To: <i>tarush23.gupta@gmail.com</i></div>
    </section>
}