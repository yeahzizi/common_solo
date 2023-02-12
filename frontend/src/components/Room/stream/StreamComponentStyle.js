/* eslint-disable */
import styled from 'styled-components';

export const StreamBox = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.isFocused ? '100%' : `50%`)};
  height: ${props =>
    props.isFocused
      ? '100%'
      : props.subscribeNum <= 2
      ? '50%'
      : `${100 / Math.ceil(props.subscribeNum / 2)}%`};
`;
export const StreamComponent = styled.div`
  width: 95%;
  height: 80%;
  position: relative;
`;
export const NickName = styled.span`
  width: 50%;
  height: 20%;
  font-weight: 800;
  display: inline-block;
  font-size: 200%;
  float: right;
  text-align: right;
`;

export const StatusIcons = styled.div`
  width: 100%;
  height: 20%;
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: #febd2f;

  height: fit-content;

  color: #ffffff;
`;
export const CamMicIcon = styled.div`
  font-size: 170%;
  width: 50%;
  height: 100%;
  display: inline-block;
`;

export const ControlIcon = styled.div`
  width: 50%;
  height: 10%;
  display: inline-block;
`;
export const ControlTxt = styled.button`
  width: 100px;
  height: 100%;
  max-width: 100px;
  max-height: 20px;
  border-radius: 5px;
  font-size: 180%;
  background-color: #ffaf00;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;
export const CookTitle = styled.h1`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 3vw;
  line-height: 43px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  margin: 2% 0;
`;

export const CookThisUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 45px;
`;
