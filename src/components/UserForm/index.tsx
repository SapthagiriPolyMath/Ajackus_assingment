// src/components/UserForm.tsx
import React, { useState, useEffect } from 'react';
import type { User, NewUser } from '../../types/user';
import { validateUser } from '../../utils/validation';
import {
  Backdrop,
  Modal,
  Title,
  Label,
  Input,
  Error,
  Actions,
  Button,
} from './styledComponents';

type Props = {
  initial?: User | null;
  onSubmit: (payload: NewUser | User) => Promise<void> | void;
  onClose: () => void;
};

export function UserForm({ initial, onSubmit, onClose }: Props) {
  const [firstName, setFirstName] = useState(initial?.firstName || '');
  const [lastName, setLastName] = useState(initial?.lastName || '');
  const [email, setEmail] = useState(initial?.email || '');
  const [department, setDepartment] = useState(initial?.department || '');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setErrors({});
  }, [initial]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { valid, errors: errs } = validateUser({ firstName, lastName, email, department });
    if (!valid) {
      setErrors(errs);
      return;
    }
    const payload = initial
      ? { ...initial, firstName, lastName, email, department }
      : { firstName, lastName, email, department };
    await onSubmit(payload as any);
    onClose();
  }

  return (
    <Backdrop>
      <Modal>
        <Title>{initial ? 'Edit User' : 'Add User'}</Title>
        <form onSubmit={handleSubmit}>
          <Label>First name</Label>
          <Input value={firstName} onChange={e => setFirstName(e.target.value)} />
          {errors.firstName && <Error>{errors.firstName}</Error>}

          <Label>Last name</Label>
          <Input value={lastName} onChange={e => setLastName(e.target.value)} />
          {errors.lastName && <Error>{errors.lastName}</Error>}

          <Label>Email</Label>
          <Input value={email} onChange={e => setEmail(e.target.value)} />
          {errors.email && <Error>{errors.email}</Error>}

          <Label>Department</Label>
          <Input value={department} onChange={e => setDepartment(e.target.value)} />
          {errors.department && <Error>{errors.department}</Error>}

          <Actions>
            <Button type="submit" variant="primary">
              {initial ? 'Save' : 'Add'}
            </Button>
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </Actions>
        </form>
      </Modal>
    </Backdrop>
  );
}
