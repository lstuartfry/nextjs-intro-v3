import db from '@/utils/db';
import TodoList from '@/components/TodoList';

async function getTodos() {
  return await db.todo.findMany({});
}

export default async function TodosPage() {
  const todos = await getTodos();
  return <TodoList todos={todos} />;
}
