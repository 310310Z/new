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
    <div>
      <h2>ログイン画面</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
