import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_BASE_API;

export interface LoginPayload {
  email: string;
  password: string;
}

interface LoginReturnValue {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
}

export const loginApi = async (payload: LoginPayload): Promise<LoginReturnValue | undefined> => {
  const { email, password } = payload;
  const { data } = await axios.post(`${baseUrl}/login`, {
    email,
    password,
  });

  axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
  localStorage.setItem('accessToken', JSON.stringify(data.accessToken));

  return data;
};
