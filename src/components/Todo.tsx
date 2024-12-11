import type { Todo as TodoType } from '@prisma/client';

export default function Todo({ todo }: { todo: TodoType }) {
  return <div>{todo.content}</div>;
}
