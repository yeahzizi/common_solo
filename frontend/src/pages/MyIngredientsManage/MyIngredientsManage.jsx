import React, { useCallback, useState } from 'react';
import IngredientsBox from '../../components/Wrapper/Box/IngredientsBox/IngredientsBox';
import Nav from '../../components/Nav/Nav';
// import CategoryIngredients from '../../components/Wrapper/Box/IngredientsBox/CategoryIngredients/CategoryIngredients';

function MyIngredientsManage() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(Category => setCategory(Category), []);
  return (
    <>
      <Nav />
      <hr />
      <IngredientsBox category={category} onSelect={onSelect} />
      {/* <CategoryIngredients category={category} /> */}
    </>
  );
}

export default MyIngredientsManage;
