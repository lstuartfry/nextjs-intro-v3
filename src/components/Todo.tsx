'use client';

import type { Todo as TodoType } from '@prisma/client';
import { useTransition } from 'react';
import { updateTodoComplete } from '@/utils/actions';

export default function Todo({ todo }: { todo: TodoType }) {
  const [isPending, startTransition] = useTransition();
  const onTodoClick = () => {
    startTransition(() => updateTodoComplete(todo.id));
  };

  return (
    <button
      className={`flex bg-red-300 w-fit p-2 rounded-md ${
        todo.completed ? 'line-through text-gray-300' : 'text-white'
      }`}
      onClick={onTodoClick}
    >
      {todo.content}
    </button>
  );
}
