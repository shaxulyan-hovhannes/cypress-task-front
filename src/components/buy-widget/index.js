import React, { useEffect, useState, useCallback } from "react";
import uuid4 from "uuid4";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import ActionComponent from "./partials/action-component";

import useProducts from "hooks/useProducts";

import { buyProducts } from "api/products";

const BuyWidget = () => {
  const { products } = useProducts();

  const [leftItems, setLeftItems] = useState([]);

  const [rightItems, setRightItems] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log({ source, destination });
    if (!destination) return;
    const sourceItems = source.droppableId === "left" ? leftItems : rightItems;
    console.log("sourceItems", sourceItems);
    const destItems =
      destination.droppableId === "left" ? leftItems : rightItems;
    console.log("destItems", destItems);

    if (source.droppableId === destination.droppableId) {
      const newItems = Array.from(sourceItems);
      const [removed] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, removed);

      if (source.droppableId === "left") {
        setLeftItems(newItems);
      } else {
        setRightItems(newItems);
      }
    } else {
      const sourceClone = Array.from(sourceItems);
      const destClone = Array.from(destItems);
      const buyItem = sourceClone[source.index];
      destClone.splice(destination.index, 0, {
        ...buyItem,
        id: `${uuid4()}`,
      });

      setLeftItems(source.droppableId === "left" ? sourceClone : destClone);
      setRightItems(
        destination.droppableId === "left" ? sourceClone : destClone
      );
    }
  };

  const handleBuyProducts = () => {
    buyProducts(rightItems)
      .then((res) => {
        console.log("RES", res);
        setRightItems([]);
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    const leftItems = products?.map((product) => ({
      ...product,
      id: product._id,
      content: (
        <>
          <span>{product.name}</span>
          <span>{`${product.price}$`}</span>
        </>
      ),
    }));
    setLeftItems(leftItems);
  }, [products]);

  console.log("RIGHT ITEMS", rightItems);

  return (
    <div className="buy-widget">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="buy-widget-wrapper">
          <Droppable droppableId="left">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="buy-widget-column-left"
              >
                {leftItems?.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="buy-widget-item"
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="right">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="buy-widget-column-right"
              >
                <div className="buy-widget-column-right-items">
                  {rightItems?.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                      isDragDisabled
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="buy-widget-item"
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                {rightItems.length ? (
                  <ActionComponent
                    buyItems={rightItems}
                    onBuy={handleBuyProducts}
                  />
                ) : null}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default BuyWidget;
