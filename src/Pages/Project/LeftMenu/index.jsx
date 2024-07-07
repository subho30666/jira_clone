import React, { useState, useEffect } from "react";
import Aside from "../../../components/Aside";
import { BoardIcon, ComponentsIcon, GearIcon, IssuesIcon, PagesIcon, ReleasesIcon, ReportIcon, SettingsIcon } from "../../../components/Icons";
import { NavLink } from "react-router-dom";
import { getLocal } from "../../../Utils/localstorage";

function LeftMenu() {
	const [isHovered, setIsHovered] = useState(false);
	const [boardName, setBoardName] = useState("");

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleNameChange = () => {
		const name = getLocal("project")?.name || "BoardName";
		setBoardName(name);
	};

	useEffect(() => {
		// Initial load
		handleNameChange();

		// Event listener for custom 'localStorageUpdated' event
		const handleStorageEvent = () => handleNameChange();

		window.addEventListener("localStorageUpdated", handleStorageEvent);

		return () => {
			window.removeEventListener("localStorageUpdated", handleStorageEvent);
		};
	}, []);

	return (
		<>
			<Aside>
				<Aside.Header>
					<Aside.Icon>
						<SettingsIcon style={{ color: "red" }} />
					</Aside.Icon>
					<Aside.Text style={{ fontWeight: "800" }}>{boardName}</Aside.Text>
					{/* <Aside.Text>Bussiness</Aside.Text> */}
					{/* <Aside.HeaderSubtitle>Bussiness Project</Aside.HeaderSubtitle> */}
				</Aside.Header>

				<NavLink to="board" style={{ display: "flex", width: "100%", marginLeft: "20px", textDecoration: "none" }}>
					<Aside.Content>
						<Aside.Icon>
							<BoardIcon style={{ color: "#3a3434" }} />
						</Aside.Icon>
						<Aside.Text>Kanban Board</Aside.Text>
					</Aside.Content>
				</NavLink>

				<NavLink to="settings" style={{ display: "flex", width: "100%", marginLeft: "20px", textDecoration: "none" }}>
					<Aside.Content>
						<Aside.Icon>
							<GearIcon style={{ color: "#3a3434" }} />
						</Aside.Icon>
						<Aside.Text>Project Settings</Aside.Text>
					</Aside.Content>
				</NavLink>
				<Aside.Divider />

				<Aside.Content disabled={true} message={"Not Implemented"}>
					<Aside.Icon>
						<ReleasesIcon style={{ color: "#3a3434" }} />
					</Aside.Icon>
					<Aside.Text>Releases</Aside.Text>
				</Aside.Content>

				<Aside.Content disabled={true} message={"Not Implemented"}>
					<Aside.Icon>
						<IssuesIcon style={{ color: "#3a3434" }} />
					</Aside.Icon>
					<Aside.Text>Issues and filters</Aside.Text>
				</Aside.Content>

				<Aside.Content disabled={true} message={"Not Implemented"}>
					<Aside.Icon>
						<PagesIcon style={{ color: "#3a3434" }} />
					</Aside.Icon>
					<Aside.Text>Pages</Aside.Text>
				</Aside.Content>

				<Aside.Content disabled={true} message={"Not Implemented"}>
					<Aside.Icon>
						<ReportIcon style={{ color: "#3a3434" }} />
					</Aside.Icon>
					<Aside.Text>Report</Aside.Text>
				</Aside.Content>

				<Aside.Content disabled={true} message={"Not Implemented"}>
					<Aside.Icon>
						<ComponentsIcon style={{ color: "#3a3434" }} />
					</Aside.Icon>
					<Aside.Text>Components</Aside.Text>
				</Aside.Content>
			</Aside>
		</>
	);
}

export default LeftMenu;
