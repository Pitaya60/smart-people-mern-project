import React, { useState } from 'react'
import axios from 'axios'
import { GoogleGenerativeAI } from "@google/generative-ai";

const AssistantChatPage = () => {
  const ai = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Привет! Я твой AI помощник. Чем могу помочь?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const model = ai.getGenerativeModel({
        model: 'gemini-1.5-flash',
        config: {
          systemInstruction: "System instruction here",
        },
      });
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = await response.text();

      const botMessage = { sender: 'bot', text: text.trim() };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: 'Произошла ошибка. Попробуй снова.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <section className="min-h-screen bg-[#F4F4FF] flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-3xl p-6 flex flex-col h-[80vh]">
        <h2 className="text-3xl font-semibold text-[#3057FF] mb-6 text-center">AI Помощник</h2>

        <div className="flex-1 overflow-y-auto mb-4 space-y-4 px-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-4 max-w-[75%] rounded-xl transition-all duration-300 ease-in-out
                ${msg.sender === 'user'
                ? 'ml-auto bg-[#3057FF] text-white shadow-md'
                : 'mr-auto bg-gray-100 text-[#282828] shadow-sm'
                }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="mr-auto bg-gray-100 text-[#282828] p-4 rounded-xl max-w-[75%] shadow-sm">
              Печатает...
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            className="flex-1 px-4 py-3 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF] shadow-sm"
            placeholder="Напишите сообщение..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-[#3057FF] text-white px-6 py-3 rounded-md hover:bg-[#282828] transition-all duration-200 ease-in-out disabled:opacity-50 shadow-md"
          >
            Отправить
          </button>
        </div>
      </div>
    </section>
  );
}

export default AssistantChatPage;
