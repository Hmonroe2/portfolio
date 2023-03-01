import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Nav/Nav.css'
function Nav() {
  const [aboutText, setAboutText] = useState('About')
  const [link, setLink] = useState('/About')
  
  const changeText = () => {
    setAboutText('Home')
    setLink('/')
    changeLink()
  }

  const changeLink = () => {
    if (link !== '/About') {
      setAboutText('About')
      setLink('/About')
    }
  }

  //* <button class="button-48" role="button">
  // *  {' '}
  // *  <span class="text"> Button 48</span>{' '}
  //* </button>;
  return (
    <div>
      <Link to={link}>
        <button
          className="button"
          role="button"
          onClick={() => {
            changeText();
          }}>
          <span className="text">{aboutText}</span>
        </button>
      </Link>
      <Link to="/Projects">
        <button
          className="button"
          onClick={() => {
            changeText();
          }}>
          <span className="text">Projects</span>
        </button>
      </Link>
      <Link to="/Contact">
        <button className="button">
          {' '}
          <span className="text">Contact</span>
        </button>
      </Link>
      <a href={require('../../Images/HunterResume.pdf')} target="_blank">
        <button className="button"> Resume </button>
      </a>
    </div>
  );
}

export default Nav
