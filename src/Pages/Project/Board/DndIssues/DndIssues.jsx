import React, { useState, useEffect, useMemo } from "react";
import { getLocal, setLocal } from "../../../../Utils/localstorage";
import { Flex } from "./style";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { DndContext, useSensor, useSensors, PointerSensor, rectIntersection, DragOverlay, closestCenter } from "@dnd-kit/core";
import ItemPlaceholder from "./ItemPlaceholder";
import DndContainer from "./DndContainer";
import { filterDisplayedItems } from "../../../../Utils/utils";

function DndIssues() {
  const [containers, setContainers] = useState(getLocal("container") || []);
  const [items, setItems] = useState(getLocal("items") || []);
  const filteredItems = items.filter((item) => item.display === true);
  const [activeItems, setActiveItems] = useState(null);

  const containerIds = useMemo(() => {
    return containers.map((container) => container.id);
  }, [containers]);

  const handleNameChange = () => {
    const localItems = getLocal("items") || [];
    setItems(localItems);
  };

  useEffect(() => {
    handleNameChange();

    const handleStorageEvent = () => handleNameChange();
    window.addEventListener("localStorageUpdated", handleStorageEvent);

    return () => {
      window.removeEventListener("localStorageUpdated", handleStorageEvent);
    };
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 0,
      },
    })
  );

  function onDragEnd(event) {
    const { active, over } = event;

    const updatedItems = items.map((item) => {
      if (item.id === active.id) {
        return { ...item, lastUpdated: new Date().toISOString() };
      }
      return item;
    });

    localStorage.setItem("items", JSON.stringify(updatedItems));
    const event_local = new Event("localStorageUpdated");
    window.dispatchEvent(event_local);

    setActiveItems(null);
  }

  function onDragStart(event) {
    if (event.active.data.current?.type === "ITEMS") {
      setActiveItems(event.active.data.current.itemId);
    }
  }

  function onDragOver(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeType = active.data?.current.type;
    const overType = over.data?.current.type;
    const activeContainer = active.data?.current.containerId;
    const overContainer = over.data?.current.containerId || over.data.current.columnId;
    const activeIndex = items.findIndex((item) => item.id === active.id);
    const overIndex = items.findIndex((item) => item.id === over.id);

    // if (activeIndex === -1 || overIndex === -1) return;

    /* if (activeIndex === -1 || overIndex === -1) {
      //   console.log("index with -1");
      console.log("activeindex", activeIndex);
      console.log("overindex", overIndex);
    } */

    if (activeType === "ITEMS" && overType === "ITEMS") {
      if (activeContainer === overContainer && activeIndex !== -1 && overIndex !== -1) {
        setItems((prevData) => arrayMove(prevData, activeIndex, overIndex));
      } else {
        // console.log(filteredItems);
        // console.log(activeIndex);
        // console.log(overIndex);
        setItems((prevData) => {
          const updatedItems = prevData.map((item) => (item.id === active.id ? { ...item, containerId: overContainer } : item));
          return arrayMove(updatedItems, activeIndex, overIndex - 1);
        });
      }
    } else if (activeType === "ITEMS" && overType === "CONTAINER" && activeContainer !== overContainer) {
      //   console.log("active");
      setItems((prevData) => {
        const updatedItems = prevData.map((item) => (item.id === active.id ? { ...item, containerId: overContainer } : item));
        const newItemIndex = updatedItems.length;
        return arrayMove(updatedItems, activeIndex, newItemIndex);
      });
    }
  }

  return (
    <Flex>
      <DndContext sensors={sensors} collisionDetection={rectIntersection} onDragOver={onDragOver} onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <SortableContext items={containerIds} strategy={verticalListSortingStrategy}>
          {containers.map((container) => (
            <DndContainer key={container.id} text={container.id} items={filteredItems.filter((item) => item.containerId === container.id)} setItems={setItems} containerDetails={container} />
          ))}
        </SortableContext>
        <DragOverlay>{activeItems ? <ItemPlaceholder id={activeItems} itemDetail={filteredItems.filter((item) => item.id === activeItems)} /> : null}</DragOverlay>
      </DndContext>
    </Flex>
  );
}

export default DndIssues;
