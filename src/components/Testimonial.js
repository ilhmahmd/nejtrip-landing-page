import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css'; 

// Data Testimoni
const testimonials = [
  { image: '/images/testi1.jpg', alt: 'Testimoni 1' },
  { image: '/images/testi2.jpg', alt: 'Testimoni 2' },
  { image: '/images/testi3.jpg', alt: 'Testimoni 3' },
  { image: '/images/testi4.jpg', alt: 'Testimoni 4' },
  { image: '/images/testi5.jpg', alt: 'Testimoni 5' },
  { image: '/images/testi6.jpg', alt: 'Testimoni 6' },
  { image: '/images/testi7.jpg', alt: 'Testimoni 7' },
  { image: '/images/testi8.jpg', alt: 'Testimoni 8' }
];

// Komponen Panah Kustom
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "20px" }}
      onClick={onClick}
    >
      <FaChevronRight color="white" size="20" />
    </div>
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "20px", zIndex: 1 }}
      onClick={onClick}
    >
      <FaChevronLeft color="white" size="20" />
    </div>
  );
}

function Testimonial() {
  const titleRef = useRef(null);
  const cursorRef = useRef(null);
  const text = "Apa Kata Mereka?";
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalIndex, setModalIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (inView) {
      const title = titleRef.current;
      const cursor = cursorRef.current;
      if (title && cursor) {
        gsap.to(cursor, { opacity: 0, ease: "power2.inOut", repeat: -1, yoyo: true, duration: 0.7 });
        gsap.set(title, { width: 0 });
        const typingTimeline = gsap.timeline({ delay: 0.5, repeat: -1, repeatDelay: 3 });
        typingTimeline
          .to(title, { width: "100%", duration: 3, ease: "power2.inOut" })
          .to(title, { duration: 1.5 }, "+=1")
          .to(title, { width: 0, duration: 3, ease: "power2.inOut" });
      }
    }
  }, [inView]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3, // Menggunakan properti ini untuk mobile
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const openModal = (image, index) => {
    setModalImage(image);
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  const nextImage = () => {
    const nextIndex = (modalIndex + 1) % testimonials.length;
    setModalIndex(nextIndex);
    setModalImage(testimonials[nextIndex].image);
  };

  const prevImage = () => {
    const prevIndex = (modalIndex - 1 + testimonials.length) % testimonials.length;
    setModalIndex(prevIndex);
    setModalImage(testimonials[prevIndex].image);
  };

  return (
    <section className="testimonial-section" ref={ref}>
      <h2 className="testimonial-title" style={{ fontFamily: '"Nunito", sans-serif', fontWeight: '800', color: '#0081a1' }}>
        <span style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <span ref={titleRef} className="typing-text">{text}</span>
          <span ref={cursorRef} className="typing-cursor"></span>
        </span>
      </h2>
      <div className="testimonial-slider-container">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-slide">
              <div className="testimonial-card">
                <img 
                  src={t.image} 
                  alt={t.alt} 
                  className="testimonial-image" 
                  onClick={() => openModal(t.image, index)} 
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal Foto */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="Testimonial Full" className="modal-image" />
            <div className="modal-nav">
              <button className="modal-nav-prev" onClick={prevImage}>&#10094;</button>
              <button className="modal-nav-next" onClick={nextImage}>&#10095;</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Testimonial;