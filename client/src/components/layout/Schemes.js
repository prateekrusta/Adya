import '../../assets/css/schemes.css';
import Udham from '../../assets/images/udham';
import Bmb from '../../assets/images/bmb';
import ds from '../../assets/images/denashakti';
import mudra from '../../assets/images/mudra';
import orient from '../../assets/images/orient';
import udyogini from '../../assets/images/udyogini';


const Schemes = () => {
    return ( 
        <div className="scheme-outer" align="center">
            <div className="row" align="center">
            <div className="card-container col-sm-4">
                <br/><br/><br/>
            <div className="card">
                <div className="front">
                <h1 className="title">
                MAHILA UDYAM NIDHI SCHEME
                </h1>
                <img className="image image1" src={Udham} alt="" />
                </div>
                <div className="back">
                <h3 className="synopsis">MAHILA UDYAM NIDHI SCHEME</h3>
                <p>
                This scheme aims to meet the gap in equity. It promotes MSMEs and small sector investments in different industries to grow and excel in their areas. This also encourages the reconstruction of SSI units that are deemed incapable but are actually viable to save. A period of 10 years is given to the debtor to repay the loan and the limit for the loan is Rs.10 Lakhs.
                </p>
                </div>
            </div>
            </div>

            <div className="card-container col-sm-4">
                <br/><br/><br/>
            <div className="card">
                <div className="front">
                <h1 className="title">
                    BHARATIYA MAHILA BANK BUSINESS LOAN
                </h1>
                <img className="image image1" src={Bmb} alt="" />
                </div>
                <div className="back">
                <h3 className="synopsis">BHARATIYA MAHILA BANK BUSINESS LOAN</h3>
                <p>This banking scheme supports women and their businesses on a large scale, that is why it was created in the first place. Women have ventured into different fields of business and are constantly pining for success. This bank has the vision to provide economic empowerment to women. The loan limit via this source is Rs.20 Crores.</p>
                </div>
            </div>
            </div>

            <div className="card-container col-sm-4">
                <br/><br/><br/>
            <div className="card">
                <div className="front">
                <h1 className="title">
                DENA SHAKTI <br/> SCHEME
                </h1>
                <img className="image image1" src={ds} alt="" />
                </div>
                <div className="back">
                <h3 className="synopsis">DENA SHAKTI SCHEME</h3>
                <p>
                This scheme is also for women entrepreneurs but limited only to those in the fields of agriculture, retail, manufacturing, are small enterprises or micr-credit organizations. As per RBI limits, the maximum ceiling limits to women beneficiaries are also provided according to the sector they are expanding or planning to open a business in. The loan limit is Rs.20 Lakhs.
                </p>
                </div>
            </div>
            </div>

            <div className="card-container col-sm-4">
                <br/><br/><br/>
            <div className="card">
                <div className="front">
                <h1 className="title">
                PM ROZGAR YOJANA
                </h1>
                <img className="image image1" src={mudra} alt="" />
                </div>
                <div className="back">
                <h3 className="synopsis">PRADHAN MANTRI ROZGAR YOJANA</h3>
                <p>Also known as PMRY, this is one of the best schemes for women entrepreneurs both socially and financially. The loan subsidy amount is up to 15% of the project cost with an upper ceiling of Rs. 12,500 per borrower as a restriction. The scheme applies to all types of ventures in industries, trade and services. The age limit is 35 years and loan limit for business is Rs. 2 Lakh while for service and industry, Rs. 5 Lakh.</p>
                </div>
            </div>
            </div>

            <div className="card-container col-sm-4">
                <br/><br/><br/>
            <div className="card">
                <div className="front">
                <h1 className="title">
                UDYOGINI <br/> SCHEME
                </h1>
                <img className="image image1" src={udyogini} alt="" />
                </div>
                <div className="back">
                <h3 className="synopsis">UDYOGINI <br/> SCHEME</h3>
                <p>This program encourages women to be self-reliant and help them in self-development by empowering them economically to be able to do so. This is only valid for those who have a family income of less than Rs. 40,000 per annum. They especially encourage loans in the trade and service sector and the cap amount for the same is Rs. 1 Lakh.</p>
                </div>
            </div>
            </div>

            <div className="card-container  col-sm-4">
                <br/><br/><br/>
            <div className="card">
                <div className="front">
                <h1 className="title">
                ORIENT MAHILA VIKAS YOJANA
                </h1>
                <img className="image image1" src={orient} alt="" />
                </div>
                <div className="back">
                <h3 className="synopsis">ORIENT MAHILA VIKAS YOJANA</h3>
                <p>This scheme is for women who hold 51% share capital separately or collectively as a proprietary concern. It is a very good opportunity for these stakeholders to help expand their business and add to the development of their field. This scheme does not require collateral security while also giving a concession at the interest rate of up to 2%. The loan limit is Rs. 25 Lakhs.</p>
                </div>
            </div>
            </div>
            </div>

        </div>
     );
}
 
export default Schemes;