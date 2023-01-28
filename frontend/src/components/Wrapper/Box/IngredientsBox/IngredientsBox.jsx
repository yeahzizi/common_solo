import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import FavoriteIngredients from './FavoriteIngredients/FavoriteIngredients';
import MyIngredients from './MyIngredients/MyIngredients';
import AllIngredients from './AllIngredients/AllIngredients';
import dummy from './ingredients.json';

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Categories = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${props =>
    props.active &&
    css`
            font-weight: 600;
            border-bottom: 2px solid #FEBD2F;
            color; #FEBD2F;
            &:hover {
                color: #FEBD2F;
            }
        `}

  & + & {
    margin-left: 1rem;
  }
`;

function IngredientsBox({ onSelect, category }) {
  const [data, setData] = useState(dummy);
  const [categories, setCategories] = useState([
    {
      id: 'all',
      text: '전체보기',
    },
    {
      id: 'MEAT',
      text: '육류',
    },
    {
      id: 'VEGETABLE',
      text: '채소류',
    },
    {
      id: 'GRAIN',
      text: '곡류/견과류/콩류/가루',
    },
    {
      id: 'DAIRY',
      text: '우유/유제품/달걀류',
    },
    {
      id: 'SEASONING',
      text: '장류/조미료/향신료/양념',
    },
    {
      id: 'FRUIT',
      text: '과일',
    },
    {
      id: 'BREAD',
      text: '빵류/잼',
    },
    {
      id: 'NOODLE',
      text: '면류',
    },
    {
      id: 'PROCESSED FOOD',
      text: '가공식품',
    },
    {
      id: 'OIL',
      text: '오일',
    },
    {
      id: 'DRINK',
      text: '물/음료/주류',
    },
    {
      id: 'KIMCHI',
      text: '젓갈',
    },
    {
      id: 'ETC',
      text: '기타',
    },
  ]);

  const onIngredient = id => {
    if (id === 'all') {
      setData(dummy);
    } else {
      setData(dummy.filter(item => item.id === id));
    }
  };

  return (
    <>
      <CategoriesBlock>
        {categories.map(v => (
          <Categories
            key={v.id}
            active={category === v.id}
            onClick={() => onSelect(v.id)}
          >
            {v.text}
          </Categories>
        ))}
      </CategoriesBlock>
      <FavoriteIngredients />
      <MyIngredients />
    </>
  );
}
// }

export default IngredientsBox;
