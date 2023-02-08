import React from 'react';

// MUI
import { Dialog } from '@mui/material';

// Component
import RecipeContent from '../../Recipe/Modal/RecipeContent';

// Styled
import { RecipeDetailStyle } from './RecipeDetailStyle';

export default function RecipeDetail(props) {
  const { open, onClose, recipe } = props;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <RecipeContent onClose={onClose} recipe={recipe} />
    </Dialog>
  );
}
