// src/hooks/useUsers.ts
import { useEffect, useMemo, useState } from 'react';
import type { User, NewUser, UpdateUser } from '../types/user';
import { fetchUsers, addUser, updateUser, deleteUser } from '../api/users';

type SortKey = keyof Pick<User, 'firstName' | 'lastName' | 'email' | 'department'>;

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // UI controls
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Partial<User>>({});
  const [sortKey, setSortKey] = useState<SortKey>('firstName');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
        setError(null);
      } catch (e: any) {
        setError(e.message || 'Failed to load users');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return users.filter(u => {
      const matchesQuery =
        !q ||
        [u.firstName, u.lastName, u.email, u.department]
          .join(' ')
          .toLowerCase()
          .includes(q);
      const matchesFilters =
        (!filters.firstName || u.firstName.toLowerCase().includes(filters.firstName.toLowerCase())) &&
        (!filters.lastName || u.lastName.toLowerCase().includes(filters.lastName.toLowerCase())) &&
        (!filters.email || u.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (!filters.department || u.department.toLowerCase().includes(filters.department.toLowerCase()));
      return matchesQuery && matchesFilters;
    });
  }, [users, query, filters]);

  const sorted = useMemo(() => {
    const s = [...filtered].sort((a, b) => {
      const va = (a[sortKey] || '').toString().toLowerCase();
      const vb = (b[sortKey] || '').toString().toLowerCase();
      return sortDir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va);
    });
    return s;
  }, [filtered, sortKey, sortDir]);

  const total = sorted.length;
  const paginated = useMemo(() => {
    const start = (page - 1) * limit;
    return sorted.slice(start, start + limit);
  }, [sorted, page, limit]);

  // CRUD operations
  async function create(user: NewUser) {
    const res = await addUser(user);
    // optimistic merge since backend doesn’t persist
    setUsers(prev => [res, ...prev]);
  }

  async function update(u: UpdateUser) {
    const res = await updateUser(u);
    setUsers(prev => prev.map(x => (x.id === u.id ? res : x)));
  }

  async function remove(id: number) {
    await deleteUser(id);
    setUsers(prev => prev.filter(x => x.id !== id));
  }

  return {
    users: paginated,
    total,
    loading,
    error,
    query,
    setQuery,
    filters,
    setFilters,
    sortKey,
    setSortKey,
    sortDir,
    setSortDir,
    limit,
    setLimit,
    page,
    setPage,
    create,
    update,
    remove,
  };
}
