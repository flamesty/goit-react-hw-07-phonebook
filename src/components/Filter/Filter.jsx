import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/app/app-selectors';
import * as contactsActions from '../../redux/app/app-actions';

import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;