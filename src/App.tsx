import React, { useState, useEffect } from 'react';
import AnimatedLanding from './components/AnimatedLanding';
import Search from './components/Search';
import TodoList from './components/TodoList';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Simple client-side routing
  const renderPage = () => {
    switch (currentPath) {
      case '/search':
        return <Search />;
      case '/todo':
        return <TodoList />;
      case '/':
      default:
        return <AnimatedLanding />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

// Helper function to navigate programmatically
export const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export default App;
