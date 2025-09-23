// src/components/Filters.tsx
import { useState } from 'react';
import type { User } from '../types/user';

type Props = {
  current: Partial<User>;
  onApply: (f: Partial<User>) => void;
  onClose: () => void;
};

export function Filters({ current, onApply, onClose }: Props) {
  const [firstName, setFirstName] = useState(current.firstName || '');
  const [lastName, setLastName] = useState(current.lastName || '');
  const [email, setEmail] = useState(current.email || '');
  const [department, setDepartment] = useState(current.department || '');

  return (
    <div className="popup">
      <h4>Filter users</h4>
      <label>First name</label>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      <label>Last name</label>
      <input value={lastName} onChange={e => setLastName(e.target.value)} />
      <label>Email</label>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <label>Department</label>
      <input value={department} onChange={e => setDepartment(e.target.value)} />
      <div className="actions">
        <button onClick={() => onApply({ firstName, lastName, email, department })}>Apply</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
