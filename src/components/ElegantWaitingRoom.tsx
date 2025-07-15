import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, Tag, Tooltip } from 'antd';
import { 
  UserOutlined, 
  ClockCircleOutlined, 
  CheckCircleOutlined, 
  SyncOutlined,
  CodeOutlined,
  BugOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  FireOutlined,
  StarOutlined
} from '@ant-design/icons';
import ParticleBackground from './ParticleBackground';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  task: string;
  status: 'waiting' | 'working' | 'completed';
  waitingFor?: string;
  avatar: string;
  progress?: number;
  blockedTime?: string;
}

const ElegantWaitingRoom: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Frontend Developer',
      task: 'User Dashboard',
      status: 'waiting',
      waitingFor: 'Sharath Kumar',
      avatar: '#6366F1',
      blockedTime: '2h 15m'
    },
    {
      id: '2',
      name: 'Sharath Kumar',
      role: 'Backend Developer', 
      task: 'Authentication API',
      status: 'working',
      avatar: '#10B981',
      progress: 78
    },
    {
      id: '3',
      name: 'Mike Johnson',
      role: 'QA Engineer',
      task: 'Integration Testing',
      status: 'waiting',
      waitingFor: 'Sarah Chen',
      avatar: '#F59E0B',
      blockedTime: '45m'
    }
  ]);

  const [celebrationMode, setCelebrationMode] = useState(false);
  const [energyLevel, setEnergyLevel] = useState(0.5);
  const [statusMessages, setStatusMessages] = useState<Array<{id: number, message: string, x: number, y: number}>>([]);

  const [activeIndex, setActiveIndex] = useState(1); // Start with Sharath active

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % members.length);
      
      // Simulate progress and celebrations
      if (Math.random() > 0.7) {
        setCelebrationMode(true);
        setTimeout(() => setCelebrationMode(false), 2000);
        
        // Add floating status messages
        const messages = [
          "API endpoint optimized! 🚀",
          "Tests passing! ✅",
          "Code review complete! 💯",
          "Database sync successful! 🔄",
          "Performance boost! ⚡"
        ];
        
        const newMessage = {
          id: Date.now(),
          message: messages[Math.floor(Math.random() * messages.length)],
          x: Math.random() * 60 + 20,
          y: Math.random() * 40 + 30
        };
        
        setStatusMessages(prev => [...prev, newMessage]);
        setTimeout(() => {
          setStatusMessages(prev => prev.filter(msg => msg.id !== newMessage.id));
        }, 3000);
      }
      
      // Update energy level based on team status
      const workingMembers = members.filter(m => m.status === 'working').length;
      const waitingMembers = members.filter(m => m.status === 'waiting').length;
      setEnergyLevel(Math.max(0.2, (workingMembers / members.length) * 0.8 + 0.2));
    }, 4000);

    return () => clearInterval(interval);
  }, [members.length]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'waiting':
        return <ClockCircleOutlined style={{ color: '#F59E0B' }} />;
      case 'working':
        return <SyncOutlined spin style={{ color: '#10B981' }} />;
      case 'completed':
        return <CheckCircleOutlined style={{ color: '#10B981' }} />;
      default:
        return <UserOutlined />;
    }
  };

  const getTaskIcon = (task: string) => {
    if (task.includes('API')) return <CodeOutlined />;
    if (task.includes('Testing')) return <BugOutlined />;
    if (task.includes('Dashboard') || task.includes('Frontend')) return <RocketOutlined />;
    return <UserOutlined />;
  };

  return (
    <div className="elegant-waiting-room">
      <ParticleBackground />
      
      <motion.div 
        className="room-header"
        animate={{ 
          scale: celebrationMode ? 1.02 : 1,
          filter: celebrationMode ? 'hue-rotate(45deg)' : 'hue-rotate(0deg)'
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-title">
          <motion.h3
            animate={{ 
              color: celebrationMode ? '#10B981' : '#1a1a1a'
            }}
          >
            Team Dependencies
            {celebrationMode && (
              <motion.span
                style={{ marginLeft: '8px' }}
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 1, repeat: 2 }}
              >
                <StarOutlined />
              </motion.span>
            )}
          </motion.h3>
          <p>Real-time visibility into who's waiting on whom</p>
        </div>
        
        <motion.div 
          className="energy-bar"
          style={{
            width: '100%',
            height: '3px',
            background: '#e2e8f0',
            borderRadius: '2px',
            overflow: 'hidden',
            marginTop: '8px'
          }}
        >
          <motion.div
            style={{
              height: '100%',
              background: `linear-gradient(90deg, #F59E0B ${energyLevel * 30}%, #10B981 ${energyLevel * 70}%, #6366F1 100%)`,
              borderRadius: '2px'
            }}
            animate={{ width: `${energyLevel * 100}%` }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </motion.div>

      <div className="members-grid">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            className={`member-card ${member.status} ${activeIndex === index ? 'active' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: celebrationMode && member.status === 'working' ? 1.05 : 1,
              boxShadow: celebrationMode && member.status === 'working' 
                ? '0 20px 40px rgba(16, 185, 129, 0.3)' 
                : undefined
            }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ 
              y: -5, 
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              scale: 1.02
            }}
          >
            {/* Profile Picture Section */}
            <div className="profile-section">
              <div className="avatar-container">
                <motion.div
                  animate={{
                    scale: member.status === 'working' ? [1, 1.05, 1] : 1,
                    boxShadow: member.status === 'working' 
                      ? [
                          '0 0 0 0px rgba(16, 185, 129, 0.4)',
                          '0 0 0 8px rgba(16, 185, 129, 0.1)',
                          '0 0 0 0px rgba(16, 185, 129, 0.4)'
                        ]
                      : '0 0 0 0px rgba(16, 185, 129, 0)'
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: member.status === 'working' ? Infinity : 0 
                  }}
                >
                  <Avatar 
                    size={60} 
                    style={{ 
                      backgroundColor: member.avatar,
                      fontSize: '20px',
                      fontWeight: '700'
                    }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                </motion.div>
                <motion.div 
                  className={`status-badge ${member.status}`}
                  animate={member.status === 'waiting' ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {getStatusIcon(member.status)}
                </motion.div>
              </div>
            </div>

            {/* Name Section */}
            <div className="name-section">
              <h3 className="member-name">{member.name}</h3>
            </div>

            {/* Role Section */}
            <div className="role-section">
              <span className="member-role">{member.role}</span>
            </div>

            {/* Task Section */}
            <div className="task-section">
              <div className="task-label">
                {getTaskIcon(member.task)}
                <span className="task-name">{member.task}</span>
              </div>
            </div>

            <div className="member-status">
              {member.status === 'waiting' && member.waitingFor && (
                <motion.div 
                  className="waiting-info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="waiting-message">
                    <ClockCircleOutlined />
                    <span>Waiting for <strong>{member.waitingFor?.split(' ')[0]}</strong></span>
                  </div>
                  <Tag color="orange" className="blocked-time">
                    Blocked {member.blockedTime}
                  </Tag>
                </motion.div>
              )}

              {member.status === 'working' && member.progress && (
                <motion.div 
                  className="progress-info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${member.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <motion.div
                      className="progress-sparkle"
                      style={{
                        position: 'absolute',
                        right: '4px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#fff',
                        fontSize: '10px'
                      }}
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity 
                      }}
                    >
                      <FireOutlined />
                    </motion.div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'space-between' }}>
                    <span className="progress-text">{member.progress}% complete</span>
                    {member.progress > 75 && (
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ color: '#10B981', fontSize: '12px' }}
                      >
                        <ThunderboltOutlined />
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              )}

              {member.status === 'completed' && (
                <motion.div 
                  className="completed-info"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, delay: 0.3 }}
                >
                  <Tag color="green" icon={<CheckCircleOutlined />}>
                    Task Completed
                  </Tag>
                </motion.div>
              )}
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="highlight-glow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="dependency-arrows">
        <motion.div 
          className="arrow-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="arrow-line">
            <motion.div 
              className="flow-pulse"
              animate={{ 
                x: [0, 100],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatDelay: 1
              }}
            />
          </div>
          <span className="arrow-label">Dependency Chain</span>
        </motion.div>
      </div>

      <motion.div 
        className="insight-summary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="summary-card">
          <div className="summary-icon">
            <ClockCircleOutlined />
          </div>
          <div className="summary-text">
            <strong>2 team members</strong> are currently blocked
            <br />
            <span>Estimated unblock time: 1-2 hours</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Status Messages */}
      <AnimatePresence>
        {statusMessages.map((msg) => (
          <motion.div
            key={msg.id}
            style={{
              position: 'absolute',
              left: `${msg.x}%`,
              top: `${msg.y}%`,
              background: 'rgba(16, 185, 129, 0.9)',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              zIndex: 10,
              pointerEvents: 'none',
              whiteSpace: 'nowrap'
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {msg.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ElegantWaitingRoom;