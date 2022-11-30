import './nav.css';
import { useState } from 'react';

let isToggled = false;

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  const onFocusOut = event => {
    setIsActive(current => { return false; });
  }
  return (
    <div className='container'>
       <nav className="app-nav">
      <div className='nav-left-lg'>
        <div className='logo'>
          Shortly
        </div>

        <ul className='links-lg'>
          <li className='nav-item'><a className="text-grayish-violet" href='#'>Features</a></li>
          <li className='nav-item'><a className="text-grayish-violet" href='#'>Pricing</a></li>
          <li className='nav-item'><a className="text-grayish-violet" href='#'>Resources</a></li>
        </ul>
      </div>

      <div className='nav-right-lg'>
        <button className='btn text-grayish-violet'>Login</button>
        <button className='btn btn-cyan rounded'>Sign Up</button>
      </div>

      <div className='nav-left-sm'>
        <div className='logo'>
          Shortly
        </div>
      </div>

      <div className='nav-right-sm' onClick={handleClick}>
        <button className='btn hamburger-menu'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </button>
      </div>


      <div className={isActive ? 'toggle-menu bg-very-dark-blue toggle-on' : 'toggle-menu bg-very-dark-blue'}>
        <ul className='links-sm'>
          <li className='nav-item text-light text-center'><a className="text-light" href='#'>Features</a></li>
          <li className='nav-item text-light text-center'><a className="text-light" href='#'>Pricing</a></li>
          <li className='nav-item text-light text-center'><a className="text-light" href='#'>Resources</a></li>
        </ul>
        <div className='separator'></div>
        <ul className='links-sm'>
          <li className='nav-item text-light text-center'>
            <button className='btn text-light'>Login</button>
          </li>
          <li className='nav-item text-light text-center'>
            <button className='btn btn-cyan rounded sign-up-sm'>Sign Up</button>
          </li>
        </ul>
      </div>
      <div className={isActive ? 'overlay toggle-on' : 'overlay'} onClick={onFocusOut}></div>
    </nav>
    </div>
  );
}

export default Nav;
