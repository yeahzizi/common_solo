import React from 'react';

// MUI
import { Stack } from '@mui/material';

// Style
import { ProfileInformationStyle } from './ProfileInformationStyle';

export default function ProfileInformation(props) {
  const {
    userInformation: {
      nickname,
      follower,
      following,
      temperature,
      like,
      rank,
      message,
    },
  } = props;
  return (
    <ProfileInformationStyle>
      <h2>{nickname}</h2>
      <div>
        <div className="follow">
          <p>
            팔로워 <span>{follower}</span> | 팔로잉 <span>{following}</span>
          </p>
        </div>
        <Stack spacing={4} direction="row" className="status">
          <div className="item">
            <div className="icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/637/637651.png"
                alt="온도 아이콘"
              />
              <p>온도</p>
            </div>
            <p>{temperature}도</p>
          </div>
          <div className="item">
            <div className="icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9389/9389707.png"
                alt="선호분야 아이콘"
              />
              <p>선호</p>
            </div>
            <p>{like}</p>
          </div>
          <div className="item">
            <div className="icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1021/1021641.png"
                alt="랭크 아이콘"
              />
              <p>랭크</p>
            </div>
            <p>{rank}</p>
          </div>
        </Stack>
        <div className="message">
          <p>{message}</p>
        </div>
      </div>
    </ProfileInformationStyle>
  );
}
