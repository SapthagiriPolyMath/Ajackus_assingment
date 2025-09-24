import { useState } from 'react';
import type { User } from '../../types/user';
import { Popup, FormFlex, Actions } from './styledComponents';

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
    <Popup>
      <h4>Filter users</h4>
      <FormFlex>
        <div>
          <label>First name</label>
          <input value={firstName} onChange={e => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last name</label>
          <input value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Department</label>
          <input value={department} onChange={e => setDepartment(e.target.value)} />
        </div>
      </FormFlex>
      <Actions>
        <button onClick={() => onApply({ firstName, lastName, email, department })}>Apply</button>
        <button onClick={onClose}>Close</button>
      </Actions>
    </Popup>
  );
}
