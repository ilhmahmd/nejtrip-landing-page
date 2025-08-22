import React, { useEffect } from 'react';

// Cukup definisikan satu gambar yang ingin digunakan
const bannerImage = '/images/bans.png';

function Banner() {
    useEffect(() => {
        // Logic untuk efek parallax tetap dipertahankan
        const handleScroll = () => {
            const banner = document.querySelector('.banner');
            if (banner) {
                const scrolled = window.scrollY;
                // Mengubah posisi background berdasarkan scroll
                banner.style.backgroundPositionY = `${-scrolled * 0.5}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean-up function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="banner">
            <div
                className="banner-bg"
                style={{
                    // Menggunakan gambar tunggal
                    backgroundImage: `url('${bannerImage}')`,
                }}
            ></div>

            <div className="banner-text">
                <img
                    src="/images/ne.png"
                    alt="Banner Logo"
                    className="img-fluid"
                />
            </div>
        </section>
    );
}

export default Banner;