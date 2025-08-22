// src/components/PageLoader.js

import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from './logo-loader.json';

const PageLoader = () => {
  const [lottieSize, setLottieSize] = useState({ width: 400, height: 400 });

  useEffect(() => {
    // Fungsi untuk menyesuaikan ukuran Lottie berdasarkan lebar layar
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        // Atur ukuran kecil untuk layar mobile/tablet
        setLottieSize({ width: 200, height: 200 });
      } else {
        // Atur ukuran default untuk layar desktop
        setLottieSize({ width: 400, height: 400 });
      }
    };

    // Panggil fungsi sekali saat komponen dimuat
    handleResize();

    // Tambahkan event listener untuk memantau perubahan ukuran layar
    window.addEventListener('resize', handleResize);

    // Hapus event listener saat komponen tidak lagi digunakan (cleanup)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="loader-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255)',
      zIndex: 1000,
    }}>
      <div className="loader-container" style={{
        // Ukuran kontainer tidak perlu diubah karena kita akan mengubah langsung ukuran Lottie
      }}>
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          // Gunakan state lottieSize untuk mengatur ukuran Lottie secara dinamis
          style={lottieSize}
        />
      </div>
    </div>
  );
};

export default PageLoader;