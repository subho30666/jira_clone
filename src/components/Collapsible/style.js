import styled from "styled-components";

export const Collapsible = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: flex-start;
	width: 60px;
	height: 100vh;
	overflow: hidden;
	background-color: #0747a6;
	font-weight: 800;
	
	/* font-family: Poppins; */
	font-size: 14px;
	white-space: nowrap;
	transition: width 0.2s ease-out, background-color 0.2s ease-out, box-shadow 0.2s ease-out;

	&:hover h3 {
		max-width: 100%;
		opacity: 1;
		visibility: visible;
	}

	&:hover {
		width: 200px;
		box-shadow: 0 0 16px 12px rgb(0 0 0 / 40%);
	}
`;

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	align-items: center;
	width: 100%;
	margin: 30px auto;
	padding-left: 10px;
	white-space: nowrap;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	align-items: center;
	width: 100%;
	padding-left: 10px;
	white-space: nowrap;

	&:hover h3 {
		color: white;
	}

	&:hover {
		background-color: #ffffff38;
		cursor: pointer;
	}
`;

export const Footer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	align-items: center;
	width: 100%;
	margin-top: auto;
	margin-bottom: 30px;
	padding-left: 10px;
	white-space: nowrap;

	&:hover h3 {
		color: white;
	}

	&:hover {
		background-color: #ffffff38;
		cursor: pointer;
	}
`;

export const Text = styled.h3`
	max-width: 0;
	padding-right: 10px;
	color: #ffffffe0;
	letter-spacing: 1px;
	text-overflow: ellipsis;
	transition: max-width 0.1s ease-out, visibility 0.1s ease-out opacity 0.1s ease-out;
	opacity: 0;
	visibility: hidden;
`;

export const Icon = styled.div`
	margin: auto 0;
	padding: 0;
	color: #ffffffe0;
	transition: 3s ease-out;
`;
