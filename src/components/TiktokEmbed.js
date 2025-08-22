// src/components/TiktokEmbed.js
import React, { useEffect, useState } from 'react';

const TiktokEmbed = ({ videoId, style = {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fungsi untuk menjalankan skrip embed TikTok
    const loadEmbeds = () => {
      // Skrip TikTok membuat objek `window.tiktok`. Jika ada, jalankan fungsi embed.
      if (window.tiktok && window.tiktok.embeds) {
        window.tiktok.embeds();
        setIsLoaded(true); // Atur isLoaded menjadi true setelah video dimuat
      }
    };

    // Hapus script yang ada sebelumnya untuk menghindari duplikasi
    const existingScript = document.getElementById('tiktok-embed-script');
    if (existingScript) {
      existingScript.remove();
    }

    // Buat dan sisipkan skrip baru
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    script.id = 'tiktok-embed-script';
    
    script.onload = loadEmbeds;
    document.body.appendChild(script);

    return () => {
      // Hapus script saat komponen dilepas untuk cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [videoId]);

  // Kami mengosongkan konten di dalam <section> agar tidak ada teks yang muncul.
  // <section> tetap dipertahankan karena skrip embed TikTok mungkin membutuhkannya.
  const htmlContent = `
    <blockquote class="tiktok-embed" 
      cite="https://www.tiktok.com/@nejtrip.id/video/${videoId}" 
      data-video-id="${videoId}" 
      style="max-width: 605px; min-width: 325px; ${Object.entries(style).map(([key, value]) => `${key}:${value};`).join(' ')}"
    >
      <section></section>
    </blockquote>
  `;

  return (
    <div style={{ position: 'relative', minHeight: '350px' }}>
      {!isLoaded && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1rem', color: '#888' }}>
          Loading...
        </div>
      )}
      <div 
        style={{ display: isLoaded ? 'block' : 'none' }}
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    </div>
  );
};

export default TiktokEmbed;