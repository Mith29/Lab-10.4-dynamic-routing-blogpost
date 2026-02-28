import { useAuth } from "../context/AppProviders";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const { login, isAuthenticated } = useAuth();
	const navigate = useNavigate();

	const handleLogin = () => {
		login();
		navigate("/Admin");
	};

	if (isAuthenticated) {
		return (
			<div>
				<h2>You are already logged in!</h2>
			</div>
		);
	}

	return (
		<div style = {{justifyItems: "center"}}>
			<h2>Login Page</h2>
			<button onClick={handleLogin}>Log In</button>
		</div>
	);
}
