import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import SideNav from '../layout/SideNav';
import AuthContext from '../../context/auth/authContext';
import Avatar from '../../assets/logos/avatar1.png'
import Spinner from '../layout/Spinner';

const GroupInfo = () => {

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [shgData, setshgData] = useState([])

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);


  const getGroup = async () => {
    try {
      const res = await axios.get('/api/group');
      console.log(res.data);
      setshgData(res.data)
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGroup();
  }, []);

  return (
    <>
      <div className='grid-2 home-outer'>
        <div>
          <SideNav />
        </div>
        <div className='mainin'>
          <div className='mainin-1'>
            <br />
            <br />
            <h1>List of Available SHGs </h1>
            <div>
            {shgData.length === 0 ? ( <Spinner /> ): ( shgData && (shgData.map((data) => {
                if (data.business===user.skill)
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
                            <button className="btn-sbmt" style={{'margin-top': '30px', 'backgroundColor': '#fc2956', 'color': 'white', 'width': '150px', 'position':'relative','left' : '-50px'}}>
                                Join
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  
                  );
              })))
              
            }
            
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default GroupInfo;
