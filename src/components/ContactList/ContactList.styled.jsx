import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  list-style: none;
`;

export const Item = styled.li`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 8px 8px;
  cursor: pointer;
  box-shadow: 5px 5px;
  color: #00ffff;
`;
