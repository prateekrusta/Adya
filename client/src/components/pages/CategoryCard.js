import { connect } from 'mongoose';
import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import '../../assets/css/home.css';
import Avatar from '../../assets/logos/avatar2.png';

const CategoryCard = ({ connectingUsers }) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <div className='mainin-1 right-right' align='center'>
      <h1>Connect with Peers </h1>
      {connectingUsers.map((connect) => {
        if (
          connect.skill === user.skill &&
          connect.district === user.district &&
          connect._id !== user._id
        )
          return (
            <div className='cardss row' align='left'>
              <div className='cards-inner-1 col-sm-2'>
                <img className='avatar-card' src={Avatar}></img>
              </div>
              <div className='cards-inner-2 col-sm-10'>
                <h3 className='headingss text-left'>{connect.name}</h3>
                <ul className='list-cards'>
                  <li className='li-card'>
                    <b>Mobile Number</b> {'->'} {connect.phone}
                  </li>
                  <li className='li-card'>
                    <b>State</b> {'->'} {connect.state}
                  </li>
                  <li className='li-card'>
                    <b> District</b> {'->'} {connect.district}
                  </li>
                  <li className='li-card'>
                    <b> Individual/ Group </b> {'->'} {connect.group}
                  </li>
                  <li className='li-card'>
                    <b> Skills </b>
                    {'->'} {connect.skill}
                  </li>
                </ul>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default CategoryCard;
