import React, { useState } from 'react';
import { auth } from './firebase.jsx';
import LoginPage from './LoginPage.jsx';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUser(auth.currentUser);
     
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div>
      {user ? (
        <ArticlesList />
      ) : (
        <LoginPage handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
