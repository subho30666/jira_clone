import styled, { keyframes, css } from "styled-components";

// Keyframe animations remain the same
const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutToRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const ToastContainer = styled.div`
	position: fixed;
	right: 20px;
	background: #28b463;
	color: #fff;
	padding: 15px;
	border-radius: 3px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	min-height: 50px;
	font-family: Roboto, sans-serif;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 10px;
	opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
	transition: opacity 0.5s ease-in-out;

	${({ $isVisible }) => css`
		animation: ${$isVisible
			? css`
					${slideInFromRight} 0.5s 0.5s forwards
			  ` // 0.5s delay for slide-in
			: css`
					${slideOutToRight} 0.5s forwards
			  `}; // No delay for slide-out
		animation-fill-mode: both;
	`}
`;
