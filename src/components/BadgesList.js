import React from 'react';
import './styles/BadgesList.css';
class BadgesList extends React.Component {
  render() {
    return (
      <ul className='list-unstyled'>
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className='BadgesList'>
              <div className='BadgesList__card'>
                <img
                  className='BadgeList__avatar'
                  src={badge.avatarUrl}
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
