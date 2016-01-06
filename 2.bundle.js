webpackJsonp([2],{

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(216);

	var _actions = __webpack_require__(228);

	var _utilsHistory = __webpack_require__(159);

	var _utilsHistory2 = _interopRequireDefault(_utilsHistory);

	// import { fetchStock } from '../../actions/index';

	var Signup = (function (_Component) {
	  _inherits(Signup, _Component);

	  function Signup() {
	    _classCallCheck(this, Signup);

	    _get(Object.getPrototypeOf(Signup.prototype), 'constructor', this).apply(this, arguments);
	  }

	  // TODO: 可能可以优化，这里只是为了使用store的dispatch 函数

	  _createClass(Signup, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      // console.log(this.props.location);
	      event.preventDefault();
	      var email = this.refs.loginEmail.value;
	      var name = this.refs.loginName.value;
	      var pass = this.refs.loginPass.value;
	      var dispatch = this.props.dispatch;

	      dispatch((0, _actions.signup)(email, name, pass));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      return _react2['default'].createElement(
	        'div',
	        { style: { maxWidth: '500px', margin: '40px auto', padding: '40px 0',
	            background: '#e6e8eb', borderRadius: '10px' } },
	        _react2['default'].createElement(
	          'form',
	          { className: 'pure-form pure-form-aligned',
	            onSubmit: function (event) {
	              _this.handleSubmit(event);
	            } },
	          _react2['default'].createElement(
	            'fieldset',
	            null,
	            _react2['default'].createElement(
	              'div',
	              { className: 'pure-control-group' },
	              _react2['default'].createElement(
	                'label',
	                { htmlFor: 'login-email' },
	                '邮箱'
	              ),
	              _react2['default'].createElement('input', { ref: 'loginEmail', id: 'login-email', placeholder: 'email',
	                defaultValue: 'timqian92@qq.com', type: 'text' })
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'pure-control-group' },
	              _react2['default'].createElement(
	                'label',
	                { htmlFor: 'login-name' },
	                '用户名'
	              ),
	              _react2['default'].createElement('input', { ref: 'loginName', id: 'login-name', placeholder: 'name',
	                defaultValue: 'timqian', type: 'text' })
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'pure-control-group' },
	              _react2['default'].createElement(
	                'label',
	                { htmlFor: 'login-pass' },
	                '密码'
	              ),
	              _react2['default'].createElement('input', { ref: 'loginPass', id: 'login-pass',
	                placeholder: 'password', defaultValue: 'password1', type: 'text',
	                style: { marginRight: '8px' } })
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'pure-controls' },
	              _react2['default'].createElement(
	                'button',
	                { type: 'submit',
	                  className: 'pure-button pure-button-primary' },
	                '注册'
	              ),
	              ' ',
	              _react2['default'].createElement('br', null)
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Signup;
	})(_react.Component);

	function select(state) {
	  return {
	    username: state.username
	  };
	}

	exports['default'] = (0, _reactRedux.connect)(select)(Signup);
	module.exports = exports['default'];

/***/ }

});