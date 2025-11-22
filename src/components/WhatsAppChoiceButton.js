import React, { useState } from 'react';
// Tidak perlu import CSS di sini, kita akan menambahkannya di App.css

const WhatsAppChoiceButton = ({ loading }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(prev => !prev);
  };

  const ADMIN_NUMBER = "6281264427001";
  const ADMIN_JAKARTA_NUMBER = "6289669780850";
  const MESSAGE = "Halo%20kak,%20aku%20tertarik%20sama%20tripnya%20setelah%20liat%20di%20website.%20Bisa%20dikirim%20info%20selengkapnya%20kak?";

  if (loading) {
    return null;
  }

  return (
    <div className="whatsapp-container">
      
      {/* Pilihan Nomor yang Muncul Saat showOptions = true */}
      {showOptions && (
        <div className="whatsapp-options-wrapper">
          
          {/* Opsi 1: Admin Utama */}
          <a href={`https://wa.me/${ADMIN_NUMBER}?text=${MESSAGE}`} 
             target="_blank" 
             rel="noopener noreferrer"
             className="whatsapp-option-link" 
          >
            <img src="https://img.icons8.com/color/30/000000/whatsapp.png" alt="WhatsApp" className="whatsapp-option-icon" />
            <span className="whatsapp-option-text">Admin Banda</span>
          </a>

          {/* Opsi 2: Admin Jakarta */}
          <a href={`https://wa.me/${ADMIN_JAKARTA_NUMBER}?text=${MESSAGE}`} 
             target="_blank" 
             rel="noopener noreferrer"
             className="whatsapp-option-link" 
          >
            <img src="https://img.icons8.com/color/30/000000/whatsapp.png" alt="WhatsApp" className="whatsapp-option-icon" />
            <span className="whatsapp-option-text">Admin Jakarta</span>
          </a>
          
        </div>
      )}
      
      {/* Tombol Pemicu Utama (Toggle) */}
      <button onClick={toggleOptions} 
              className="whatsapp-toggle-button" 
      >
        <img 
          src={showOptions 
               ? "https://img.icons8.com/ios-filled/50/ffffff/delete-sign--v1.png" 
               : "https://img.icons8.com/color/48/000000/whatsapp.png" 
          } 
          alt="WhatsApp Toggle" 
          className="whatsapp-icon-toggle" 
        />
      </button>

    </div>
  );
};

export default WhatsAppChoiceButton;