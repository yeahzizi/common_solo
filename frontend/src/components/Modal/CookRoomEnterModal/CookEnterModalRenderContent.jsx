import React from 'react';

// MUI
import { Grid } from '@mui/material';

export default function CookEnterModalRenderContent(props) {
  // Props
  const { ingredients } = props;

  // function
  const buyIngredient = ingredient => {
    window.open(
      `https://front.homeplus.co.kr/express/search?entry=direct&keyword=${ingredient}`,
      '_blank',
      'noopener, noreferrer'
    );
  };

  return (
    <Grid
      container
      columnSpacing={2}
      rowSpacing={2}
      columns={12}
      className="modal__ingredients-contents"
      justifyContent="space-evenly"
    >
      {ingredients.map(
        ({ ingredient: { ingredientId, ingredientName, ingredientIcon } }) => {
          return (
            <Grid item xs={6} key={ingredientId}>
              <div className="ingredient_icon">
                <img
                  src={ingredientIcon}
                  alt={`${ingredientName} 이미지`}
                  onClick={() => {
                    buyIngredient(ingredientName);
                  }}
                  aria-hidden
                />
              </div>
              <p>{ingredientName}</p>
            </Grid>
          );
        }
      )}
    </Grid>
  );
}
