import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/project", { replace: true });
	}, []);

	return (
		<div>
			<h1 style={{ margin: "0", padding: "0" }}>hello from home</h1>
		</div>
	);
}

export default Home;
