import React from 'react';
import axios from 'axios';
const { VITE_APP_ADMIN_APIKEY, VITE_APP_BASE_URL } = import.meta.env;

const accessToken = VITE_APP_ADMIN_APIKEY;
const baseUrl = VITE_APP_BASE_URL;

interface RefReturnProps {
  contents: Contents[];
  currentPage: number;
  endPage: number;
  naviSize: number;
  showNext: boolean;
  showPrev: boolean;
  startPage: number;
}

interface Contents {
  createdAt: string;
  id: number;
  sequence: number;
  title: string;
  writer: string;
}

// 자료실 데이터 모두 가져오기
export const getReferenceAll = async (): Promise<RefReturnProps> => {
  const { data } = await axios.get(`${baseUrl}/notify/ref-library`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};
