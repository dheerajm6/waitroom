import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserOutlined, ClockCircleOutlined, CheckCircleOutlined, SyncOutlined } from '@ant-design/icons';

interface Person {
  id: string;
  name: string;
  task: string;
  status: 'waiting' | 'working' | 'completed';
  waitingFor?: string;
  position: { x: number; y: number };
  color: string;
}

const WaitingRoomVisualization: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([
    {
      id: '1',
      name: 'Sarah',
      task: 'Frontend Components',
      status: 'waiting',
      waitingFor: 'Sharath',
      position: { x: 25, y: 40 },
      color: '#6366F1'
    },
    {
      id: '2',
      name: 'Sharath',
      task: 'API Development',
      status: 'working',
      position: { x: 75, y: 25 },
      color: '#10B981'
    },
    {
      id: '3',
      name: 'Mike',
      task: 'Testing',
      status: 'waiting',
      waitingFor: 'Sarah',
      position: { x: 75, y: 75 },
      color: '#F59E0B'
    }
  ]);

  const [connections, setConnections] = useState<Array<{from: string; to: string}>>([]);

  useEffect(() => {
    // Create dependency connections
    const newConnections = people
      .filter(person => person.waitingFor)
      .map(person => ({
        from: person.id,
        to: people.find(p => p.name === person.waitingFor)?.id || ''
      }))
      .filter(conn => conn.to);

    setConnections(newConnections);

    // Simulate status changes
    const interval = setInterval(() => {
      setPeople(prevPeople => {
        return prevPeople.map(person => {
          if (person.status === 'working' && Math.random() > 0.7) {
            return { ...person, status: 'completed' };
          }
          if (person.status === 'waiting' && Math.random() > 0.8) {
            const dependencyCompleted = prevPeople.find(p => p.name === person.waitingFor)?.status === 'completed';
            if (dependencyCompleted) {
              return { ...person, status: 'working' };
            }
          }
          return person;
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [people.length]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'waiting':
        return <ClockCircleOutlined />;
      case 'working':
        return <SyncOutlined spin />;
      case 'completed':
        return <CheckCircleOutlined />;
      default:
        return <UserOutlined />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'waiting':
        return '#F59E0B';
      case 'working':
        return '#3B82F6';
      case 'completed':
        return '#10B981';
      default:
        return '#6B7280';
    }
  };

  return (
    <div className="waiting-room-container">
      <svg className="connections-svg" width="100%" height="100%">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="#94A3B8"
            />
          </marker>
        </defs>
        
        {connections.map((connection, index) => {
          const fromPerson = people.find(p => p.id === connection.from);
          const toPerson = people.find(p => p.id === connection.to);
          
          if (!fromPerson || !toPerson) return null;
          
          return (
            <motion.line
              key={`${connection.from}-${connection.to}`}
              x1={`${fromPerson.position.x}%`}
              y1={`${fromPerson.position.y}%`}
              x2={`${toPerson.position.x}%`}
              y2={`${toPerson.position.y}%`}
              stroke="#94A3B8"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          );
        })}
      </svg>

      {people.map((person, index) => (
        <motion.div
          key={person.id}
          className="person-node"
          style={{
            left: `${person.position.x}%`,
            top: `${person.position.y}%`,
            borderColor: person.color,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="person-avatar"
            style={{ backgroundColor: person.color }}
            animate={{
              boxShadow: person.status === 'waiting' 
                ? ['0 0 0 0 rgba(245, 158, 11, 0.7)', '0 0 0 20px rgba(245, 158, 11, 0)']
                : person.status === 'working'
                ? ['0 0 0 0 rgba(59, 130, 246, 0.7)', '0 0 0 15px rgba(59, 130, 246, 0)']
                : '0 0 0 0 rgba(16, 185, 129, 0)'
            }}
            transition={{
              duration: 2,
              repeat: person.status !== 'completed' ? Infinity : 0,
              repeatType: "loop"
            }}
          >
            <motion.div
              className="person-icon"
              animate={{ rotate: person.status === 'working' ? 360 : 0 }}
              transition={{ duration: 2, repeat: person.status === 'working' ? Infinity : 0, ease: "linear" }}
            >
              {getStatusIcon(person.status)}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="person-info"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <div className="person-name">{person.name}</div>
            <div className="person-task">{person.task}</div>
            {person.waitingFor && person.status === 'waiting' && (
              <motion.div 
                className="waiting-indicator"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Waiting for {person.waitingFor}'s APIs
              </motion.div>
            )}
          </motion.div>

          <AnimatePresence>
            {person.status === 'completed' && (
              <motion.div
                className="completion-burst"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      ))}

    </div>
  );
};

export default WaitingRoomVisualization;