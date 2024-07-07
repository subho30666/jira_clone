import React from "react";
import styled from "styled-components";

const Error = styled.div`
	color: red;
	margin: 0;
	padding: 0;
	font-weight: bolder;
	font-size: 4px;
	visibility: ${(props) => (props.visibility === "visible" ? "visible" : "hidden")};
`;

function FormError({ visibility = "hidden", children, ...rest }) {
	return (
		<Error visibility={visibility} {...rest}>
			{children}
		</Error>
	);
}

export default FormError;
