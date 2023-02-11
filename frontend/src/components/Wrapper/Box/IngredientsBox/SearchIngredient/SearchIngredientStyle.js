import styled from 'styled-components';

export const Contents = styled.div`
  background: #fff8ea;
  height: 88px;
  margin-bottom: 4px;
  margin-top: 8px;
  padding: 12px;
  /* margin-left: 16rem; */

  h4,
  p {
    display: inline;
  }
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1.5px;
    background: #febd2f;
    background-clip: padding-box;
    border: 1px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: #febd2f;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
  @media screen and (max-width: 1024px) {
    overflow-x: auto;
  }
`;
export const Circle = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ffffff;
  font-size: smaller;
  text-align: center;
  line-height: 60px;
  /* margin-bottom: 1rem; */
  margin: 0.8rem;
  /* z-index: 1; */

  p {
    position: absolute;
    left: 11.1%;
    bottom: 30%;
    text-align: center;
  }

  img {
    width: 80%;
    height: 80%;
    align-items: center;
  }
`;
export const Button = styled.button`
  font-size: xx-small;
  float: left;
  width: 50%;
  width: 50px;
  /* z-index: 2; */
  position: absolute;
  /* height: 14px; */
  /* justify-content: center;
  text-align: center; */
  margin: 0;
  padding: 0;
  margin-left: 0;
  /* position: relative; */

  &:hover {
    color: #febd2f;
    background-color: rgb(0, 0, 0, 0.5);
  }
`;

export const Box = styled.div`
  margin: 0;
  padding: 0;
  width: 80px;
`;
