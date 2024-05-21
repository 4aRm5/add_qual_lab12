import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Products from '../pages/Products';
import Contacts from '../pages/Contacts';
import FAQ from '../pages/FAQ';
import Portfolio from '../pages/Portfolio';
import Services from '../pages/Services';
import MakeRequest from '../pages/MakeRequest';
import Calculation from '../pages/Calculation';
import Home from '../pages/Home';
import styles from './Nav.module.css';
import logo from '../img/logo.png'
import request from '../img/request.png'
import calculation from '../img/calculation.png'
import '../App.css'

const Nav = () => {
  return (
    <Router>
      <div>
        {/* Навигационное меню */}
        <nav className={`navbar ${styles.navbar}`}>
          <ul>
            <li><Link to="/" className={styles.navLink}> <img src={logo} class='img1' alt='err'></img> </Link></li>
            <li><Link to="/Services" className={styles.navLink}>Services</Link></li>
            <li><Link to="/Products" className={styles.navLink}>Products</Link></li>
            <li><Link to="/AboutUs" className={styles.navLink}>About us</Link></li>
            <li><Link to="/Portfolio" className={styles.navLink}>Portfolio</Link></li>
            <li><Link to="/FAQ" className={styles.navLink}>FAQ</Link></li>
            <li><Link to="/Contacts" className={styles.navLink}>Contacts</Link></li>
            <li><Link to="/MakeRequest" className={styles.navLink}> <img src={request} class='img2' alt='err'></img></Link></li>
            <li><Link to="/Calculation" className={styles.navLink}> <img src={calculation} alt='err'></img></Link></li>
          </ul>
        </nav>

        {/* Контент страниц */}
        <div className={styles.pageContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/MakeRequest" element={<MakeRequest />} />
            <Route path="/Calculation" element={<Calculation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Nav;