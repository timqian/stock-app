webpackJsonp([4],{

/***/ 257:
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

	var _StockInfo = __webpack_require__(258);

	var _StockInfo2 = _interopRequireDefault(_StockInfo);

	var _TreeView = __webpack_require__(260);

	var _TreeView2 = _interopRequireDefault(_TreeView);

	var OneStock = (function (_Component) {
	  _inherits(OneStock, _Component);

	  function OneStock() {
	    _classCallCheck(this, OneStock);

	    _get(Object.getPrototypeOf(OneStock.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(OneStock, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var params = _props.params;

	      dispatch((0, _actions.fetchStock)(params._id));
	    }

	    // for router!! https://github.com/rackt/redux/issues/702
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _props2 = this.props;
	      var dispatch = _props2.dispatch;
	      var params = _props2.params;

	      var nextId = nextProps.params._id;
	      if (nextId !== params._id) {
	        dispatch((0, _actions.fetchStock)(nextId));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log(location);
	      var children = this.props.children;
	      var _props$stock = this.props.stock;
	      var _id = _props$stock._id;
	      var name = _props$stock.name;
	      var tags = _props$stock.tags;

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_StockInfo2['default'], { name: name, _id: _id, tags: tags }),
	        _react2['default'].createElement(
	          'div',
	          { className: 'pure-g' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'pure-u-1 pure-u-sm-1-3 pure-u-md-1-4 pure-u-lg-1-5' },
	            _react2['default'].createElement(_TreeView2['default'], { _id: _id })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'pure-u-1 pure-u-sm-2-3 pure-u-md-3-4 pure-u-lg-4-5' },
	            children
	          )
	        )
	      );
	    }
	  }]);

	  return OneStock;
	})(_react.Component);

	function select(state) {
	  return {
	    stock: state.stock
	  };
	}

	exports['default'] = (0, _reactRedux.connect)(select)(OneStock);
	module.exports = exports['default'];

/***/ },

/***/ 258:
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

	var _reusableTag = __webpack_require__(259);

	var _reusableTag2 = _interopRequireDefault(_reusableTag);

	var StockInfo = (function (_Component) {
	  _inherits(StockInfo, _Component);

	  function StockInfo() {
	    _classCallCheck(this, StockInfo);

	    _get(Object.getPrototypeOf(StockInfo.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(StockInfo, [{
	    key: 'render',
	    value: function render() {
	      var stockStyle = {
	        color: '#784942',
	        //'text-align': 'center',
	        padding: '1.2em 0em 1.2em 2em', // 上右下左
	        borderBottom: '2px solid #ddd',
	        background: '#fafafa'
	      };

	      var _props = this.props;
	      var name = _props.name;
	      var _id = _props._id;
	      var tags = _props.tags;

	      tags = tags.map(function (tag) {
	        return _react2['default'].createElement(_reusableTag2['default'], { tag: tag, _id: _id });
	      });

	      return _react2['default'].createElement(
	        'div',
	        { style: stockStyle },
	        _react2['default'].createElement(
	          'h2',
	          { style: { margin: '0 0 0.5em 0' } },
	          name,
	          ' ',
	          _react2['default'].createElement(
	            'small',
	            null,
	            '(',
	            _id,
	            ')'
	          )
	        ),
	        _react2['default'].createElement(
	          'span',
	          null,
	          'tags: '
	        ),
	        tags,
	        _react2['default'].createElement(_reusableTag2['default'], { tag: '+' })
	      );
	    }
	  }]);

	  return StockInfo;
	})(_react.Component);

	exports['default'] = StockInfo;
	module.exports = exports['default'];

/***/ },

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

/***/ 260:
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

	var TreeView = (function (_Component) {
	  _inherits(TreeView, _Component);

	  function TreeView() {
	    _classCallCheck(this, TreeView);

	    _get(Object.getPrototypeOf(TreeView.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(TreeView, [{
	    key: 'render',
	    value: function render() {
	      var sideMenu = {
	        /* To limit the menu width to the content of the menu: */
	        //display: 'inline-block',
	        /* Or set the width explicitly: */
	        /* width: 10em; */
	        borderRight: '1px solid #eee'
	      };
	      var _id = this.props._id;

	      // TODO: use `window.location` and `classnames` to decide whether a <li> is `pure-menu-selected`
	      return _react2['default'].createElement(
	        'div',
	        { className: 'pure-menu', style: sideMenu },
	        _react2['default'].createElement(
	          'ul',
	          { className: 'pure-menu-list' },
	          _react2['default'].createElement(
	            'li',
	            { className: 'pure-menu-item' },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/oneStock/' + _id + '/eventsTimeline',
	                className: 'pure-menu-link' },
	              '重大事件'
	            )
	          ),
	          _react2['default'].createElement(
	            'li',
	            { className: 'pure-menu-item' },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/oneStock/' + _id + '/bigMoneys',
	                className: 'pure-menu-link' },
	              '大资金'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return TreeView;
	})(_react.Component);

	exports['default'] = TreeView;
	module.exports = exports['default'];
	/*<span className="pure-menu-heading">相关信息</span>*/

/***/ }

});