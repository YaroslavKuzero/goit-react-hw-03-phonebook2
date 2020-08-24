import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ renderItems, totalItems, handler }) => (
  <>
    <ul className={styles.contact_list}>
      {renderItems.map(item => (<li className={styles.contact_list_item} key={item.id}><span className={styles.contact_name}>{item.name}: </span><span className={styles.contact_number}>{item.number}</span>
        <button className={styles.btn_delete} title='delete'
          onClick={() => handler(item.id)}
        >x</button>
      </li>))}
    </ul>
    <p className={styles.total_contacts}>Total contacts: {totalItems.length}</p>
  </>
);

ContactList.propTypes = {
  renderItems: PropTypes.array.isRequired,
  totalItems: PropTypes.array.isRequired,
  handler: PropTypes.func.isRequired
}

export default ContactList;