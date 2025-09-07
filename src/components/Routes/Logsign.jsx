import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/logsign.css'
const LogSign = ({onLogin}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("user");

const login = async () => {
    const res = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password ,role}),
    });
    const data = await res.json();
    if (res.ok) {
        // Handle successful login
		console.log("Login successful:", data.user);
        onLogin(data.user); // pass user data to parent

    } else {
        alert(data.message );
    }
};
const signup = async () => {
    const res = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
    });
    const data = await res.json();
    if (res.ok) {
		
        // Handle successful signup
    } else {
        alert(data.message );
    }
};

	return (
		<div className="logsign-container">
			<input
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				placeholder="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			
			<div className="logsign-actions">
                <Link to="/">
				<button onClick={login}>Login</button>
                </Link>
				<button onClick={signup}>Sign Up</button>
			</div>
		</div>
	);
};

export default LogSign;

