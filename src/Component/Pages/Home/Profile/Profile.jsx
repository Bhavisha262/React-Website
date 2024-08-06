import React, {  useEffect, useState } from 'react';
import './Profile.scss';
import Reset from '../Reset/Reset';




const Profile = () => {
  const Token = sessionStorage.getItem('token');
  const [userdata, setUserdata] = useState(null);
 
 const[form,setForm] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      if (!Token) {
        return;
      }

      const response = await fetch('http://localhost:3025/api/user', {
        headers: { Authorization: `Bearer ${Token}` },
      });

      const data = await response.json();
      setUserdata(data.accountInfo);
      sessionStorage.setItem('userdata', JSON.stringify(data.accountInfo));
    };

    fetchUserData();
  }, [Token]);

  return (
    <div>
      {userdata ? (

form? 
  <div><Reset userdata={userdata}/></div>:(
  <div className="user-info">
  <div className="user-info-one">
    <h1>My Details</h1>
  </div>
  <div className="user-info-two">
    <div className="one-acc">
      <span>Name:</span> <span><p>{userdata.name}</p></span>
    </div>
    <div className="two-acc">
      <span>Email-id:</span> <span><p>{userdata.email}</p></span>
    </div>
    <div className="three-acc">
      <span>Mobile no:</span> <span><p>{userdata.mobile}</p></span>
    </div>

    <div className="four-acc">
      <span>Password:</span> <span><p>*</p></span>
    </div>
    <div className="five-acc">
      Want to change the password ? <button onClick={()=> setForm(true)} >Click Here</button>
    </div>
  </div>
</div>
  )

       
      ) : (
        <p className="no-details">No details available</p>
      )}
    </div>
  );
};

export default Profile;