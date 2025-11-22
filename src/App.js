// src/App.js

import React, {
  useRef,
  useEffect,
  Suspense,
  useState
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Import komponen inti
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Promo from './components/Promo'
// Import Chatbot Container
import ChatbotContainer from './components/ChatbotContainer';
// >>> IMPORT KOMPONEN WHATSAPP BARU DI SINI <<<
import WhatsAppChoiceButton from './components/WhatsAppChoiceButton'; 


// Lazy Loading
const Trips = React.lazy(() => import('./components/Trips'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const WhyUs = React.lazy(() => import('./components/WhyUs'));
const Banda = React.lazy(() => import('./components/Banda'));
const Testimonial = React.lazy(() => import('./components/Testimonial'));
const Pic = React.lazy(() => import('./components/Pic'));
const Video = React.lazy(() => import('./components/Video'));
const Quote = React.lazy(() => import('./components/Quote'));
const TripDetail = React.lazy(() => import('./components/TripDetail'));
const About = React.lazy(() => import('./components/About'));
const Syaket = React.lazy(() => import('./components/Syaket'));
const DestinasiDetail = React.lazy(() => import('./components/DestinasiDetail'));



function App() {
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Hapus semua kode yang terkait dengan Lenis di sini

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);

    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Musik diputar secara otomatis.");
          })
          .catch(error => {
            console.log("Autoplay diblokir oleh browser.");
          });
      }
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {loading && <Loader />}
        <audio ref={audioRef} src="/audio/musik.mp3" loop></audio>

        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Trips />
                  <Promo />
                  <Gallery />
                  <WhyUs />
                  <Banda />
                  <Testimonial />
                  <Pic />
                  <Video />
                  <Quote />
                </>
              }
            />
            <Route path="/trip/:slug" element={<TripDetail />} />
            <Route path="/informasi" element={<About />} />
            <Route path="/syarat-ketentuan" element={<Syaket />} />
            <Route path="/destinasi/:slug" element={<DestinasiDetail />} />
          </Routes>
        </Suspense>

        <Footer />

        {/* >>> GANTI KODE WHATSAPP LAMA DENGAN KOMPONEN BARU <<< */}
        <WhatsAppChoiceButton loading={loading} />
        {/* >>> AKHIR PENGGANTIAN <<< */}

        <ChatbotContainer />

        

      </div>
    </Router>
  );
}

export default App;