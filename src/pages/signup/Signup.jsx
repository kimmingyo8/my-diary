import React, { useState } from 'react';
import styles from '../login/Login.module.css';
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, setDisplayName] = useState('');
	const { error, isPending, signup } = useSignup();

	const handleData = (event) => {
		if (event.target.type === 'email') {
			setEmail(event.target.value);
		} else if (event.target.type === 'password') {
			setPassword(event.target.value);
		} else if (event.target.type === 'text') {
			setDisplayName(event.target.value);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		signup(email, password, displayName);
	};

	return (
		<>
			<main>
				<h2 className={styles['img-title']}>회원가입</h2>

				<form className={styles['form-wrap']} onSubmit={handleSubmit}>
					<label className="label-style" htmlFor="user-email">
						이메일
					</label>
					<input
						className="input-style"
						id="user-email"
						type="email"
						required
						autoComplete="username"
						onChange={handleData}
						value={email}
					/>

					<label className="label-style" htmlFor="user-pw">
						비밀번호
					</label>
					<input
						className="input-style"
						id="user-pw"
						type="password"
						required
						autoComplete="current-password"
						onChange={handleData}
						value={password}
					/>

					<label className="label-style" htmlFor="user-nickname">
						닉네임
					</label>
					<input
						className="input-style"
						id="user-nickname"
						type="text"
						required
						onChange={handleData}
						value={displayName}
					/>

					<button className="black-btn" type="submit">
						회원가입
					</button>
				</form>
			</main>
		</>
	);
}
