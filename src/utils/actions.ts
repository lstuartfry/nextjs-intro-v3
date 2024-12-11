'use server';
import { revalidatePath } from 'next/cache';
import db from './db';

export const createTodo = async (formData: FormData) => {
  await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  });
  revalidatePath('/todos');
};
