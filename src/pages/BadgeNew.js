import React from 'react';
import NavBar from '../components/Navbar';
import Badge from '../components/Badge'
import './styles/BadgeNew.css';
import BadgeForm from '../components/BadgeForm'
import header from '../images/badge-header.svg';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='Logo'></img>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName='Juan'
                lastName='Guana'
                avatarUrl='https://pbs.twimg.com/profile_images/1362826038410170368/gs9ZQD1j_400x400.jpg'
                jobTitle='Frontend engineer'
                twitter='juancguana'
              />
            </div>
            <div className='col-6'>
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
