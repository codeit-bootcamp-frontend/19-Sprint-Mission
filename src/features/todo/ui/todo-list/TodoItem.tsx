'use client';

import { TodoList } from '@/features/todo/model/types';
import Icons from '@/shared/assets/icons';
import { cn } from '@/shared/lib/cn';

interface TodoItemProps {
  item: TodoList;
  onChange: () => void;
}

export default function TodoItem({ item, onChange }: TodoItemProps) {
  const { name, isCompleted } = item;

  return (
    <li
      className={cn(
        'h-[50px] rounded-full border-2 border-slate-900 px-[12px]',
        isCompleted && 'bg-violet-100'
      )}>
      <label
        className={cn(
          'flex h-full w-fit cursor-pointer items-center gap-[16px] text-slate-800',
          isCompleted && 'line-through'
        )}>
        <input
          name='todo-checkbox'
          type='checkbox'
          className='peer hidden'
          checked={isCompleted}
          onChange={onChange}
        />
        <span
          className={cn(
            'flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-slate-900 bg-yellow-50 transition',
            isCompleted && 'border-0 bg-violet-600'
          )}>
          <Icons.CheckIcon
            width={20}
            height={20}
            className={cn('opacity-0 transition', isCompleted && 'text-white opacity-100')}
          />
        </span>
        {name}
      </label>
    </li>
  );
}
