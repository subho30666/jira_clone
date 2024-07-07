import styled from "styled-components";

export const MainLayout = styled.div`
	z-index: 100;
	display: flex;
	flex-direction: row;
	width: 100%;
	overflow: auto;
`;
export const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 20px;
	overflow: auto;

	@media screen and (width <= 1000px) {
		margin-left: 60px;
	}
`;
