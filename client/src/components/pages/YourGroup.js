import '../../assets/css/home.css';
import '../../assets/css/modal.css';
import SideNav from '../layout/SideNav';
import Requests from '../pages/Requests';
import AuthContext from '../../context/auth/authContext';
import Avatar from '../../assets/logos/avatar1.png'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

const YourGroup = () => {

    const authContext = useContext(AuthContext);
    const { user } = authContext;
  
    const [YourGroup, setYourGroup] = useState([])

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
      }, []);

      const getYourGroup = async () => {
        try {
          const res = await axios.get('/api/group');
          setYourGroup(res.data)
          
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        getYourGroup();
      }, []);

    return ( 
        <div className='grid-2 home-outer'>
        <div>
          <SideNav />
        </div>
        <div>
        <div className='mainin'>
          <div className='mainin-1'>
            <br />
            <br />
            <h1>Your Self Help Group </h1>
            <div>
            {YourGroup && YourGroup.map((data) => {
        if (data.phone===user.phone)
          return (
            <div className='cardss row' align="left">
              <div className='cards-inner-1 col-sm-2'>
                <img className='avatar-card' src={Avatar}></img>
              </div>
              <div className='cards-inner-2 col-sm-10'>
                <h3 className='headingss text-left'>{data.name}</h3>
                <ul className='list-cards'>
                  <li className='li-card'>
                    <b>Representative</b> {'->'} {data.representative}
                  </li>
                  <li className='li-card'>
                    <b>Active Members</b> {'->'} {data.members}
                  </li>
                  <li className='li-card'>
                    <b>Mobile Number</b> {'->'} {data.phone}
                  </li>
                  <li className='li-card'>
                    <b>Business</b> {'->'} {data.business}
                  </li>
                  <li align="left">
                    <button className="btn-sbmt" style={{'margin-top': '30px', 'backgroundColor': '#fc2956', 'color': 'white', 'width': '200px', 'position': 'relative', 'left': '-50px'}}>
                        

                        <input type="checkbox" id="modal"></input>
                            <label for="modal" className="example-label">See Requests {">"}</label>
                            <label for="modal" className="modal-background"></label>
                            <div class="modal">
                              <div class="modal-header">
                                <h3>Join Requests</h3>
                                    <label for="modal">
                                      <img className="img-cross" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC" width="16" height="16" alt="" />
                                    </label>
                                </div>
                                <p style={{'color':'black'}}>
                                  <Requests />
                                </p>
                            </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          
          );
      })}
            </div>


          </div>
        </div>
        </div>
      </div>
     );
}
 
export default YourGroup;