const API_URL = process.env.NEXT_PUBLIC_API_URL;

const login = async () => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: '12345',
    }),
  });

  if (!res.ok) {
    throw new Error('Login failed');
  }

  const data = await res.json();

  localStorage.setItem('token', data.token);
};