import React from 'react';
import '../styles/Profile.scss';
import '../components/Education';
import Education from '../components/Education';
import Experience from './Experience';
import Contact from './contact';
import Projects from './Projects';

function Profile() {
  return (
    <div className='Forimg'>
    <section className="profile">
      <h2>Profile</h2>
      <div className="profile-container">
        <img src="../../public/images/face1.jpg"  />
        <h3 className='jyo'> Jyothika Manthena</h3>
        <p><b>Hi, I'm Jyothika,</b> a Frontend Developer passionate about building interactive user interfaces and responsive websites using modern web technologies like React, JavaScript, HTML, and CSS.</p>
      </div>
      <div>
        <h2>Contact Details</h2>
        <p > <b>mobile number :</b> &nbsp;  9573553222 </p>
        <p > <b>Email :</b> &nbsp; jyothika.manthena02@gmail.com </p>
      </div>
    </section>
    
    
      <section>
        <Education/>
        <Experience/>
        <Projects/>
        <Contact/>
        
      </section>

      </div>
    
  );
}

export default Profile;
