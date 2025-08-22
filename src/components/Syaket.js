// src/components/Syaket.js
import React, { useState } from 'react';

function Syaket() {
  // State untuk mengontrol status buka/tutup setiap section
  const [isOpen, setIsOpen] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  // Fungsi untuk mengganti status buka/tutup
  const toggleSection = (sectionId) => {
    setIsOpen(prevState => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };

  return (
    <section className="terms-and-conditions-page">
      <div className="container">
        <h1 className="page-title">Syarat & Ketentuan</h1>
        <p className="last-updated">Diperbarui: 2 Agustus 2025</p>
        
        {/* Section 1 */}
        <div className="terms-section">
          <div className="terms-header" onClick={() => toggleSection(1)}>
            <h2>Pemesanan & Pembayaran</h2>
            <span className={`toggle-icon ${isOpen[1] ? 'open' : ''}`}>&#9660;</span>
          </div>
          <div className={`terms-content ${isOpen[1] ? 'open' : ''}`}>
            <ul>
              <li>Semua pemesanan harus dilakukan melalui formulir pemesanan resmi atau kontak WhatsApp yang tertera di website ini.</li>
              <li>Pemesanan dianggap sah setelah pelanggan melakukan pembayaran uang muka (down payment) sebesar 50% dari total biaya trip.</li>
              <li>Sisa pembayaran wajib dilunasi paling lambat 7 hari sebelum tanggal keberangkatan.</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="terms-section">
          <div className="terms-header" onClick={() => toggleSection(2)}>
            <h2>Ketentuan Trip & Jadwal</h2>
            <span className={`toggle-icon ${isOpen[2] ? 'open' : ''}`}>&#9660;</span>
          </div>
          <div className={`terms-content ${isOpen[2] ? 'open' : ''}`}>
            <ul>
              <li>Minimal kuota peserta adalah 4 orang. Jika peserta kurang dari 4 orang, maka akan ada penyesuaian harga atau penyesuaian destinasi.</li>
              <li>Jadwal trip sewaktu-waktu dapat berubah menyesuaikan dengan jadwal kedatangan kapal dan keberangkatan dari Banda Neira.</li>
              <li>Itinerary juga dapat berubah menyesuaikan dengan kondisi cuaca dan situasi di lapangan.</li>
              <li>Tersedia pilihan Private Trip dan Schedule Trip yang bisa disesuaikan dengan jadwal kapal PELNI maupun pesawat perintis.</li>
            </ul>
          </div>
        </div>
        
        {/* Section 3 */}
        <div className="terms-section">
          <div className="terms-header" onClick={() => toggleSection(3)}>
            <h2>Pembatalan Trip</h2>
            <span className={`toggle-icon ${isOpen[3] ? 'open' : ''}`}>&#9660;</span>
          </div>
          <div className={`terms-content ${isOpen[3] ? 'open' : ''}`}>
            <ul>
              <li>Pembatalan oleh pelanggan harus diinformasikan secara tertulis.</li>
              <li>Kebijakan pengembalian dana (refund) adalah sebagai berikut:
                <ul>
                  <li>Pembatalan 30 hari sebelum keberangkatan: Pengembalian dana 100% dari total biaya yang sudah dibayarkan.</li>
                  <li>Pembatalan 15-29 hari sebelum keberangkatan: Pengembalian dana 50% dari total biaya yang sudah dibayarkan.</li>
                  <li>Pembatalan 7-14 hari sebelum keberangkatan: Pengembalian dana 25% dari total biaya yang sudah dibayarkan.</li>
                  <li>Pembatalan kurang dari 7 hari sebelum keberangkatan: Tidak ada pengembalian dana (non-refundable).</li>
                </ul>
              </li>
              <li>Jika trip dibatalkan oleh pihak penyelenggara karena alasan teknis atau di luar kendali (force majeure), seluruh biaya yang sudah dibayarkan akan dikembalikan 100%.</li>
            </ul>
          </div>
        </div>
        
        {/* Section 4 */}
        <div className="terms-section">
          <div className="terms-header" onClick={() => toggleSection(4)}>
            <h2>Tanggung Jawab Peserta</h2>
            <span className={`toggle-icon ${isOpen[4] ? 'open' : ''}`}>&#9660;</span>
          </div>
          <div className={`terms-content ${isOpen[4] ? 'open' : ''}`}>
            <ul>
              <li>Peserta wajib mematuhi peraturan yang berlaku di setiap destinasi dan mematuhi arahan dari pemandu trip.</li>
              <li>Peserta bertanggung jawab penuh atas barang bawaan pribadi. Pihak penyelenggara tidak bertanggung jawab atas kehilangan atau kerusakan.</li>
              <li>Peserta disarankan untuk memiliki asuransi perjalanan pribadi.</li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div className="terms-section">
          <div className="terms-header" onClick={() => toggleSection(5)}>
            <h2>Perubahan Jadwal & Force Majeure</h2>
            <span className={`toggle-icon ${isOpen[5] ? 'open' : ''}`}>&#9660;</span>
          </div>
          <div className={`terms-content ${isOpen[5] ? 'open' : ''}`}>
            <ul>
              <li>Jadwal trip dapat berubah sewaktu-waktu karena kondisi alam, cuaca, atau hal lain di luar kendali.</li>
              <li>Pihak penyelenggara akan berusaha memberikan alternatif terbaik jika terjadi perubahan jadwal.</li>
              <li>Pihak penyelenggara tidak bertanggung jawab atas kerugian akibat keterlambatan atau pembatalan transportasi (pesawat, kapal) yang disebabkan oleh faktor cuaca atau pihak ketiga.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Syaket;