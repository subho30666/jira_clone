import React from "react";
import styled from "styled-components";

export const Info = styled.p`
	margin: 0;
	padding: 0;
	font-family: Roboto;
	font-size: 4px;
	font-weight: 100;

	color: #808080a2;
`;

function ContentInfo({ children, ...rest }) {
	return <Info {...rest}>{children}</Info>;
}

export default Info;
