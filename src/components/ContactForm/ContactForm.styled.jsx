import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 16px;
  background-color: #d9edf2;
  border: 2px solid #d8d8e7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0 auto 20px;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 12px;
`;
export const Input = styled.input`
  padding: 4px;
`;
export const Button = styled.button`
  padding: 8px 20px;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #ababea;
  font-size: 20px;
  background-color: #b8b8f1;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
