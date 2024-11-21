'use client';

import { useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import SignupForm from '@/components/auth/SignupForm';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {isLogin ? (
        <LoginForm onToggle={toggleForm} />
      ) : (
        <SignupForm onToggle={toggleForm} />
      )}
    </div>
  );
}
