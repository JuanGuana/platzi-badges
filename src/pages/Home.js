import React from 'react'
import './styles/Home.css'
import astronautas from '../images/astronautas.png'
import logo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-title">
      <img className="Home-logo" src={logo} alt="Logo conf"/>
        <h1>Print your badges</h1>
        <p>The easiest way to manage your conference</p>
        <Link className='btn btn-primary' to='/badges'>
          Start
        </Link>
      </div>
      <div className="Home-logo-container">
        <img className="Home-logo" src={astronautas} alt="Logo astronautas"/>
      </div>
    </div>
  )
}

export default Home
