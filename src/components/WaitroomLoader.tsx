import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

interface WaitroomLoaderProps {
  onComplete: () => void;
  duration?: number;
}

const WaitroomLoader: React.FC<WaitroomLoaderProps> = ({ onComplete, duration = 3000 }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loadingSteps = [
    { text: "Initializing Waitroom...", icon: <ClockCircleOutlined />, color: "#6366F1" },
    { text: "Loading team data...", icon: <ClockCircleOutlined />, color: "#8B5CF6" },
    { text: "Analyzing dependencies...", icon: <ClockCircleOutlined />, color: "#10B981" },
    { text: "Optimizing workflow...", icon: <ClockCircleOutlined />, color: "#F59E0B" },
    { text: "Ready to eliminate bottlenecks!", icon: <CheckCircleOutlined />, color: "#10B981" }
  ];

  useEffect(() => {
    const stepDuration = duration / loadingSteps.length;
    const progressInterval = 50;
    const progressIncrement = 100 / (duration / progressInterval);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setIsComplete(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + progressIncrement;
      });
    }, progressInterval);

    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepTimer);
          return prev;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stepTimer);
    };
  }, [duration, onComplete, loadingSteps.length]);

  const particleCount = 20;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    size: 2 + Math.random() * 4,
    color: ['#6366F1', '#8B5CF6', '#10B981', '#F59E0B', '#EC4899'][Math.floor(Math.random() * 5)]
  }));

  return (
    <AnimatePresence>
      <motion.div
        className="waitroom-loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          overflow: 'hidden'
        }}
      >
        {/* Animated Background Particles */}
        <div className="loader-particles">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="loader-particle"
              style={{
                position: 'absolute',
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: particle.color,
                borderRadius: '50%',
                opacity: 0.3,
              }}
              animate={{
                scale: [0.5, 1.2, 0.5],
                opacity: [0.1, 0.6, 0.1],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Main Logo with Pulse Animation */}
        <motion.div
          className="loader-logo"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '60px',
            fontSize: '48px',
            fontWeight: '900',
            color: '#ffffff',
            textShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              filter: [
                'drop-shadow(0 0 10px #6366F1)',
                'drop-shadow(0 0 20px #8B5CF6)',
                'drop-shadow(0 0 10px #6366F1)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ marginRight: '16px', fontSize: '56px' }}
          >
            <ClockCircleOutlined />
          </motion.div>
          <motion.span
            animate={{
              textShadow: [
                '0 0 10px #6366F1',
                '0 0 20px #8B5CF6',
                '0 0 30px #10B981',
                '0 0 20px #8B5CF6',
                '0 0 10px #6366F1'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Waitroom
          </motion.span>
        </motion.div>

        {/* Loading Progress Circle */}
        <motion.div
          className="loader-progress-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            position: 'relative',
            width: '120px',
            height: '120px',
            marginBottom: '40px'
          }}
        >
          {/* Background Circle */}
          <svg width="120" height="120" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="4"
            />
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="314"
              strokeDashoffset="314"
              animate={{
                strokeDashoffset: 314 - (314 * progress) / 100
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Progress Percentage */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '24px',
              fontWeight: '700',
              color: '#ffffff',
              textShadow: '0 0 10px rgba(99, 102, 241, 0.5)'
            }}
          >
            {Math.round(progress)}%
          </div>
        </motion.div>

        {/* Loading Steps */}
        <motion.div
          className="loader-steps"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#ffffff',
                minHeight: '60px'
              }}
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  color: [loadingSteps[currentStep].color, '#ffffff', loadingSteps[currentStep].color]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ fontSize: '24px' }}
              >
                {loadingSteps[currentStep].icon}
              </motion.span>
              <span>{loadingSteps[currentStep].text}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Floating Elements */}
        <div className="loader-floating-elements">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-element"
              style={{
                position: 'absolute',
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 2) * 40}%`,
                width: '8px',
                height: '8px',
                background: `linear-gradient(45deg, ${['#6366F1', '#8B5CF6', '#10B981', '#F59E0B', '#EC4899', '#06B6D4'][i]}, transparent)`,
                borderRadius: '50%',
                opacity: 0.4
              }}
              animate={{
                y: [0, -30, 0],
                scale: [0.5, 1.5, 0.5],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Success Animation */}
        {isComplete && (
          <motion.div
            className="loader-success"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '80px',
              color: '#10B981',
              textShadow: '0 0 30px #10B981',
              zIndex: 10
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <CheckCircleOutlined />
            </motion.div>
          </motion.div>
        )}

        {/* Ripple Effect */}
        <motion.div
          className="loader-ripple"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            border: '2px solid rgba(99, 102, 241, 0.3)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default WaitroomLoader;