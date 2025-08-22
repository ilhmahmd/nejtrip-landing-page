// src/components/ChatbotContainer.js

import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../chatbot/config';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';
import './ChatbotContainer.css';
import { TbMessageChatbotFilled } from "react-icons/tb"; // Impor ikon

function ChatbotContainer() {
    const [showChatbot, setShowChatbot] = useState(false);

    return (
        <div className="chatbot-wrapper">
            {showChatbot && (
                <div className="chatbot-window">
                    <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                        headerText="Tanya Nejbot AI"
                        placeholderText="Ketik pesan Anda di sini..."
                    />
                </div>
            )}
            <div className="chatbot-toggle-button" onClick={() => setShowChatbot((prev) => !prev)}>
                <TbMessageChatbotFilled size={32} color="white" />
                {/* Tambahkan elemen span di bawah ini */}
                <span className="chatbot-button-text">Tanya Nejbot AI</span>
            </div>
        </div>
    );
}

export default ChatbotContainer;