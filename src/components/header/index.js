import React from 'react';
import './styles.scss';
import Logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
