import { Button, Item } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item key={id}>
      {name}: {number}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};
