import React from 'react';
import Item from "./CardProduct";

function ItemList(props) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {props.products.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default ItemList;
