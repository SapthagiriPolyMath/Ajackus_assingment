import styled from 'styled-components';

export const Popup = styled.div`
  background-color: #fdfdfd;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  padding: 0;
  max-width: 400px;
  margin: 2rem auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #2d3748;
  border: 1px solid red; 

  @media (min-width: 768px) {
    max-width: 600px;
  }

  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: #2d3748;
  }
`;

export const FormFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  width: 100%;
  border: 1px solid red;
  margin: 0;
  padding: 0;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid red;
    width: 100%; /* full width on small screens */
    padding: 0;

    > input {
      width: 100%;
      padding: 0.6rem;
      border: 1px solid #2d2d2d;
      border-radius: 4px;
      font-size: 0.95rem;
      background: none;
      color: #2d3748;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    > div {
      width: 45%; /* side-by-side layout on larger screens */
    }
  }

  label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 500;
    color: #4a5568;
  }
`;



export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;

  button {
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 4px;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background 0.2s ease;
    border: 1px solid #2d3748;
  }

  button:first-child {
    background: #90cdf4;
    color: #1a202c;

    &:hover {
      background: #63b3ed;
    }
  }

  button:last-child {
    background: #e2e8f0;
    color: #2d3748;

    &:hover {
      background: #cbd5e0;
    }
  }
`;
