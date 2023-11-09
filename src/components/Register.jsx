import React, { useState } from 'react';
import AuthService from './Auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const result = await AuthService.register(username, password);
      console.log('Registration successful:', result);
      // Handle success, redirect, etc.
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error, show an alert, etc.
    }
  };

  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
