import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Breadcrumb = ({ paths }) => {
	return (
		<nav aria-label="breadcrumb">
			{paths.map((path, index) => (
				<span key={index}>
					{index > 0 && " > "}
					<span>{path}</span>
				</span>
			))}
		</nav>
	);
};

export default Breadcrumb;
