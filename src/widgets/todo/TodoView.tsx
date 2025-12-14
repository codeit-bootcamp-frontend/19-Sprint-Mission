'use client';

import { useQuery } from '@tanstack/react-query';
import { getTodoList } from '@/features/todo/api/getTodoList/client';
import { TodoListResponse } from '@/features/todo/model/types';
import TodoList from '@/features/todo/ui/todo-list/TodoList';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

const TodoView = () => {
  const { data, error, isError, isPending } = useQuery<TodoListResponse>({
    queryKey: QUERY_KEYS.TODO_LIST,
    queryFn: getTodoList,
  });

  if (isPending) {
    return <div>데이터를 불러오는 중입니다..</div>;
  }

  if (isError) {
    return <div>에러 발생: {error.message}</div>;
  }

  const todoItems = data.filter((item) => !item.isCompleted);
  const doneItems = data.filter((item) => item.isCompleted);

  return (
    <section className='mt-[40px] flex flex-col gap-[24px] sm:flex-row'>
      <TodoList status='TO DO' items={todoItems} />
      <TodoList status='DONE' items={doneItems} />
    </section>
  );
};

export default TodoView;
