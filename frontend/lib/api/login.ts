const login = async () => {
  const res = await fetch('http://localhost:4000/auth/login', {
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