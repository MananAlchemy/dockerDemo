import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
  department: string;
  status: 'online' | 'offline' | 'away';
}

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Dummy data for users
  const dummyUsers: User[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@company.com',
      role: 'Frontend Developer',
      avatar: '👩‍💻',
      department: 'Engineering',
      status: 'online'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@company.com',
      role: 'Backend Developer',
      avatar: '👨‍💻',
      department: 'Engineering',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Carol Williams',
      email: 'carol.williams@company.com',
      role: 'UI/UX Designer',
      avatar: '🎨',
      department: 'Design',
      status: 'away'
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'david.brown@company.com',
      role: 'Product Manager',
      avatar: '📊',
      department: 'Product',
      status: 'online'
    },
    {
      id: 5,
      name: 'Emily Davis',
      email: 'emily.davis@company.com',
      role: 'DevOps Engineer',
      avatar: '⚙️',
      department: 'Engineering',
      status: 'online'
    },
    {
      id: 6,
      name: 'Frank Miller',
      email: 'frank.miller@company.com',
      role: 'Quality Assurance',
      avatar: '🔍',
      department: 'Engineering',
      status: 'away'
    },
    {
      id: 7,
      name: 'Grace Wilson',
      email: 'grace.wilson@company.com',
      role: 'Marketing Specialist',
      avatar: '📢',
      department: 'Marketing',
      status: 'offline'
    },
    {
      id: 8,
      name: 'Henry Taylor',
      email: 'henry.taylor@company.com',
      role: 'Data Scientist',
      avatar: '📈',
      department: 'Analytics',
      status: 'online'
    }
  ];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredUsers(dummyUsers);
    } else {
      setIsLoading(true);
      // Simulate API delay
      const timer = setTimeout(() => {
        const filtered = dummyUsers.filter(user =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.department.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredUsers(filtered);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[128px]"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px]"
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
              Find People
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Search through our team directory to find the right person for your needs
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-2xl blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">🔍</div>
                <input
                  type="text"
                  placeholder="Search by name, email, role, or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                />
                {isLoading && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="text-2xl"
                  >
                    ⚪
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400">
            Found <span className="text-cyan-400 font-semibold">{filteredUsers.length}</span> {filteredUsers.length === 1 ? 'person' : 'people'}
          </p>
        </motion.div>

        {/* Results Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredUsers.map((user) => (
              <motion.div
                key={user.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Avatar and Status */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative">
                        <div className="text-4xl">{user.avatar}</div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(user.status)} rounded-full border-2 border-black`} />
                      </div>
                      <div className="text-xs text-gray-400 capitalize">{user.status}</div>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                      {user.name}
                    </h3>

                    {/* Role */}
                    <p className="text-cyan-400 font-medium mb-2">{user.role}</p>

                    {/* Department */}
                    <p className="text-sm text-gray-400 mb-3">{user.department}</p>

                    {/* Email */}
                    <p className="text-sm text-gray-500 font-mono">{user.email}</p>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg text-sm font-medium hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-200"
                    >
                      Contact
                    </motion.button>
                  </div>

                  {/* Floating Particle */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: user.id * 0.2
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredUsers.length === 0 && !isLoading && searchQuery.trim() !== '' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No Results Found</h3>
            <p className="text-gray-400">
              Try searching with different keywords or check your spelling
            </p>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/50 rounded-full font-medium hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-200"
          >
            ← Back to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Search;