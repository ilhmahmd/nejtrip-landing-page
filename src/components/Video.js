// src/components/Video.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

const Video = () => {
  const videoUrl = "https://youtube.com/embed/jXhYX4l_P1Y?si=xlj4c67FS_w07de5";
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
          <div className="ratio ratio-16x9">
            <iframe
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;