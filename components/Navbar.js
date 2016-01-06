import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../actions';

class Navbar extends Component {

  handleLogout() {
    this.props.dispatch( logout() );
  }

  render() {
    const navStyle = {
      bar: {
        backgroundColor: '#F1F1F1',
        borderBottom: '1px solid #666',
        borderColor: '#e5e5e5',
        padding: '0.3em',
        margin: '0'
      },
      head: {
        color: '#000',
        fontWeight: 400,
        fontSize: '120%',
      },
      btnStyle: {
        float:'right',
        margin:'5px 15px 5px 0',
        color: '#333',
        border: '1px solid #d5d5d5',
        padding: '5px 10px'
        // borderColor:'#555'
      }
    };

    const { username } = this.props;

    return (
      <div className="pure-menu pure-menu-horizontal" style={navStyle.bar}>
        <a href="#" className="pure-menu-heading" style={navStyle.head}>STOK</a>

        {username ? (
          <a className="pure-menu-link pure-button"
            style={ navStyle.btnStyle }
            onClick={ () => { this.handleLogout(); } }>{username} 登出</a>
        ) : (
          <span>
            <Link className="pure-menu-link pure-button"
              style = { navStyle.btnStyle }
              to="/login">登录</Link>
            <Link className="pure-menu-link pure-button"
              style = { navStyle.btnStyle }
              to="/signup">注册</Link>
          </span>
        )}

      </div>
    );
  }
}

function select(state) {
  return {
    username: state.username,
  };
}

export default connect(select)(Navbar);
