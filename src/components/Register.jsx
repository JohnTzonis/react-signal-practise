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
    <div className="flex flex-col items-center">
      {loggedInUser ? (
        <div className="flex flex-col text-base">
          <div className="m-1 px-2 p-1 text-black text-shadow-dark font-semibold bg-gradient-to-r from-blue-500 to-green-500 border-2 border-black">
            <span>
                Welcome, 
            </span>
            <span>
                {loggedInUser.username || 'User'}!
            </span>
        </div>
            <div className="flex justify-end pr-1">
                <button
                    className="text-xs text-shadow-default mb-3 text-red-700 hover:text-red-400"
                    onClick={handleLogout}>Logout</button>
            </div>
        </div>
      ) : (
        <div className='flex flex-col'>
            <div className="flex">
                <input
                    className="m-1 text-teal-100 text-shadow-dark bg-black px-2 text-xs p-1 w-[160px]"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="m-1 text-teal-100 text-shadow-dark bg-black px-2 text-xs p-1 w-[160px]"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex justify-end pr-1">
                <button
                    className="text-xs text text-blue-500 text-shadow-default hover:text-teal-200"
                    onClick={handleRegister}
                >
                    Register
                </button>
                <span className="mx-2">
                    /
                </span>
                <button
                    className="text-xs text text-blue-500 text-shadow-default hover:text-teal-200"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Register;
