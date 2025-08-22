import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Kolom Kiri: Logo + Deskripsi */}
        <div className="footer-column">
          <img src="/images/white.png" alt="Nejtrip Logo" className="footer-logo" />
          <img src="/images/c.png" alt="Nejtrip Logo" className="footer-logo" />
          <p className="footer-description">
            Bantu wujudkan liburan impianmu dengan pengalaman perjalanan yang menyenangkan dan terpercaya.
          </p>
        </div>

        {/* Kolom Tengah: Navigasi */}
        <div className="footer-column">
          <h6>Menu</h6>
          <ul>
            <li><a href="/">Beranda</a></li>
            <li><a href="/about">Informasi</a></li>
            <li><a href="/syaket">Syarat & Ketentuan</a></li>
          </ul>
        </div>

        {/* Kolom Kanan: Kontak */}
        <div className="footer-column">
          <h6>Kontak</h6>
          <ul>
            <li>
              <a href="https://wa.me/6281264427001 
" target="_blank" rel="noreferrer">
                <FaWhatsapp className="footer-icon" /> Admin
              </a> <a href="https://wa.me/6289669780850 
" target="_blank" rel="noreferrer">
                | Admin Jakarta
              </a>
            </li>
            <li>
              <a href="mailto:nejtrip30@gmail.com" target="_blank" rel="noreferrer">
                <FaEnvelope className="footer-icon" /> nejtrip30@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nejtrip?igsh=ZzR4dndlaWM3bHZz&utm_source=qr" target="_blank" rel="noreferrer">
                <FaInstagram className="footer-icon" /> @nejtrip
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@nejtrip.id?_t=ZS-8yTtzXU5R5E&_r=1" target="_blank" rel="noreferrer">
                <FaTiktok className="footer-icon" /> @nejtrip.id
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Nejtrip. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
