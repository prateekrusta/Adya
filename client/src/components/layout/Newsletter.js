import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../../assets/css/news.css';
import NewsPhoto from '../../assets/images/news-photo.png';

const Newletter = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === '') {
      swal({
        text: 'Please enter your email',
        icon: 'error',
      });
    } else {
      const formData = {
        email,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const res = await axios.post('/api/news', formData, config);
        swal({
          title: 'Success',
          text: res.data.msg,
          icon: 'success',
        });
      } catch (err) {
        swal({
          text: 'Already applied for newsletter',
          icon: 'error',
        });
      }
    }
  };

  return (
    <>
      <div className='hello-about' id='about'></div>
      <div className='news-main'>
        <div className='news-inner'>
          <div className='news-left'>
            <div className='main-headingsz'>NEWSLETTER</div>
            <div className='news-body'>
              <form onSubmit={onSubmit}>
                <div className='form-group'>
                  <label htmlFor='email'>Email ID : </label>
                  <input
                    type='email'
                    name='newsletter'
                    onChange={onChange}
                    placeholder='example@xyz.com'
                    autoComplete='off'
                    required
                  />
                </div>
                <input
                  type='submit'
                  value='Submit'
                  className='btn-sbmt-final'
                />
              </form>
            </div>
          </div>
          <div className='news-right'>
            <img className='news-photo' src={NewsPhoto}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newletter;
