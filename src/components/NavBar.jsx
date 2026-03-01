import { Link } from "react-router-dom";
import { useAuth } from "../context/AppProviders";

export default function NavBar() {
	const { isAuthenticated, logout } = useAuth();

	return (
		<nav style={{display:"flex", justifyContent:"center", gap:"30px", backgroundColor: "lightBlue", width: "100%"}}>
			<Link to="./BlogIndex">Blog</Link>

			{isAuthenticated ? (
				<>
					<Link to="./Admin">Admin</Link>
					<button onClick={logout}>Log Out</button>
				</>
			) : (
				<Link to="./Login">Log in</Link>
			)}
		</nav>
	);
}
