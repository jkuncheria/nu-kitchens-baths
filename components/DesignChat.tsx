import React, { useState, useRef, useEffect } from 'react';
import { Chat } from '@google/genai';
import { createDesignChat, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const DesignChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm NuDesign. Describe your dream kitchen, or ask me about the latest trends in quartz countertops!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat Session once
  useEffect(() => {
    if (!chatSessionRef.current) {
      chatSessionRef.current = createDesignChat();
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatSessionRef.current) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(chatSessionRef.current, userText);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a moment. Could you please try that again?", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col transition-all animate-in slide-in-from-bottom-10 fade-in duration-300 max-h-[500px]">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center">
            <div>
              <h3 className="text-white font-serif font-medium">NuDesign Consultant</h3>
              <p className="text-xs text-gray-400">Powered by Gemini AI</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 h-80">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-gold text-white rounded-br-none' 
                    : 'bg-white text-slate-800 border border-gray-100 rounded-bl-none'
                } ${msg.isError ? 'bg-red-50 text-red-600 border-red-100' : ''}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-lg px-4 py-3 rounded-bl-none shadow-sm flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about styles, colors..."
              className="flex-1 bg-gray-100 text-slate-900 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-slate-900 text-white p-2 rounded-full hover:bg-slate-800 disabled:opacity-50 transition-colors"
            >
              <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-slate-800' : 'bg-brand-gold'} text-white p-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300 group flex items-center gap-2 pr-6`}
      >
        <div className="relative">
            {/* Sparkle Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        </div>
        <span className="font-semibold text-sm hidden md:block">{isOpen ? 'Close' : 'AI Design Help'}</span>
      </button>
    </div>
  );
};

export default DesignChat;