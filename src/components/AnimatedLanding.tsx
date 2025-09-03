import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useInView as useInViewObserver } from 'react-intersection-observer';

const AnimatedLanding: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      setMousePosition({ x: moveX, y: moveY });
      x.set(moveX * 0.05);
      y.set(moveY * 0.05);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technology',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Stunning visuals that captivate and inspire',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: '🚀',
      title: 'Future Ready',
      description: 'Built with tomorrow\'s technology today',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security you can trust',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-[128px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-[128px]"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
        style={{ opacity, scale }}
      >
        <motion.div 
          className="text-center max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">Now Live</span>
            </motion.span>
          </motion.div>

          {/* Main Heading with 3D Effect */}
          <motion.div className="relative" style={{ x, y }}>
            <motion.h1 
              className="text-7xl md:text-9xl font-bold mb-6 relative"
              variants={itemVariants}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text blur-sm"
                style={{ y: y1 }}
              >
                QUANTUM
              </motion.span>
              <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                QUANTUM
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8 relative"
              variants={itemVariants}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text blur-sm"
                style={{ y: y2 }}
              >
                EXPERIENCE
              </motion.span>
              <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                EXPERIENCE
              </span>
            </motion.h2>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Step into the future of web experiences with animations that defy reality
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.button
              className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></span>
              <span className="relative flex items-center justify-center gap-2">
                Get Started
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              onClick={() => {
                window.history.pushState(null, '', '/search');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20 backdrop-blur-sm hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search People
            </motion.button>

            <motion.button
              onClick={() => {
                window.history.pushState(null, '', '/todo');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-cyan-400/20 backdrop-blur-sm hover:bg-cyan-400/10 transition-colors text-cyan-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Todo List
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="relative z-10 py-32 px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center mb-20"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Unleash The Power
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Interactive Section */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <InteractiveShowcase />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-32 px-4">
        <StatsSection />
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-32 px-4">
        <FinalCTA />
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ feature: any; index: number }> = ({ feature, index }) => {
  const [ref, inView] = useInViewObserver({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Icon */}
        <motion.div
          className="text-6xl mb-4"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          {feature.icon}
        </motion.div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          {feature.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {feature.description}
        </p>

        {/* Floating Particles */}
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        />
      </div>
    </motion.div>
  );
};

const InteractiveShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { title: 'Innovation', color: 'from-purple-500 to-pink-500' },
    { title: 'Performance', color: 'from-blue-500 to-cyan-500' },
    { title: 'Security', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Interactive Magic
        </span>
      </h2>

      <div className="flex justify-center gap-4 mb-12">
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === index ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.title}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="relative p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${tabs[activeTab].color} opacity-10 rounded-3xl`} />
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">{tabs[activeTab].title}</h3>
            <p className="text-gray-300 text-lg">
              Experience the next generation of web technology with our cutting-edge solutions. 
              Built for speed, designed for impact, and optimized for success.
            </p>
          </div>
          
          <div className="relative h-64">
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${tabs[activeTab].color} rounded-2xl`}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '50ms', label: 'Response Time' },
    { value: '10M+', label: 'Active Users' },
    { value: '5★', label: 'User Rating' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-center mb-16"
      >
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
          Proven Excellence
        </span>
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="text-center"
          >
            <motion.div
              className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {stat.value}
            </motion.div>
            <div className="text-gray-400 text-lg">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FinalCTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto"
    >
      <motion.h2
        className="text-5xl md:text-7xl font-bold mb-8"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
          Ready to Transform?
        </span>
      </motion.h2>
      
      <motion.p
        className="text-xl text-gray-300 mb-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Join thousands of innovators already experiencing the future
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          className="group relative px-12 py-6 rounded-full font-bold text-xl overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"></span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
          />
          <span className="relative">Start Your Journey</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLanding;