import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import swal from 'sweetalert';
// import { Link } from 'react-router-dom';
import '../../assets/css/form.css';

// Testing
const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  let URL;
  if (process.env.NODE_ENV === 'production') {
    URL = 'https://adya-support.herokuapp.com';
  } else {
    URL = 'http://localhost:3000';
  }

  useEffect(() => {
    if (isAuthenticated) {
      // props.history.push('/');
      const link = document.createElement('a');
      link.href = `${URL}/home`;
      link.click();
    }

    if (error === 'Invalid Credentials') {
      swal({
        text: error,
        icon: 'error',
      });
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    phone: '',
    password: '',
  });

  const { phone, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (phone === '' || password === '') {
      swal({
        text: 'Please fill in all fields',
        icon: 'error',
      });
    } else {
      login({
        phone,
        password,
      });
    }
  };

  return (
    <div className='wrapper-out'>
      <div className='wrapper wrapper2'>
        <h1>LOGIN.</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='text'
              name='phone'
              value={phone}
              onChange={onChange}
              autoComplete='off'
              minLength="10" maxLength="10"
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={password}
              autoComplete='off'
              onChange={onChange}
              required
            />
          </div>
          <input type='submit' value='Login' className='btn-sbmt' />
          {/* <Link to='/home' className='btn btn-primary btn-block'>
          Login
        </Link> */}

          <ul class='bg-bubbles'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Login;
