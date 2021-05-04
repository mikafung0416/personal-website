import React, { useState } from 'react';
import ContactFormCSS from './styles';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactForm = (props) => {
    const { fields, toastMessages } = props.content;
    const initInputState = {
        name: '',
        email: '',
        message: ''
    }
    const [input, setInput] = useState(initInputState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((input) => ({
            ...input,
            [name]: value
        }))
    }
    const resetForm = () => {
        setInput({...initInputState});
        removeClass('name-label', 'focus');
        removeClass('email-label', 'focus');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addClass('submitBtn', 'btn-spinner');
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, input, process.env.REACT_APP_EMAILJS_USER_ID).then((res) => {
            toast.success(toastMessages.success);
            resetForm();
        }, (err) => {
            toast.error(toastMessages.error);
        }).then((res) => {
            removeClass('submitBtn', 'btn-spinner');
        })
    }
    const addClass = (elm, cls) => {
        document.getElementById(elm).classList.add(cls);
    }
    const removeClass = (elm, cls, prop=null) => {
        if (prop != null && input[prop]) return;
        document.getElementById(elm).classList.remove(cls);
    }

    return (
        <ContactFormCSS>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type="text" name="name" id="name-input" value={input.name} required onFocus={() => addClass('name-label', 'focus')} onBlur={() => removeClass('name-label', 'focus', 'name')} onChange={handleChange}></input>
                    <label htmlFor="name-input" id="name-label">{fields.name}</label>
                </div>
                <div className="input-field">
                    <input type="text" name="email" id="email-input" value={input.email} required onFocus={() => addClass('email-label', 'focus')} onBlur={() => removeClass('email-label', 'focus', 'email')} onChange={handleChange}></input>
                    <label htmlFor="email-input" id="email-label">{fields.email}</label>
                </div>
                <div className="input-field msg-field">
                    <textarea name="message" value={input.message} required placeholder={fields.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" id="submitBtn" className="btn">
                    <span className="btn-text">{fields.sendBtn}</span>
                </button>
            </form>
        </ContactFormCSS>
    )
}

export default ContactForm;