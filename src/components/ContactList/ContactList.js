import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ renderItems, totalItems, handler }) => (
  <>
    <ul className={s.contact_list}>
      {renderItems.map(({ id, name, number }) => (
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
    <p className={s.total_contacts}>Total contacts: {totalItems.length}</p>
  </>
);

ContactList.propTypes = {
  renderItems: PropTypes.array.isRequired,
  totalItems: PropTypes.array.isRequired,
  handler: PropTypes.func.isRequired
}

export default ContactList;