import React, { useState } from 'react';
import '../styles/globals.css';

const Home = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'データベース　', completed: false },
    { id: 2, name: 'インターネット　', completed: false },
    { id: 3, name: '情報セキュリティ　', completed: false },
  ]);

  const toggleCompletion = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="mb-4">
            <div className="flex items-center">
              <strong className="mr-2">{task.name}</strong>
              <span className={`mr-4 ${task.completed ? 'text-green-600' : 'text-red-600'}`}>
                {task.completed ? '完了' : '未完了・編集中'}
              </span>
              {/* トグルボタン */}
              <button 
                className={`py-2 px-4 rounded-full transition duration-300 ${
                  task.completed ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-300 hover:bg-gray-600'
                } text-white`}
                onClick={() => toggleCompletion(task.id)}
              >
                {task.completed ? '編集' : '完了'}
              </button>
            </div>
          </li>
        ))}
      </ul>

    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">タスク一覧</h1>
      
      <div className="max-w-lg mx-auto bg-white shadow-md rounded p-4">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">タスクがありません。</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span>{task.name}</span>
                <span
                  
                >
                  {task.completed}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  );
};

export default Home;
