import Header from './components/common/Header';
import Loader from './components/common/Loader';
import { useAuthContext } from './hooks/useAuthContext';
import Router from './routes/Router';

function App() {
	const { isAuthReady, user } = useAuthContext();

	return (
		<div>
			{isAuthReady ? (
				<>
					<Header />
					<Router user={user} />
				</>
			) : (
				<Loader />
			)}
		</div>
	);
}
export default App;
