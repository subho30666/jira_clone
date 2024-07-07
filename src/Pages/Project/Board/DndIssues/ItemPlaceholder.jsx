import React, { forwardRef } from "react";
import { StyledItemPlaceholder, ItemsFlex } from "./style";
import Avatar from "../../../../components/Avatar";
import ItemIcon from "./ItemIcon";

const ItemPlaceholder = forwardRef(({ id, itemDetail, ...rest }, ref) => {
	const [item] = itemDetail;

	return (
		<StyledItemPlaceholder ref={ref} {...rest}>
			{item.title}
			<ItemsFlex>
				<ItemIcon icon={item.type.value} size={"20px"} />
				<ItemIcon icon={item.priority.value} size={"20px"} />
				<Avatar userName={item.assignees.value} width="22px" clickable={false} cursor="pointer" style={{ marginLeft: "auto" }} />
			</ItemsFlex>
		</StyledItemPlaceholder>
	);
});

export default ItemPlaceholder;
