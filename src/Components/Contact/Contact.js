import React from 'react';
import '../Contact/Contact.css';
import ProfilePic from '../../Images/ProfilePic.jpg';
import LinkPic from '../../Images/LinkedIn.png';
import GitHub from '../../Images/GitHub-Emblem.png';

function Contact() {
  return (
    <section className="contact-container">
      <div className="card">
        <div className="upper-card"> </div>
        <div className="image-container">
          <img src={ProfilePic} className="link-image"></img>
        </div>
        <div className="lower-container">
          <p className="name"> Hunter Monroe </p>
          <p className="position"> Front End Developer</p>
          <button> View Profile </button>
        </div>
        <img className="link-logo" src={LinkPic}></img>
      </div>
      <div className="card">
        <div className="upper-card-github"> </div>
        <div className="image-container">
          <img src={ProfilePic} className="link-image"></img>
        </div>
        <div className="lower-container">
          <p className="name"> Hunter Monroe </p>
          <p className="position"> Front End Developer</p>
          <button> View Profile </button>
        </div>
        <img className="git-logo" src={GitHub}></img>
      </div>
    </section>
  );
}

export default Contact;
