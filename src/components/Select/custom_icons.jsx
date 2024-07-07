import { HighestIcon, HighIcon, MediumIcon, LowIcon, LowestIcon, StoryIcon, TaskIcon, BugIcon } from "../Icons";
import React from "react";
import { components } from "react-select";
import Avatar from "../Avatar";

const iconMapping = {
	highest: HighestIcon,
	high: HighIcon,
	medium: MediumIcon,
	low: LowIcon,
	lowest: LowestIcon,
	story: StoryIcon,
	task: TaskIcon,
	bug: BugIcon,
};
const avtarMapping = {};

function ItemIcon({ icon, style, ...rest }) {
	const IconComponent = iconMapping[icon];

	/* if (!IconComponent) {
		return null;
	} */

	if (IconComponent) {
		// If it's a known icon, render the icon component
		// const { color: _, ...cleanedStyle } = style || {};
		return <IconComponent {...rest} />;
	} else if (typeof icon === "string") {
		// If it's not a known icon, assume it's a user name and render an Avatar
		return <Avatar userName={icon} cursor={"pointer"} clickable={false} width="30px" />;
	}
	return null;
}

// Custom Option component
export const Option = (props) => (
	<components.Option {...props}>
		<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
			<ItemIcon icon={props.data.value} />
			{props.data.label}
		</div>
	</components.Option>
);

// Custom SingleValue component (for the selected option)
export const SingleValue = ({ children, ...props }) => (
	<components.SingleValue {...props}>
		<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
			<ItemIcon icon={props.data.value} />
			{children}
		</div>
	</components.SingleValue>
);
