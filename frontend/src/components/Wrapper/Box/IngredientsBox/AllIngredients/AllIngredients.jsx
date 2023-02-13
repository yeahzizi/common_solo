import React, { useState } from 'react';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenIcon from '@mui/icons-material/Kitchen';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import dummy from '../ingredients.json';
import {
  Contents,
  Circle,
  Button,
  Container,
  Span,
} from './AllIngredientsStyle';

function AllIngredients({
  category,
  ingredients,
  allIngredient,
  sumbitIngredient,
  favIngredient,
}) {
  const [visible, setVisible] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');

  const handleClick = i => {
    setselectIngredientId(i.ingredientId);
    setVisible(!visible);
  };

  const categoryKorean = dummy.categories
    .filter(name => name.id === category)
    .map(name => {
      return <h4>{name.text} 전체</h4>;
    });

  const ingredient = ingredients.map(i => {
    return (
      <Span>
        <Circle
          key={i}
          onClick={() => {
            handleClick(i);
          }}
        >
          <img src={i.ingredientIcon} alt="icon" />
        </Circle>
        <div>{i.ingredientName}</div>
        {selectIngredientId === i.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                favIngredient(i);
                setVisible(!visible);
              }}
            >
              <BookmarkAddRoundedIcon />
            </Button>
            <Button
              onClick={() => {
                sumbitIngredient(i);
                setVisible(!visible);
              }}
            >
              <KitchenIcon />
            </Button>
          </>
        )}
      </Span>
    );
  });

  const AllIngredient = allIngredient.map(e => {
    return (
      <Span>
        <Circle
          key={e}
          onClick={() => {
            handleClick(e);
          }}
        >
          <img src={e.ingredientIcon} alt="icon" />
        </Circle>
        <div>{e.ingredientName}</div>
        {selectIngredientId === e.ingredientId && visible && (
          <>
            <Button
              onClick={() => {
                favIngredient(e);
                setVisible(!visible);
              }}
            >
              <BookmarkAddRoundedIcon />
            </Button>
            <Button
              onClick={() => {
                sumbitIngredient(e);
                setVisible(!visible);
              }}
            >
              <KitchenIcon />
            </Button>
          </>
        )}
      </Span>
    );
  });

  if (category === 'ALL') {
    return (
      <div>
        <Contents>
          <h4>
            재료 전체
            <KitchenRoundedIcon style={{ fontSize: '20px' }} />
          </h4>
          <Container>{AllIngredient}</Container>
        </Contents>
      </div>
    );
  }
  return (
    <div>
      <Contents>
        {categoryKorean}
        <Container>{ingredient}</Container>
      </Contents>
    </div>
  );
}

export default AllIngredients;
