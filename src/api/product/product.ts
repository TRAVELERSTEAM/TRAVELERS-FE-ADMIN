import axios, { AxiosError } from 'axios';

const { VITE_APP_ADMIN_APIKEY, VITE_APP_BASE_URL } = import.meta.env;
const baseUrl = VITE_APP_BASE_URL;

export interface ProductProps {
  id: number;
  area: string;
  mainImage: string;
  preiod: number;
  price: ProductPrice;
  subImages: string[];
  summary: string[];
  target: string;
  theme: string;
  title: string;
}

interface ProductPrice {
  adult: number;
  infant: number;
  kid: number;
}

export const getAllProduct = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/products`, {
      headers: {
        Authorization: `Bearer ${VITE_APP_ADMIN_APIKEY}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
