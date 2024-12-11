import db from '@/utils/db';
import TodoList from '@/components/TodoList';

async function getTodos() {
  // tests loading UI
  await new Promise((resolve) => setTimeout(() => resolve(null), 2000));
  const todos = await db.todo.findMany({});
  return todos;
}

export default async function TodosPage() {
  const todos = await getTodos();
  return <TodoList todos={todos} />;
}
