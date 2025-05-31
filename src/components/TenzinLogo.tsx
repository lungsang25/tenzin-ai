
import React from 'react';

const TenzinLogo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="snowLionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="48" 
          fill="url(#snowLionGradient)" 
          stroke="white" 
          strokeWidth="2"
        />
        
        {/* Snow Lion silhouette - simplified geometric form */}
        <g fill="white" opacity="0.9">
          {/* Lion body */}
          <ellipse cx="50" cy="55" rx="25" ry="18" />
          
          {/* Lion head */}
          <circle cx="50" cy="35" r="15" />
          
          {/* Lion mane - stylized with geometric patterns */}
          <path d="M35 30 Q30 25 25 30 Q30 20 35 25 Q40 15 45 25 Q50 15 55 25 Q60 15 65 25 Q70 20 75 30 Q70 25 65 30 Q60 35 55 30 Q50 35 45 30 Q40 35 35 30 Z" />
          
          {/* Lion legs - simplified */}
          <rect x="38" y="70" width="4" height="12" rx="2" />
          <rect x="46" y="70" width="4" height="12" rx="2" />
          <rect x="54" y="70" width="4" height="12" rx="2" />
          <rect x="62" y="70" width="4" height="12" rx="2" />
          
          {/* Lion tail with curl */}
          <path d="M75 60 Q80 50 85 55 Q90 60 85 65 Q80 70 75 65" strokeWidth="3" fill="none" stroke="white" />
        </g>
        
        {/* AI Circuit patterns overlay */}
        <g fill="none" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.6">
          {/* Circuit lines on the lion */}
          <path d="M40 40 L45 35 L50 40 L55 35 L60 40" />
          <path d="M35 50 L65 50" />
          <path d="M42 60 L48 55 L52 60 L58 55" />
          
          {/* Small circuit nodes */}
          <circle cx="45" cy="35" r="1.5" fill="url(#circuitGradient)" />
          <circle cx="55" cy="35" r="1.5" fill="url(#circuitGradient)" />
          <circle cx="48" cy="55" r="1.5" fill="url(#circuitGradient)" />
          <circle cx="52" cy="55" r="1.5" fill="url(#circuitGradient)" />
        </g>
        
        {/* Neural network dots for AI theme */}
        <g fill="rgba(255,255,255,0.8)">
          <circle cx="25" cy="25" r="1" />
          <circle cx="75" cy="25" r="1" />
          <circle cx="25" cy="75" r="1" />
          <circle cx="75" cy="75" r="1" />
          <circle cx="15" cy="50" r="1" />
          <circle cx="85" cy="50" r="1" />
        </g>
        
        {/* Connection lines for neural network */}
        <g stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" fill="none">
          <line x1="25" y1="25" x2="75" y2="25" />
          <line x1="25" y1="75" x2="75" y2="75" />
          <line x1="25" y1="25" x2="25" y2="75" />
          <line x1="75" y1="25" x2="75" y2="75" />
        </g>
      </svg>
    </div>
  );
};

export default TenzinLogo;
