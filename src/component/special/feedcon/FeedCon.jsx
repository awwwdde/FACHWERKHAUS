import React,{useRef, useState} from 'react';
import { Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import './feedCon.scss'


const FeedCon = () => {
    const ref = useRef()
    const [success, setSuccess] = useState(null)

    const handleSubmit=e=>{
        e.preventDefault();
        emailjs.sendForm('service_hjascje', 'template_3keag1s', ref.current, 'jUzfELBEqaukqh3r4')
        .then((result) => {

            console.log(result.text);
            setSuccess(true)
        }, (error) => {
            console.log(error.text);
            setSuccess(false)
        });
    }
        return (
        <div>
            <div className="feedcon">
                <div className="feedcon_top">
                    <h2 className="feedcon_top_title">Ждем ваши вопросы!</h2>
                </div>
                <div className="feedcon_middle">
                    <Form ref = {ref} className="feedcon_middle_form" onSubmit={handleSubmit}>
                        <input  type = 'text' placeholder='Ваше имя' className='feedcon_middle_form_imput'    name='name' autocomplete="off"/>
                        <input  type = 'text' placeholder='Ваш телефон' className='feedcon_middle_form_imput' name='phone' autocomplete="off"/>
                        <input  type = 'text' placeholder='Ваша почта' className='feedcon_middle_form_imput'  name='email'    autocomplete="off"/>
                        <textarea  type = 'text' placeholder='Ваш вопрос' className='feedcon_middle_form_textarea' name='message' autocomplete="off" />
                        <button type = 'submit' className='feedcon_middle_form_button'  >Отправить</button>
                        {success && 'Сообщение отправлено'}
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default FeedCon;