// src/utils/validation.ts
export function validateUser(u: { firstName: string; lastName: string; email: string; department: string }) {
    const errors: Record<string, string> = {};
    if (!u.firstName.trim()) errors.firstName = 'First name is required';
    if (!u.lastName.trim()) errors.lastName = 'Last name is required';
    if (!u.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u.email)) errors.email = 'Email is invalid';
    if (!u.department.trim()) errors.department = 'Department is required';
    return { valid: Object.keys(errors).length === 0, errors };
  }
  