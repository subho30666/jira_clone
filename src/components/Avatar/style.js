import styled from "styled-components";

export const AvatarContainer = styled.div`
	/* height: ${(props) => props.$width || "50%"}; */
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) => props.$width || "50%"};
	margin-top: 0;
	margin-bottom: 0;
	margin-left: ${(props) => props.$overlap || "0px"};
	padding: 0;
	overflow: hidden;
	border: ${(props) => (props.$selected ? "2px solid #007bff" : "2px solid white")};
	border-radius: 50%;
	cursor: ${(props) => props.$cursor || "default"};
	transition: transform 0.1s;

	&:hover {
		transform: ${(props) => (props.$clickable ? "translateY(-7px)" : "translateY(0px)")}; /* Make the avatar jump on hover */
	}

	&:first-child {
		margin-left: 0; /* Ensure the first avatar doesn't have a negative margin */
	}
`;

export const AvatarImage = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const StyledAvatarList = styled.div`
	display: flex;
	margin: 0;
	padding: 0;
`;
