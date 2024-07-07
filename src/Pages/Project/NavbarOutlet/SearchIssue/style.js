import styled, { keyframes, css } from "styled-components";
import { NavLink } from "react-router-dom";

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutToLeft = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: ${(props) => (props.$show ? "block" : "none")};
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

export const ModalContainer = styled.div`
	background: white;
	padding: 20px;
	border-radius: 0;
	height: 100vh;
	width: 450px;
	opacity: ${({ $show }) => ($show ? 1 : 0)};
	transition: opacity 0.5s ease-in-out;

	${({ $show }) => css`
		animation: ${$show
			? css`
					${slideInFromLeft} 0.5s forwards
			  ` // 0.5s delay for slide-in
			: css`
					${slideOutToLeft} 0.5s forwards
			  `}; // No delay for slide-out
		animation-fill-mode: both;
	`}
`;
export const CloseButton = styled.button`
	background: #e74c3c;
	color: white;
	border: none;
	border-radius: 4px;
	padding: 10px;
	font-size: 25px;
	cursor: pointer;
	position: absolute;
	top: 10px;
	left: 500px;
`;

export const Input = styled.input`
	outline: none;
	width: 90%;
	border: 2px solid #3333;
	border-top: 0;
	border-left: 0;
	border-right: 0;
	border-radius: 3px;
	text-indent: 5%;
	background-color: white;
	height: 5%;
	&::placeholder {
		font-size: 20px;
		color: grey;
		font-family: Roboto;
	}
	/* &:active {
    background-color: white;
    border: 1px solid blue;
} */
	&:focus {
		background-color: white;
		border: 2px solid #3498db;
		border-top: 0;
		border-left: 0;
		border-right: 0;
	}
`;

export const SubText = styled.p`
	font-size: 14px;
	font-weight: bold;
	color: grey;
	font-family: Roboto;
	margin-top: 30px;
	padding-left: 5%;
`;

export const StyledIssues = styled(NavLink)`
	margin-top: 5px;
	padding-left: 5%;
	font-size: 14px;
	height: 40px;
	width: 90%;
	/* background-color: #3333; */
	color: gray;
	display: flex;
	/* flex-direction: column; */
	justify-content: flex-start;
	align-items: center;
	text-decoration: none;
	gap: 20px;
	&:hover {
		background-color: #3333;
		border-radius: 3px;
		cursor: pointer;
		color: #0747a6;
	}
`;
export const Text = styled.p`
	margin: 0;
	padding: 0;

	font-weight: 500;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const Flex = styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
