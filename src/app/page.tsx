import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getTodoListServer } from '@/features/todo/api/getTodoList/server';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import TodoForm from '@/widgets/todo/TodoForm';
import TodoView from '@/widgets/todo/TodoView';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.TODO_LIST,
    queryFn: getTodoListServer,
  });

  return (
    <>
      <TodoForm />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodoView />
      </HydrationBoundary>
    </>
  );
}
