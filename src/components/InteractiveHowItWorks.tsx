import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Typography } from 'antd';
import { 
  ApiOutlined, 
  SyncOutlined, 
  RocketOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  UserOutlined,
  TeamOutlined,
  BellOutlined,
  BarChartOutlined,
  ThunderboltOutlined,
  EyeOutlined,
  SlackOutlined,
  GithubOutlined,
  DeploymentUnitOutlined,
  BugOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
  visual: React.ReactNode;
}

const InteractiveHowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps: Step[] = [
    {
      id: 1,
      title: "Connect Your Tools",
      description: "Integrate with your existing workflow in seconds",
      icon: <ApiOutlined />,
      color: '#6366F1',
      details: [
        "One-click integrations with 50+ tools",
        "Import existing tasks and dependencies",
        "Automatic team member sync",
        "No workflow disruption"
      ],
      visual: (
        <div className="integration-visual">
          <div className="tool-icons-circle">
            <motion.div 
              className="tool-icon jira"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            >
              <DeploymentUnitOutlined style={{ fontSize: '28px', color: '#0052CC' }} />
            </motion.div>
            <motion.div 
              className="tool-icon slack"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <SlackOutlined style={{ fontSize: '28px', color: '#4A154B' }} />
            </motion.div>
            <motion.div 
              className="tool-icon github"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <GithubOutlined style={{ fontSize: '28px', color: '#24292E' }} />
            </motion.div>
            <motion.div 
              className="tool-icon asana"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <BugOutlined style={{ fontSize: '28px', color: '#F06A6A' }} />
            </motion.div>
          </div>
          
          <motion.div 
            className="connection-lines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Connection lines to center */}
            <motion.div 
              className="connection-line line-1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div 
              className="connection-line line-2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
            />
            <motion.div 
              className="connection-line line-3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
            />
            <motion.div 
              className="connection-line line-4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.9 }}
            />
            
            <motion.div 
              className="center-hub"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <ClockCircleOutlined style={{ fontSize: '32px', color: '#6366F1' }} />
            </motion.div>
          </motion.div>
        </div>
      )
    },
    {
      id: 2,
      title: "Automatic Detection",
      description: "AI discovers dependencies and tracks blockers instantly",
      icon: <SyncOutlined />,
      color: '#10B981',
      details: [
        "Smart dependency mapping",
        "Real-time progress tracking",
        "Automated blocker detection",
        "Intelligent priority scoring"
      ],
      visual: (
        <div className="detection-visual">
          <div className="dependency-map">
            <motion.div 
              className="task-node frontend"
              animate={{ 
                boxShadow: [
                  '0 0 0 0px rgba(99, 102, 241, 0.4)',
                  '0 0 0 10px rgba(99, 102, 241, 0.1)',
                  '0 0 0 0px rgba(99, 102, 241, 0.4)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <UserOutlined />
              <Text>Frontend</Text>
            </motion.div>
            <motion.div 
              className="task-node backend working"
              animate={{ 
                boxShadow: [
                  '0 0 0 0px rgba(16, 185, 129, 0.4)',
                  '0 0 0 10px rgba(16, 185, 129, 0.1)',
                  '0 0 0 0px rgba(16, 185, 129, 0.4)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <SyncOutlined spin />
              <Text>Backend</Text>
            </motion.div>
            <motion.div 
              className="task-node qa"
              animate={{ 
                boxShadow: [
                  '0 0 0 0px rgba(245, 158, 11, 0.4)',
                  '0 0 0 10px rgba(245, 158, 11, 0.1)',
                  '0 0 0 0px rgba(245, 158, 11, 0.4)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <TeamOutlined />
              <Text>QA</Text>
            </motion.div>
          </div>
          <motion.div 
            className="ai-scanner"
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <ThunderboltOutlined style={{ color: '#10B981' }} />
          </motion.div>
        </div>
      )
    },
    {
      id: 3,
      title: "Instant Insights",
      description: "Get actionable alerts and unblock your team",
      icon: <RocketOutlined />,
      color: '#F59E0B',
      details: [
        "Real-time dashboard updates",
        "Smart notification system",
        "Bottleneck predictions",
        "Performance analytics"
      ],
      visual: (
        <div className="insights-visual">
          <div className="dashboard-mock">
            <div className="metric-card">
              <BarChartOutlined style={{ color: '#10B981' }} />
              <Text>2 Blockers Resolved</Text>
              <motion.div 
                className="progress-bar"
                initial={{ width: '0%' }}
                animate={{ width: '78%' }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </div>
            <div className="notification-badge">
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  backgroundColor: ['#EF4444', '#F59E0B', '#EF4444']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BellOutlined style={{ color: 'white' }} />
              </motion.div>
              <Text>Sarah is unblocked!</Text>
            </div>
            <div className="insight-popup">
              <EyeOutlined style={{ color: '#6366F1' }} />
              <Text>Team velocity: +40%</Text>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentStep = steps.find(step => step.id === activeStep) || steps[0];

  return (
    <div className="interactive-how-it-works">
      <div className="steps-navigation">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            className={`step-nav-item ${activeStep === step.id ? 'active' : ''}`}
            onClick={() => setActiveStep(step.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div 
              className="step-nav-icon"
              style={{ backgroundColor: step.color }}
            >
              {step.icon}
            </div>
            <div className="step-nav-content">
              <Text className="step-nav-title">{step.title}</Text>
              <Text className="step-nav-desc">{step.description}</Text>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="step-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="step-details"
          >
            <div className="step-info">
              <div className="step-header">
                <div 
                  className="step-icon-large"
                  style={{ backgroundColor: currentStep.color }}
                >
                  {currentStep.icon}
                </div>
                <div>
                  <Title level={3} className="step-title">
                    {currentStep.title}
                  </Title>
                  <Text className="step-description">
                    {currentStep.description}
                  </Text>
                </div>
              </div>

              <div className="step-features">
                {currentStep.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="feature-item"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CheckCircleOutlined style={{ color: currentStep.color }} />
                    <Text>{detail}</Text>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="step-visual">
              <Card className="visual-container">
                {currentStep.visual}
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default InteractiveHowItWorks;