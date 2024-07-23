import { useEffect, useState } from 'react';
import Login from '../../components/login/Login';
import Signup from '../../components/signup/Signup';
import './loginSignup.css';

const LoginSignUp = () => {
  return (
    <div className="container">
			<input type="checkbox" id="check" />
			<div className="signup">
				<Signup />
			</div>
			<div className="login">
				<Login/>
			</div>
		</div>
  )
}

export default LoginSignUp
