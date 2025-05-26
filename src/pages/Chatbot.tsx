import React, { useState, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isApiKeyValid, setIsApiKeyValid] = useState<boolean | null>(null);
  const [lastRequestTime, setLastRequestTime] = useState<number>(0);
  const RATE_LIMIT_MS = 1000; // 1 second between requests

  useEffect(() => {
    // Check if API key exists
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    setIsApiKeyValid(!!apiKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Check rate limiting
    const now = Date.now();
    if (now - lastRequestTime < RATE_LIMIT_MS) {
      setError('Please wait a moment before sending another message.');
      return;
    }

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);
    setLastRequestTime(now);

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error('API key not found. Please check your .env file.');
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { 
              role: 'system', 
              content: `You are a Sustainable Development Goals (SDGs) expert assistant. Your role is to help users understand and take action on the 17 Sustainable Development Goals established by the United Nations.

Key responsibilities:
1. Provide information about specific SDGs and their targets
2. Suggest practical actions individuals can take to support these goals
3. Explain the interconnectedness of different SDGs
4. Share relevant statistics and progress updates
5. Recommend sustainable products and practices

Guidelines:
- Always respond in English only
- Focus on evidence-based information
- Provide actionable recommendations
- Consider local and global contexts
- Reference specific SDGs when relevant
- Maintain a professional yet engaging tone
- Include relevant statistics when available
- Suggest practical next steps

Remember to:
- Stay focused on sustainability and development goals
- Provide balanced and accurate information
- Encourage positive action and engagement
- Consider environmental, social, and economic aspects
- Reference official UN SDG resources when possible` 
            },
            ...messages,
            userMessage
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        if (response.status === 429) {
          throw new Error('Rate limit exceeded. Please try again in a few moments.');
        } else if (response.status === 401) {
          throw new Error('Invalid API key. Please check your configuration.');
        } else if (response.status === 402) {
          throw new Error('Payment required. Please check your OpenAI account billing.');
        } else {
          throw new Error(`API Error: ${errorData?.error?.message || response.statusText}`);
        }
      }

      const data = await response.json();
      if (!data.choices?.[0]?.message?.content) {
        throw new Error('No message content found in API response');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, an error occurred: ${errorMessage}`
      }]);
    } finally {
      setLoading(false);
    }
  };

  if (isApiKeyValid === false) {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-red-600 mb-4">API Key Error</h2>
            <p className="text-gray-700">
              API key not found. Please make sure VITE_OPENAI_API_KEY is properly defined in your .env file.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 relative">
      {/* Background image with overlay */}
      <div className="fixed inset-0 w-full h-full -z-10" style={{
        backgroundImage: `url('/images/sustai.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 bg-green-800 bg-opacity-75" />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-green-700 text-white">
            <h1 className="text-2xl font-bold">Sustainability Assistant</h1>
            <p className="mt-2">Ask me anything about sustainable development goals and how to take action!</p>
          </div>
          
          {error && (
            <div className="p-4 bg-red-100 border-b border-red-200">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <div className="h-[500px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 rounded-lg p-3 text-gray-800">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about sustainability..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot; 