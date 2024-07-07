import React, { useState, useCallback, useEffect } from "react";
import { Button, Input, MenuItem, MenuLayout, Divider } from "./style";
import Breadcrumb from "../../../../components/BreadCrumb/index";
import { GithubIcon } from "../../../../components/Icons";
import Avatar from "../../../../components/Avatar";
import { getLocal } from "../../../../Utils/localstorage";

function TopMenu({ children, ...rest }) {
	const users = getLocal("users")?.map((user) => user.name) ?? [];
	const [searchIssue, setSearchIssue] = useState("");
	const [selectedUsers, setSelectedUsers] = useState(new Set());
	const [isCaptainQuantFiltered, setIsCaptainQuantFiltered] = useState(false);
	const [isRecentlyUpdatedFiltered, setIsRecentlyUpdatedFiltered] = useState(false);

	const handleAvatarClick = useCallback((user) => {
		setSelectedUsers((prevSelected) => {
			const newSet = new Set(prevSelected);
			if (newSet.has(user)) {
				newSet.delete(user);
			} else {
				newSet.add(user);
			}
			const items = getLocal("items") || [];
			const updatedItems = items.map((item) => {
				if (newSet.size === 0) {
					// Show all items if no avatars are selected
					return { ...item, display: true };
				} else if (newSet.has(item.assignees.value)) {
					// Show items assigned to selected avatars
					return { ...item, display: true };
				} else {
					// Hide items not assigned to selected avatars
					return { ...item, display: false };
				}
			});

			localStorage.setItem("items", JSON.stringify(updatedItems));
			// Dispatch custom event
			const event = new Event("localStorageUpdated");
			window.dispatchEvent(event);

			return newSet;
		});
	}, []);

	useEffect(() => {
		// Cleanup function to reset selected users and update items when component unmounts
		return () => {
			const items = getLocal("items") || [];
			const updatedItems = items.map((item) => ({ ...item, display: true }));
			// Save updated items to local storage
			localStorage.setItem("items", JSON.stringify(updatedItems));
			// Dispatch custom event
			const event = new Event("localStorageUpdated");
			window.dispatchEvent(event);
		};
	}, []);

	const onlyMyIssues = () => {
		clearAll();
		const items = getLocal("items") || [];

		let updatedItems;
		if (isCaptainQuantFiltered) {
			updatedItems = items.map((item) => ({ ...item, display: true }));
		} else {
			// Filter to show only Captain Quant's issues ...Since the user here is Captain Quant...
			//this logic should be handle differently...since i was rushing to complete this project ASAP ..i took some shortcuts
			updatedItems = items.map((item) => {
				if (item.assignees.value === "Captain Quant") {
					return { ...item, display: true };
				} else {
					return { ...item, display: false };
				}
			});
		}

		localStorage.setItem("items", JSON.stringify(updatedItems));
		const event = new Event("localStorageUpdated");
		window.dispatchEvent(event);
		setIsCaptainQuantFiltered(!isCaptainQuantFiltered);
	};

	const recentlyUpdated = () => {
		clearAll();
		const items = getLocal("items") || [];

		// Sort items based on lastUpdated timestamp
		const sortedItems = [...items].sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));

		let updatedItems;
		if (isRecentlyUpdatedFiltered) {
			// If recently updated is already filtered, reset display for all items
			updatedItems = items.map((item) => ({ ...item, display: true }));
		} else {
			// If not filtered, set display for the most recently updated item
			const mostRecentItemId = sortedItems[0]?.id;
			updatedItems = items.map((item) => {
				if (item.id === mostRecentItemId) {
					return { ...item, display: true };
				} else {
					return { ...item, display: false };
				}
			});
		}

		localStorage.setItem("items", JSON.stringify(updatedItems));
		const event = new Event("localStorageUpdated");
		window.dispatchEvent(event);

		setIsRecentlyUpdatedFiltered(!isRecentlyUpdatedFiltered);
	};

	const handleSearchChange = useCallback((e) => {
		const query = e.target.value;
		setSearchIssue(query);

		const items = getLocal("items") || [];
		const updatedItems = items.map((item) => ({ ...item, display: item.title.toLowerCase().includes(query.toLowerCase()) }));

		localStorage.setItem("items", JSON.stringify(updatedItems));
		const event = new Event("localStorageUpdated");
		window.dispatchEvent(event);
	}, []);

	const clearAll = () => {
		setSearchIssue("");
		setSelectedUsers(new Set());
		setIsCaptainQuantFiltered(false);
		setIsRecentlyUpdatedFiltered(false);
		const items = getLocal("items") || [];
		const updatedItems = items.map((item) => ({ ...item, display: true }));

		localStorage.setItem("items", JSON.stringify(updatedItems));
		const event = new Event("localStorageUpdated");
		window.dispatchEvent(event);

		setIsRecentlyUpdatedFiltered(false); // Reset the recently updated filter
	};
	return (
		<>
			<MenuLayout>
				<MenuItem>
					<Breadcrumb paths={["Projects", "BoardName", "KanbanBoard"]} />
				</MenuItem>

				<MenuItem style={{ display: "flex", marginTop: "20px" }}>
					<h2 style={{ padding: "0", margin: "0" }}>Kanban Board</h2>

					<Button style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
						<GithubIcon />
						Github Repo
					</Button>
				</MenuItem>

				<MenuItem style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
					<Input type="text" placeholder="Search Issues" style={{ height: "25px" }} value={searchIssue} onChange={handleSearchChange}></Input>

					<Avatar.List users={users} width="35px" clickable={true} cursor="pointer" overlap="-10px" style={{ padding: "0 20px" }} onClick={handleAvatarClick} selectedUsers={selectedUsers} />

					<Button onClick={onlyMyIssues} $selected={isCaptainQuantFiltered}>
						Only My Issues
					</Button>
					<Button onClick={recentlyUpdated} $selected={isRecentlyUpdatedFiltered}>
						Recently Updated
					</Button>
					{isCaptainQuantFiltered || isRecentlyUpdatedFiltered || searchIssue || selectedUsers.size > 0 ? (
						<>
							<Divider /> {/* Ensure you have styles for Divider */}
							<Button style={{ background: "white" }} onClick={clearAll}>
								Clear All
							</Button>
						</>
					) : null}
				</MenuItem>
			</MenuLayout>
		</>
	);
}

export default TopMenu;
