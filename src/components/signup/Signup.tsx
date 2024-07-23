import React, { useContext, useState } from "react";
import { AuthContext}  from '../../contexts/AuthContext';
import {AuthContextType,FormError } from '../../type';


const Signup: React.FC = () => {
	const { formError, setFormError } = useContext(AuthContext)as AuthContextType;

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [pass, setPass] = useState<string>("");
	const [err, setErr] = useState<FormError | null>(formError);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Initialize an empty error object
		let newError: FormError = {
			name: '',
			email: '',
			pass: '',
			phone: '',
			noErr:"",
		};

		// Perform form validation
		if (!name) {
			newError = { ...newError, name: "Please enter your name" };
		}
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email || !emailPattern.test(email)) {
			newError = { ...newError, email: "Please enter your email" };
		}
		

		if (!phone) {
			newError = { ...newError, phone: "Please enter your phone number" };
		}

		if (!pass) {
			newError = { ...newError, pass: "Please enter your password" };
		}else 
		if(pass.length<6){
			newError = { ...newError, pass: "Passwords must be at least 6 characters" };
		}

		// Update state with the new error object
		setErr(newError);
		setFormError(newError);

		// Check if there are no errors
		const noErrors = Object.values(newError).every((val) => val === "");

		// Submit logic if all fields are valid
		if (noErrors) {
			setName("");
			setEmail("");
			setPhone("");
			setPass("");
			newError = { ...newError, noErr: "Sign Up Success" };
			setErr(newError);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="check" aria-hidden="true">
				Sign up
			</label>
			<div className="input_wrapper">
				<input
					type="text"
					placeholder="User name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<p className={`error ${err?.name ? "showErr" : ""}`}>{err?.name}</p>
			</div>
			<div className="input_wrapper">
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className={`error ${err?.email ? "showErr" : ""}`}>{err?.email}</p>
			</div>
			<div className="input_wrapper">
				<input
					type="tel"
					placeholder="Phone number"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<p className={`error ${err?.phone ? "showErr" : ""}`}>{err?.phone}</p>
			</div>
			<div className="input_wrapper">
				<input
					type="password"
					placeholder="Password"
					value={pass}
					onChange={(e) => setPass(e.target.value)}
				/>
				<p className={`error ${err?.pass ? "showErr" : ""}`}>{err?.pass}</p>
				<p className={`noError ${err?.noErr ? "showErr" : ""}`}>{err?.noErr}</p>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Signup;
