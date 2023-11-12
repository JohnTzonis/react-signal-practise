import { useState } from 'react';
import AuthService from './Auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleRegister = async () => {
    try {
      const result = await AuthService.register(username, password);
      console.log('Registration successful:', result);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        console.error('Username and password are required for login.');
        return;
      }
  
      // AuthService.login returns the user information directly
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
    <div className="flex items-center">
      {loggedInUser ? (
        <div className="flex text-xl">
          <div className="p-2 text-gray-200 text-shadow-default bg-gradient-to-r from-blue-500 to-green-500">
            <span>
                Welcome, 
            </span>
            <span>
                {loggedInUser.username || 'User'}!
            </span>
        </div>
          <button
            className="ml-4 text-red-700 hover:text-red-400"
            onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
            <div className="flex flex-col">
                <input
                    className="m-1 text-gray-700 py-1 px-2 font-semibold"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="m-1 text-gray-700 py-1 px-2 font-semibold"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <button
                    className="text-xl"
                    onClick={handleRegister}
                >
                    Register
                </button>
                <button
                    className="text-xl"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </>
      )}
    </div>
  );
};

export default Register;
