// src/components/WhyUs.js
import React, { useEffect, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import Lottie from 'lottie-react';
import travelingAnimation from './banda.json';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';


function WhyUs() {
    const titleRef = useRef(null);
    const cursorRef = useRef(null);
    const text = "Kenapa Memilih Kami?";

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            const title = titleRef.current;
            const cursor = cursorRef.current;
            if (!title || !cursor) return;

            // Animasi kursor berkedip
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

            // Logika animasi yang sudah benar
            typingTimeline
                // Mengetik (dari lebar 0 ke 100%)
                .fromTo(title, { width: 0 }, {
                    width: "100%",
                    duration: 3,
                    ease: "none",
                })
                // Jeda
                .to(title, { duration: 1.5 }, "+=1")
                // Menghapus (dari lebar 100% ke 0)
                .to(title, {
                    width: 0,
                    duration: 3,
                    ease: "power2.inOut",
                });
        }
    }, [inView]);

    return (
        <section id="whyus" className="why-us container py-5" ref={ref}>
            <h2 className="mb-4" style={{ textAlign: "center", fontFamily: '"Nunito", sans-serif', fontWeight: '800', color: '#0081a1', maxWidth: '350px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
          <span ref={titleRef} className="typing-text">{text}</span>
          <span ref={cursorRef} className="typing-cursor"></span>
        </span>
                    </h2>
            <div className="row justify-content-center align-items-center gx-5">
                <div className="col-md-6 mb-3">
                    <Lottie
                        animationData={travelingAnimation}
                        loop={true}
                        className='lottie-animation'
                    />
                </div>

                <div className="col-md-6 mb-2 text-center text-md-start" >
                    
                    <h3 className="text-muted mb-4">
                        Trip ini dikelola langsung oleh orang lokal <strong>Banda Neira</strong>, memberikan pengalaman autentik dan layanan yang terpercaya.
                    </h3>
                    <ul className="list-unstyled whyus-list">
                        <li><FaCheck className="check-icon" /> Guide Berpengalaman & Bersertifikat</li>
                        <li><FaCheck className="check-icon" /> Berlegalitas Resmi Dinas Pariwisata</li>
                        <li><FaCheck className="check-icon" /> Destinasi Spesial</li>
                        <li><FaCheck className="check-icon" /> Semua Sudah Diatur</li>
                        <li><FaCheck className="check-icon" /> Dokumentasi Estetik</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;