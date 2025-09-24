# User Management Dashboard

A responsive React + TypeScript application for managing users.  
Features include listing, searching, filtering, sorting, pagination, and CRUD operations (Create, Read, Update, Delete).  
Styled with **styled-components** for modular and responsive UI.

---

## 🚀 Features
- **User List**: Displays all users in a responsive table.
- **Add/Edit User**: Modal form with validation.
- **Delete User**: Remove users with a single click.
- **Search & Filters**: Search by name, email, or department; apply filters.
- **Sorting**: Sort by ID, name, email, or department.
- **Pagination**: Navigate through large datasets.
- **Responsive Design**: Works on mobile, tablet, and desktop.

---

## 🛠️ Tech Stack
- **React 18** with **TypeScript**
- **Vite** as the build tool
- **styled-components** for styling
- **JSONPlaceholder API** as a mock backend

For faster development I disabled noImplicitAny. With more time, I’d re‑enable it and add proper typings for stronger type safety.

---

## 🧪 Bug Fixes & Enhancements

Previously, sorting by id treated values as strings, causing incorrect order (e.g., 1, 10, 2, 3...). This was due to the default localeCompare method used for all fields.

Fix implemented:
Updated the sorting logic in useUsers.ts to handle id as a number.
Now uses direct numeric comparison for id and string comparison for other fields.
Sorting by id now behaves correctly: 1, 2, 3, ..., 10, 11.
This change improves data accuracy and user experience when sorting by ID.

## 🧭 Roadmap & Suggested Improvements

UI: 
   * In user dashBoard a loading Spinner canbe added instead of text.
   * loading spinner in add/update button in user update/create form while fetching results of
   POST/PUT opertion in the background.
   * incorporating aria label and enabling noImlicitAny is tsconfig.json, while upating all any type variables, functions and other components.
   * Add type definitions for API responses and form payloads.
   * Use React.FC<Props> for consistent component typing.

Performance :

   * Debounce search input to reduce unnecessary re-renders.
   * Memoize expensive computations and avoid unnecessary state updates.

