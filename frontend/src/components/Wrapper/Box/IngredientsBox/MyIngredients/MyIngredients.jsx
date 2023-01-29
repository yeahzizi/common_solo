import React, { useState } from 'react';
import dummy from '../ingredients.json';

function FavoriteIngredients({ category }) {
  const categoryList = dummy.ingredients;
  const [visible, setVisible] = useState(false);
  const AllIngredient = categoryList.map(e => {
    return <button key={e.id}>{e.name}</button>;
  });
  const ingredient = categoryList
    .filter(i => i.id === category)
    .map(i => {
      return (
        <button
          key={i.id}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {i.name}
          {visible && (
            <div>
              <button>즐겨찾기</button>
              <button>냉장고에서</button>
            </div>
          )}
        </button>
      );
    });
  if (category === 'all') {
    return (
      <span>
        냉장고에 있는 재료 <div>{AllIngredient}</div>
      </span>
    );
  }
  return (
    <span>
      냉장고에 있는 재료 <div>{ingredient}</div>
    </span>
  );
}

export default FavoriteIngredients;
