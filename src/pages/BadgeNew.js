import React from 'react';
import NavBar from '../components/Navbar';
import Badge from '../components/Badge';
import './styles/BadgeNew.css';
import BadgeForm from '../components/BadgeForm';
import header from '../images/badge-header.svg';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: 'Juan C.',
      lastName: 'Guaña',
      email: 'juanc.guana',
      jobTitle: 'Frontend developer',
      twitter: 'juancguana',
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

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
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                avatarUrl='https://pbs.twimg.com/profile_images/1362826038410170368/gs9ZQD1j_400x400.jpg'
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className='col-6'>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
