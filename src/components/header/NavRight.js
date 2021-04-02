import React from 'react';
const moon = require('./../../media/moon-s.png');
const sun = require('./../../media/sun.jpeg');

const NavRight = (props) =>{
  return(
    <div className={props.cN}>
      <div
        className={props.navbarKeys.home ? 'centralizer nav-el disabled' : 'centralizer nav-el'}
        onClick={() => props.handleKey('home')}
        >Home</div>
      <div
        className={props.navbarKeys.portfolio ? 'centralizer nav-el disabled' : 'centralizer nav-el'}
        onClick={() => props.handleKey('portfolio')}
        >Portfolio</div>
      <div
        className={props.navbarKeys.skills ? 'centralizer nav-el disabled' : 'centralizer nav-el'}
        onClick={() => props.handleKey('skills')}
        >
        Skills
      </div>
      <div
        className={props.navbarKeys.contact ? 'centralizer nav-el disabled' : 'centralizer nav-el'}
        onClick={() => props.handleKey('contact')}
        >Contact</div>
      <img
        onClick={props.updateSun}
        className='navbar-element light'
        src={props.sun ? sun : moon}
        alt='nothing'/>
    </div>
  )
}

export default NavRight;
