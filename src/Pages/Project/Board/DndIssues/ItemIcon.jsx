import { HighestIcon, HighIcon, MediumIcon, LowIcon, LowestIcon, StoryIcon, TaskIcon, BugIcon } from "../../../../components/Icons";
import React from "react";

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

function ItemIcon({ icon, ...rest }) {
	const IconComponent = iconMapping[icon];
	if (!IconComponent) {
		return null;
	}

	return <IconComponent {...rest} />;
}

export default ItemIcon;
