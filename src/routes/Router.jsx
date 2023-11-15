import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Home from '../pages/home/Home';

const Router = ({ user }) => {
	return (
		<Routes>
			<Route
				path="/"
				element={user ? <Home /> : <Navigate to="/login" replace={true} />}
			></Route>
			<Route
				path="/login"
				element={!user ? <Login /> : <Navigate to="/" replace={true} />}
			></Route>
			<Route
				path="/signup"
				element={!user ? <Signup /> : <Navigate to="/" replace={true} />}
			></Route>
		</Routes>
	);
};

export default Router;
