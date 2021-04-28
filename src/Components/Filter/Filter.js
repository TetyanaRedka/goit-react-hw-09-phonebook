import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { filterContact } from '../../redux/contact/contactActions';
import { getFilter } from '../../redux/contact/contactSelectors';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.findtext}>
      Find contact by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ value: getFilter(state) });

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
