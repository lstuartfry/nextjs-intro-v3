/*
  layout renders instantly, so this is a good place to render the TodoForm,
  which will never change, and shouldn't be rendered on an async Page component
  which may halt its rendering for no reason while the async request resolves.
*/

import TodoForm from '@/components/TodoForm';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-1/2 bg-green-400">{children}</div>
      <div className="bg-yellow-400 p-4 w-1/2">
        <TodoForm />
      </div>
    </div>
  );
}
