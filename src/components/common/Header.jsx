import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Header() {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	const location = useLocation();

	return (
		<header>
			<div className={styles['header-wrap']}>
				<Link to="/">
					<h1 className={styles.title}>하루살이</h1>
				</Link>
				<div>
					{user && (
						<>
							<p className="hello">
								환영합니다 <strong>{user.displayName}</strong>님!
							</p>
							<Link to="/" className="btn-logout" onClick={logout}>
								로그아웃
							</Link>
						</>
					)}
					{!user && (
						<>
							{location.pathname === '/signup' ? (
								<Link to="/login" className="btn-login">
									로그인
								</Link>
							) : (
								<Link to="/signup" className="btn-join">
									회원가입
								</Link>
							)}
						</>
					)}
				</div>
			</div>
		</header>
	);
}
