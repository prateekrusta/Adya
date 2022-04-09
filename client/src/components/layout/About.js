import '../../assets/css/about.css';
import LogoMain from '../../assets/logos/logo-main.png';
import AboutPhoto from '../../assets/images/about-photo.png';

const About = () => {
    return ( 
        <>
        <div className="hello-about" id="about"></div>
        <div className="about-main">
            <div className="about-inner">
                <div className="about-left">
                    <div className="main-headings">
                        ABOUT <img src={LogoMain} className='logo-adya'></img>
                    </div>
                    <div className="about-body">
                    There is an entrepreneurial surge amongst women entrepreneurs during this pandemic and women entrepreneurs are coming forward in India but they definitely need mentoring support from experts to sustain the business. Here is where Adya plays an important role to handhold entrepreneurs in every stage of their business.
                    Adya is an initiative to promote and support aspiring as well as established rural women entrepreneurs.
                    </div>
                </div>
                <div className="about-right">
                    <img className="about-photo" src={AboutPhoto}></img>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default About;