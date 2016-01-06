webpackJsonp([6],{

/***/ 259:
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

	var _reactRouter = __webpack_require__(178);

	var Tag = (function (_Component) {
	  _inherits(Tag, _Component);

	  function Tag() {
	    _classCallCheck(this, Tag);

	    _get(Object.getPrototypeOf(Tag.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Tag, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var _id = _props._id;
	      var tag = _props.tag;

	      var tagStyle = {
	        fontSize: '80%',
	        borderRadius: '1rem',
	        background: 'rgb(28, 137, 184)',
	        padding: '0.2em 0.6em 0.2em 0.6em',
	        verticalAlign: 'baseline'
	      };
	      return _react2['default'].createElement(
	        'span',
	        null,
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/oneStock/' + _id + '/tagstocks/' + tag,
	            className: 'pure-button pure-button-primary',
	            style: tagStyle },
	          tag
	        ),
	        ' '
	      );
	    }
	  }]);

	  return Tag;
	})(_react.Component);

	exports['default'] = Tag;
	module.exports = exports['default'];

/***/ },

/***/ 263:
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

	var _actionsIndex = __webpack_require__(228);

	var _StockLink = __webpack_require__(264);

	var _StockLink2 = _interopRequireDefault(_StockLink);

	var TagStocks = (function (_Component) {
	  _inherits(TagStocks, _Component);

	  function TagStocks() {
	    _classCallCheck(this, TagStocks);

	    _get(Object.getPrototypeOf(TagStocks.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(TagStocks, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var params = _props.params;

	      dispatch((0, _actionsIndex.fetchTagStocks)(params.tag));
	    }

	    // for router!! https://github.com/rackt/redux/issues/702
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _props2 = this.props;
	      var dispatch = _props2.dispatch;
	      var params = _props2.params;

	      var nextTag = nextProps.params.tag;
	      if (nextTag !== params.tag) {
	        dispatch((0, _actionsIndex.fetchTagStocks)(nextTag));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tagStocks = this.props.tagStocks;

	      var list = tagStocks.map(function (stock) {
	        return _react2['default'].createElement(_StockLink2['default'], { stock: stock });
	      });

	      var tbStyle = {
	        width: '100%'
	      };

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'table',
	          { className: 'pure-table pure-table-horizontal', style: tbStyle },
	          _react2['default'].createElement(
	            'thead',
	            null,
	            _react2['default'].createElement(
	              'tr',
	              null,
	              _react2['default'].createElement(
	                'th',
	                null,
	                '相关股票'
	              ),
	              _react2['default'].createElement(
	                'th',
	                null,
	                'tags'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'tbody',
	            null,
	            list
	          )
	        )
	      );
	    }
	  }]);

	  return TagStocks;
	})(_react.Component);

	function select(state) {
	  return {
	    tagStocks: state.tagStocks
	  };
	}

	exports['default'] = (0, _reactRedux.connect)(select)(TagStocks);
	module.exports = exports['default'];

/***/ },

/***/ 264:
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

	var _reactRouter = __webpack_require__(178);

	var _reusableTag = __webpack_require__(259);

	var _reusableTag2 = _interopRequireDefault(_reusableTag);

	var StockLink = (function (_Component) {
	  _inherits(StockLink, _Component);

	  function StockLink() {
	    _classCallCheck(this, StockLink);

	    _get(Object.getPrototypeOf(StockLink.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(StockLink, [{
	    key: 'render',
	    value: function render() {
	      // console.log(this.props.stock);
	      var _props$stock = this.props.stock;
	      var _id = _props$stock._id;
	      var name = _props$stock.name;
	      var tags = _props$stock.tags;

	      tags = tags.map(function (tag) {
	        return _react2['default'].createElement(_reusableTag2['default'], { tag: tag, _id: _id });
	      });

	      var stockStyle = {
	        color: '#265778',
	        display: 'inline-block',
	        textDecoration: 'none'
	      };

	      return _react2['default'].createElement(
	        'tr',
	        null,
	        _react2['default'].createElement(
	          'td',
	          null,
	          _react2['default'].createElement(
	            'span',
	            { style: stockStyle },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/oneStock/' + _id,
	                style: stockStyle },
	              name,
	              ' ',
	              _react2['default'].createElement(
	                'small',
	                null,
	                '(',
	                _id,
	                ')'
	              )
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'td',
	          null,
	          tags
	        )
	      );
	    }
	  }]);

	  return StockLink;
	})(_react.Component);

	exports['default'] = StockLink;
	module.exports = exports['default'];

/***/ }

});