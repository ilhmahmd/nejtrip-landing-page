// src/components/TripDetail.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { trips } from '../data/tripData';
import { FaCheck, FaBan } from 'react-icons/fa';
import PageLoader from './PageLoader';

function TripDetail() {
  // Ubah baris ini: Ambil 'slug' dari URL, bukan 'id'
  const { slug } = useParams();

  const navigate = useNavigate();

  // Ubah baris ini: Cari trip di data berdasarkan 'slug'
  const trip = trips.find((t) => t.slug === slug);

  // State untuk mengontrol loader halaman
  const [pageLoading, setPageLoading] = useState(true);

  // State untuk mengontrol section yang terbuka/tertutup
  const [showSection, setShowSection] = useState({
    schedule: true,
    itinerary: true,
    fasilitas: true,
  });

  // useEffect untuk mengontrol durasi loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 5000); // Loader akan menghilang setelah 5 detik

    return () => clearTimeout(timer);
  }, []);

  // Tampilkan loader jika pageLoading masih true
  if (pageLoading) {
    return <PageLoader />;
  }

  // Tampilkan pesan jika trip tidak ditemukan setelah loading selesai
  if (!trip) {
    return <p className="text-center my-5">Trip tidak ditemukan.</p>;
  }

  return (
    <div className="container my-5" style={{ fontFamily: '"Nunito", sans-serif' }}>
      {/* Tombol Kembali */}
      <div className="d-flex align-items-center" style={{ gap: '1px' }}>
        <button
          onClick={() => navigate(-1)}
          className="btn fw-semibold mb-3"
          style={{ marginTop: -30, color: '#df9800' }}
        >
          Beranda
        </button>
        <p className="mb-0" style={{ marginTop: -45, fontWeight: 700, marginRight: 10, color: '#df9800' }}>&gt;</p>
        <p className="mb-0" style={{ marginTop: -45, fontWeight: 700, color: '#df9800' }}>{trip.title}</p>
      </div>

      <div className="position-relative mb-4">
        <img
          src={trip.image}
          alt={trip.title}
          className="img-fluid w-100 rounded"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <h1
          className="position-absolute top-50 start-50 translate-middle text-white text-center px-4 py-2 rounded"
          style={{
            fontWeight: 800,
            fontSize: '3rem',
          }}
        >
          {trip.title}
        </h1>
      </div>

      {/* Deskripsi */}
      <p className="mb-4" style={{ fontSize: '1.1rem', paddingLeft: 10, paddingRight: 10 }}>
        {trip.description}
      </p>

      {/* Catatan (Note) */}
      {trip.notes && (
        <div className="card mb-3 pb-1 shadow-sm">
          <div className="card-header">
            <h2 className="h6 mb-0" style={{ fontWeight: 800 }}>
              Catatan
            </h2>
          </div>
          <div className="card-body">
            <p className="mb-0">{trip.notes}</p>
          </div>
        </div>
      )}

      {/* Meeting Point dalam bentuk tabel */}
      {trip.mepo && (
        <div className="card mb-3 pb-1 shadow-sm">
          <div
            className="card-header d-flex justify-content-between align-items-center"
            style={{ cursor: 'pointer' }}
          >
            <h2 className="h6 mb-0" style={{ fontWeight: 800 }}>
              Meeting Point
            </h2>
          </div>
          <div className="card-body">
            <table className="table">
              <tbody>
                <tr>
                  <td>{trip.mepo}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Jadwal Open Trip */}
      <div className="card mb-3 shadow-sm">
        <div
          className="card-header d-flex justify-content-between align-items-center"
          onClick={() => setShowSection((prev) => ({ ...prev, schedule: !prev.schedule }))}
          style={{ cursor: 'pointer' }}
        >
          <h2 className="h6 mb-0" style={{ fontWeight: 800, textAlign: 'center' }}>
            Jadwal Open Trip 2025
          </h2>
          <span>{showSection.schedule ? '▲' : '▼'}</span>
        </div>
        {showSection.schedule && (
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Bulan</th>
                  <th>Tanggal</th>
                  <th>Peserta</th> {/* Kolom baru untuk jumlah peserta */}
                </tr>
              </thead>
              <tbody>
                {/* Menggunakan map dengan destructuring untuk mengakses elemen array */}
                {trip.schedule.map(([bulan, tanggal, peserta], idx) => (
                  <tr key={idx}>
                    <td>{bulan}</td>
                    <td>{tanggal}</td>
                    <td>{peserta}</td> {/* Menampilkan jumlah peserta */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Private Trip Pricing */}
      {trip.privatePrices && (
        <div className="card mb-3 shadow-sm">
          <div className="card-header">
            <h2 className="h6 mb-0" style={{ fontWeight: 800 }}>
              Harga Private Trip
            </h2>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Jumlah Orang</th>
                  <th>Harga Per Orang</th> {/* Perbarui judul kolom agar lebih jelas */}
                </tr>
              </thead>
              <tbody>
                {trip.privatePrices.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.pax} orang</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Itinerary */}
      <div className="card mb-3 shadow-sm">
        <div
          className="card-header d-flex justify-content-between align-items-center"
          onClick={() => setShowSection((prev) => ({ ...prev, itinerary: !prev.itinerary }))}
          style={{ cursor: 'pointer' }}
        >
          <h2 className="h6 mb-0" style={{ fontWeight: 800 }}>
            Itinerary
          </h2>
          <span>{showSection.itinerary ? '▲' : '▼'}</span>
        </div>
        {showSection.itinerary && (
          <div className="card-body">
            {trip.day1 && (
              <>
                <h6>Hari 1</h6>
                <ul className="mb-0">
                  {trip.day1.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <br />
              </>
            )}
            {trip.day2 && (
              <>
                <h6>Hari 2</h6>
                <ul className="mb-0">
                  {trip.day2.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <br />
              </>
            )}
            {trip.day3 && (
              <>
                <h6>Hari 3</h6>
                <ul className="mb-0">
                  {trip.day3.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <br />
              </>
            )}
            {trip.day4 && (
              <>
                <h6>Hari 4</h6>
                <ul className="mb-0">
                  {trip.day4.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>

      {/* Fasilitas (gabungan include & exclude) */}
      <div className="card mb-3 shadow-sm">
        <div
          className="card-header d-flex justify-content-between align-items-center"
          onClick={() => setShowSection((prev) => ({ ...prev, fasilitas: !prev.fasilitas }))}
          style={{ cursor: 'pointer' }}
        >
          <h2 className="h6 mb-0" style={{ fontWeight: 800 }}>
            Include & Exclude
          </h2>
          <span>{showSection.fasilitas ? '▲' : '▼'}</span>
        </div>
        {showSection.fasilitas && (
          <div className="card-body">
            <h6>Include</h6>
            <ul style={{ listStyleType: 'none' }}>
              {trip.include.map((item, i) => (
                <li key={`inc-${i}`}>
                  <FaCheck className="check-iconn" />
                  {item}
                </li>
              ))}
            </ul>
            <h6>Exclude</h6>
            <ul style={{ listStyleType: 'none' }}>
              {trip.exclude.map((item, i) => (
                <li key={`exc-${i}`}>
                  <FaBan className="check-icon2" />
                  {item}
                </li>
              ))}
            </ul>
            <br></br>
            <p><strong style={{ color: 'green' }}>Free</strong> Dokumentasi Underwater (Insta360)</p>
          </div>
        )}
      </div>

      <a
        href="https://wa.me/6281264427001?text=Halo%20kak,%20aku%20tertarik%20sama%20tripnya%20setelah%20liat%20di%20website.%20Bisa%20dikirim%20info%20selengkapnya%20kak?"
        target="_blank"
        rel="noopener noreferrer"
        className="d-block mt-3"
      >
        <button
          className="btn w-100 py-2 text-white pulse-animation"
          style={{ backgroundColor: '#25D366', fontWeight: 700 }}
        >
          BOOKING SEKARANG!
        </button>
      </a>
    </div>
  );
}

export default TripDetail;