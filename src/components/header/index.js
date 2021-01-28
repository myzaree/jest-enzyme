import React from 'react';
import './styles.scss';
import Logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header data-test="headerComponent">
      <div className="wrapper">
        <div className="logo">
          <img data-test="logoImg" src={Logo} alt="Logo" />
          <h2>Logo</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
