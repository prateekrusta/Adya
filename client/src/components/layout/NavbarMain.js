import '../../assets/css/navbar.css';
import LogoMain from '../../assets/logos/logo-main.png';
import { Link } from 'react-router-dom';

const NavbarMain = () => {
  let URL;
  if (process.env.NODE_ENV === 'production') {
    URL = 'https://adya-support.herokuapp.com';
  } else {
    URL = 'http://localhost:3000';
  }
  return (
    <>
      <nav className='nav'>
        <div className='nav-header'>
          <div className='nav-title'>
            <span className=''>
              <img src={LogoMain} className='brand-name-logo'></img>
            </span>
          </div>
        </div>
        <div className='nav-btn'>
          <label for='nav-check'>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <input type='checkbox' id='nav-check'></input>
        <div className='nav-links'>
          <a href={`${URL}/#home`} className='jhk'>
            HOME
          </a>
          <a href={`${URL}/#about`}>ABOUT</a>
          <Link to='/schemes'>SCHEMES</Link>
          <a href={`${URL}/#contact`}>CONTACT</a>
          <Link to='/login' className='loginbtn'>
            LOGIN
          </Link>
          <Link to='/register' className='signupbtn'>
            SIGNUP
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
