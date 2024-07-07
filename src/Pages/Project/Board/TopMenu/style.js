import styled from "styled-components";

export const MenuLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 130px;
	margin-top: 10px;
	overflow: hidden;
`;

export const MenuItem = styled.div`
	width: 100%;
`;

export const Input = styled.input`
	outline: none;
	width: 200px;
	border: 2px solid #3333;
	border-radius: 3px;
	text-indent: 5px;
	background-color: #f0f0f0;

	&::placeholder {
		font-size: 10px;
		color: #aaa;
	}

	/* &:active {
		background-color: white;
		border: 1px solid blue;
	} */
	&:focus {
		border: 2px solid #3498db;
		background-color: white;
	}
`;

export const Button = styled.button`
	height: 30px;
	margin-left: 10px;
	border: none;
	border-radius: 5px;

	/* background-color: #f0f0f0; */
	background-color: ${(props) => (props.$selected ? "#AED6F1" : "#f0f0f0")};
	color: ${(props) => (props.$selected ? "#0747a6" : "black")};

	&:hover {
		background-color: ${(props) => (props.$selected ? "#7FB3D5" : "#3333")};
		cursor: pointer;
	}
`;

export const Divider = styled.div`
	width: 1px;
	height: 80%;
	margin: 0 0 0 25px;
	border-radius: 50%;
	background-color: #d0cccc;
`;
