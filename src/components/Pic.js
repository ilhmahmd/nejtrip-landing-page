// src/components/Pic.js
import React, { useState, useRef, useEffect } from 'react';
import './Pic.css';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

// Data foto klien yang sudah dikelompokkan
const clientData = [
  {
    id: 1,
    clientName: 'Couple Trip (Private Trip)',
    photos: [
      { id: '1-1', src: '/images/g11.jpg', alt: 'Dokumentasi Klien 1' },
      { id: '1-2', src: '/images/g12.jpg', alt: 'Dokumentasi Klien 1' },
      { id: '1-3', src: '/images/g13.jpg', alt: 'Dokumentasi Klien 1' },
      { id: '1-4', src: '/images/g14.jpg', alt: 'Dokumentasi Klien 1' },
      { id: '1-5', src: '/images/g15.jpg', alt: 'Dokumentasi Klien 1' },
      { id: '1-6', src: '/images/g16.jpg', alt: 'Dokumentasi Klien 1' },
      { id: '1-7', src: '/images/g17.jpg', alt: 'Dokumentasi Klien 1' },
      { id: '1-8', src: '/images/g18.jpg', alt: 'Dokumentasi Klien 1' },
      { id: '1-9', src: '/images/g19.jpg', alt: 'Dokumentasi Klien 1' },
      { id: '1-10', src: '/images/g110.jpg', alt: 'Dokumentasi Klien 1' },
    ],
  },
  {
    id: 2,
    clientName: 'Solo Trip (Private Trip)',
    photos: [
      { id: '2-1', src: '/images/g21.jpg', alt: 'Dokumentasi Klien 2' },
      { id: '2-2', src: '/images/g22.png', alt: 'Dokumentasi Klien 2' },
      { id: '2-3', src: '/images/g23.png', alt: 'Dokumentasi Klien 2' },
      { id: '2-4', src: '/images/g24.png', alt: 'Dokumentasi Klien 2' },
      { id: '2-5', src: '/images/g25.png', alt: 'Dokumentasi Klien 2' },
      { id: '2-6', src: '/images/g26.jpg', alt: 'Dokumentasi Klien 2' },
      { id: '2-7', src: '/images/g27.jpg', alt: 'Dokumentasi Klien 2' },
      { id: '2-8', src: '/images/g28.jpg', alt: 'Dokumentasi Klien 2' },
      { id: '2-9', src: '/images/g29.jpg', alt: 'Dokumentasi Klien 2' },
      { id: '2-10', src: '/images/g210.jpg', alt: 'Dokumentasi Klien 2' },
    ],
  },
  {
    id: 3,
    clientName: 'Group 3 (Private Trip)',
    photos: [
      { id: '3-1', src: '/images/g31.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '3-2', src: '/images/g32.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '3-3', src: '/images/g33.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '3-10', src: '/images/g310.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '3-11', src: '/images/g311.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '3-12', src: '/images/g312.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '3-13', src: '/images/g313.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '3-14', src: '/images/g314.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '3-15', src: '/images/g315.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '3-16', src: '/images/g316.jpg', alt: 'Dokumentasi Klien 3' },
    ],
  },
  {
    id: 4,
    clientName: 'Group 4 (Open Trip)',
    photos: [
      { id: '4-1', src: '/images/g41.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '4-2', src: '/images/g42.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '4-3', src: '/images/g43.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '4-4', src: '/images/g44.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '4-5', src: '/images/g45.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '4-6', src: '/images/g46.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '4-7', src: '/images/g47.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '4-8', src: '/images/g48.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '4-9', src: '/images/g49.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '4-10', src: '/images/g410.jpg', alt: 'Dokumentasi Klien 3' },
    ],
  },
  {
    id: 5,
    clientName: 'Group 5 (Open Trip)',
    photos: [
      { id: '5-1', src: '/images/g51.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '5-2', src: '/images/g52.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '5-3', src: '/images/g53.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '5-4', src: '/images/g54.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '5-5', src: '/images/g55.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '5-6', src: '/images/g56.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '5-7', src: '/images/g57.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '5-8', src: '/images/g58.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '5-9', src: '/images/g59.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '5-10', src: '/images/g510.jpg', alt: 'Dokumentasi Klien 3' },
    ],
  },
  {
    id: 6,
    clientName: 'Underwater',
    photos: [
      { id: '6-1', src: '/images/g61.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '6-2', src: '/images/g62.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '6-3', src: '/images/g63.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '6-4', src: '/images/g64.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '6-5', src: '/images/g65.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '6-6', src: '/images/g66.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '6-7', src: '/images/g67.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '6-8', src: '/images/g68.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '6-9', src: '/images/g69.jpg', alt: 'Dokumentasi Klien 3' },
      { id: '6-10', src: '/images/g610.jpg', alt: 'Dokumentasi Klien 3' },
    ],
  },
];

function Pic() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const containerRef = useRef(null);
  // Ref untuk animasi mengetik
  const titleRef = useRef(null);
  const cursorRef = useRef(null);
  const text = "Dokumentasi";

  // Hook useInView untuk memicu animasi
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const clientWidth = containerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / clientWidth);
      
      setCurrentClientIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Logika animasi mengetik
  useEffect(() => {
    if (inView) {
      const title = titleRef.current;
      const cursor = cursorRef.current;
      if (!title || !cursor) return;

      gsap.to(cursor, {
        opacity: 0,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        duration: 0.7,
      });
      
      gsap.set(title, { width: 0 });

      const typingTimeline = gsap.timeline({
        delay: 0.5,
        repeat: -1,
        repeatDelay: 3,
      });

      typingTimeline
        .to(title, {
          width: "100%",
          duration: 3,
          ease: "power2.inOut",
        })
        .to(title, { duration: 1.5 }, "+=1")
        .to(title, {
          width: 0,
          duration: 3,
          ease: "power2.inOut",
        });
    }
  }, [inView]);

  const openModal = (photo, photoIndex) => {
    setCurrentPhoto(photo);
    setCurrentPhotoIndex(photoIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentPhoto(null);
  };

  const goToNextPhoto = (e) => {
    if (e) e.stopPropagation();
    const currentPhotos = clientData[currentClientIndex].photos;
    const nextIndex = (currentPhotoIndex + 1) % currentPhotos.length;
    setCurrentPhotoIndex(nextIndex);
    setCurrentPhoto(currentPhotos[nextIndex]);
  };

  const goToPrevPhoto = (e) => {
    if (e) e.stopPropagation();
    const currentPhotos = clientData[currentClientIndex].photos;
    const prevIndex = (currentPhotoIndex - 1 + currentPhotos.length) % currentPhotos.length;
    setCurrentPhotoIndex(prevIndex);
    setCurrentPhoto(currentPhotos[prevIndex]);
  };
  
  const goToNextClient = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const goToPrevClient = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
      goToNextPhoto();
    } else if (touchEndX - touchStartX > swipeThreshold) {
      goToPrevPhoto();
    }
  };
  
  const currentClient = clientData[currentClientIndex];

  return (
    <section id="gallery" className="pic-gallery-section" ref={ref}>
      <div className="pic-container">
        <h2 style={{ textAlign: "center"}}>
          <span style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <span ref={titleRef} className="typing-text">{text}</span>
            <span ref={cursorRef} className="typing-cursor"></span>
          </span>
        </h2>
        <p>Lihat momen indah yang telah kami abadikan bersama para klien kami.</p>

        {/* Navigasi Klien */}
        <div className="pic-client-nav-container">
          <button onClick={goToPrevClient} className="pic-client-nav-btn prev-btn">&#10094;</button>
          <h3 className="pic-client-name-title">{currentClient.clientName}</h3>
          <button onClick={goToNextClient} className="pic-client-nav-btn next-btn">&#10095;</button>
        </div>
        
        {/* Teks "Swipe for more" untuk mobile */}
        <p className="pic-swipe-more-text">Swipe untuk grup lainnya</p>

        {/* Container untuk semua galeri klien yang dapat di-scroll */}
        <div className="pic-all-clients-gallery" ref={containerRef}>
          {clientData.map((client) => (
            <div key={client.id} className="pic-client-photos-container">
              {/* Grid Galeri */}
              <div className="pic-masonry-grid">
                {client.photos.map((photo, index) => (
                  <div key={photo.id} className="pic-grid-item" onClick={() => openModal(photo, index)}>
                    <img src={photo.src} alt={photo.alt} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal (Lightbox) */}
      {modalOpen && currentPhoto && (
        <div className="pic-modal-overlay" onClick={closeModal}>
          <div 
            className="pic-modal-content" 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img src={currentPhoto.src} alt={currentPhoto.alt} />
            <button className="pic-close-btn" onClick={closeModal}>&times;</button>
            <button className="pic-modal-nav-btn prev-btn-modal" onClick={goToPrevPhoto}>&#10094;</button>
            <button className="pic-modal-nav-btn next-btn-modal" onClick={goToNextPhoto}>&#10095;</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Pic;