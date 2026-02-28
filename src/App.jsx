import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import BlogIndex from "./pages/BlogIndex";
import { AppProviders, useAuth } from "./context/AppProviders";
import Admin from "./pages/Admin";
import BlogPost from "./pages/BlogPost";

export default function App() {
	const { isAuthenticated } = useAuth();
	return (
		<div style={{display:"flex", flexDirection:"column",alignItems:"center", gap:"30px"}}>
			{/* <AppProviders> */}
				<NavBar />

				<Routes>
				<Route
					path="/BlogIndex"
					element={<BlogIndex />}
				/>

				<Route
					path="/BlogPost/:slug"
					element={<BlogPost />}
				/>

				<Route
					path="/Login"
					element={<Login />}
				/>

				<Route
					path="/Admin"
					element={
						isAuthenticated ? (
							<Admin />
						) : (
							<Navigate
								to="/Login"
							/>
						)
					}
				/>

				<Route
					path="*"
					element={<h2>404 - Page Not Found</h2>}
				/>
			</Routes>
			{/* </AppProviders> */}
		</div>
	);
}
