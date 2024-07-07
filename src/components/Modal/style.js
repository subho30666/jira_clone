import styled, { keyframes } from "styled-components";

export const ModalOverlay = styled.div`
	position: fixed;
	inset: 0;
	z-index: 2000;
	display: flex;
	overflow: auto;
	background-color: rgb(0 0 0 / 50%);
	scrollbar-width: thin; /* options: auto, thin, none */
	scrollbar-color: #0747a6 transparent; /* thumb color, track color */
`;

export const Modal = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	margin-top: 20px;
	border: 0;
	border-radius: 5px;
	background: white;
`;
