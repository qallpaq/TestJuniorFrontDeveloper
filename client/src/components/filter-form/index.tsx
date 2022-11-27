import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-lodash-debounce';
import { TextField } from '@mui/material';
import { getAuctionList } from 'thunk/index';
import { TRootReducer } from 'types/reducers';
import { setClicked, setValue } from 'reducers/filter';

/**
 * Фильтрация аукционов по названию автомобиля
 */
const FilterForm = () => {
  const { isClicked, value } = useSelector(
    (state: TRootReducer) => state.filter,
  );
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(value, 800);

  useEffect(() => {
    isClicked && dispatch(getAuctionList(value));
  }, [debouncedValue, isClicked]);

  return (
    <TextField
      sx={{ width: 250 }}
      label="Поиск по названию"
      placeholder="Введите текст"
      value={value}
      onChange={e => {
        dispatch(setClicked(true));
        dispatch(setValue(e.target.value));
      }}
    />
  );
};

export default FilterForm;
