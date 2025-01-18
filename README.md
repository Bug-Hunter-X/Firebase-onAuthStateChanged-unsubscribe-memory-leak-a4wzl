# Firebase onAuthStateChanged Unsubscribe Memory Leak

This repository demonstrates a common error in Firebase Authentication: forgetting to unsubscribe from the `onAuthStateChanged` listener.  This can lead to memory leaks and performance issues in your application.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem
The `onAuthStateChanged` listener continuously runs until unsubscribed. Failing to call `unsubscribe()` when the component unmounts or is no longer needed results in the listener remaining active, consuming resources.

## Solution
Always call `unsubscribe()` when the listener is no longer required.  This is typically done in a cleanup function (like `useEffect` in React) or when the component is destroyed.  This prevents memory leaks and ensures efficient resource management.