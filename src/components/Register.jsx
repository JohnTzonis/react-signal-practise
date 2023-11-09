import React, { useState } from 'react';
import AuthService from './Auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

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

  const handleLogin = async () => {
    try {
      // Ensure that 'username' and 'password' are defined
      if (!username || !password) {
        console.error('Username and password are required for login.');
        return;
      }
  
      // AuthService.login now returns the user information directly
      const { username: loggedInUsername } = await AuthService.login(username, password);
      console.log('Login successful:', loggedInUsername);
      setLoggedInUser({ username: loggedInUsername });
      // Handle success, redirect, etc.
    } catch (error) {
      console.error('Error logging in user:', error);
      // Handle error, show an alert, etc.
    }
  };
  

  const handleLogout = () => {
    // Implement logout logic (clear user information, redirect, etc.)
    setLoggedInUser(null);
  };

  return (
    <div>
      {loggedInUser ? (
        <>
          <p>Welcome, {loggedInUser.username || 'User'}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Register;
