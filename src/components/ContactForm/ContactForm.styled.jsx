import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 6px;
  background-color: #48d1cc;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: #000000;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 10px 10px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  color: #000000;
  font-size: 20px;
  background-color: #48d1cc;
`;
