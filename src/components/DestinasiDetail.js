// src/components/DestinasiDetail.js

import React from 'react'; // Hapus useState dan useEffect
import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinationsData';

function DestinasiDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(dest => dest.id === parseInt(id));

  // Hapus blok useEffect yang mengontrol slideshow otomatis
  // useEffect(() => {
  //   if (destination && destination.slideshow.length > 1) {
  //     const timer = setInterval(() => {
  //       setCurrentSlide((prevSlide) =>
  //         prevSlide === destination.slideshow.length - 1 ? 0 : prevSlide + 1
  //       );
  //     }, 5000);
  //     return () => clearInterval(timer);
  //   }
  // }, [destination]);

  if (!destination) {
    return <div className="not-found">Destinasi tidak ditemukan.</div>;
  }
  
  const paragraphs = destination.description.split('\n\n');

  return (
    <section className="destinasi-detail-page">
      <div className="container">
        <button
          onClick={() => navigate(-1)}
          className="btn fw-semibold mb-3 kembali-btn"
        >
          ← Kembali
        </button>

        {/* Hapus perulangan untuk slideshow */}
        <div className="destinasi-slideshow-card">
          <div
            className="slide-item"
            style={{ backgroundImage: `url(${destination.slideshow[0]})`, opacity: 1 }}
          />
          <div className="destinasi-slideshow-overlay">
            <h1 className="destinasi-title">{destination.name}</h1>
          </div>
        </div>
        
        <div className="destinasi-description-card">
          <div className="destinasi-description">
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinasiDetail;