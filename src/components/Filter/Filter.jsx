import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contactSlice';
import css from './Filter.module.css';
import { selectFilter } from '../../redux/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = event => {
    dispatch(filterContacts(event.target.value));
  };
  return (
    <input
      className={css.input}
      type="text"
      value={filter}
      onChange={handleFilter}
      name="filter"
      placeholder="Filter"
    />
  );
}
