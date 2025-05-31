
import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '../types/chat';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex items-start space-x-3 ${isBot ? '' : 'justify-end'}`}>
      {isBot && (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
        isBot 
          ? 'bg-white shadow-md border border-gray-100' 
          : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
      } animate-in slide-in-from-bottom-1 duration-300`}>
        <p className={`text-sm ${isBot ? 'text-gray-800' : 'text-white'}`}>
          {message.content}
        </p>
        <p className={`text-xs mt-1 ${
          isBot ? 'text-gray-400' : 'text-white/70'
        }`}>
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>

      {!isBot && (
        <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
