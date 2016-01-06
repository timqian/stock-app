import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Link } from 'react-router';
// import { fetchStock } from '../../actions/index';

class Login extends Component {

  handleSubmit(event) {
    // console.log(this.props.location);
    event.preventDefault();
    const email = this.refs.loginEmail.value;
    const pass = this.refs.loginPass.value;
    const { dispatch } = this.props;
    dispatch( login(email, pass) );
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
              <label htmlFor="login-pass">密码</label>
              <input ref="loginPass" id="login-pass"
                placeholder="password" defaultValue="password1" type="text"
                style={{marginRight:'8px'}}/>
              <Link to='/ChangePassword'><small>忘记密码?</small></Link>
            </div>
            <div className="pure-controls">
              <button type="submit"
                className="pure-button pure-button-primary">登录</button> <br/>
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

export default connect(select)(Login);
