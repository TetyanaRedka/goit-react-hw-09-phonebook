import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactOperations from '../../redux/contact/contactOperations';
import styles from './ContactList.module.css';
import { getLoading, getVisibleContacts } from '../../redux/contact/contactSelectors';

class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <>
        {this.props.loading && <h1>...</h1>}
        <ul>
          {this.props.contacts.length > 0 &&
            this.props.contacts.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
                <button className={styles.deletebtn} onClick={() => this.props.deleteContact(id)}>
                  удалить
                </button>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
  loading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactOperations.deleteContacts(id)),
  getContacts: () => dispatch(contactOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
