// src/components/Info.js
import React from 'react';

// Data untuk setiap opsi transportasi
const transportOptions = [
  {
    id: 1,
    name: 'Fast Boat',
    icon: './images/fast.png',
    description: 'Pilihan tercepat untuk menuju Banda Neira dari Ambon. Keberangkatan dari pelabuhan Tulehu (Ambon) / Amahai - Banda. Durasi perjalanan di laut: 5 jam. Jadwal bisa berubah tergantung cuaca.',
    schedule: [
      { day: 'Kamis', route: 'Ambon → Banda' },
      { day: 'Minggu', route: 'Banda → Ambon' },
    ],
  },
  {
    id: 2,
    name: 'Pelni Nggapulu',
    icon: './images/pel.png',
    description: 'Kapal Pelni Nggapulu melayani rute jarak jauh dari kota-kota besar. Durasi perjalanan di laut dari Ambon ke Banda: 9 jam. Cocok untuk Anda yang ingin membawa banyak barang atau berwisata lebih lama.',
    schedule: [
      { day: 'Fleksibel', route: 'Jakarta, Surabaya, Makassar, Baubau, Ambon → Banda' },
      { day: 'Fleksibel', route: 'Banda → Tual, Dobo, Kaimana, Fakfak' },
    ],
  },
  {
    id: 3,
    name: 'Pelni Pangrango',
    icon: './images/pel.png',
    description: 'Kapal Pelni Pangrango menawarkan perjalanan yang lebih santai dan ekonomis. Durasi perjalanan di laut dari Ambon ke Banda: 16 jam dengan jadwal setiap hari.',
    schedule: [
      { day: 'Fleksibel', route: 'Ambon → Banda Neira' },
      { day: 'Fleksibel', route: 'Banda Neira → Ambon' },
    ],
  },
  {
    id: 4,
    name: 'Perintis',
    icon: './images/pes.png',
    description: 'Pilihan tercepat untuk mencapai Banda Neira. Perjalanan memakan waktu sekitar 1 jam dari Ambon. Penerbangan ini sangat jarang dan biasanya hanya tersedia untuk penerbangan charter atau pesawat kecil.',
    schedule: [
      { day: 'Senin', time: '07.00', route: 'Ambon → Banda', price: 'Rp 490.000' },
      { day: 'Senin', time: '08.19', route: 'Banda → Amahai', price: 'Rp 337.480' },
      { day: 'Senin', time: '13.33', route: 'Amahai → Banda', price: 'Rp 337.480' },
      { day: 'Selasa', time: '07.00', route: 'Banda → Ambon', price: 'Rp 445.000' },
    ],
  },
];

function Info() {
  return (
    <section className="info-page">
      <div className="container2">
        <h2 className="main-title">Panduan Perjalanan ke Banda Neira</h2>
        <p className="main-subtitle">
          Dari kota asal Anda, Anda akan transit terlebih dahulu di Ambon. Setelah tiba di Ambon, kami akan membantu mengarahkan Anda ke transportasi selanjutnya menuju Banda Neira.
        </p>
        <div className="transport-cards-container">
          {transportOptions.map(option => (
            <div key={option.id} className="transport-card">
              <div className="icon-wrapper">
                <img src={option.icon} alt={option.name} className="transport-icon" />
              </div>
              <h3 className="transport-name">{option.name}</h3>
              <p className="transport-description">{option.description}</p>
              
              <div className="schedule-box">
                <h4 className="schedule-title">Jadwal & Rute</h4>
                <table className="schedule-table">
                  <tbody>
                    {option.schedule.map((item, index) => (
                      <tr key={index}>
                        <td>{item.day}</td>
                        {/* Menambahkan kolom jam dan harga hanya untuk Pesawat */}
                        {option.name === 'Perintis' && <td>{item.time}</td>}
                        <td>{item.route}</td>
                        {option.name === 'Perintis' && <td>{item.price}</td>}
                      </tr>
                    ))}
                    {option.details && (
                      <tr>
                        <td>Keterangan</td>
                        <td>{option.details}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <br></br>
              {(option.name.includes('Pelni')) && (
                  <div className="check-pelni-schedule">
                    <p>Untuk selengkapnya bisa cek di aplikasi atau situs resmi Pelni:</p>
                    <a href="https://www.pelni.co.id/reservasi-tiket" target="_blank" rel="noopener noreferrer">
                      Pelni.co.id
                    </a>
                  </div>
                )}
                {(option.name.includes('Fast')) && (
                  <div className="check-pelni-schedule">
                    <p>Pemesanan tiket melalui:</p>
                    <a href="https://dharmaindah.com/book" target="_blank" rel="noopener noreferrer">
                      dharmaindah.com/book
                    </a>
                  </div>
                )}
                {(option.name.includes('Perintis')) && (
                  <div className="check-pelni-schedule">
                    <p>Pemesanan tiket melalui:</p>
                    <p>0821-9918-4438  <strong>(Ambon)</strong></p>
                    <p>0812-4876-8080  <strong>(Banda)</strong></p>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Info;