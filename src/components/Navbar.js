import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white-transparent sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src="/images/twotone.png" alt="Logo" height="50" />
        </a>
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end text-center ${isNavOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  closeNavbar();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Beranda
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={() => {
                  closeNavbar();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Informasi
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://wa.me/6281264427001?text=Halo%20kak,%20aku%20tertarik%20sama%20tripnya%20setelah%20lihat%20di%20website.%20Bisa%20dikirim%20info%20selengkapnya%20kak?"
                onClick={closeNavbar}
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
