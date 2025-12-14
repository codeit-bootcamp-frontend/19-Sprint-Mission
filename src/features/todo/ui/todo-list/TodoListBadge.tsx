import { TodoListStatus } from '@/features/todo/model/types';
import { cn } from '@/shared/lib/cn';

interface TodoListBadgeProps {
  status: TodoListStatus;
}

export default function TodoListBadge({ status }: TodoListBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex h-[36px] items-center rounded-full px-[27px] font-accent text-lg',
        {
          'bg-lime-300 text-green-700': status === 'TO DO',
          'bg-green-700 text-amber-300': status === 'DONE',
        }
      )}>
      {status}
    </span>
  );
}
