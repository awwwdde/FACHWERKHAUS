import React,{useRef, useState} from 'react';
import { Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import './wannaProjectScript.scss';
import house from '../../../img/house1.png'
const WannaProjectScript = ({project}) => {
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

    const [text, setText] = useState(`Здравствуйте! Мне понравился проект - ${project}`)


    return (
        <div>
            <div className="wp">
                <div className="wp_title">
                    <h2 className="wp_title_text">Понравился проект?</h2>
                    <div className="wp_title_sub">
                        <h2 className="wp_title_sub_title">Закажите его прямо сейчас! </h2>
                    </div>
                </div>
                <div className="wp_form">
                    <div className="wp_form_img">
                        <img src={house} alt="" className='wp_form_img_opt'/>
                    </div>
                    <div className="wp_form_contact">
                        <Form ref = {ref} onSubmit={handleSubmit} className='wp_form_contact_label'>
                            <input  type = 'text' placeholder='Ваше имя' className='wp_form_contact_imput'    name='name' autoComplete="off" />
                            <input  type = 'text' placeholder='Ваш телефон' className='wp_form_contact_imput' name='phone' autoComplete="off" />
                            <input  type = 'text' placeholder='Ваша почта' className='wp_form_contact_imput'  name='email'    autoComplete="off" />
                            <textarea  type = 'text' placeholder='Ваш вопрос' className='wp_form_contact_textarea' name='message' autoComplete="off" value={text} onChange={event => setText(event.target.value)}></textarea>
                            <button type = 'submit' className='wp_form_contact_btn'>Отправить</button>
                            {success && 'Сообщение отправлено'}
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WannaProjectScript;