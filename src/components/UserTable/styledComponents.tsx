import styled from 'styled-components';

export const TableWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  overflow-x: auto;
  margin-top: 1rem;
  padding: 0px;
  align-self: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  background-color: #fdfdfd;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.75rem;
  background: #e2e8f0; /* soft gray-blue */
  border-bottom: 2px solid #cbd5e0;
  color: #2d3748;
`;

export const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #e2e8f0;
  color: #4a5568;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background: #f7fafc; /* very light gray */
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  button {
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: background 0.3s ease;
  }

  .edit {
    background: #90cdf4; /* muted blue */
    color: #1a202c;

    &:hover {
      background: #63b3ed;
    }
  }

  .delete {
    background: #feb2b2; /* muted red */
    color: #1a202c;

    &:hover {
      background: #fc8181;
    }
  }
`;
