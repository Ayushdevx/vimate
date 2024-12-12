import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import { SignUpForm } from './components/auth/SignUpForm';
import { AuthWelcome } from './components/auth/AuthWelcome';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './pages/Home';
import { DiscoverPage } from './pages/Discover';
import { MatchesPage } from './pages/Matches';
import { ChatPage } from './pages/Chat';
import { EventsPage } from './pages/Events';
import { EditProfile } from './components/profile/EditProfile';
import { useAuthStore } from './store/useAuthStore';
import { AnimatePresence } from 'framer-motion';

function App() {
  const { isAuthenticated, isExploringMode } = useAuthStore();
  const canAccess = isAuthenticated || isExploringMode;

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/welcome"
              element={
                canAccess ? (
                  <Navigate to="/discover" replace />
                ) : (
                  <AuthWelcome />
                )
              }
            />
            <Route
              path="/login"
              element={
                canAccess ? (
                  <Navigate to="/discover" replace />
                ) : (
                  <div className="flex items-center justify-center p-4">
                    <LoginForm />
                  </div>
                )
              }
            />
            <Route
              path="/signup"
              element={
                canAccess ? (
                  <Navigate to="/discover" replace />
                ) : (
                  <div className="flex items-center justify-center p-4">
                    <SignUpForm />
                  </div>
                )
              }
            />
            <Route
              path="/discover"
              element={
                canAccess ? <DiscoverPage /> : <Navigate to="/welcome" replace />
              }
            />
            <Route
              path="/matches"
              element={
                canAccess ? <MatchesPage /> : <Navigate to="/welcome" replace />
              }
            />
            <Route
              path="/chat/:roomId"
              element={
                canAccess ? <ChatPage /> : <Navigate to="/welcome" replace />
              }
            />
            <Route
              path="/events"
              element={
                canAccess ? <EventsPage /> : <Navigate to="/welcome" replace />
              }
            />
            <Route
              path="/profile/edit"
              element={
                isAuthenticated ? <EditProfile /> : <Navigate to="/welcome" replace />
              }
            />
          </Routes>
        </AnimatePresence>
        {canAccess && <Navbar />}
      </div>
    </BrowserRouter>
  );
}

export default App;