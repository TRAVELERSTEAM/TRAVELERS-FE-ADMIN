import axios from 'axios';

const { VITE_APP_ADMIN_APIKEY, VITE_APP_BASE_URL } = import.meta.env;
const baseUrl = VITE_APP_BASE_URL;

export interface ResBannerProps {
  hashtag: string;
  title: string;
  image: string;
  productId: number;
}

export const getAllBanner = async (): Promise<ResBannerProps[]> => {
  try {
    const res = await axios.get(`${baseUrl}/banners`, {
      headers: {
        Authorization: `Bearer ${VITE_APP_ADMIN_APIKEY}`,
      },
    });
    return res.data;
  } catch (error) {
    throw `${error}`;
  }
};
