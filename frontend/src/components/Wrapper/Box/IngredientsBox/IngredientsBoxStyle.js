import styled, { css } from 'styled-components';

export const CategoriesBlock = styled.div`
  display: flex;
  padding: 1.5rem;
  width: 768px;
  margin: 0 auto;
  display: inline-block;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

export const Categories = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 1.6rem;

  &:hover {
    color: #febd2f;
  }

  /* ${props =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #febd2f;
      color: #febd2f;
      &:hover {
        color: #febd2f;
      }
    `}

  & + & {
    margin-left: 1rem;
  } */
`;

export const Contents = styled.div`
  width: 227px;
  height: 517px;
  background: #fff8ea;
  margin-left: 2.25rem;
  padding: 10px;
  margin-left: 8rem;
  margin-top: 2rem;
`;

export const H4 = styled.div`
  font-weight: 550;
  font-size: 18px;
`;
