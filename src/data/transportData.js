// src/data/transportData.js
export const transportOptions = [
    {
        id: 1,
        name: 'Fast Boat',
        icon: './images/fast.png',
        description: 'Pilihan tercepat untuk menuju Banda Neira dari Ambon. Keberangkatan dari pelabuhan Tulehu (Ambon) / Amahai - Banda. Durasi perjalanan di laut: 5 jam. Jadwal bisa berubah tergantung cuaca.',
        schedule: [
            { day: 'Kamis ', route: ' Ambon → Banda' },
            { day: 'Minggu ', route: ' Banda → Ambon' },
        ],
    },
    {
        id: 2,
        name: 'Pelni Labobar',
        icon: './images/pel.png',
        description: 'Kapal Pelni Labobar melayani rute jarak jauh dari kota-kota besar. Durasi perjalanan di laut dari Ambon ke Banda: 9 jam. Cocok untuk Anda yang ingin membawa banyak barang atau berwisata lebih lama.',
        schedule: [
            { day: ' ', route: 'Jakarta, Surabaya, Makassar, Baubau, Ambon → Banda' },
            { day: ' ', route: 'Banda → Tual, Dobo, Kaimana, Fakfak' },
        ],
    },
    {
        id: 3,
        name: 'Pelni Pangrango',
        icon: './images/pel.png',
        description: 'Kapal Pelni Pangrango menawarkan perjalanan yang lebih santai dan ekonomis. Durasi perjalanan di laut dari Ambon ke Banda: 16 jam dengan jadwal setiap hari.',
        schedule: [
            { day: ' ', route: 'Ambon → Banda Neira' },
            { day: ' ', route: 'Banda Neira → Ambon' },
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