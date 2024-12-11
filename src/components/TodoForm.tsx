import { createTodo } from '@/utils/actions';

export default function TodoForm() {
  return (
    <form action={createTodo}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label aria-label="content" htmlFor="content">
            Content
          </label>
          <input id="content" name="content" className="border border-black" />
        </div>
        <button className="bg-blue-400 p-2 rounded-lg text-white">
          submit
        </button>
      </div>
    </form>
  );
}
