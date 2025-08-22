// src/chatbot/config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import { trips } from '../data/tripData';
import { destinations } from '../data/destinationsData';
import { transportOptions } from '../data/transportData';


const config = {
    initialMessages: [
        createChatBotMessage('Halo! Saya Nejbot AI. Ada yang bisa saya bantu?', {
            withAvatar: false
        }),
        createChatBotMessage('Anda bisa pilih salah satu opsi di bawah ini:', {
            delay: 500,
            widget: 'optionsWidget',
        }),
    ],
    botName: 'Nejbot AI',
    customStyles: {
        botMessageBox: {
            backgroundColor: '#0081a1',
        },
        chatButton: {
            backgroundColor: '#0081a1',
        },
    },
    customComponents: {
        // Tambahkan ini untuk menghilangkan avatar bot
        botAvatar: (props) => null,
        // Tambahkan ini untuk menghilangkan avatar pengguna
        userAvatar: (props) => null,
    },
    widgets: [
        // Widget Menu Utama
        {
            widgetName: 'optionsWidget',
            widgetFunc: (props) => (
                <div className="chatbot-options-container">
                    <button className="chatbot-option-button" onClick={() => props.actionProvider.handleInfoTrip()}>Info Trip</button>
                    <button className="chatbot-option-button" onClick={() => props.actionProvider.handleInfoDestinations()}>Info Destinasi</button>
                    <button className="chatbot-option-button" onClick={() => props.actionProvider.handleInfoTransport()}>Info Transportasi</button>
                </div>
            ),
        },
        // Widget Opsi Trip
        {
            widgetName: 'tripOptionsWidget',
            widgetFunc: (props) => (
                <div className="chatbot-options-container">
                    {trips.map((trip) => (
                        <button className="chatbot-option-button" key={trip.id} onClick={() => {
                            if (trip.id === 1) props.actionProvider.handleOpenTrip4D3N();
                            if (trip.id === 2) props.actionProvider.handleOpenTrip3D2N();
                            if (trip.id === 3) props.actionProvider.handlePrivateTrip();
                        }}>
                            {trip.title}
                        </button>
                    ))}
                    <button className="chatbot-option-button" onClick={() => props.actionProvider.handleOptions()}>Kembali ke Menu Utama</button>
                </div>
            )
        },
        // Widget Opsi Destinasi
        {
            widgetName: 'destinationsOptionsWidget',
            widgetFunc: (props) => (
                <div className="chatbot-options-container">
                    {destinations.map((dest) => (
                        <button className="chatbot-option-button" key={dest.id} onClick={() => props.actionProvider.handleDestination(dest.id)}>
                            {dest.name}
                        </button>
                    ))}
                    <button className="chatbot-option-button" onClick={() => props.actionProvider.handleOptions()}>Kembali ke Menu Utama</button>
                </div>
            )
        },
        // Widget Opsi Transportasi
        {
            widgetName: 'transportOptionsWidget',
            widgetFunc: (props) => (
                <div className="chatbot-options-container">
                    {transportOptions.map((transport) => (
                        <button className="chatbot-option-button" key={transport.id} onClick={() => props.actionProvider.handleTransport(transport.id)}>
                            {transport.name}
                        </button>
                    ))}
                    <button className="chatbot-option-button" onClick={() => props.actionProvider.handleOptions()}>Kembali ke Menu Utama</button>
                </div>
            )
        }
    ],
};

export default config;