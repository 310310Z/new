import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router'; // ルーターをインポート

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); // ルーターを初期化

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage("正しいメールとパスワードを入力してください"); // エラーを表示
    } else if (data.user) {
      console.log('Logged In:', data.user);
      router.push('/dashboard'); // ログイン成功後に /dashboard へリダイレクト
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-blue-600">日抄ログイン画面</h2>
        {errorMessage && <p className="mb-4 text-red-600">{errorMessage}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          ログイン
        </button>
      </div>
    </div>
  );
};

export default Login;
