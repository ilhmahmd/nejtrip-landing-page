import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft} from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import { MdVerified } from "react-icons/md";

const testimonials = [
  {
    name: 'Regita',
    review: 'Iyes, aku explore Banda Neira trip nya di @nejtrip asli seruu banget kalau kalian mau kesini, kita semua disini baru kenal dan langsung akrab karena dari service nya mantap banget bisa membawa suasananya, dokumentasinya keren banget coba cek ig/tiktok pasti pernah muncul di FYP kalian kalo cari Banda Neira. ',
    location: 'resyhrn'
  },
  {
    name: 'Ilham Ahmad',
    review: 'Iyes, aku explore Banda Neira trip nya di @nejtrip asli seruu banget kalau kalian mau kesini, kita semua disini baru kenal dan langsung akrab karena dari service nya mantap banget bisa membawa suasananya, dokumentasinya keren banget coba cek ig/tiktok pasti pernah muncul di FYP kalian kalo cari Banda Neira. ',
    location: 'ilhamahmadmau'
  },
  {
    name: 'Felisa',
    review: 'Hai kak, Mau ngucapin thank you so much buat unforgettable trip selama di Banda Neira kemarin. We have lots of fun, itinerary nya teratur dan menyenangkan, guidenya juga seru bgtt enakk, apalagi foto² dan videonya cakep² parah sampe temen²ku bnyak yg nanyain hehe, smoga sukses terus buat nejtrip ya kak 🤲✨',
    location: 'felisa'
  }
];

function Testimonial() {
  const titleRef = useRef(null);
  const cursorRef = useRef(null);
  const text = "Apa Kata Mereka?";
  const cardRefs = useRef([]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (inView) {
      // --- Logika Animasi Judul ---
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

      // --- Logika Animasi Kartu ---
      gsap.fromTo(cardRefs.current,
        {
          y: -50,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.3
        }
      );
    }
  }, [inView]);

  return (
    <section className="testimonial-section" ref={ref}>
      <h2 className="testimonial-title" style={{ fontFamily: '"Nunito", sans-serif', fontWeight: '800', color: '#0081a1' }}>
        <span style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <span ref={titleRef} className="typing-text">{text}</span>
          <span ref={cursorRef} className="typing-cursor"></span>
        </span>
      </h2>
      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card" ref={addToRefs}>
            <FaQuoteLeft className="quote-icon" />
            <p></p>
            <p className="testimonial-review">{t.review}</p>
            <div className="testimonial-divider"></div> {/* Tambahkan garis pembatas di sini */}
            <p></p>
            <p className="testimonial-name">{t.name} <MdVerified /></p>
            <p className="testimonial-loc"><AiFillInstagram /> {t.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;