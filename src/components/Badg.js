import React from 'react';
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge_header">
          <img src={confLogo} alt='Logo de la conferencia' />
        </div>
        <div className="Badge_section-name">
          <img className="Badge_avatar" src='https://www.gravatar.com/avatar?d=identicon' alt='Avatar' />
          <h1>
            Juan C. <br /> Guana
          </h1>
        </div>
        <div className="Badge_section-info">
          <h3>Frontend Engineer</h3>
          <div>@juancguana</div>
        </div>
        <div className="Badge_footer">#devconf</div>
      </div>
    );
  }
}

export default Badge;
