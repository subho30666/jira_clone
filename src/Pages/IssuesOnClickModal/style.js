import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background: rgb(0 0 0 / 50%);
	transition: opacity 0.3s ease;
	opacity: ${(props) => (props.$show ? 1 : 0)};
	pointer-events: ${(props) => (props.$show ? "auto" : "none")};
`;

export const ModalContainer = styled.div`
	width: 60%;
	max-width: 1200px;
	min-width: 900px;
	max-height: 80vh; /* Limit height to viewport height to ensure scrolling */
	min-height: 60%;
	padding: 20px;
	padding-bottom: 50px;
	overflow: auto; /* Enable scrolling if content overflows */
	border-radius: 3px;
	background: white;

	/* Webkit scrollbar styling */
	&::-webkit-scrollbar {
		width: 10px; /* Width of the scrollbar */
		margin: 30px;
	}

	&::-webkit-scrollbar-track {
		margin: 100px 0;
		border-radius: 10px; /* Rounded corners for the track */
		background: #f1f1f1; /* Color of the scrollbar track */
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px; /* Rounded corners for the thumb */
		background: #888; /* Color of the scrollbar thumb */
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #555; /* Color of the thumb on hover */
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	padding: 12px;
	border: none;
	border-radius: 4px;
	background: #e74c3c;
	cursor: pointer;
	font-size: 16px;
	color: white;
`;

export const FlexBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 50px;
`;

export const FlexItems1 = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 2;
	gap: 5px;
`;

export const FlexItems2 = styled(FlexItems1)`
	flex-grow: 1;
`;

export const IconButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border: 0;
	border-radius: 50%;
	background: white;
	transition: color 0.2s ease;
	outline: none;

	&:hover {
		cursor: pointer;
		color: red;
	}

	&:active {
		color: black;
	}
`;

export const Container = styled.div`
	display: inline-block;
	height: 38px;
	min-width: 200px;
	border-radius: 3px;
	background-color: #f5f7fa;
	font-size: 100%;
	line-height: 1.15;
`;

export const Span = styled.span`
	font-weight: 600;
	font-size: 14px;
	color: #434343cc;
`;
