import { getLocal } from "./localstorage";

export const filterDisplayedItems = (item_to_get) => {
	const localItems = getLocal(item_to_get) || [];
	return localItems.filter((item) => item.display === true);
};
