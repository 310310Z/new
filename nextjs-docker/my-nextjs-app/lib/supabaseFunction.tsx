import { supabase } from './supabase';

// すべてのTodoを取得するための非同期関数
export const getAllTodos = async () => {
// todoテーブルからすべてのカラムを取得し、todosに代入します。
const todos = await supabase.from("todo").select('*');
// todosのデータをログに出力します。
console.log(todos.data);
// todos.dataを返します。
return todos.data;
};

// Todoを追加するための非同期関数
export const addTodo = async (title: string) => {
// todoテーブルにtitleを追加します。
await supabase.from("todo").insert({ title: title });
};

// Todoを削除するための非同期関数
export const deleteTodo = async (id: number) => {
// idが引数のTodoをtodoテーブルから削除します。
await supabase.from("todo").delete().eq("id", id);
};
