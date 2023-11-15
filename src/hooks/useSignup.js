import { useState } from 'react';
import { appAuth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isPending, setPending] = useState(false);

	const { dispatch } = useAuthContext();

	const signup = (email, password, displayName) => {
		setError(null);
		setPending(true);

		createUserWithEmailAndPassword(appAuth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				if (!user) {
					throw new Error('회원 가입에 실패했습니다!');
				}

				updateProfile(appAuth.currentUser, { displayName })
					.then(() => {
						setError(null);
						setPending(false);
						dispatch({ type: 'login', payload: user });
					})
					.catch((err) => {
						setError(err.message);
						setPending(false);
					});
			})
			.catch((err) => {
				setError(err.message);
				setPending(false);
			});
	};
	return { error, isPending, signup };
};
