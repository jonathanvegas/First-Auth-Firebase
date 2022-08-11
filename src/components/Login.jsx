import { useState } from 'react'; 
import { initializeApp} from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2__DeVF12sNYILt4lYU3pzqX5B9kbtio",
  authDomain: "first-login-javv.firebaseapp.com",
  projectId: "first-login-javv",
  storageBucket: "first-login-javv.appspot.com",
  messagingSenderId: "503294478479",
  appId: "1:503294478479:web:8c3b98117809a95d7448fa"
};

function Login({setIsLoggedIn}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignUp = async () =>{
    //connect to firebase project
    const app = initializeApp(firebaseConfig);
    // connect to auth
    const auth = getAuth(app);
    //send email and password to firebase auth
    const user = await createUserWithEmailAndPassword(auth, email, password)
      .catch(err => alert(err.message))
    //if all ok...
    if(user) {
      console.log(user);
      setIsLoggedIn(true);
    }
  }
  return(
    <form onSubmit={(e) => e.preventDefault()}>
      <label for="email">
        Email:
        <input 
          value={email} onChange={e => setEmail(e.target.value)}
          name="email" type="email" placeholder="you@there.com"/>
      </label><br />
      <label for="password">
        Password:
        <input 
          value={password} onChange={e => setPassword(e.target.value)}
          name="password" type="password"/>
      </label><br/>
      <button onClick = {handleSignUp}>Sign Up</button>
    </form>
  )
}




export default Login;