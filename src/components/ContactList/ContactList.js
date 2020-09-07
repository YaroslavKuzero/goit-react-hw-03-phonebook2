import React from 'react';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

const ContactList = ({ items, totalItems, handler }) => (
  <>
    <ul className={s.contact_list}>
      {items.map(({ id, name, number }) => (
        <li
          className={s.contact_list_item}
          key={id}>
          <span className={s.contact_name}>{name}: </span>
          <span className={s.contact_number}>{number}</span>
          <button className={s.btn_delete} title='delete'
            onClick={() => handler(id)}
          >x</button>
        </li>))}
    </ul>
    <p className={s.total_contacts}>Total contacts: {totalItems}</p>
  </>
);

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  totalItems: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired
}

export default ContactList;