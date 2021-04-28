import React, { Component } from 'react';

import { connect } from 'react-redux';

import userOperations from '../../redux/userAuth/userOperations';
import styles from '../ContactForm/ContactForm.module.css';

export class UserRegisterForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.ifRegisterForm()
      ? this.props.onRegisterUser(this.state)
      : this.props.onLoginUser({
          email: this.state.email,
          password: this.state.password,
        });

    this.setState({ name: '', email: '', password: '' });
  };

  ifRegisterForm = () => {
    return this.props.location.pathname === '/registration';
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        {this.ifRegisterForm() ? <div> REGISTRATION </div> : <div> LOGIN </div>}
        <form onSubmit={this.handleSubmit} className={styles.formStyle}>
          {this.ifRegisterForm() && (
            <label className={styles.pointStyle}>
              Name:
              <input type="text" name="name" value={name} onChange={this.handleChange} className={styles.input} />
            </label>
          )}
          <label className={styles.pointStyle}>
            Email:
            <input type="email" name="email" value={email} onChange={this.handleChange} className={styles.input} />
          </label>
          <label className={styles.pointStyle}>
            Password:
            <input type="password" name="password" value={password} onChange={this.handleChange} className={styles.input} />
          </label>
          <button type="submit">{this.ifRegisterForm() ? 'Registration' : 'Login'}</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegisterUser: data => dispatch(userOperations.registerUser(data)),
  onLoginUser: data => dispatch(userOperations.loginUser(data)),
});

export default connect(null, mapDispatchToProps)(UserRegisterForm);
