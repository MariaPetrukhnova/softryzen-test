import css from './ContactUs.module.css';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import WhiteBtn from '../../components/WhiteBtn/WhiteBtn';
// import * as yup from 'yup';


// eslint-disable-next-line
// const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// eslint-disable-next-line
// const phoneRegexp = /^([+]38)?((3[\d]{2})([ ,\-,\/]){0,1}([\d, ]{6,9}))|(((0[\d]{1,4}))([ ,\-,\/]){0,1}([\d, ]{5,10}))$/;

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   email: yup.string().matches(emailRegexp, 'Email is not valid').required(),
//   phone: yup.string().matches(phoneRegexp, 'Phone is not valid').required(),
//   message: yup.string()
// });

const ContactForm = () => {
    const submitBtn = 'Send';
    const relink = '/main';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
  

    const onNameChange = value => {
        setName(value);
      };

    const onEmailChange = value => {
        setEmail(value);
    };

    const onPhoneChange = value => {
        setPhone(value);
    };

    const onMessageChange = value => {
        setMessage(value);
    };  

    // const initVal = {
    //   name, 
    //   email, 
    //   phone, 
    //   message
    // }

    const handleFormSubmit = e => {
      e.preventDefault();
      Notify.success(`${name} ${email} ${phone} ${message}`);
    };

    return (<>
          <form onSubmit={handleFormSubmit} className={css.ContactForm}>
            <label className={css.ContactForm_label}> Full name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Rosie"
                  onChange={e => onNameChange(e.target.value)}
                  className={css.ContactForm_input}
                  required
                />
            </label>
            <label className={css.ContactForm_label}> Email:
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="johnrosie@gmail.com"
                  onChange={e => onEmailChange(e.target.value)}
                  className={css.ContactForm_input}
                  required
                />
            </label>
            <label className={css.ContactForm_label}>Phone:
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="380961234567"
                  onChange={e => onPhoneChange(e.target.value)}
                  className={css.ContactForm_input}
                  required
                />
            </label>
            <label className={css.ContactForm_label}> Message:
                <textarea
                  name="message" 
                  rows="8" 
                  cols="30" 
                  placeholder="Your message"
                  onChange={e => onMessageChange(e.target.value)}
                  className={css.ContactForm_input}
                />
            </label>
            <WhiteBtn type='submit' nameBtn={submitBtn} className={css.ContactForm_btn} relink={relink} />
          </form>
        </>
    )
};

export default ContactForm;