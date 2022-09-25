import emailjs from 'emailjs-com';
import { useRef, useContext, useState } from 'react';
import SectionName from '../components/SectionName';
import { ThemeContext } from '../context/ThemeContext';
const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [checker, setChecker] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const removeSuccess = () => {
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };
  const removeChecker = () => {
    setTimeout(() => {
      setChecker(false);
    }, 10000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      formData.user_name === '' ||
      formData.user_email === '' ||
      formData.message === ''
    ) {
      setChecker(true);
      removeChecker();
    } else {
      emailjs.sendForm(
        'service_lvbgghq',
        'template_7s6q39p',
        form.current,
        'ApMoZQgE35O2bT0Ez'
      );
      setSuccess(true);
      setChecker(false);
      removeSuccess();
      setFormData({ user_name: '', user_email: '', message: '' });
    }
  };

  const { theme } = useContext(ThemeContext);
  return (
    <section className='contact' id='contact'>
      <div>
        <SectionName>get in touch</SectionName>
      </div>
      <form ref={form} className='contact__form' onSubmit={sendEmail}>
        {checker && (
          <div className='alert danger ftc text'>all fields are required </div>
        )}
        {success && (
          <div className='alert success ftc text'>
            your message has been sent, thank you.
          </div>
        )}
        <input
          className={`contact__input ${theme === 'light' && 'light'}`}
          type='text'
          name='user_name'
          placeholder={`your name*`}
          onChange={handleChange}
          value={formData.user_name}
        />
        <input
          className={`contact__input ${theme === 'light' && 'light'}`}
          type='email'
          name='user_email'
          placeholder='your email*'
          onChange={handleChange}
          value={formData.user_email}
        />
        <textarea
          className={`contact__input textarea ${theme === 'light' && 'light'}`}
          name='message'
          rows='10'
          placeholder='your message*'
          onChange={handleChange}
          value={formData.message}
        ></textarea>
        <input
          className={`btn btn--primary ${theme}`}
          type='submit'
          value='send message'
        />
      </form>
    </section>
  );
};

export default Contact;
