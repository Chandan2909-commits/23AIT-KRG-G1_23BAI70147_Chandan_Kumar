import React from "react";

const ItemList = React.memo(({ items }) => {
  console.log("ItemList rendered");

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>Item {item}</li>
      ))}
    </ul>
  );
});

export default ItemList;
