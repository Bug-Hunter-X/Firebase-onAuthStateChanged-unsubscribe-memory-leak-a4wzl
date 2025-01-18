import { onAuthStateChanged, getAuth } from 'firebase/auth';

const auth = getAuth();

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

// ... other code

// Clean up the listener when it's no longer needed
export function cleanup() {
unsubscribe();
console.log('unsubscribe called');
}
//In a component using useEffect hook:
//useEffect(() => {
//return cleanup;
//}, []);