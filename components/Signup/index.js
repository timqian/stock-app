import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions';
import history from '../../utils/history';
// import { fetchStock } from '../../actions/index';

class Signup extends Component {

  handleSubmit(event) {
    // console.log(this.props.location);
    event.preventDefault();
    const email = this.refs.loginEmail.value;
    const name = this.refs.loginName.value;
    const pass = this.refs.loginPass.value;
    const { dispatch } = this.props;
    dispatch( signup(email, name, pass) );
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
              <label htmlFor="login-name">用户名</label>
              <input ref="loginName" id="login-name" placeholder="name"
                defaultValue="timqian" type="text"/>
            </div>
            <div className="pure-control-group">
              <label htmlFor="login-pass">密码</label>
              <input ref="loginPass" id="login-pass"
                placeholder="password" defaultValue="password1" type="text"
                style={{marginRight:'8px'}}/>
            </div>
            <div className="pure-controls">
              <button type="submit"
                className="pure-button pure-button-primary">注册</button> <br/>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}


// TODO: 可能可以优化，这里只是为了使用store的dispatch 函数
function select(state) {
  return {
    username: state.username,
  };
}

export default connect(select)(Signup);
