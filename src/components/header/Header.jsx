import React, { useState } from 'react';
import './header.css';

const Header = () => {
  // TOGGLE MENU
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
        <div className="nav container">
            <a href="index.html" className="nav__logo">Smith</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>

                <i class="uil uil-times nav__close"></i>
            </div>

            <div className="nav__toggle">
                <i class="uil uil-apps"></i>
            </div>
        </div>
    </header>
  )
}

export default Header