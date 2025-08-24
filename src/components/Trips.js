// src/components/Trips.js
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { trips } from '../data/tripData';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import './Trips.css';

function Trips() {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const cursorRef = useRef(null);
  const text = "Pilihan Trip Banda Neira";

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Logika animasi GSAP yang sudah diperbaiki
  useEffect(() => {
    if (inView) {
      const title = titleRef.current;
      const cursor = cursorRef.current;
      if (!title || !cursor) return;

      // Animasi kursor berkedip (terus-menerus)
      gsap.to(cursor, {
        opacity: 0,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        duration: 0.7,
      });

      // Animasi mengetik yang diulang
      const typingTimeline = gsap.timeline({
        delay: 0.5,
        repeat: -1,
        repeatDelay: 3,
      });

      // Urutan animasi mengetik yang benar:
      typingTimeline
        // 1. Set lebar awal ke 0 sebelum memulai
        .fromTo(title, { width: 0 }, {
          width: "100%",
          duration: 3,
          ease: "power2.inOut",
        })
        // 2. Jeda setelah mengetik selesai
        .to(title, { duration: 1.5 }, "+=1")
        // 3. Menghapus teks (lebar kembali ke 0)
        .to(title, {
          width: 0,
          duration: 3,
          ease: "power2.inOut",
        });
    }
  }, [inView]);

  return (
    <section className="trips" ref={ref}>
      <div className="container my-5">
        <div className="row">
          {/* KOLOM KIRI: Judul dan Deskripsi */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 d-flex flex-column justify-content-left">
            <h3 className="display-6 fw-bold" style={{ fontFamily: '"Nunito", sans-serif', color: '#0081a1' }}>
              <span style={{ color: '#fb8000' }}>Neira</span> Explorer Journey
            </h3>
            <p className="mt-4" style={{ fontFamily: '"Nunito", sans-serif', fontSize: '16px' }}>
              Kami menyelenggarakan trip ke Banda Neira untuk Anda yang ingin
              mengeksplorasi keindahan alam dan sejarah yang kaya. <br></br>
              <p></p> Dengan paket
              perjalanan yang terencana, Anda akan diajak menyelami pesona
              bawah laut, mendaki gunung berapi, hingga menelusuri jejak
              peradaban rempah-rempah yang melegenda.
            </p>
          </div>

          {/* KOLOM KANAN: Daftar Trip */}
          <div className="col-lg-6 col-md-12 d-flex flex-column" ref={ref}>
            <h2 className="mb-5" style={{ fontFamily: '"Nunito", sans-serif', fontWeight: '800', color: '#0081a1', textAlign: 'center' }}>
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                <span ref={titleRef} className="typing-text">{text}</span>
                <span ref={cursorRef} className="typing-cursor"></span>
              </span>
            </h2>
            <div className="trip-cards">
              {trips.map((trip) => (
                <button
                  key={trip.id}
                  className={`trip-card ${inView ? 'animate' : ''}`}
                  // BARIS INI YANG DIUBAH: Gunakan 'trip.slug'
                  onClick={() => navigate(`/trip/${trip.slug}`)}
                  style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
                >
                  <div className="trip-card-image">
                    <img src={trip.image} alt={trip.title} />
                    <div className="trip-card-title-overlay">
                      <h3 className="trip-title">{trip.title}</h3>
                    </div>
                  </div>
                  <div className="trip-card-footer">
                    <h4 className="trip-price">{trip.price}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trips;