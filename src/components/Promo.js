import React, { useEffect } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import './Promo.css'; 

function Promo() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 768) {
                const section = document.querySelector('.promo-section');
                if (section) {
                    const scrolled = window.scrollY;
                    section.style.backgroundPositionY = `${-scrolled * 0.05}px`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', () => { });
        };
    }, []);

    return (
        <section className={`promo-section ${inView ? 'in-view' : ''}`} ref={ref}>
            {/* <div className="police-line top-line">
                <div className="scrolling-text-wrapper">
                    <h2 className="scrolling-text">YUK SEGERA DAFTAR DAN NABUNG SEKARANG JUGA!</h2>
                </div>
            </div> */}
            <div className="promo-container">
                <div className="promo-column left-column">
                    <h2 className="promo-title">
                        <span className="promo-title-word">NEJTRIP</span>
                        <span className="promo-title-word">SAVING</span>
                        <span className="promo-title-word">TOGETHER</span>
                    </h2>
                </div>
                <div className="promo-column right-column">
                    <div className="promo-benefits">
                        <p>Ajak 1 teman &nbsp; <FaLongArrowAltRight /> &nbsp; Diskon Rp. 200.000</p>
                        <p>Ajak 2 teman &nbsp; <FaLongArrowAltRight /> &nbsp; Diskon Rp. 400.000</p>
                        <p className="and-so-on">Dan seterusnya</p>
                    </div>
                    <br></br>
                    <div className="promo-note">
                        <p>* <strong>TRIP GRATIS</strong> untuk kamu jika berhasil ajak 10 temanmu!</p>
                    </div>
                </div>
            </div>
            <div className="police-line-bottom bottom-line">
                <div className="scrolling-text-wrapper">
                    <h2 className="scrolling-text">YUK SEGERA DAFTAR DAN NABUNG SEKARANG JUGA!</h2>
                </div>
            </div>
        </section>
    );
}

export default Promo;