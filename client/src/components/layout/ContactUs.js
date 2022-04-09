import ContactPhoto from '../../assets/images/contact-photo.png'
import '../../assets/css/contact.css'

const ContactUs = () => {
    return ( 
        <>
        <div className="hello-cons" id="contact"></div>
        <div className="contact">
            <div className="contact-inner">
                <div className="contact-left">
                    <img className="contact-photo" src={ContactPhoto}></img>
                </div>
                <div className="contact-right">
                    <div className="main-headingss">
                        REACH US!
                    </div>
                    <div className="contact-details">
                        <label>Email ID</label><span className="contact-span"> : adya.venture@gmail.com</span> <br />
                        <label>Customer Care</label><span className="contact-span"> : +91 - 9540273272</span> <br />
                        <label>Address</label><span className="contact-span"> : Dwarka, New Delhi</span> <br />
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ContactUs;