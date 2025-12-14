'use client';

import { useState } from 'react';
import { useCreateTodo } from '@/features/todo/hooks/useCreateTodo';
import TodoInput from '@/features/todo/ui/todo-form/TodoInput';
import Button from '@/shared/ui/button/Button';

export default function TodoForm() {
  const createTodo = useCreateTodo();
  const [todo, setTodo] = useState('');

  const disabled = todo.trim() === '';

  const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo.mutate({ body: { name: todo } });
    setTodo('');
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <form className='flex h-[56px] gap-[16px]' onSubmit={handleTodoSubmit}>
      <TodoInput value={todo} onChange={handleChangeInput} />
      <Button theme='add' type='submit' disabled={disabled}>
        추가하기
      </Button>
    </form>
  );
}
