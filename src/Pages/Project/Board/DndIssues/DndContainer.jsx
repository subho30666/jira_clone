import React, { useMemo } from "react";
import { Text, StyledContainer } from "./style";
import { useSortable, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import DndItem from "./DndItem";

function DndContainer({ text, items, containerDetails }) {
  const itemIds = useMemo(() => items.map((item) => item.id), [items]);

  const { setNodeRef, listeners, attributes } = useSortable({
    id: text,
    data: { type: "CONTAINER", columnId: containerDetails.id },
  });

  return (
    <StyledContainer ref={setNodeRef} {...listeners} {...attributes}>
      <Text>{text}</Text>
      <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
        {items.map((item, index) => (
          <DndItem key={item.id} itemDetails={item} testing={index} />
        ))}
      </SortableContext>
    </StyledContainer>
  );
}

export default DndContainer;
