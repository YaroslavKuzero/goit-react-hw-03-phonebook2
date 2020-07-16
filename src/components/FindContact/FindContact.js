import React from 'react';
import styles from './FindContact.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    <input className={styles.find_contact} type='text' placeholder='Find contact by name' value={value} onChange={onChange}></input>
  </label>
);

export default Filter;