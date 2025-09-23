import type { User, NewUser, UpdateUser } from '../types/user';

const BASE = 'https://jsonplaceholder.typicode.com';

// generic HTTP helper
async function http<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const res = await fetch(input, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Request failed: ${res.status} ${text}`);
  }
  return res.json();
}

export async function fetchUsers(): Promise<User[]> {
  const raw = await http<any[]>(`${BASE}/users`);
  return raw.map(u => {
    const [firstName, ...rest] = (u.name ?? '').split(' ');
    const lastName = rest.join(' ') || '';
    return {
      id: u.id,
      firstName: firstName || (u.username ?? 'Unknown'),
      lastName,
      email: u.email ?? '',
      department: u.company?.name ?? 'General',
    };
  });
}

export async function addUser(user: NewUser): Promise<User> {
  const created = await http<User>(`${BASE}/users`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
  return { ...user, id: (created as any).id ?? Math.floor(Math.random() * 10000) };
}

export async function updateUser(user: UpdateUser): Promise<User> {
  const updated = await http<User>(`${BASE}/users/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
  });
  return { ...updated, ...user } as User;
}

export async function deleteUser(id: number): Promise<void> {
  await http<void>(`${BASE}/users/${id}`, { method: 'DELETE' });
}
