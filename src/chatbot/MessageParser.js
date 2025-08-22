// src/chatbot/MessageParser.js

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      // === KELOMPOK PERTANYAAN KHUSUS / FAQ (Prioritas Utama) ===
      if (lowerCaseMessage.includes('berapa') && lowerCaseMessage.includes('harga') && (lowerCaseMessage.includes('paket') || lowerCaseMessage.includes('trip'))) {
        this.actionProvider.handleFaqTripPrice();
      } else if (lowerCaseMessage.includes('tiket pesawat') && lowerCaseMessage.includes('termasuk')) {
        this.actionProvider.handleFaqFlightTicket();
      } else if (lowerCaseMessage.includes('cara') && (lowerCaseMessage.includes('pesan') || lowerCaseMessage.includes('reservasi'))) {
        this.actionProvider.handleFaqHowToBook();
      } else if (lowerCaseMessage.includes('bayar') && lowerCaseMessage.includes('dp')) {
        this.actionProvider.handleFaqDpPayment();
      } else if (lowerCaseMessage.includes('diskon') && lowerCaseMessage.includes('potongan')) {
        this.actionProvider.handleFaqGroupDiscount();
      } else if (lowerCaseMessage.includes('custom') || lowerCaseMessage.includes('sesuai')) {
        this.actionProvider.handleFaqCustomTrip();
      } else if (lowerCaseMessage.includes('waktu') && lowerCaseMessage.includes('terbaik')) {
        this.actionProvider.handleFaqBestTime();
      } else if (lowerCaseMessage.includes('lama') && lowerCaseMessage.includes('waktu') && (lowerCaseMessage.includes('jakarta') || lowerCaseMessage.includes('perjalanan'))) {
        this.actionProvider.handleFaqTravelTime();
      } else if (lowerCaseMessage.includes('meeting') || lowerCaseMessage.includes('mepo') || lowerCaseMessage.includes('kumpul')) {
        this.actionProvider.handleFaqMeetingPoint();
      } else if (lowerCaseMessage.includes('bawa') || lowerCaseMessage.includes('perlengkapan')) {
        this.actionProvider.handleFaqWhatToBring();
      } else if (lowerCaseMessage.includes('usia') && lowerCaseMessage.includes('batas')) {
        this.actionProvider.handleFaqAgeLimit();
      } else if (lowerCaseMessage.includes('pembatalan') || lowerCaseMessage.includes('cancel')) {
        this.actionProvider.handleFaqCancellationPolicy();
      } else if (lowerCaseMessage.includes('fasilitas') || lowerCaseMessage.includes('disediakan')) {
        this.actionProvider.handleFaqInclusions();
      } else if (lowerCaseMessage.includes('tidak') && lowerCaseMessage.includes('termasuk')) {
        this.actionProvider.handleFaqExclusions();
      } else if (lowerCaseMessage.includes('private trip') || lowerCaseMessage.includes('tur privat')) {
        this.actionProvider.handleFaqPrivateTrip();
      } else if (lowerCaseMessage.includes('aman') && lowerCaseMessage.includes('wisata')) {
        this.actionProvider.handleFaqSafety();
      } else if (lowerCaseMessage.includes('sinyal') || lowerCaseMessage.includes('internet')) {
        this.actionProvider.handleFaqSignal();
      } else if (lowerCaseMessage.includes('penginapan') || lowerCaseMessage.includes('hotel')) {
        this.actionProvider.handleFaqLodging();
      } else if (lowerCaseMessage.includes('pemandu') || lowerCaseMessage.includes('guide')) {
        this.actionProvider.handleFaqTourGuide();
      } else if (lowerCaseMessage.includes('cuaca')) {
        this.actionProvider.handleFaqWeather();
      } else if (lowerCaseMessage.includes('harga tiket') && lowerCaseMessage.includes('kapal')) {
        this.actionProvider.handleFaqShipPrice();
      } else if (lowerCaseMessage.includes('tur') && lowerCaseMessage.includes('satu hari')) {
        this.actionProvider.handleFaqDayTrip();
      } else if (lowerCaseMessage.includes('tambahan') || lowerCaseMessage.includes('biaya')) {
        this.actionProvider.handleFaqExtraCost();
      } else if (lowerCaseMessage.includes('bertemu') && lowerCaseMessage.includes('klien')) {
        this.actionProvider.handleFaqMeetClients();
      } else if (lowerCaseMessage.includes('cara') && lowerCaseMessage.includes('pembayaran')) {
        this.actionProvider.handleFaqPaymentMethod();
      } else if (lowerCaseMessage.includes('berangkat') && lowerCaseMessage.includes('pasti')) {
        this.actionProvider.handleFaqGuaranteedDeparture();
      } else if (lowerCaseMessage.includes('hubungi')) {
        this.actionProvider.handleFaqHowToContact();
      } else if (lowerCaseMessage.includes('sewa') && lowerCaseMessage.includes('snorkeling')) {
        this.actionProvider.handleFaqSnorkelRental();
      }
      // === KELOMPOK PERTANYAAN UMUM (Prioritas Kedua) ===
      else if (lowerCaseMessage.includes('trip') || lowerCaseMessage.includes('tour') || lowerCaseMessage.includes('harga')) {
        this.actionProvider.handleInfoTrip();
      } else if (lowerCaseMessage.includes('destinasi') || lowerCaseMessage.includes('tempat') || lowerCaseMessage.includes('spot')) {
        this.actionProvider.handleInfoDestinations();
      } else if (lowerCaseMessage.includes('transportasi') || lowerCaseMessage.includes('perjalanan') || lowerCaseMessage.includes('kapal') || lowerCaseMessage.includes('pesawat')) {
        this.actionProvider.handleInfoTransport();
      } else if (lowerCaseMessage.includes('tentang')) {
        this.actionProvider.handleAboutUs();
      } else if (lowerCaseMessage.includes('kontak') || lowerCaseMessage.includes('wa') || lowerCaseMessage.includes('telepon')) {
        this.actionProvider.handleContact();
      } else {
        // Jika tidak ada kecocokan, kirim pertanyaan ke AI
        this.actionProvider.handleGeminiResponse(message);
      }
    }
}
  
export default MessageParser;