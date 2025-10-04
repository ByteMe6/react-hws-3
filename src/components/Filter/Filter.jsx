import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';
import './Filter.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  return (
    <div className="filter">
      <label>
        Пошук контактів
        <input
          value={filter}
          onChange={(e) => dispatch(updateFilter(e.target.value))}
          placeholder="Введіть ім'я"
        />
      </label>
    </div>
  );
}
