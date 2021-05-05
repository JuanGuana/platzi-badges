import React from 'react';
import { Link } from 'react-router-dom';
import BadgeListItem from './BadgeListItem';
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
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <BadgeListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
