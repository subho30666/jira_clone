import React from "react";
import { StyledItems, ItemsFlex } from "./style";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Avatar from "../../../../components/Avatar";
import ItemIcon from "./ItemIcon";
import { NavLink } from "react-router-dom";
function DndItem({ itemDetails }) {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id: itemDetails.id,
		data: { type: "ITEMS", itemId: itemDetails.id, containerId: itemDetails.containerId },
	});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		// color: isDragging ? "transparent" : "black",
		opacity: isDragging ? 0.5 : 1,
	};

	return (
		// <StyledItems ref={setNodeRef} {...listeners} {...attributes} style={style} to={{ pathname: `${itemDetails.id}`, search: "?Item=true" }}>
		<StyledItems ref={setNodeRef} {...listeners} {...attributes} style={style} to={`${itemDetails.id}`}>
			{itemDetails.title}
			<ItemsFlex>
				<ItemIcon icon={itemDetails.type.value} size={"20px"} />
				<ItemIcon icon={itemDetails.priority.value} size={"20px"} />
				<Avatar userName={itemDetails.assignees.value} width="22px" clickable={false} cursor="pointer" style={{ marginLeft: "auto" }} />
			</ItemsFlex>
		</StyledItems>
	);
}

export default DndItem;
