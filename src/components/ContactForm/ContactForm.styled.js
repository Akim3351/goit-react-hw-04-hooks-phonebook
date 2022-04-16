import styled from '@emotion/styled';

export const InputForm = styled.form`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid gray;
`;

export const InputLabel = styled.label`
  padding: 0px;
  text-align: left;
  margin: 5px auto 5px 0px;
  padding-left: 0;
  font-size: 20;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Input = styled.input`
  display: block;
  height: 25px;
  width: 300px;
  font-size: 16;
  font-weight: 600;
`;

export const Button = styled.button`
  height: 30px;
  width: 100px;
  border-radius: 5px;
  margin: 10px 0px 10px 0px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  outline: none;
  :active {
  color: white;
  background-color: blue;
`;
