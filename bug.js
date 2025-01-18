const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/manage-users
    const uid = user.uid;
    console.log('user is signed in');
    // ...
  } else {
    // User is signed out
    // ...
    console.log('user is signed out');
  }
});

// unsubscribe is never called causing a memory leak
// ... other code