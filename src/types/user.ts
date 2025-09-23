export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
};

export type NewUser = Omit<User, 'id'>;

export type UpdateUser = Partial<Omit<User, 'id'>> & { id: number };
