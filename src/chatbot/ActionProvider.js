// src/chatbot/ActionProvider.js

import { trips } from '../data/tripData';
import { destinations } from '../data/destinationsData';
import { transportOptions } from '../data/transportData';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAdhx7BkacJ8vhF6-cK7LKz5-hN8b2-1qM");

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  // === Fungsi untuk Pertanyaan Umum (Menu) ===
  handleOptions = () => {
    const message = this.createChatBotMessage("Silakan pilih dari opsi di bawah ini:", {
      withAvatar: false,
      widget: "optionsWidget"
    });
    this.updateChatbotState(message);
  }

  handleInfoTrip = () => {
    const message = this.createChatBotMessage("Pilih salah satu trip untuk melihat detail:", {
      withAvatar: false,
      widget: 'tripOptionsWidget'
    });
    this.updateChatbotState(message);
  };

  handleInfoDestinations = () => {
    const message = this.createChatBotMessage("Pilih salah satu destinasi untuk melihat deskripsi lengkap:", {
      withAvatar: false,
      widget: 'destinationsOptionsWidget'
    });
    this.updateChatbotState(message);
  };

  handleInfoTransport = () => {
    const message = this.createChatBotMessage("Pilih moda transportasi yang ingin Anda ketahui:", {
      withAvatar: false,
      widget: 'transportOptionsWidget'
    });
    this.updateChatbotState(message);
  };

  handleAboutUs = () => {
    const message = this.createChatBotMessage("Kami adalah agen perjalanan yang fokus pada petualangan alam. Untuk info lebih lengkap, kunjungi halaman Tentang Kami.", {
      withAvatar: false,
    });
    this.updateChatbotState(message);
  };

  handleContact = () => {
    const message = this.createChatBotMessage("Anda bisa menghubungi kami via WhatsApp di nomor yang tertera di website.", {
      withAvatar: false,
    });
    this.updateChatbotState(message);
  };

  handleUnknown = () => {
    const message = this.createChatBotMessage("Maaf, saya tidak mengerti pertanyaan Anda. Silakan pilih dari opsi yang tersedia.");
    this.updateChatbotState(message);
  };


  // === FUNGSI BARU UNTUK 30 FAQ ===
  handleFaqTripPrice = () => {
    const message = this.createChatBotMessage("Harga paket trip kami bervariasi tergantung jenis trip (Open Trip atau Private Trip) dan durasi. Untuk detail lengkap, silakan pilih salah satu opsi di menu Trip.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqFlightTicket = () => {
    const message = this.createChatBotMessage("Harga paket trip kami **tidak termasuk** tiket pesawat dari dan ke kota asal Anda. Anda harus memesan tiket secara mandiri.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqHowToBook = () => {
    const message = this.createChatBotMessage("Untuk melakukan pemesanan, Anda bisa menghubungi kami melalui WhatsApp atau mengisi formulir pemesanan di website. Tim kami akan membantu prosesnya.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqDpPayment = () => {
    const message = this.createChatBotMessage("Ya, untuk mengamankan slot, Anda perlu membayar DP sebesar 50% dari total biaya. Pembayaran lunas dilakukan H-7 sebelum keberangkatan.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqGroupDiscount = () => {
    const message = this.createChatBotMessage("Kami menyediakan diskon khusus untuk pemesanan grup. Silakan hubungi kami di WhatsApp untuk info lebih lanjut.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqCustomTrip = () => {
    const message = this.createChatBotMessage("Ya, kami sangat fleksibel. Anda bisa mendiskusikan itinerary, durasi, dan budget dengan tim kami untuk mendapatkan trip yang disesuaikan.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqBestTime = () => {
    const message = this.createChatBotMessage("Waktu terbaik untuk berkunjung ke Banda Neira adalah antara bulan **Mei hingga September**, saat cuaca cerah dan laut tenang.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqTravelTime = () => {
    const message = this.createChatBotMessage("Perjalanan dari Jakarta ke Banda Neira membutuhkan waktu sekitar 5-6 jam (termasuk transit di Ambon).", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqMeetingPoint = () => {
    const message = this.createChatBotMessage("Titik kumpul (Meeting Point) trip kami biasanya di Pelabuhan/Bandara Banda Neira.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqWhatToBring = () => {
    // Buat konten pesan dalam format JSX
    const messageContent = (
      <>
        <p>Kami sarankan Anda membawa:</p>
        <ul>
          <li>Pakaian ringan dan topi</li>
          <li>Perlengkapan snorkeling pribadi (jika ada)</li>
          <li>Tabir surya dan obat-obatan pribadi</li>
          <li>Uang tunai secukupnya</li>
        </ul>
      </>
    );
    
    // Kirim pesan dengan konten JSX
    const message = this.createChatBotMessage(messageContent, { withAvatar: false });
    this.updateChatbotState(message);
};

  handleFaqAgeLimit = () => {
    const message = this.createChatBotMessage("Tidak ada batasan usia khusus. Namun, peserta di bawah 17 tahun harus didampingi oleh orang dewasa.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqCancellationPolicy = () => {
    const message = this.createChatBotMessage("Kebijakan pembatalan bervariasi tergantung waktu pembatalan. Untuk detail lengkap, silakan baca Syarat dan Ketentuan kami atau hubungi admin via WhatsApp.", { withAvatar: false });
    this.updateChatbotState(message);
  };
  

  handleFaqInclusions = () => {
    const messageContent = (
        <>
            <p>Fasilitas yang kami sediakan biasanya mencakup:</p>
            <ul>
                <li>Penginapan</li>
                <li>Makan sesuai jadwal</li>
                <li>Transportasi selama trip</li>
                <li>Pemandu lokal</li>
            </ul>
            <p>Untuk detail spesifik, silakan lihat deskripsi masing-masing paket.</p>
        </>
    );
    const message = this.createChatBotMessage(messageContent, { withAvatar: false });
    this.updateChatbotState(message);
};

handleFaqExclusions = () => {
    const messageContent = (
        <>
            <p>Yang tidak termasuk dalam paket biasanya:</p>
            <ul>
                <li>Tiket pesawat dari dan ke Ambon</li>
                <li>Pengeluaran pribadi (oleh-oleh, laundry, dll)</li>
                <li>Asuransi perjalanan</li>
            </ul>
        </>
    );
    const message = this.createChatBotMessage(messageContent, { withAvatar: false });
    this.updateChatbotState(message);
};

  handleFaqPrivateTrip = () => {
    const message = this.createChatBotMessage("Ya, kami menyediakan **Private Trip**. Paket ini ideal untuk keluarga atau grup kecil karena itinerary bisa disesuaikan sepenuhnya dengan keinginan Anda.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqSafety = () => {
    const message = this.createChatBotMessage("Banda Neira adalah tempat yang aman untuk berwisata. Kami selalu memastikan keamanan peserta dengan pemandu yang berpengalaman.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqSignal = () => {
    const message = this.createChatBotMessage("Sinyal telepon dan internet di Banda Neira cukup memadai untuk komunikasi dasar. Namun, tidak semua area memiliki sinyal yang stabil.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqLodging = () => {
    const message = this.createChatBotMessage("Ya, kami menyediakan akomodasi yang nyaman dan bersih selama trip. Penginapan biasanya sudah termasuk dalam paket.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqTourGuide = () => {
    const message = this.createChatBotMessage("Ya, setiap trip kami akan didampingi oleh pemandu lokal yang profesional dan berpengalaman di Banda Neira.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqWeather = () => {
    const message = this.createChatBotMessage("Banda Neira memiliki dua musim, yaitu musim kemarau (Mei-September) dan musim hujan (Oktober-April). Kami merekomendasikan kunjungan saat musim kemarau.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqShipPrice = () => {
    const message = this.createChatBotMessage("Harga tiket kapal dari Ambon ke Banda Neira bervariasi tergantung jenis kapal (cepat atau reguler) dan kelasnya. Untuk info harga terbaru, silakan cek langsung di kontak kami.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqDayTrip = () => {
    const message = this.createChatBotMessage("Kami menyediakan beberapa paket tur satu hari. Silakan hubungi kami untuk mendiskusikan opsi yang tersedia.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqExtraCost = () => {
    const message = this.createChatBotMessage("Secara umum, semua biaya sudah tercakup dalam paket. Biaya tambahan biasanya untuk pengeluaran pribadi seperti oleh-oleh atau makanan di luar jadwal.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqMeetClients = () => {
    const message = this.createChatBotMessage("Tentu, Anda akan bertemu dengan peserta trip lainnya saat meeting point. Ini adalah kesempatan baik untuk berkenalan dan berbagi pengalaman.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqPaymentMethod = () => {
    const message = this.createChatBotMessage("Kami menerima pembayaran melalui transfer bank. Tim kami akan memberikan detail rekening saat Anda melakukan pemesanan.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqGuaranteedDeparture = () => {
    const message = this.createChatBotMessage("Kami memiliki beberapa jadwal keberangkatan yang dijamin pasti berangkat meskipun jumlah peserta minimum belum terpenuhi.", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqHowToContact = () => {
    const message = this.createChatBotMessage("Anda dapat menghubungi kami melalui WhatsApp di nomor yang tertera di website, atau melalui email resmi kami. Kami siap membantu!", { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleFaqSnorkelRental = () => {
    const message = this.createChatBotMessage("Kami menyediakan perlengkapan snorkeling sebagai bagian dari fasilitas trip. Namun, kami juga menyarankan Anda membawa perlengkapan pribadi jika ada.", { withAvatar: false });
    this.updateChatbotState(message);
  };
  
  // === Fungsi untuk Pertanyaan Lokal Spesifik (Data Statis) ===

  handleSpecificTripQuery = (id) => {
    const trip = trips.find(t => t.id === id);
    let messageContent;
    if (trip) {
      if (trip.id === 3) {
        messageContent = (
          <>
            <p><strong>Private Trip</strong></p>
            <p>{trip.description}</p>
            <p><strong>Harga:</strong></p>
            <ul>
              {trip.privatePrices.map((p, index) => <li key={index}>{p.pax} orang: {p.price}</li>)}
            </ul>
            <p><strong>Jadwal:</strong></p>
            <ul>
              {trip.schedule.map((s, index) => <li key={index}>{s[0]}: {s[1]}</li>)}
            </ul>
          </>
        );
      } else {
        messageContent = (
          <>
            <p><strong>{trip.title}</strong></p>
            <p>{trip.description}</p>
            <p><strong>Harga:</strong> {trip.price}</p>
            <p><strong>Jadwal:</strong></p>
            <ul>
              {trip.schedule.map((s, index) => <li key={index}>{s[0]}: {s[1]}</li>)}
            </ul>
          </>
        );
      }
    } else {
      messageContent = "Maaf, informasi trip tersebut tidak ditemukan.";
    }
    const message = this.createChatBotMessage(messageContent, { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleSpecificDestinationQuery = (keyword) => {
    const dest = destinations.find(d => dest.name.toLowerCase().includes(keyword));
    let messageContent;
    if (dest) {
      messageContent = (
        <>
          <p><strong>{dest.name}</strong></p>
          <p>{dest.description}</p>
        </>
      );
    } else {
      messageContent = "Maaf, informasi destinasi tersebut tidak ditemukan.";
    }
    const message = this.createChatBotMessage(messageContent, { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleSpecificTransportQuery = (keyword) => {
    const transport = transportOptions.find(t => t.name.toLowerCase().includes(keyword));
    let messageContent;
    if (transport) {
      messageContent = (
        <>
          <p><strong>{transport.name}</strong></p>
          <p>Harga Tiket: {transport.ticketPrice}</p>
          <p>Jadwal: {transport.schedule.map(s => `${s.day}: ${s.route}`).join(' | ')}</p>
          <p>Keterangan: {transport.description}</p>
        </>
      );
    } else {
      messageContent = "Maaf, informasi untuk transportasi tersebut tidak ditemukan. Silakan coba pilih dari menu.";
    }
    const message = this.createChatBotMessage(messageContent, { withAvatar: false });
    this.updateChatbotState(message);
  };
  
  // --- Fungsi untuk Widget Trip ---
  handleOpenTrip4D3N = () => {
    const trip = trips.find(t => t.id === 1);
    const messageContent = (
      <>
        <p><strong>Open Trip 4D3N</strong></p>
        <p>{trip.description}</p>
        <p><strong>Harga:</strong> {trip.price}</p>
        <p><strong>Mepo:</strong> {trip.mepo}</p>
        <p><strong>Jadwal:</strong></p>
        <ul>
          {trip.schedule.map((s, index) => <li key={index}>{s[0]}: {s[1]}</li>)}
        </ul>
        <p><strong>Termasuk:</strong></p>
        <ul>
          {trip.include.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <p><strong>Tidak Termasuk:</strong></p>
        <ul>
          {trip.exclude.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </>
    );
    const message = this.createChatBotMessage(messageContent, { withAvatar: false });
    this.updateChatbotState(message);
  };

  handleOpenTrip3D2N = () => {
    const trip = trips.find(t => t.id === 2);
    const messageContent = (
      <>
        <p><strong>Open Trip 3D2N</strong></p>
        <p>{trip.description}</p>
        <p><strong>Harga:</strong> {trip.price}</p>
        <p><strong>Mepo:</strong> {trip.mepo}</p>
        <p><strong>Jadwal:</strong></p>
        <ul>
          {trip.schedule.map((s, index) => <li key={index}>{s[0]}: {s[1]}</li>)}
        </ul>
        <p><strong>Catatan:</strong> {trip.notes}</p>
        <p><strong>Termasuk:</strong></p>
        <ul>
          {trip.include.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <p><strong>Tidak Termasuk:</strong></p>
        <ul>
          {trip.exclude.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </>
    );
    const message = this.createChatBotMessage(messageContent, {
        withAvatar: false
    });
    this.updateChatbotState(message);
  };
  
  handlePrivateTrip = () => {
    const trip = trips.find(t => t.id === 3);
    const messageContent = (
      <>
        <p><strong>Private Trip</strong></p>
        <p>{trip.description}</p>
        <p><strong>Harga:</strong></p>
        <ul>
          {trip.privatePrices.map((p, index) => <li key={index}>{p.pax} orang: {p.price}</li>)}
        </ul>
        <p><strong>Mepo:</strong> {trip.mepo}</p>
        <p><strong>Jadwal:</strong></p>
        <ul>
          {trip.schedule.map((s, index) => <li key={index}>{s[0]}: {s[1]}</li>)}
        </ul>
        <p><strong>Termasuk:</strong></p>
        <ul>
          {trip.include.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <p><strong>Tidak Termasuk:</strong></p>
        <ul>
          {trip.exclude.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </>
    );
    const message = this.createChatBotMessage(messageContent, {
        withAvatar: false
    });
    this.updateChatbotState(message);
  };

  // --- Opsi Destinasi (Untuk Widget) ---
  handleDestination = (id) => {
    const dest = destinations.find(d => d.id === id);
    const messageContent = (
      <>
        <p><strong>{dest.name}</strong></p>
        <p>{dest.description}</p>
      </>
    );
    const message = this.createChatBotMessage(messageContent, {
        withAvatar: false
    });
    this.updateChatbotState(message);
  };

  // --- Opsi Transportasi (Untuk Widget) ---
  handleTransport = (id) => {
    // Perbaikan: Cari transportasi berdasarkan ID, bukan keyword
    const transport = transportOptions.find(t => t.id === id);
    let messageContent;
    if (transport) {
      messageContent = (
        <>
          <p><strong>{transport.name}</strong></p>
          <p>{transport.description}</p>
          <p><strong>Jadwal & Rute:</strong></p>
          <table>
            <tbody>
              {transport.schedule.map((item, index) => (
                <tr key={index}>
                  <td>{item.day}</td>
                  {item.time && <td>{item.time}</td>}
                  <td> {item.route}</td>
                  {item.price && <td>{item.price}</td>}
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          <p>
            {transport.name.includes('Pelni') && "Untuk selengkapnya bisa cek di aplikasi atau situs resmi Pelni:"}
            {transport.name.includes('Fast') && "Pemesanan tiket melalui:"}
            {transport.name.includes('Perintis') && "Pemesanan tiket melalui:"}
          </p>
          {transport.name.includes('Pelni') && (
            <a href="https://www.pelni.co.id/reservasi-tiket" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#fff"}}>
              Pelni.co.id
            </a>
          )}
          {transport.name.includes('Fast') && (
            <a href="https://dharmaindah.com/book" target="_blank" rel="noopener noreferrer " style={{ textDecoration: "none", color: "#fff"}}>
              dharmaindah.com/book
            </a>
          )}
          {transport.name.includes('Perintis') && (
            <>
              <p>0821-9918-4438 <strong>(Ambon)</strong></p>
              <p>0812-4876-8080 <strong>(Banda)</strong></p>
            </>
          )}
        </>
      );
    } else {
      messageContent = "Maaf, informasi untuk transportasi tersebut tidak ditemukan. Silakan coba pilih dari menu.";
    }
    const message = this.createChatBotMessage(messageContent, { withAvatar: false });
    this.updateChatbotState(message);
  };

  async handleGeminiResponse(message) {
    // Tampilkan pesan "sedang mengetik..."
    const loadingMessage = this.createChatBotMessage("...", { withAvatar: false });
    this.updateChatbotState(loadingMessage);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = `Anda adalah asisten yang membantu pertanyaan tentang perjalanan, pariwisata, dan Banda Neira. Jawablah dengan ringkas dan informatif, gunakan bahasa yang ramah. Jawablah pertanyaan berikut: ${message}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;

      const formattedText = this.formatResponse(response.text());

      const botMessage = this.createChatBotMessage(formattedText, { withAvatar: false });

      // Hapus pesan "sedang mengetik..."
      this.setState((prevState) => ({
        ...prevState,
        messages: prevState.messages.slice(0, -1),
      }));

      this.updateChatbotState(botMessage);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage = this.createChatBotMessage("Maaf, terjadi kesalahan. Silakan coba lagi nanti.", { withAvatar: false });

      // Hapus pesan "sedang mengetik..."
      this.setState((prevState) => ({
        ...prevState,
        messages: prevState.messages.slice(0, -1),
      }));

      this.updateChatbotState(errorMessage);
    }
  }

  // Fungsi untuk memformat respons dari AI
formatResponse(text) {
  // Memisahkan teks menjadi baris dan menyaring baris kosong
  const lines = text.split('\n').filter(line => line.trim() !== '');
  
  // Gunakan map untuk mengubah setiap baris menjadi elemen JSX
  const formattedLines = lines.map((line, index) => {
      // Hapus spasi di awal dan akhir baris
      const trimmedLine = line.trim();

      // Cek jika baris dimulai dengan tanda list ('* ' atau '- ')
      if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
          // Hapus tanda list dan ubah markdown bold
          const content = trimmedLine.substring(2);
          const formattedContent = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          return <li key={index} dangerouslySetInnerHTML={{ __html: formattedContent }} />;
      }
      
      // Untuk paragraf, ubah markdown bold dan render sebagai <p>
      const formattedLine = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return <p key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} />;
  });

  // Menggabungkan semua elemen ke dalam div
  return <div>{formattedLines}</div>;
}
}

export default ActionProvider;