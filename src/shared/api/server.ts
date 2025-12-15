import 'server-only';

import createInstance from '@/shared/api/axiosInstance';

const API_URL = process.env.API_URL as string;

export const serverApi = createInstance({ baseURL: API_URL });
