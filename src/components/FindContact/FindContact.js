import React from 'react';
import { find_contact } from './FindContact.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    <input
      className={find_contact}
      type='text'
      placeholder='Find contact by name'
      value={value}
      onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter;