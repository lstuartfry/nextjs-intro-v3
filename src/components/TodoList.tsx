import Todo from './Todo';
import type { Todo as TodoType } from '@prisma/client';

export default function TodoList({ todos }: { todos: TodoType[] }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
