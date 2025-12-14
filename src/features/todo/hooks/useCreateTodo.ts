'use client';

import { createTodo, CreateTodoVariables } from '@/features/todo/api/createTodo';
import { TodoDetail, TodoListResponse } from '@/features/todo/model/types';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { useOptimisticMutation } from '@/shared/hooks/useOptimisticMutation';

export const useCreateTodo = () => {
  return useOptimisticMutation<TodoDetail, CreateTodoVariables, TodoListResponse>({
    mutationFn: createTodo,
    queryKey: QUERY_KEYS.TODO_LIST,
    optimisticUpdate: (old, { body }) => {
      if (!old) {
        return [];
      }
      return [
        {
          id: Date.now(),
          name: body.name,
          isCompleted: false,
        },
        ...old,
      ];
    },
  });
};
