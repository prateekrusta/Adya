import '../../assets/css/navbar.css';
import LogoMain from '../../assets/logos/logo-main.png';
import { Link } from 'react-router-dom';
import BannerPhoto from '../../assets/images/banner-photo.png';

const Banner = () => {
  let URL;
  if (process.env.NODE_ENV === 'production') {
    URL = 'https://adya-support.herokuapp.com';
  } else {
    URL = 'http://localhost:3000';
  }
  return (
    <div className='banner-main' id='home'>
      <div className='banner-main-inner'>
        <div className='banner-left'>
          <img className='banner-photo' src={BannerPhoto}></img>
        </div>
        <div className='banner-right'>
          <div className='main-heading'>ADYA</div>
          <div className='sub-heading'>
            Where Preparation meets Opportunity.
          </div>
          
          <div className=''>
            <a href={`${URL}/#about`}>
              <button className='button-banner'>Read More &nbsp;<i class="fa-brands fa-readme"></i></button>
            </a>
            <a href={`${URL}/#contact`}>
              <button className='button-banner'>Contact Us &nbsp;<i class="fa-solid fa-message"></i></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
