
import React from 'react';
import TenzinLogo from './TenzinLogo';

const ChatHeader = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-200/50 px-6 py-4 mx-4 rounded-t-2xl mt-4">
      <div className="flex items-center space-x-3">
        <TenzinLogo className="w-10 h-10" />
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Tenzin AI</h1>
          <p className="text-sm text-gray-500">Powered by DialoGPT model</p>
        </div>
        <div className="ml-auto">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
