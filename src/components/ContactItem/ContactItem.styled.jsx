import styled from 'styled-components';

export const Item = styled.li`
  background-color: #f9fdfd;
  border: 2px solid #d8d8e7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`;
export const Button = styled.button`
  padding: 4px 16px;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #ababea;
  font-size: 16px;
  background-color: #b8b8f1;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
