import styled from '@emotion/styled';

export const ContactsItem = styled.li`
  min-width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  margin-bottom: 5px;
`;

export const Contact = styled.p`
  display: block;
  margin: 5px 0;
`;

export const DeleteButton = styled.button`
  height: 30px;
  width: 65px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  :active {
    color: white;
    background-color: red;
  }
`;
