import { onAuthStateChanged, auth } from './firebase';
import { useEffect, useState } from 'react';

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (user) {
    return <div>Welcome, {user.email}!</div>;
  } else {
    return <div>Please sign in.</div>;
  }
}

export default MyComponent; 