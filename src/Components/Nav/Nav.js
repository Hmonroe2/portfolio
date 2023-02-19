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

  return (
    <div>
      <Link to={link}>
        <button onClick={() => { changeText() }}> {aboutText} </button>
      </Link>
      <button> Work Experience </button>
      <button> Contact</button>
    </div>
  );
}

export default Nav
