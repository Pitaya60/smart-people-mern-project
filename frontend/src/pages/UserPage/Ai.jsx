import React, { useState } from 'react'
import axios from 'axios'

const AssistantChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Привет! Я твой AI помощник. Чем могу помочь?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { sender: 'user', text: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Ты дружелюбный ассистент, помогаешь кратко и понятно.' },
            ...messages.map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            { role: 'user', content: input }
          ],
          temperature: 0.7
        },
        {
          headers: {
            'Authorization': `Bearer OPENAI_API_KEY`,
            'Content-Type': 'application/json'
          }
        }
      )

      const botMessage = {
        sender: 'bot',
        text: response.data.choices[0].message.content.trim()
      }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: 'Произошла ошибка. Попробуй снова.' }
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <section className="min-h-screen bg-[#F4F4FF] flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-6 flex flex-col h-[80vh]">
        <h2 className="text-2xl font-bold text-[#3057FF] mb-4 text-center">AI Помощник</h2>

        <div className="flex-1 overflow-y-auto mb-4 space-y-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 max-w-[75%] rounded-xl ${
                msg.sender === 'user'
                  ? 'ml-auto bg-[#3057FF] text-white text-right'
                  : 'mr-auto bg-gray-100 text-[#282828]'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="mr-auto bg-gray-100 text-[#282828] p-3 rounded-xl max-w-[75%]">
              Печатает...
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
            placeholder="Напишите сообщение..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-[#3057FF] text-white px-4 py-2 rounded-md hover:bg-[#282828] transition disabled:opacity-50"
          >
            Отправить
          </button>
        </div>
      </div>
    </section>
  )
}

export default AssistantChatPage
