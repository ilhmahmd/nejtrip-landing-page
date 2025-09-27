import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

import LegalitasLottie from './berlegalitas-resmi-dinas-pariwisata.json';
import GuideLottie from './guide-berpengalaman-dan-bersertifikat.json';
import DiaturLottie from './semua-sudah-diatur.json';
import DestinasiLottie from './destinasi-spesial.json';
import DokumentasiLottie from './dokumentasi-estetik.json';
import './WhyUs.css';

const BENTO_ITEMS = [
    { title: "Guide Berpengalaman & Bersertifikat", lottie: GuideLottie },
    { title: "Berlegalitas Resmi Dinas Pariwisata", lottie: LegalitasLottie },
    { title: "Semua Sudah Diatur", lottie: DiaturLottie },
    { title: "Destinasi Spesial", lottie: DestinasiLottie },
    { title: "Dokumentasi Estetik", lottie: DokumentasiLottie },
];

function WhyUs() {
    const titleRef = useRef(null);
    const cursorRef = useRef(null);
    const text = "Kenapa Memilih Kami?";
    const itemRefs = useRef([]); 
    const lottieRefs = useRef(BENTO_ITEMS.map(() => React.createRef())); // bikin ref untuk setiap item
  
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });
  
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
  
        const typingTimeline = gsap.timeline({
          delay: 0.5,
          repeat: -1,
          repeatDelay: 3,
        });
  
        typingTimeline
          .fromTo(title, { width: 0 }, {
            width: "100%",
            duration: 3,
            ease: "none",
          })
          .to(title, { duration: 1.5 }, "+=1")
          .to(title, {
            width: 0,
            duration: 3,
            ease: "power2.inOut",
          });
  
        itemRefs.current.forEach((el, index) => {
          if (el) {
            gsap.fromTo(el, 
              { opacity: 0, y: 50, scale: 0.95 }, 
              { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                duration: 0.8, 
                ease: "power3.out", 
                delay: 0.5 + index * 0.15 
              }
            );
          }
        });
      }
    }, [inView]);
  
    const handleMouseEnter = (index) => {
      const lottie = lottieRefs.current[index].current;
      if (lottie) {
        lottie.stop();
        lottie.play();
      }
    };
  
    return (
      <section id="whyus" className="why-us container py-5" ref={ref}>
        <h2 className="mb-5" style={{ textAlign: "center", fontFamily: '"Nunito", sans-serif', fontWeight: '800', color: '#0081a1', maxWidth: '350px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
            <span ref={titleRef} className="typing-text">{text}</span>
            <span ref={cursorRef} className="typing-cursor"></span>
          </span>
        </h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <p className="desc text-center text-muted mb-5 lead" style={{ fontFamily: '"nunito", sans-serif'}}>
              Trip ini dikelola langsung oleh orang lokal <strong>Banda Neira</strong>, memberikan pengalaman autentik dan layanan yang terpercaya.
            </p>
  
            <div className="bento-grid-container">
              {BENTO_ITEMS.map((item, index) => (
                <div 
                  key={index} 
                  ref={el => itemRefs.current[index] = el}
                  className={`bento-card mb-4 bento-card-${index + 1}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <Lottie
                    lottieRef={lottieRefs.current[index]}
                    animationData={item.lottie}
                    loop={false}
                    autoplay={true}
                    className='bento-lottie-icon'
                    style={{ width: 80, height: 80 }}
                  />
                  <h4 className="bento-card-title">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  


export default WhyUs;
