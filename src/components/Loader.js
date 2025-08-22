// src/components/Loader.js

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './logo-loader.json'; // Pastikan path ini benar

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lottieSize, setLottieSize] = useState({ width: 400, height: 400 });

  useEffect(() => {
    // --- Logika untuk menyembunyikan loader setelah 10 detik ---
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // Sesuaikan durasi (10000ms = 10 detik)

    // --- Logika untuk mengubah ukuran Lottie berdasarkan lebar layar ---
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setLottieSize({ width: 200, height: 200 }); // Ukuran kecil untuk layar <= 991px
      } else {
        setLottieSize({ width: 400, height: 400 }); // Ukuran default untuk layar > 991px
      }
    };

    // Panggil fungsi saat komponen pertama kali dimuat
    handleResize();

    // Tambahkan event listener untuk memantau perubahan ukuran layar
    window.addEventListener('resize', handleResize);

    // Fungsi cleanup: Hapus timer dan event listener saat komponen dilepas
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // useEffect ini hanya berjalan sekali saat komponen dimuat

  if (!isVisible) {
    return null;
  }

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          // Terapkan properti style secara inline menggunakan state `lottieSize`
          style={lottieSize}
        />
      </div>
    </div>
  );
};

export default Loader;