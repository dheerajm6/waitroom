import React, { useState } from 'react';
import { Layout, Button, Typography, Row, Col, Card, Space, Drawer } from 'antd';
import { motion } from 'framer-motion';
import { 
  ClockCircleOutlined, 
  TeamOutlined, 
  EyeOutlined,
  SyncOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  BulbOutlined,
  ApiOutlined,
  CloudOutlined,
  StarOutlined,
  HeartOutlined,
  CrownOutlined,
  FireOutlined,
  PlayCircleOutlined,
  MenuOutlined,
  BellOutlined,
  BarChartOutlined,
  ThunderboltOutlined,
  CodeOutlined,
  UserOutlined,
  CreditCardOutlined
} from '@ant-design/icons';
import ElegantWaitingRoom from './components/ElegantWaitingRoom';
import TypewriterText from './components/TypewriterText';
import InteractiveHowItWorks from './components/InteractiveHowItWorks';
import WaitroomLoader from './components/WaitroomLoader';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <WaitroomLoader onComplete={handleLoaderComplete} duration={3500} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Layout className="layout">
      <Header className="header">
        <div className="header-content">
          <div className="logo">
            <ClockCircleOutlined className="logo-icon" />
            <span>Waitroom</span>
          </div>
          <div className="desktop-nav">
            <Space size="large">
              <Button type="link" className="nav-link" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>Features</Button>
              <Button type="link" className="nav-link" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>How it Works</Button>
              <Button type="link" className="nav-link" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>Pricing</Button>
              <Button type="link" className="nav-link" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</Button>
              <Button type="primary" className="cta-button">
                Get Started
              </Button>
            </Space>
          </div>
          <Button 
            className="mobile-menu-button"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>
      </Header>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        className="mobile-menu"
      >
        <div className="mobile-nav-links">
          <Button type="link" className="mobile-nav-link" onClick={() => { document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}>
            Features
          </Button>
          <Button type="link" className="mobile-nav-link" onClick={() => { document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}>
            How it Works
          </Button>
          <Button type="link" className="mobile-nav-link" onClick={() => { document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}>
            Pricing
          </Button>
          <Button type="link" className="mobile-nav-link" onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}>
            Contact
          </Button>
          <Button type="primary" className="mobile-cta-button" onClick={() => setMobileMenuOpen(false)}>
            Get Started
          </Button>
        </div>
      </Drawer>

      <Content>
        {/* Hero Section */}
        <section className="hero-new">
          <div className="hero-content">
            <Row align="middle" style={{ minHeight: '100vh' }}>
              <Col xs={24} md={12} className="hero-text-section">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div 
                    className="hero-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="badge-icon">⚡</span>
                    <span>AI-Powered Dependency Tracking</span>
                  </motion.div>

                  <Title level={1} className="hero-title-new">
                    See Who's{' '}
                    <span className="hero-highlight">
                      <TypewriterText 
                        texts={['Waiting', 'Blocked', 'Stuck', 'Delayed']}
                        speed={120}
                        delay={1500}
                      />
                    </span>
                    <br />
                    on Whom
                  </Title>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Paragraph className="hero-subtitle-new">
                      Turn your team's invisible bottlenecks into{' '}
                      <span className="subtitle-highlight">crystal-clear insights</span>.
                      <br />
                      Watch productivity soar as blockers vanish in real-time.
                    </Paragraph>
                  </motion.div>

                  <motion.div
                    className="hero-buttons-new"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <Button 
                      type="primary" 
                      size="large" 
                      className="primary-button-new" 
                      icon={<RocketOutlined />}
                    >
                      Start Free Trial
                    </Button>
                    <Button 
                      size="large" 
                      className="secondary-button-new"
                      icon={<PlayCircleOutlined />}
                    >
                      Watch Demo
                    </Button>
                  </motion.div>

                  <motion.div
                    className="hero-stats-new"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <div className="stat-item-new">
                      <motion.span 
                        className="stat-number-new"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        10K+
                      </motion.span>
                      <Text className="stat-label-new">Teams Unblocked</Text>
                    </div>
                    <div className="stat-divider">•</div>
                    <div className="stat-item-new">
                      <motion.span 
                        className="stat-number-new"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                      >
                        2M+
                      </motion.span>
                      <Text className="stat-label-new">Dependencies Tracked</Text>
                    </div>
                    <div className="stat-divider">•</div>
                    <div className="stat-item-new">
                      <motion.span 
                        className="stat-number-new"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                      >
                        71%
                      </motion.span>
                      <Text className="stat-label-new">Faster Delivery</Text>
                    </div>
                  </motion.div>
                </motion.div>
              </Col>

              <Col xs={24} md={12} className="hero-visual-section">
                <motion.div
                  className="hero-visualization"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <ElegantWaitingRoom />
                </motion.div>
              </Col>
            </Row>
          </div>

          <motion.div 
            className="hero-scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="scroll-line"></div>
            <div className="scroll-text">Scroll to explore</div>
          </motion.div>
        </section>

        {/* Features Section - Redesigned */}
        <section id="features" className="features-section-new">
          <div className="features-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="features-header-new"
            >
              <motion.div 
                className="features-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="badge-icon">💡</span>
                <span>Game-Changing Features</span>
              </motion.div>

              <Title level={2} className="features-title-new">
                Why Teams{' '}
                <span className="features-highlight">
                  <motion.span
                    animate={{ 
                      textShadow: [
                        "0 0 0px #6366F1",
                        "0 0 10px #6366F1",
                        "0 0 0px #6366F1"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Love
                  </motion.span>
                </span>{' '}
                Waitroom
              </Title>
              <Paragraph className="features-subtitle-new">
                Transform your workflow with{' '}
                <span className="subtitle-highlight">powerful features</span>{' '}
                designed for modern teams
              </Paragraph>
            </motion.div>

            <div className="features-grid-new">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="feature-card-new feature-primary"
              >
                <motion.div 
                  className="feature-glow"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="feature-content-new">
                  <motion.div 
                    className="feature-icon-new icon-visibility"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <EyeOutlined />
                  </motion.div>
                  <div className="feature-text-new">
                    <Title level={4} className="feature-title-new">Complete Visibility</Title>
                    <Text className="feature-description-new">
                      Get a bird's eye view of all task dependencies. See exactly who's waiting for what and why.
                    </Text>
                    <div className="feature-metrics">
                      <motion.div 
                        className="metric-item"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        <span className="metric-number">100%</span>
                        <span className="metric-label">Visibility</span>
                      </motion.div>
                      <motion.div 
                        className="metric-item"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      >
                        <span className="metric-number">0</span>
                        <span className="metric-label">Blind Spots</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="feature-card-new feature-secondary"
              >
                <motion.div 
                  className="feature-glow"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <div className="feature-content-new">
                  <motion.div 
                    className="feature-icon-new icon-realtime"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <SyncOutlined />
                  </motion.div>
                  <div className="feature-text-new">
                    <Title level={4} className="feature-title-new">Real-time Updates</Title>
                    <Text className="feature-description-new">
                      Track progress as it happens. Get notified when blockers are resolved and work can proceed.
                    </Text>
                    <div className="feature-pulse-line">
                      <motion.div 
                        className="pulse-dot"
                        animate={{ 
                          x: [0, 200, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="feature-card-new feature-tertiary"
              >
                <motion.div 
                  className="feature-glow"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                />
                <div className="feature-content-new">
                  <motion.div 
                    className="feature-icon-new icon-collaboration"
                    whileHover={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <TeamOutlined />
                  </motion.div>
                  <div className="feature-text-new">
                    <Title level={4} className="feature-title-new">Better Collaboration</Title>
                    <Text className="feature-description-new">
                      Foster accountability and transparency. Everyone knows their impact on the team's progress.
                    </Text>
                    <div className="collaboration-avatars">
                      {['👨‍💻', '👩‍💻', '👨‍🔬', '👩‍💼'].map((emoji, index) => (
                        <motion.div
                          key={index}
                          className="collab-avatar"
                          animate={{ 
                            y: [0, -5, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            delay: index * 0.2 
                          }}
                        >
                          {emoji}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="features-bonus-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bonus-features-grid">
                <motion.div 
                  className="bonus-feature"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <BulbOutlined style={{ fontSize: '24px', color: '#f59e0b' }} />
                  </motion.div>
                  <div>
                    <Text strong>Smart AI Insights</Text>
                  </div>
                  <div>
                    <Text className="bonus-description">Predictive analytics</Text>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bonus-feature"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <ApiOutlined style={{ fontSize: '24px', color: '#2563eb' }} />
                  </motion.div>
                  <div>
                    <Text strong>Easy Integration</Text>
                  </div>
                  <div>
                    <Text className="bonus-description">50+ tool connectors</Text>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bonus-feature"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  >
                    <CloudOutlined style={{ fontSize: '24px', color: '#16a34a' }} />
                  </motion.div>
                  <div>
                    <Text strong>Cloud Powered</Text>
                  </div>
                  <div>
                    <Text className="bonus-description">99.9% uptime</Text>
                  </div>
                </motion.div>

                <motion.div 
                  className="bonus-feature"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
                  >
                    <RocketOutlined style={{ fontSize: '24px', color: '#8b5cf6' }} />
                  </motion.div>
                  <div>
                    <Text strong>Lightning Fast</Text>
                  </div>
                  <div>
                    <Text className="bonus-description">Sub-second response</Text>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="section">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="section-header">
                <Title level={2} className="section-title">
                  How Waitroom Works
                </Title>
                <Paragraph className="section-subtitle">
                  Get started in minutes, see results immediately
                </Paragraph>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <InteractiveHowItWorks />
            </motion.div>
          </div>
        </section>

        {/* Pricing Section - Redesigned */}
        <section id="pricing" className="pricing-section-new">
          <div className="pricing-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="pricing-header-new"
            >
              <motion.div 
                className="pricing-badge-new"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="badge-icon">💰</span>
                <span>Simple & Transparent</span>
              </motion.div>

              <Title level={2} className="pricing-title-new">
                Choose Your{' '}
                <span className="pricing-highlight">
                  <motion.span
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899, #6366F1)',
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Power Level
                  </motion.span>
                </span>
              </Title>
              <Paragraph className="pricing-subtitle-new">
                Start free, scale fast, and{' '}
                <span className="subtitle-highlight">unblock your team today</span>
              </Paragraph>
            </motion.div>

            <div className="pricing-grid-new">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="pricing-card-new starter-card"
              >
                <div className="pricing-glow starter-glow"></div>
                <div className="pricing-content-new">
                  <motion.div 
                    className="pricing-icon-new"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <HeartOutlined style={{ fontSize: '40px', color: '#10B981' }} />
                  </motion.div>
                  <Title level={3} className="pricing-name-new">Starter</Title>
                  <div className="pricing-price-new">
                    <span className="price-currency-new">$</span>
                    <motion.span 
                      className="price-amount-new"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      29
                    </motion.span>
                    <span className="price-period-new">/month</span>
                  </div>
                  <div className="pricing-features-new">
                    {[
                      { text: "Up to 10 users", icon: <TeamOutlined /> },
                      { text: "Basic integrations", icon: <ApiOutlined /> },
                      { text: "Email notifications", icon: <BellOutlined /> },
                      { text: "Standard support", icon: <CheckCircleOutlined /> }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="pricing-feature-new"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="feature-icon-wrapper">
                          {feature.icon}
                        </div>
                        <span>{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="pricing-button-new starter-button" block>
                      Get Started Free
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="pricing-card-new featured-card"
              >
                <motion.div 
                  className="pricing-badge-featured"
                  animate={{ 
                    y: [0, -5, 0],
                    boxShadow: [
                      '0 4px 15px rgba(99, 102, 241, 0.3)',
                      '0 8px 25px rgba(99, 102, 241, 0.5)',
                      '0 4px 15px rgba(99, 102, 241, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CrownOutlined style={{ marginRight: '8px' }} />
                  Most Popular
                </motion.div>
                <div className="pricing-glow featured-glow"></div>
                <div className="pricing-content-new">
                  <motion.div 
                    className="pricing-icon-new"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <CrownOutlined style={{ fontSize: '40px', color: '#6366F1' }} />
                  </motion.div>
                  <Title level={3} className="pricing-name-new">Professional</Title>
                  <div className="pricing-price-new">
                    <span className="price-currency-new">$</span>
                    <motion.span 
                      className="price-amount-new"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        color: ['#1a1a1a', '#6366F1', '#1a1a1a']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      99
                    </motion.span>
                    <span className="price-period-new">/month</span>
                  </div>
                  <div className="pricing-features-new">
                    {[
                      { text: "Unlimited users", icon: <TeamOutlined /> },
                      { text: "All integrations", icon: <ApiOutlined /> },
                      { text: "Slack & email alerts", icon: <BellOutlined /> },
                      { text: "Priority support", icon: <RocketOutlined /> },
                      { text: "Advanced analytics", icon: <BarChartOutlined /> }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="pricing-feature-new"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="feature-icon-wrapper">
                          {feature.icon}
                        </div>
                        <span>{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="pricing-button-new featured-button" block>
                      Start Free Trial
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="pricing-card-new enterprise-card"
              >
                <div className="pricing-glow enterprise-glow"></div>
                <div className="pricing-content-new">
                  <motion.div 
                    className="pricing-icon-new"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <FireOutlined style={{ fontSize: '40px', color: '#EC4899' }} />
                  </motion.div>
                  <Title level={3} className="pricing-name-new">Enterprise</Title>
                  <div className="pricing-price-new">
                    <motion.span 
                      className="price-amount-new custom-price"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{
                        background: 'linear-gradient(90deg, #EC4899, #8B5CF6, #6366F1, #EC4899)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Custom
                    </motion.span>
                  </div>
                  <div className="pricing-features-new">
                    {[
                      { text: "Unlimited everything", icon: <ThunderboltOutlined /> },
                      { text: "Custom integrations", icon: <CodeOutlined /> },
                      { text: "SLA guarantee", icon: <CheckCircleOutlined /> },
                      { text: "Dedicated support", icon: <UserOutlined /> },
                      { text: "On-premise option", icon: <CloudOutlined /> }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="pricing-feature-new"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="feature-icon-wrapper">
                          {feature.icon}
                        </div>
                        <span>{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="pricing-button-new enterprise-button" block>
                      Contact Sales
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Redesigned */}
        <section className="testimonials-section-new">
          <div className="testimonials-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="testimonials-header-new"
            >
              <motion.div 
                className="testimonials-badge-new"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="badge-icon">⭐</span>
                <span>Real User Reviews</span>
              </motion.div>

              <Title level={2} className="testimonials-title-new">
                Loved by{' '}
                <span className="testimonials-highlight">
                  <motion.span
                    animate={{ 
                      scale: [1, 1.05, 1],
                      textShadow: [
                        "0 0 0px #F59E0B",
                        "0 0 20px #F59E0B",
                        "0 0 0px #F59E0B"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    10,000+
                  </motion.span>
                </span>{' '}
                Teams
              </Title>
              <Paragraph className="testimonials-subtitle-new">
                See what our customers say about{' '}
                <span className="subtitle-highlight">their transformation</span>
              </Paragraph>
            </motion.div>

            <div className="testimonials-grid-new">
              {[
                {
                  name: "Sarah Chen",
                  role: "Engineering Manager",
                  company: "TechCorp",
                  text: "Waitroom transformed how we manage dependencies. We've reduced blocked time by 70%!",
                  avatar: "SC",
                  metric: "70%",
                  metricLabel: "Less Blocked Time",
                  bgColor: "#10B981"
                },
                {
                  name: "Mike Johnson",
                  role: "Product Owner",
                  company: "StartupXYZ",
                  text: "Finally, a tool that shows the real bottlenecks in our workflow. Game changer!",
                  avatar: "MJ",
                  metric: "3x",
                  metricLabel: "Faster Delivery",
                  bgColor: "#6366F1"
                },
                {
                  name: "Lisa Park",
                  role: "Scrum Master",
                  company: "AgileCo",
                  text: "The visibility Waitroom provides is incredible. Our sprints run so much smoother now.",
                  avatar: "LP",
                  metric: "90%",
                  metricLabel: "Sprint Success",
                  bgColor: "#EC4899"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="testimonial-card-new"
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    scale: 1.02
                  }}
                >
                  <div className="testimonial-glow" style={{ background: `radial-gradient(circle, ${testimonial.bgColor}20 0%, transparent 70%)` }}></div>
                  
                  <div className="testimonial-content-new">
                    <div className="testimonial-quote-new">
                      <motion.div
                        className="quote-icon"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        💬
                      </motion.div>
                      <div className="testimonial-rating-new">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 360]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              delay: i * 0.1
                            }}
                          >
                            <StarOutlined className="rating-star-new" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <Paragraph className="testimonial-text-new">
                      "{testimonial.text}"
                    </Paragraph>
                    
                    <div className="testimonial-metric-new">
                      <motion.div 
                        className="metric-number-new"
                        style={{ color: testimonial.bgColor }}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          textShadow: [
                            `0 0 0px ${testimonial.bgColor}`,
                            `0 0 10px ${testimonial.bgColor}`,
                            `0 0 0px ${testimonial.bgColor}`
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {testimonial.metric}
                      </motion.div>
                      <div className="metric-label-new">{testimonial.metricLabel}</div>
                    </div>
                  </div>
                  
                  <div className="testimonial-author-new">
                    <motion.div 
                      className="author-avatar-new"
                      style={{ backgroundColor: testimonial.bgColor }}
                      animate={{ 
                        boxShadow: [
                          `0 0 0 0px ${testimonial.bgColor}40`,
                          `0 0 0 10px ${testimonial.bgColor}20`,
                          `0 0 0 0px ${testimonial.bgColor}40`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div className="author-info-new">
                      <Text strong className="author-name-new">{testimonial.name}</Text>
                      <Text className="author-role-new">{testimonial.role}</Text>
                      <Text className="author-company-new">{testimonial.company}</Text>
                    </div>
                    <motion.div 
                      className="company-badge-new"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      <CheckCircleOutlined style={{ color: testimonial.bgColor }} />
                      <span>Verified</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section-new">
          <div className="cta-container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cta-box-container"
            >
              <div className="cta-content-new">
                <motion.div 
                  className="cta-badge-new"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <RocketOutlined style={{ marginRight: '8px' }} />
                  <span>Stop waiting, Start delivering</span>
                </motion.div>

                <div className="cta-main-content">
                  <Title level={2} className="cta-title-new">
                    Ready for{' '}
                    <span className="cta-highlight-waiting">
                      <motion.span
                        animate={{ 
                          scale: [1, 1.05, 1],
                          textShadow: [
                            "0 0 0px #F59E0B",
                            "0 0 20px #F59E0B",
                            "0 0 0px #F59E0B"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Zero Waiting
                      </motion.span>
                    </span>
                    ,{' '}
                    <span className="cta-highlight-delivering">
                      <motion.span
                        animate={{ 
                          scale: [1, 1.05, 1],
                          textShadow: [
                            "0 0 0px #10B981",
                            "0 0 20px #10B981",
                            "0 0 0px #10B981"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        100% Delivering
                      </motion.span>
                    </span>
                    ?
                  </Title>

                  <Paragraph className="cta-subtitle-new">
                    Join <span className="cta-number-highlight">2,847</span> teams who've eliminated bottlenecks and boosted productivity by <span className="cta-number-highlight">71%</span> with Waitroom
                  </Paragraph>
                  
                </div>

                <div className="cta-features-grid-new">
                  {[
                    { 
                      icon: <ClockCircleOutlined />, 
                      title: "14-day free trial", 
                      subtitle: "Get started in minutes",
                      color: "#6366F1"
                    },
                    { 
                      icon: <CreditCardOutlined />, 
                      title: "No credit card required", 
                      subtitle: "Start risk-free today",
                      color: "#10B981"
                    },
                    { 
                      icon: <CheckCircleOutlined />, 
                      title: "Cancel anytime", 
                      subtitle: "No long-term commitments",
                      color: "#EC4899"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="cta-feature-card-new"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <motion.div
                        className="feature-icon-large"
                        style={{ color: feature.color }}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <div className="feature-content">
                        <h4 className="feature-title">{feature.title}</h4>
                        <p className="feature-subtitle">{feature.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="cta-actions-new">
                  <motion.div
                    className="cta-button-container"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="cta-button-new primary-cta" block>
                      <motion.div
                        className="button-content"
                        animate={{ 
                          x: [0, 3, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <RocketOutlined style={{ marginRight: '8px' }} />
                        Start Free Trial
                      </motion.div>
                    </Button>
                  </motion.div>

                  <motion.div
                    className="cta-button-container"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="cta-button-new secondary-cta" block>
                      <EyeOutlined style={{ marginRight: '8px' }} />
                      Explore All Features
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-content">
                    <motion.div 
                      className="contact-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <BellOutlined style={{ marginRight: '8px' }} />
                      <span>Get in Touch</span>
                    </motion.div>

                    <Title level={2} className="contact-title">
                      Ready to Transform Your{' '}
                      <span className="contact-highlight">
                        Team's Workflow
                      </span>
                      ?
                    </Title>

                    <Paragraph className="contact-description">
                      Have questions about Waitroom? Want to see how we can help your team eliminate blockers and boost productivity? Our team is here to help you get started.
                    </Paragraph>

                    <div className="contact-features">
                      <motion.div 
                        className="contact-feature"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircleOutlined style={{ color: '#10B981' }} />
                        <span>Free consultation call</span>
                      </motion.div>
                      <motion.div 
                        className="contact-feature"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircleOutlined style={{ color: '#10B981' }} />
                        <span>Custom demo for your team</span>
                      </motion.div>
                      <motion.div 
                        className="contact-feature"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircleOutlined style={{ color: '#10B981' }} />
                        <span>Implementation support</span>
                      </motion.div>
                    </div>

                    <div className="contact-stats">
                      <div className="contact-stat">
                        <span className="stat-number">2,847</span>
                        <span className="stat-label">Teams using Waitroom</span>
                      </div>
                      <div className="contact-stat">
                        <span className="stat-number">71%</span>
                        <span className="stat-label">Faster delivery</span>
                      </div>
                      <div className="contact-stat">
                        <span className="stat-number">&lt; 2min</span>
                        <span className="stat-label">Response time</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>

              <Col xs={24} lg={12}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="contact-form-container"
                >
                  <Card className="contact-form-card">
                    <div className="contact-form-header">
                      <Title level={3} className="form-title">
                        Let's Talk About Your Team
                      </Title>
                      <Text className="form-subtitle">
                        Tell us about your current challenges and we'll show you how Waitroom can help
                      </Text>
                    </div>

                    <div className="contact-form">
                      <div className="form-group">
                        <label className="form-label">Your Name</label>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Work Email</label>
                        <input 
                          type="email" 
                          className="form-input" 
                          placeholder="john@company.com"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Company</label>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Team Size</label>
                        <select className="form-select">
                          <option>1-10 people</option>
                          <option>11-50 people</option>
                          <option>51-200 people</option>
                          <option>200+ people</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Tell us about your challenges</label>
                        <textarea 
                          className="form-textarea" 
                          rows={4}
                          placeholder="What blockers is your team facing? How are you currently managing dependencies?"
                        />
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="contact-submit-btn" block>
                          <RocketOutlined style={{ marginRight: '8px' }} />
                          Get Your Free Demo
                        </Button>
                      </motion.div>

                      <div className="form-footer">
                        <Text className="form-footer-text">
                          We'll get back to you within 24 hours. No spam, ever.
                        </Text>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </div>
        </section>
      </Content>

      <Footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-logo-section">
              <div className="footer-logo">
                <ClockCircleOutlined className="footer-logo-icon" />
                <span>Waitroom</span>
              </div>
              <Text className="footer-description">
                Eliminate bottlenecks and boost your team's productivity with intelligent dependency tracking.
              </Text>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-section">
              <Title level={5}>Product</Title>
              <div className="footer-links">
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#integrations">Integrations</a>
                <a href="#changelog">Changelog</a>
              </div>
            </div>
            <div className="footer-section">
              <Title level={5}>Company</Title>
              <div className="footer-links">
                <a href="#about">About</a>
                <a href="#blog">Blog</a>
                <a href="#careers">Careers</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div className="footer-section">
              <Title level={5}>Support</Title>
              <div className="footer-links">
                <a href="#help">Help Center</a>
                <a href="#docs">Documentation</a>
                <a href="#status">Status</a>
                <a href="#community">Community</a>
              </div>
            </div>
            <div className="footer-section">
              <Title level={5}>Legal</Title>
              <div className="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#security">Security</a>
                <a href="#cookies">Cookies</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <Text>© 2025 Waitroom. All rights reserved.</Text>
          </div>
        </div>
      </Footer>
    </Layout>
    </motion.div>
  );
}

export default App;