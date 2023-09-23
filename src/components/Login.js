import React, {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => console.log(res))
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h3>Login</h3>
            <input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
            />
            <input
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
            />
            <button onClick={signIn} >LogIn</button>
        </div>
    )
};

export default Login;