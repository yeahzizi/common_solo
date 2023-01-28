import React from 'react';

function CategoryIngredientsItem({ item, onCategories }) {
  const { id, name, text } = item;
  //   console.log(id);
  return (
    <div onClick={() => onCategories(text)} aria-hidden="true">
      {name}
    </div>
  );
  //   return <button onClick={() => onCategories(text)}>{text}</button>;
}

export default CategoryIngredientsItem;
