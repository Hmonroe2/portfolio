import React from 'react'
import { Link } from 'react-router-dom'
import '../Nav/Nav.css'
function Nav() {
  return (
    <div>
      <Link to="/About">
        <button> About </button>
      </Link>
      <button> Work Experience </button>
      <button> Contact</button>
    </div>
  );
}

export default Nav
