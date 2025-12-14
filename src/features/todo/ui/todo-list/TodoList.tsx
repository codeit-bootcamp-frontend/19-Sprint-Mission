import { useUpdateTodo } from '@/features/todo/hooks/useUpdateTodo';
import { TodoListResponse, TodoListStatus } from '@/features/todo/model/types';
import ListEmpty from '@/features/todo/ui/todo-list/ListEmpty';
import TodoItem from '@/features/todo/ui/todo-list/TodoItem';
import TodoListBadge from '@/features/todo/ui/todo-list/TodoListBadge';
import TodoListContainer from '@/features/todo/ui/todo-list/TodoListContainer';

interface TodoListProps {
  status: TodoListStatus;
  items: TodoListResponse;
}

export default function TodoList({ status, items }: TodoListProps) {
  const updateMutation = useUpdateTodo();

  const toggleTodo = (itemId: number, isCompleted: boolean) => {
    updateMutation.mutate({
      itemId,
      body: { isCompleted },
    });
  };

  return (
    <div className='w-full max-w-[588px]'>
      <TodoListBadge status={status} />
      <TodoListContainer>
        {items.length === 0 ? (
          <ListEmpty status={status} />
        ) : (
          items.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              onChange={() => toggleTodo(item.id, !item.isCompleted)}
            />
          ))
        )}
      </TodoListContainer>
    </div>
  );
}
