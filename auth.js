const unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  const uid = user.uid;
  // ...
} else {
  // User is signed out
  // ...
}
});

// unsubscribe from the listener when the component unmounts to prevent memory leaks
useEffect(() => {
  return () => unsubscribe();
}, []);