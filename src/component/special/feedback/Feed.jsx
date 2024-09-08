import React, {useRef, useState} from 'react';
import { Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import './feedback.scss'
import house from '../../../img/house1.png'

const Feed = () => {
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
            <div className="feedback">
                <div className="feedback_title">
                    <h2 className="feedback_title_text">Остались вопросы?</h2>
                    <div className="feedback_title_sub">
                        <h2 className="feedback_title_sub_title">Оставьте заявку и получите бесплатную консультацию </h2>
                    </div>
                </div>
                <div className="feedback_form">
                    <div className="feedback_form_img">
                        <img src={house} alt="" className='feedback_form_img_opt'/>
                    </div>
                    <div className="feedback_form_contact">
                        <Form ref = {ref} className='feedback_form_contact_label' onSubmit={handleSubmit}>
                            <input  type = 'text' placeholder='Ваше имя' className='feedback_form_contact_imput'    name='name' autocomplete="off"/>
                            <input  type = 'text' placeholder='Ваш телефон' className='feedback_form_contact_imput' name='phone' autocomplete="off"/>
                            <input  type = 'text' placeholder='Ваша почта' className='feedback_form_contact_imput'  name='email'    autocomplete="off"/>
                            <textarea  type = 'text' placeholder='Ваш вопрос' className='feedback_form_contact_textarea' name='message' autocomplete="off"/>
                            <button type = 'submit' className='feedback_form_contact_btn'>Отправить</button>
                            {success && 'Сообщение отправлено'}
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;