import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';
import './styles/BadgesList.css';
class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className='btn btn-primary' to='/badges/news'>
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className='list-unstyled'>
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className='BadgesList'>
              <div className='BadgesList__card'>
                <Gravatar
                  className='BadgeList__avatar'
                  email={badge.email}
                  alt='Avatar'
                />
                <div className='BadgeList__information'>
                  <strong>{`${badge.firstName} ${badge.lastName}`}</strong>
                  <span className='BadgeList__twitter-color'>
                    <i className='fab fa-twitter' /> @{badge.twitter}
                  </span>
                  <span>{badge.jobTitle}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
