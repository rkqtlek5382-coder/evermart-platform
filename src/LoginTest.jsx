
import React, { useState } from 'react';
import { supabase } from './supabase';

export default function LoginTest() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function login(e) {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!supabase) {
      setMessage('Supabase 환경 변수를 확인해 주세요.');
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    setMessage(error
      ? '로그인 실패: ' + error.message
      : '로그인 성공!');

    setLoading(false);
  }

  return (
    <form onSubmit={login}>
      <h2>EVER MART 관리자 로그인 테스트</h2>

      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button disabled={loading}>
        {loading ? '로그인 중...' : '로그인'}
      </button>

      <p role="status">{message}</p>
    </form>
  );
}
