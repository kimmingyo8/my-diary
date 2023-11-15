import { useState } from 'react';
import { appAuth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
	const [error, setError] = useState(null);
	const [isPending, setPending] = useState(false);

	const { dispatch } = useAuthContext();

	const login = (email, password) => {
		setError(null);
		setPending(true);

		signInWithEmailAndPassword(appAuth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				dispatch({ type: 'login', payload: user });

				if (!user) {
					throw new Error('로그인에 실패했습니다!');
				}
				setError(null);
				setPending(false);
			})
			.catch((err) => {
				setError(err.message);
				setPending(false);
			});
	};
	return { error, isPending, login };
};
