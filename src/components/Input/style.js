import styled from "styled-components";

export const Input = styled.input`
	width: 600px;
	height: 30px;
	margin: 3px 0;
	border: ${(props) => props.$border || "2px solid #d0d0d0"};
	border-radius: 3px;
	background-color: ${(props) => props.$background || "#f4f4f4"};
	transition: border-color 0.3s, box-shadow 0.3s;
	text-indent: 5px;

	&:focus {
		box-shadow: 0 0 2px dodgerblue;
		border-color: dodgerblue;
		background-color: white;
	}

	&:focus-visible {
		background-color: white; /* Remove default outline */
		outline: none;
	}
`;
