import React from 'react';
import axios from 'axios';
const { VITE_APP_ADMIN_APIKEY, VITE_APP_BASE_URL } = import.meta.env;

const accessToken = VITE_APP_ADMIN_APIKEY;
const baseUrl = VITE_APP_BASE_URL;

interface GetReturnProps {
  contents: Contents[];
  currentPage: number;
  endPage: number;
  naviSize: number;
  showNext: boolean;
  showPrev: boolean;
  startPage: number;
}

export interface Contents {
  createdAt: string;
  id: number;
  sequence: number;
  title: string;
  writer: string;
}

// GET 자료실 데이터 모두 가져오기
export const getReferenceAll = async (): Promise<GetReturnProps | undefined> => {
  try {
    const { data } = await axios.get(`${baseUrl}/notify/ref-library`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export interface PostRequestProps {
  content: string;
  title: string;
}

// POST 자료실 글 등록
export const addReference = async (payload: PostRequestProps): Promise<void> => {
  try {
    const { status } = await axios.post(`${baseUrl}/notify/ref_library`, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (status === 201) {
      console.log(true);
    }
  } catch (error) {
    console.log(error);
  }
};

export interface DetailReturnProps {
  aroundTitles: AroundTitles[];
  content: string;
  createdAt: string;
  id: number;
  sequence: number;
  title: string;
  writer: string;
}

interface AroundTitles {
  id: number;
  sequence: number;
  title: string;
}

// GET 자료실 글 상세정보
export const getRefDetail = async (id: string): Promise<DetailReturnProps | undefined> => {
  if (id !== undefined) {
    try {
      const { data } = await axios.get(`${baseUrl}/notify/ref-library/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (error) {
      console.log('에러 발생!', error);
      return;
    }
  }
  return;
};
