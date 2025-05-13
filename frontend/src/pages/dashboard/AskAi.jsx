import React, { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai"

const initiativeTypes = [
  { id: 'ecology', name: 'Экология' },
  { id: 'transport', name: 'Транспорт' },
  { id: 'social', name: 'Социальная сфера' },
  { id: 'map', name: 'Карта города' },
  { id: 'security', name: 'Безопасность' },
]

const initiatives = [
  { id: 1, type: 'ecology', title: 'Мониторинг качества воздуха', city: 'Алматы', date: '2025-05-01' },
  { id: 2, type: 'transport', title: 'Оптимизация автобусных маршрутов', city: 'Астана', date: '2025-04-15' },
  { id: 3, type: 'social', title: 'Программа поддержки пожилых', city: 'Шымкент', date: '2025-05-10' },
  { id: 4, type: 'map', title: 'Карта проблемных зон', city: 'Алматы', date: '2025-03-22' },
  { id: 5, type: 'security', title: 'Мониторинг безопасности районов', city: 'Караганда', date: '2025-04-30' },
]

const AssistantChatPage = () => {
  const ai = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Привет! Выбери инициативу слева, и я подскажу, стоит ли её принять.' }
  ])
  const [loading, setLoading] = useState(false)
  const [selectedInitiative, setSelectedInitiative] = useState(null)
  const [userInput, setUserInput] = useState('')

  const getInitiativeTypeName = (typeId) => {
    const found = initiativeTypes.find(t => t.id === typeId)
    return found ? found.name : 'Неизвестно'
  }

  const formatText = (text) => {
    return text
      .split('\n')
      .filter(p => p.trim() !== '')
      .map((p, idx) => <p key={idx} className="mb-2">{p.trim()}</p>)
  }

  const handleSelectInitiative = async (initiative) => {
    setSelectedInitiative(initiative)
    const message = `Поясни, стоит ли принять инициативу "${initiative.title}" из города ${initiative.city}, категория "${getInitiativeTypeName(initiative.type)}"?`
    await sendMessage(message, initiative)
  }

  const sendMessage = async (text, initiative = selectedInitiative) => {
    if (!initiative) return

    setMessages(prev => [...prev, { sender: 'user', text }])
    setLoading(true)

    try {
      const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' })

      const fullPrompt = `
Ты — городской аналитик. Отвечай чётко, по делу и по-человечески.

Инициатива:
• Название: ${initiative.title}
• Город: ${initiative.city}
• Категория: ${getInitiativeTypeName(initiative.type)}
• Дата: ${initiative.date}

Вопрос:
${text}

Ответ пиши ясно и структурировано. Добавляй переносы строк и объяснения, если нужно.
`.trim()

      const result = await model.generateContent(fullPrompt)
      const response = await result.response
      const aiText = response.text()

      setMessages(prev => [...prev, { sender: 'bot', text: aiText }])
    } catch (error) {
      console.error(error)
      setMessages(prev => [...prev, { sender: 'bot', text: 'Произошла ошибка при ответе ИИ.' }])
    } finally {
      setLoading(false)
      setUserInput('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (userInput.trim()) {
      await sendMessage(userInput.trim())
    }
  }

  return (
    <section className="min-h-screen bg-[#F4F4FF] flex p-6">
      {/* Sidebar */}
      <aside className="w-[300px] bg-white shadow-lg rounded-2xl p-4 mr-6 overflow-y-auto h-[80vh]">
        <h3 className="text-xl font-semibold mb-4 text-[#3057FF]">Инициативы</h3>
        <ul className="space-y-3">
          {initiatives.map(initiative => (
            <li
              key={initiative.id}
              className={`p-3 rounded-lg cursor-pointer hover:bg-[#F4F4FF] transition border
              ${selectedInitiative?.id === initiative.id ? 'bg-[#E5E5FF] border-[#3057FF]' : 'bg-white'}`}
              onClick={() => handleSelectInitiative(initiative)}
            >
              <p className="font-medium">{initiative.title}</p>
              <p className="text-sm text-gray-500">{initiative.city} · {getInitiativeTypeName(initiative.type)}</p>
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat */}
      <div className="bg-white shadow-xl rounded-3xl flex-1 p-6 flex flex-col h-[80vh]">
        <h2 className="text-3xl font-semibold text-[#3057FF] mb-6 text-center">AI Помощник</h2>

        <div className="flex-1 overflow-y-auto mb-4 space-y-4 px-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-4 max-w-[75%] rounded-xl
              ${msg.sender === 'user'
                ? 'ml-auto bg-[#3057FF] text-white'
                : 'mr-auto bg-gray-100 text-[#282828]'
              }`}
            >
              {formatText(msg.text)}
            </div>
          ))}
          {loading && (
            <div className="mr-auto bg-gray-100 text-[#282828] p-4 rounded-xl max-w-[75%]">
              Думаю...
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            className="flex-1 p-3 border rounded-xl focus:outline-[#3057FF]"
            placeholder={selectedInitiative ? 'Задай вопрос по инициативе...' : 'Сначала выбери инициативу'}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={!selectedInitiative || loading}
          />
          <button
            type="submit"
            className="bg-[#3057FF] text-white px-5 py-2 rounded-xl disabled:opacity-50"
            disabled={!selectedInitiative || loading || !userInput.trim()}
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  )
}

export default AssistantChatPage
