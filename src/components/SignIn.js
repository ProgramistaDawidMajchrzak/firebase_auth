import React, {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase"

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => console.log(res))
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h3>Signin</h3>
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
            <button onClick={signUp}>SignIn</button>
        </div>
    )
};

export default SignIn;