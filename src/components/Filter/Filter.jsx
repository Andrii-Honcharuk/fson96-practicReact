import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { selectFilter, setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filter}
      onChange={handleChange}
    />
  );
};
