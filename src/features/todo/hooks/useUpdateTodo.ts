'use client';

import { updateTodo, UpdateTodoVariables } from '@/features/todo/api/updateTodo';
import { TodoListResponse, TodoDetail } from '@/features/todo/model/types';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { useOptimisticMutation } from '@/shared/hooks/useOptimisticMutation';

export const useUpdateTodo = () => {
  return useOptimisticMutation<TodoDetail, UpdateTodoVariables, TodoListResponse>({
    mutationFn: updateTodo,
    queryKey: QUERY_KEYS.TODO_LIST,
    optimisticUpdate: (old, { itemId, body }) => {
      if (!old) {
        return [];
      }
      return old.map((item) =>
        item.id === itemId ? { ...item, isCompleted: body.isCompleted! } : item
      );
    },
  });
};
