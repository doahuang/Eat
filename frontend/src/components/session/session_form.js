import React, { Component } from 'react'
import Errors from '../error/error';

export default class SessionForm extends Component {
  componentWillUnmount() {
    this.props.clearErrors();
  }

  submitForm(e, demo) {
    e.preventDefault();

    let name = this.nameNode ? this.nameNode.value : '';
    let user = {
      name,
      email: this.emailNode.value,
      password: this.passwordNode.value
    };
    if (demo) user = { email: 'demo@demo', password: '123123' };

    this.props.submit(user, this.props.closeModal);
  }

  render() {
    const { formType, shortcut } = this.props;

    return (
      <div className='session-form'>
        { shortcut }
        <form onSubmit={e => this.submitForm(e)}>
          {
            formType === 'Log In' ? null :
            <input placeholder='Name'
              ref={node => this.nameNode = node}
              maxLength={20}
              required
            />
          }
          <input type='email' placeholder='Email'
            ref={node => this.emailNode = node}
            maxLength={20}
            required 
          />
          <input type='password' placeholder='Password'
            ref={node => this.passwordNode = node}
            maxLength={10}
            required 
          />
          <button>{ formType }</button>
          {
            formType === 'Sign Up' ? null :
            <button onClick={e => this.submitForm(e, true)}>
              <b>Demo</b>
            </button>
          }
        </form>
        <Errors />
      </div>
    )
  }
}
