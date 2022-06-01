import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';
const auth = getAuth(app)

function App() {
  const [user, setuser] = useState({})

  const provider = new GoogleAuthProvider();
  const handleSign = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setuser(user)
        console.log(user)
      })
      .catch(error => {
        console.error('error', error)
      })

  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setuser({})
      })
      .catch(error => {
        setuser({})
      })
  }
  return (
    <div className="App">
      {
        user.displayName ? <button onClick={logOut}>Sign Out</button> :

          <button onClick={handleSign}>Google Sing In</button>
      }
      <h2>Name: {user.displayName}</h2>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
