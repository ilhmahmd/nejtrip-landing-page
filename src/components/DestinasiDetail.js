// src/components/DestinasiDetail.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinationsData';

function DestinasiDetail() {
  // Ubah baris ini: Ambil 'slug' dari URL, bukan 'id'
  const { slug } = useParams();
  const navigate = useNavigate();

  // Ubah baris ini: Cari destinasi di data berdasarkan 'slug'
  const destination = destinations.find(dest => dest.slug === slug);

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