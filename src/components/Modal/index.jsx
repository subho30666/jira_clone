import React, { useState, useEffect } from "react";
import { ModalOverlay, Modal as StyledModal } from "./style";
import { useParams, useSearchParams } from "react-router-dom";

const Modal = ({ children, modalType = "OpenModal" }) => {
	let [searchParams, setSearchParams] = useSearchParams();

	// Retrieve the specific query parameter
	const openModal = searchParams.get("OpenModal");
	const item = searchParams.get("Item");

	// Function to close the modal by clearing the query parameters
	function onCloseModal() {
		setSearchParams({});
	}

	// Check if the modal should be displayed based on the modalType prop
	if ((modalType === "OpenModal" && !openModal) || (modalType === "Item" && !item)) {
		return null;
	}

	return (
		<ModalOverlay>
			<StyledModal>{children}</StyledModal>
		</ModalOverlay>
	);
};

export default Modal;
