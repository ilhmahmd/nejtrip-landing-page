import React, { useEffect, useRef } from 'react';


function Banda() {
  // Buat dua ref yang berbeda
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);

  useEffect(() => {
    // ... (kode handleScroll Anda tetap sama)
    const handleScroll = () => {
      // Hanya aktifkan parallax di desktop
      if (window.innerWidth > 768) {
        const section = document.querySelector('.banda-section');
        if (section) {
          const scrolled = window.scrollY;
          // Mengubah posisi background berdasarkan scroll
          section.style.backgroundPositionY = `${-scrolled * 0.05}px`;
        }
      }
    };

    // Fungsi untuk mengisi teks secara otomatis
    const fillScrollingText = (elementRef) => {
      const textElement = elementRef.current;
      if (textElement) {
        const originalText = textElement.innerText;
        let newText = originalText;
        // Gandakan teks hingga panjangnya lebih dari 2 kali lebar layar
        while (textElement.offsetWidth < window.innerWidth * 2) {
          newText += ` ${originalText}`;
          textElement.innerText = newText;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Panggil fungsi untuk setiap ref
    fillScrollingText(topTextRef);
    fillScrollingText(bottomTextRef);

    window.addEventListener('resize', () => {
      fillScrollingText(topTextRef);
      fillScrollingText(bottomTextRef);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <section className="banda-section">
      
      <div className="banda-text-container">
        <h2 className="banda-title">Tentang Banda Neira</h2>
        <p className="banda-description">
          <strong>Banda Neira</strong> adalah pulau vulkanik yang merupakan pusat dari Kepulauan Banda di Provinsi <strong>Maluku, Indonesia</strong>. Pulau ini memiliki sejarah yang kaya sebagai pusat perdagangan rempah-rempah dunia, terutama pala dan fuli. Keindahan alam Banda Neira juga sangat memukau, dengan pemandangan gunung api aktif, laut biru jernih, serta sisa-sisa bangunan bersejarah dari masa kolonial. Jelajahi lebih dalam kekayaan budaya dan alam Banda Neira yang menawan.
        </p>
      </div>
      
    </section>
  );
}

export default Banda;