'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ArrowUp, Bot } from 'lucide-react';
import { createPortal } from 'react-dom';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Zennero's AI assistant. How can I help you with your IT solutions today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate AI response (placeholder)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message! Our AI is currently being enhanced. For immediate assistance, please contact us at info@zennero.com or use the contact form above.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Desktop Chat Window Component
  const DesktopChat = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="bg-zennero-primary text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot size={16} />
          </div>
          <div>
            <h3 className="font-semibold">Zennero AI</h3>
            <p className="text-xs text-white/80">Online</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white/80 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.isUser
                  ? 'bg-zennero-primary text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.isUser ? 'text-white/70' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-zennero-primary focus:border-transparent text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="bg-zennero-primary text-white p-2 rounded-full hover:bg-zennero-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  // Mobile Full-Screen Chat Component
  const MobileChat = () => (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Full-screen chat */}
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 30,
          duration: 0.4 
        }}
        className="fixed inset-0 z-[9999] bg-white flex flex-col"
      >
        {/* Header */}
        <div className="bg-zennero-primary text-white px-6 py-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Zennero AI Assistant</h3>
              <p className="text-sm text-white/80">Online • Ready to help</p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </motion.button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                  message.isUser
                    ? 'bg-zennero-primary text-white'
                    : 'bg-white text-gray-900 border border-gray-100'
                }`}
              >
                <p className="text-base">{message.text}</p>
                <p className={`text-xs mt-2 ${
                  message.isUser ? 'text-white/70' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="p-6 bg-white border-t border-gray-200 shadow-lg">
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-zennero-primary focus:border-transparent text-base"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="bg-zennero-primary text-white p-3 rounded-2xl hover:bg-zennero-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-zennero-primary text-white p-4 rounded-full shadow-lg hover:bg-zennero-primary-dark transition-all duration-300 ${isOpen ? 'hidden' : 'flex'} items-center justify-center`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <>
            {isMobile ? (
              mounted && createPortal(
                <MobileChat />,
                document.body
              )
            ) : (
              <DesktopChat />
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot; 
