import { NextResponse } from 'next/server';
import db from '@/utils/db';

export async function GET(request: Request) {
  const todos = await db.todo.findMany({});
  return NextResponse.json({ data: todos });
}

export async function POST(request: Request) {
  const data = await request.json();
  const newTodo = await db.todo.create({
    data,
  });
  return NextResponse.json({ data: newTodo });
}
