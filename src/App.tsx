// src/App.tsx
import { useState } from 'react';
import { useUsers } from './hooks/useUsers';
import { UserTable } from './components/UserTable/index';
import { UserForm } from './components/UserForm/index';
import { Filters } from './components/Filters';
import { Pagination } from './components/Pagination';
import type { User, NewUser } from './types/user';

export default function App() {
  const {
    users, total, loading, error,
    query, setQuery,
    filters, setFilters,
    sortKey, setSortKey,
    sortDir, setSortDir,
    limit, setLimit,
    page, setPage,
    create, update, remove,
  } = useUsers();

  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<User | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container">
      <header className="toolbar">
        <h2>User management</h2>
        <div className="controls">
          <input
            placeholder="Search name, email, department"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button onClick={() => setShowFilters(true)}>Filters</button>
          <button onClick={() => { setEditing(null); setShowForm(true); }}>Add user</button>
        </div>
      </header>

      {error && <div className="error-banner">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <UserTable
            users={users}
            onEdit={(u) => { setEditing(u); setShowForm(true); }}
            onDelete={remove}
            sortKey={sortKey as any}
            sortDir={sortDir}
            setSortKey={setSortKey as any}
            setSortDir={setSortDir}
          />
          <Pagination
            total={total}
            page={page}
            limit={limit}
            setPage={setPage}
            setLimit={setLimit}
          />
        </>
      )}

      {showForm && (
        <UserForm
          initial={editing}
          onSubmit={async (payload) => {
            if ('id' in payload) await update(payload);
            else await create(payload as NewUser);
          }}
          onClose={() => setShowForm(false)}
        />
      )}

      {showFilters && (
        <Filters
          current={filters}
          onApply={(f) => { setFilters(f); setShowFilters(false); }}
          onClose={() => setShowFilters(false)}
        />
      )}
    </div>
  );
}
