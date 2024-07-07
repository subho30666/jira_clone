import styled from "styled-components";

export const EditorContainer = styled.div`
	/* height: 200px; */
	min-height: 200px;
	margin: 5px 0;
	overflow: auto;
	border: 2px solid #d0d0d0;
	border-radius: 5px;

	.ql-container {
		max-width: 600px;

		/* max-height: 200px; */
		border: 0;
		font-size: 16px;
		font-family: inherit;
	}

	.ql-toolbar {
		/* height: 0; */
		display: ${(props) => (props.$toolbar ? "flex" : "none")};
		border: 0;
		font-size: 20px;
		font-family: inherit;
	}

	.ql-editor img {
		height: auto;
		max-width: 400px;
	}

	/* Webkit scrollbar styling */
	&::-webkit-scrollbar {
		width: 10px; /* Width of the scrollbar */
	}

	&::-webkit-scrollbar-track {
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
