import React, { useState, useContext } from "react";
import {AuthContextType,FormError } from '../../type';
import { AuthContext}  from '../../contexts/AuthContext';

const Login = () => {
	const { formError, setFormError } = useContext(
		AuthContext
	) as AuthContextType;

	const [email, setEmail] = useState<string>("");
	const [pass, setPass] = useState<string>("");
	const [err, setErr] = useState<FormError>(formError);

	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let newError: FormError = {
			name: "",
			email: "",
			pass: "",
			phone: "",
			noErr:"",
		};
		if (!email) {
			newError = { ...newError, email: "Please enter your email" };
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			newError = { ...newError, email: "Please enter a valid email address" };
		}		
		if (!pass) {
			newError = { ...newError, pass: "Please enter your password" };
		} else if (pass.length < 6) {
			newError = {
				...newError,
				pass: "Passwords must be at least 6 characters",
			};
		}
		setErr(newError);
		setFormError(newError);
	};

	return (
		<form action="" onSubmit={handleLogin}>
			<label htmlFor="check">Login</label>
			<div className="input_wrapper">
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className={`error ${err?.email ? "showErr" : ""}`}>
					{err?.email}
				</p>
			</div>
			<div className="input_wrapper">
				<input
					type="text"
					placeholder="Password"
					value={pass}
					onChange={(e) => setPass(e.target.value)}
				/>
				<p className={`error ${err?.pass ? "showErr" : ""}`}>
					{err?.email}
				</p>
			</div>
			<button>Submit</button>
		</form>
	);
};

export default Login;
