import React from "react";

import TopMenu from "./TopMenu/index";
import DndIssues from "./DndIssues/DndIssues";
import { Outlet } from "react-router-dom";

function Board() {
	return (
		<>
			<TopMenu></TopMenu>
			<DndIssues />
			<Outlet />
		</>
	);
}

export default Board;
