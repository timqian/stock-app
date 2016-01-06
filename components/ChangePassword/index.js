import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import history from '../../utils/history';
import notie from '../../utils/notie';
import { BASEURL } from '../../config';

class ChangePassword extends Component {

  handleSubmit(event) {
    // console.log(this.props.location);
    event.preventDefault();
    const email = this.refs.loginEmail.value;
    const password = this.refs.loginPass.value;
    axios.post(`${BASEURL}/password_reset`, {
      email,
      password,
    }).then(res => {
      notie.alert(1, res.data.message, 2.5);
      history.replaceState(null, '/login');
    }).catch(res => {
      notie.alert(2, res.data.message, 2.5);
    });

  }

  render() {

    return (
      <div style={{maxWidth: '500px', margin: '40px auto', padding:'40px 0',
      background:'#e6e8eb', borderRadius: '10px'}}>
        <form className="pure-form pure-form-aligned"
          onSubmit={(event) => {this.handleSubmit(event);}}>
          <fieldset>
            <div className="pure-control-group">
              <label htmlFor="login-email">邮箱</label>
              <input ref="loginEmail" id="login-email" placeholder="email"
                defaultValue="timqian92@qq.com" type="text"/>
            </div>
            <div className="pure-control-group">
              <label htmlFor="login-pass">新密码</label>
              <input ref="loginPass" id="login-pass"
                placeholder="password" defaultValue="password1" type="text"
                style={{marginRight:'8px'}}/>
            </div>
            <div className="pure-controls">
              <button type="submit"
                className="pure-button pure-button-primary">发送邮件</button> <br/>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ChangePassword;
