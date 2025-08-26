// src/components/Video.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

const Video = () => {
  const videoUrl = "https://youtube.com/embed/qHcCa7HToko?si=B1mg7kYgZ_170Cls";
  const subscribeUrl = "https://www.youtube.com/@nejtrip";
  const channelName = "Nejtrip";
  const channelProfilePic = '/images/ytlogo.png';

  const titleRef = useRef(null);
  const cursorRef = useRef(null);
  const text = "Trip Highlight";

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

  return (
    <section className="container my-5" ref={ref}>
      <h2 className="text-center mb-5" style={{ fontFamily: '"Nunito", sans-serif', fontWeight: 800, color: '#0081a1' }}>
        <span className="typing-text-wrapper">
          <span ref={titleRef} className="typing-text">{text}</span>
          <span ref={cursorRef} className="typing-cursor"></span>
        </span>
      </h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">

          {/* YouTube Subscribe Card */}
          <div className="card mb-4 p-3 border-0 shadow-sm mx-auto" style={{ backgroundColor: '#f8f9fa', width: 'fit-content' }}>
            <div className="d-flex align-items-center">
              <img
                src={channelProfilePic}
                alt="Channel Profile"
                className="rounded-circle me-3"
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
              />
              <h5 className="mb-0 me-3" style={{ fontFamily: '"Nunito", sans-serif', fontWeight: 700, color: '#0081a1' }}>{channelName}</h5>
              <a
                href={subscribeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger btn-sm flex-shrink-0 p-2 pulse-animation"
                style={{ fontFamily: '"Nunito", sans-serif', fontWeight: 700 }}
              >
                <i className="fab fa-youtube me-1"></i> Subscribe
              </a>
            </div>
          </div>
          {/* End of YouTube Subscribe Card */}

          {/* Menyesuaikan lebar dan rasio video */}
          <div style={{
            position: 'relative',
            paddingBottom: '100%', // Menggunakan paddingBottom untuk menjaga rasio 9x16
            height: 0,
            maxWidth: '400px', // Batasi lebar maksimum video di sini
            margin: 'auto'
          }}>
            <iframe
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;