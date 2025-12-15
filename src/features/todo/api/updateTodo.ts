import { UpdateTodoReqBody } from '@/features/todo/model/types';
import { clientApi } from '@/shared/api/client';

export interface UpdateTodoVariables {
  itemId: number;
  body: UpdateTodoReqBody;
}

export const updateTodo = async ({ itemId, body }: UpdateTodoVariables) => {
  const res = await clientApi.patch(`/items/${itemId}`, body);
  return res.data;
};
