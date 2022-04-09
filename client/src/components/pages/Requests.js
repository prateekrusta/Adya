import Avatar from '../../assets/logos/avatar2.png';
import '../../assets/css/requests.css';

const Requests = () => {
    return ( 
        <div className="requests-out">
            <div className="requests-in">
                <div className="requests-1 row">
                    <div className="col-sm-2">
                        <img className="img-requests" src={Avatar}></img>
                    </div>
                    <div className="mid-req col-sm-4">
                        Mansi Gulati
                    </div>
                    <div className="last-req col-sm-6">
                        <button className="btn-sbmt-11">
                            Accept
                        </button>
                        <button className="btn-sbmt-12">
                            Reject
                        </button>
                    </div>
                </div>


                <div className="requests-1 row">
                    <div className="col-sm-2">
                        <img className="img-requests" src={Avatar}></img>
                    </div>
                    <div className="mid-req col-sm-4">
                        Gracy Singh
                    </div>
                    <div className="last-req col-sm-6">
                        <button className="btn-sbmt-11">
                            Accept
                        </button>
                        <button className="btn-sbmt-12">
                            Reject
                        </button>
                    </div>
                </div>


                <div className="requests-1 row">
                    <div className="col-sm-2">
                        <img className="img-requests" src={Avatar}></img>
                    </div>
                    <div className="mid-req col-sm-4">
                        Taesha Mendiratta
                    </div>
                    <div className="last-req col-sm-6">
                        <button className="btn-sbmt-11">
                            Accept
                        </button>
                        <button className="btn-sbmt-12">
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Requests;