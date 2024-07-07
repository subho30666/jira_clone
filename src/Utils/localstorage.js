export function setLocal(data, variable) {
	const item = getLocal(variable);

	// Check if the item exists and is an array
	if (Array.isArray(item)) {
		console.log("received in 1");
		// If it is an array, push the new data into it
		item.push(data);
		localStorage.setItem(variable, JSON.stringify(item));
	} else {
		// Otherwise, just set the data
		console.log("received in 2");
		localStorage.setItem(variable, JSON.stringify(data));
	}

	// Dispatch custom event
	const event = new Event("localStorageUpdated");
	window.dispatchEvent(event);
}

/* export function setLocal(data, variable) {
	// Directly set the data in local storage
	localStorage.setItem(variable, JSON.stringify(data));

	// Dispatch custom event
	const event = new Event("localStorageUpdated");
	window.dispatchEvent(event);
} */

export function getLocal(variable) {
	const item = localStorage.getItem(variable);
	return item ? JSON.parse(item) : null;
}
