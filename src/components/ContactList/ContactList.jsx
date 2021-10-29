import React, { Component } from "react";
import PropTypes from "prop-types";
import { uuid } from "uuidv4";
import s from './ContactList.module.css';


class ContactList extends Component {
  deleteId = (Id) => {
    this.props.del(Id);
  };
  createList = () => {
    return this.props.contacts.map((contact) => {
      return (
        <li key={uuid()} id={contact.id} className={s.item}>
          {`${contact.name}: ${contact.number}`}
          <button
            className={s.btn}
            data-id={contact.id}
            onClick={() => this.deleteId(contact.id)}
          >

          </button>
        </li>
      );
    });
  };

  render() {
    return <ul>{this.createList()}</ul>;
  }
}
ContactList.propTypes = {
  contacts: PropTypes.array,
  del: PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};

export default ContactList;
