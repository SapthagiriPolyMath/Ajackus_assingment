import type { User } from '../../types/user';
import {
  TableWrapper,
  Table,
  Th,
  Td,
  Tr,
  Actions,
} from './styledComponents';

type Props = {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
  sortKey: keyof User;
  sortDir: 'asc' | 'desc';
  setSortKey: (k: any) => void;
  setSortDir: (d: 'asc' | 'desc') => void;
};

export function UserTable({
  users,
  onEdit,
  onDelete,
  sortKey,
  sortDir,
  setSortKey,
  setSortDir,
}: Props) {
  const headers: Array<{ key: keyof User; label: string }> = [
    { key: 'id', label: 'ID' },
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'department', label: 'Department' },
  ];

  function toggleSort(key: keyof User) {
    if (sortKey === key) setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    else setSortKey(key);
  }

  return (
    <TableWrapper>
      <Table>
        <thead>
          <Tr>
            {headers.map((h) => (
              <Th key={h.key as string} onClick={() => toggleSort(h.key)}>
                {h.label} {sortKey === h.key ? (sortDir === 'asc' ? '▲' : '▼') : ''}
              </Th>
            ))}
            <Th>Actions</Th>
          </Tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <Tr key={u.id}>
              <Td>{u.id}</Td>
              <Td>{u.firstName}</Td>
              <Td>{u.lastName}</Td>
              <Td>{u.email}</Td>
              <Td>{u.department}</Td>
              <Td>
                <Actions>
                  <button className="edit" onClick={() => onEdit(u)}>Edit</button>
                  <button className="delete" onClick={() => onDelete(u.id)}>Delete</button>
                </Actions>
              </Td>
            </Tr>
          ))}
          {users.length === 0 && (
            <Tr>
              <Td colSpan={6}>No users found.</Td>
            </Tr>
          )}
        </tbody>
      </Table>
    </TableWrapper>
  );
}
