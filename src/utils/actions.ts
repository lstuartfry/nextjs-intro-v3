'use server';
import { revalidatePath } from 'next/cache';
import db from './db';
import { Todo } from '@prisma/client';
import { routes } from './routes';

const isFormDataString = (
  value: FormDataEntryValue | null
): value is string => {
  return value instanceof String;
};

export const createTodo = async (formData: FormData) => {
  const content = formData.get('content');
  if (isFormDataString(content)) {
    await db.todo.create({
      data: {
        content,
      },
    });
  }
  revalidatePath(routes.TODOS);
};

export const updateTodoComplete = async (id: Todo['id']) => {
  const todo = await db.todo.findUnique({
    where: {
      id,
    },
  });
  await db.todo.update({
    where: {
      id,
    },
    data: {
      completed: !todo?.completed,
    },
  });
  revalidatePath(routes.TODOS);
};
