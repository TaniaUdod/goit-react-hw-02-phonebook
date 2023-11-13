import { Input, Label } from './Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search by name"
      />
    </Label>
  );
};
