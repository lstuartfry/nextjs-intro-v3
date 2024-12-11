import Todo from './Todo';
import type { Todo as TodoType } from '@prisma/client';

export default function TodoList({ todos }: { todos: TodoType[] }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
