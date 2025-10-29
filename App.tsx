import React, { useState, useEffect } from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import AuthScreen from './screens/AuthScreen';
import MainApp from './screens/MainApp';
import { ThemeProvider } from './contexts/ThemeContext';

export type Screen = 'ONBOARDING' | 'AUTH' | 'APP';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('ONBOARDING');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const onboardingComplete = localStorage.getItem('onboardingComplete');
    if (onboardingComplete) {
      setScreen(isAuthenticated ? 'APP' : 'AUTH');
    }
  }, [isAuthenticated]);

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboardingComplete', 'true');
    setScreen('AUTH');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setScreen('APP');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setScreen('AUTH');
  };


  const renderScreen = () => {
    switch (screen) {
      case 'ONBOARDING':
        return <OnboardingScreen onComplete={handleOnboardingComplete} />;
      case 'AUTH':
        return <AuthScreen onLogin={handleLogin} />;
      case 'APP':
        return <MainApp onLogout={handleLogout} />;
      default:
        return <OnboardingScreen onComplete={handleOnboardingComplete} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark min-h-screen font-display">
        {renderScreen()}
      </div>
    </ThemeProvider>
  );
};

export default App;
