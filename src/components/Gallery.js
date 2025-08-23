import React, { useEffect, useRef } from 'react';
import { destinations } from '../data/destinationsData';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

function Gallery() {
  const titleRef = useRef(null);
  const cursorRef = useRef(null);
  const text = "Destinasi";

  const galleryContainerRef = useRef(null);
  const galleryWrapperRef = useRef(null);

  const { ref: galleryRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    // Logika Animasi H2 Mengetik
    if (inView) {
      const title = titleRef.current;
      const cursor = cursorRef.current;
      if (title && cursor) {
        gsap.to(cursor, { opacity: 0, ease: "power2.inOut", repeat: -1, yoyo: true, duration: 0.7 });
        const typingTimeline = gsap.timeline({
          delay: 0.5,
          repeat: -1,
          repeatDelay: 2,
        });
        typingTimeline
          .to(title, { width: 0, duration: 2, ease: "power2.inOut" })
          .to(title, { duration: 1.5 }, "+=1")
          .to(title, { width: "100%", duration: 2, ease: "none" });
      }
    }
  }, [inView]);

  useEffect(() => {
    // Logika Animasi Geser Card Galeri
    let scrollTimeline = null;

    const runCardAnimation = () => {
      const galleryWrapper = galleryWrapperRef.current;
      const galleryContainer = galleryContainerRef.current;

      if (galleryWrapper && galleryContainer) {
        if (scrollTimeline) {
          scrollTimeline.kill();
        }

        const cards = galleryContainer.querySelectorAll('.gallery-card');
        if (cards.length > 0) {
          const cardWidth = cards[0].offsetWidth + 16;
          const totalCardsWidth = destinations.length * cardWidth;

          if (window.innerWidth > 991) {
            // Desktop: Jalankan animasi dan sembunyikan overflow
            galleryWrapper.style.overflow = 'hidden';
            scrollTimeline = gsap.timeline({
              repeat: -1,
              ease: "none",
            });
            scrollTimeline.to(galleryContainer, {
              x: -totalCardsWidth,
              duration: 70,
              ease: "none",
            });
          } else {
            // Mobile: Matikan animasi, kembalikan posisi, dan izinkan overflow/scroll
            gsap.set(galleryContainer, { x: 0 });
            galleryWrapper.style.overflow = 'auto'; // Mengubah overflow menjadi auto/scroll
          }
        }
      }
    };

    runCardAnimation();

    window.addEventListener('resize', runCardAnimation);

    return () => {
      if (scrollTimeline) {
        scrollTimeline.kill();
      }
      window.removeEventListener('resize', runCardAnimation);
    };

  }, [inView]);

  return (
    <section id="gallery" className="gallery-section" ref={galleryRef}>
      <h2 className="gallery-title" style={{ fontFamily: '"Nunito", sans-serif', fontWeight: '800', color: '#0081a1' }}>
        <span style={{ display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
          <span ref={titleRef} className="typing-text">{text}</span>
          <span ref={cursorRef} className="typing-cursor"></span>
        </span>
      </h2>
      <br />
      <div className="gallery-wrapper" ref={galleryWrapperRef}>
        <div className="gallery-container" ref={galleryContainerRef}>
          {[...destinations, ...destinations].map((dest, index) => (
            <div className="gallery-card" key={`${dest.id}-${index}`}>
              <img src={dest.image} alt={dest.name} />
              <div className="caption">
                <h4>{dest.name}</h4>
                {/* Ganti <a> dengan <Link> dan href dengan to */}
                <Link to={`/destinasi/${dest.slug}`} className="read-more-btn">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;