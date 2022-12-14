import Box from 'components/Box';
import { nanoid } from 'nanoid';
import { Field, Title } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterInputId = nanoid();

  return (
    <Box display="flex" flexDirection="column" pt={4} pb={4} width={300}>
      <Title htmlFor={filterInputId}>Find contacts by name</Title>
      <Field
        id={filterInputId}
        type="text"
        value={filter}
        onChange={e => {
          dispatch(setFilter(e.currentTarget.value));
        }}
      />
    </Box>
  );
};

export default Filter;
