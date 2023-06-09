import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './navBar.module.scss';
import icon from '../../assets/argentBankLogo.png';

const NavBar = () => {
  const signIn = (
    <NavLink to={'/login'} className={style.containerNavItem}>
      <i className="fa fa-user-circle" />
      <button className={style.signInButton}>Sign In</button>
    </NavLink>
  );

  return (
    <nav className={style.containerNav}>
      <NavLink to={'/'} className={style.mainNavLogo}>
        <img
          className={style.containerNavLogoImage}
          src={icon}
          alt="Argent Bank Logo"
        />
        <h1 className="srOnly">Argent Bank</h1>
      </NavLink>
      <div>{signIn}</div>
    </nav>
  );
};

export default NavBar;
