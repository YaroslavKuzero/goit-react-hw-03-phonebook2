import React from 'react';
import styles from './FindContact.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    <input className={styles.find_contact} type='text' placeholder='Find contact by name' value={value} onChange={onChange}></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter;