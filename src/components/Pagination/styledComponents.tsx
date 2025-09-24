import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
  color: #2d3748;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  label {
    font-weight: 500;
    color: #4a5568;
  }

  select {
    padding: 0.4rem 0.6rem;
    border: 1px solid #cbd5e0;
    border-radius: 4px;
    font-size: 0.95rem;
    background-color: #f7fafc;
    color: #2d3748;
  }

  span {
    font-size: 0.95rem;
    font-weight: 500;
  }

  button {
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 4px;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background 0.2s ease;
    border: 1px solid #2d3748;
    background: #90cdf4;
    color: #1a202c;

    &:hover:not(:disabled) {
      background: #63b3ed;
    }

    &:disabled {
      background: #e2e8f0;
      color: #a0aec0;
      cursor: not-allowed;
    }
  }
`;
