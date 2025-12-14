import { CreateTodoReqBody } from '@/features/todo/model/types';
import { clientApi } from '@/shared/api/client';

export interface CreateTodoVariables {
  body: CreateTodoReqBody;
}

export const createTodo = async ({ body }: CreateTodoVariables) => {
  const res = await clientApi.post('/items', body);
  return res.data;
};
