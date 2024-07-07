import styled from "styled-components";

export const Aside = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 15vw;
	height: 100vh;
	min-width: 200px;
	margin-left: 60px;
	background-color: #f4f5f7;

	@media screen and (width <= 1000px) {
		display: none;
	}
`;

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	justify-content: flex-start;
	align-items: center;
	width: 80%;
	height: 20px;
	margin-top: 30px;
	margin-bottom: 20px;
	padding: 10px;
`;

export const HeaderSubTitle = styled.div`
	align-self: flex-start;
	font-size: 14px;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	justify-content: flex-start;
	align-items: center;
	width: 80%;
	height: 20px;
	margin-top: 20px;
	padding: 10px;
	border-radius: 5px;

	&:hover {
		background-color: #3333;
		cursor: ${(props) => (props.$isDisabled ? "not-allowed" : "pointer")};
	}

	&:hover * {
		color: ${(props) => (props.$isDisabled ? "red" : "#0747a6")};
	}
`;

export const Footer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	justify-content: flex-start;
	align-items: center;
	width: 80%;
	height: 20px;
	margin-top: 20px;
	padding: 10px;
	border-radius: 5px;
`;

export const Icon = styled.div`
	margin: 0;
	padding: 0;
`;
export const Text = styled.p`
	color: #3a3434;
`;

export const Divider = styled.hr`
	width: 80%;
	margin: 30px 0;
	border: 1px solid #a5a0a0;
	border-radius: 1px;
`;
