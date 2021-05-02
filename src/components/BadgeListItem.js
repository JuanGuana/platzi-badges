import React from 'react';
import Gravatar from './Gravatar';

const BadgeListItem = ({ badge }) => {
  return (
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
  );
};

export default BadgeListItem;
