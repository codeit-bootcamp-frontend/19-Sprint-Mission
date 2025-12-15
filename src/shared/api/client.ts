import createInstance from '@/shared/api/axiosInstance';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const clientApi = createInstance({ baseURL: API_URL });
