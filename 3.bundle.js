webpackJsonp([3],{

/***/ 256:
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

	var _axios = __webpack_require__(230);

	var _axios2 = _interopRequireDefault(_axios);

	var _utilsHistory = __webpack_require__(159);

	var _utilsHistory2 = _interopRequireDefault(_utilsHistory);

	var _utilsNotie = __webpack_require__(248);

	var _utilsNotie2 = _interopRequireDefault(_utilsNotie);

	var _config = __webpack_require__(247);

	var ChangePassword = (function (_Component) {
	  _inherits(ChangePassword, _Component);

	  function ChangePassword() {
	    _classCallCheck(this, ChangePassword);

	    _get(Object.getPrototypeOf(ChangePassword.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ChangePassword, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      // console.log(this.props.location);
	      event.preventDefault();
	      var email = this.refs.loginEmail.value;
	      var password = this.refs.loginPass.value;
	      _axios2['default'].post(_config.BASEURL + '/password_reset', {
	        email: email,
	        password: password
	      }).then(function (res) {
	        _utilsNotie2['default'].alert(1, res.data.message, 2.5);
	        _utilsHistory2['default'].replaceState(null, '/login');
	      })['catch'](function (res) {
	        _utilsNotie2['default'].alert(2, res.data.message, 2.5);
	      });
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
	                { htmlFor: 'login-pass' },
	                '新密码'
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
	                '发送邮件'
	              ),
	              ' ',
	              _react2['default'].createElement('br', null)
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ChangePassword;
	})(_react.Component);

	exports['default'] = ChangePassword;
	module.exports = exports['default'];

/***/ }

});