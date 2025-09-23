// src/components/UserForm.styled.tsx
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-top: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.4rem;
  margin-top: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Error = styled.small`
  color: red;
  display: block;
`;

export const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

type ButtonProps = {
    variant?: 'primary' | 'secondary';
  };
  
  export const Button = styled.button<ButtonProps>`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  
    ${({ variant }) =>
      variant === 'primary'
        ? `
          background: #007bff;
          color: white;
        `
        : `
          background: #e0e0e0;
          color: black;
        `}
  `;