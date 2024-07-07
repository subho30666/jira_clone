import React, { createContext, useState, useContext, useEffect } from "react";
import { ToastContainer } from "./style";

const ToastContext = createContext();

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error("useToast must be used within a ToastProvider");
	}
	return context;
};

export const ToastProvider = ({ children }) => {
	const [toast, setToast] = useState({ message: "", visible: false });
	const [shouldRender, setShouldRender] = useState(false);

	const showToast = (message) => {
		setToast({ message, visible: true });
		setShouldRender(true);
		setTimeout(() => {
			setToast((prev) => ({ ...prev, visible: false }));
			// Delay removing the component to allow for slide out animation
			setTimeout(() => setShouldRender(false), 500); // Adjust this time to match your animation duration
		}, 5000); // Auto-hide after 2 seconds
	};

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			{shouldRender && <Toast message={toast.message} isVisible={toast.visible} />}
		</ToastContext.Provider>
	);
};

// Toast Component
const Toast = ({ message, isVisible }) => {
	return <ToastContainer $isVisible={isVisible}>{message}</ToastContainer>;
};
