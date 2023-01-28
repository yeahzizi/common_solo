import React from 'react';
import AllIngredientsItem from './AllIngredientsItem';

function CategoryIngredients({ data }) {
  return (
    <ul>
      {data &&
        data.ingredients.map(item => (
          <AllIngredientsItem key={item.id} item={item} />
        ))}
    </ul>
  );
}

export default CategoryIngredients;
