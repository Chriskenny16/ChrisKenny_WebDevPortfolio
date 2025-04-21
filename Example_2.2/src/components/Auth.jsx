import { useState, useEffect } from 'react';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from '../firebase';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
      }
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="auth-container">
      {user ? (
        <div className="user-info">
          <h2>Welcome!</h2>
          <p>You are signed in as: {user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <>
          <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleAuth}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          <p>
            {isSignUp ? 'Already have an account? ' : 'Need an account? '}
            <button 
              type="button" 
              className="switch-btn" 
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </>
      )}
    </div>
  );
} 