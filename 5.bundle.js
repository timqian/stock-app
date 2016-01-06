webpackJsonp([5],{

/***/ 261:
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

	var _injectLib = __webpack_require__(262);

	var _injectLib2 = _interopRequireDefault(_injectLib);

	// TODO: 如何动态加载？？
	(0, _injectLib2['default'])();

	var EventsTimeline = (function (_Component) {
	  _inherits(EventsTimeline, _Component);

	  function EventsTimeline() {
	    _classCallCheck(this, EventsTimeline);

	    _get(Object.getPrototypeOf(EventsTimeline.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(EventsTimeline, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var params = _props.params;

	      dispatch((0, _actionsIndex.fetchEvents)(params._id));
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var events = this.props.events;

	      window.timeline = new TL.Timeline('timeline-embed', { events: events }, {
	        'start_at_end': 'true',
	        'timenav_position': 'top',
	        'default_bg_color': 'white'
	      });
	      // window.onresize = function(event) {
	      //     timeline.updateDisplay();
	      // };
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2['default'].createElement('div', { id: 'timeline-embed', style: { width: '100%', height: 600 } });
	    }
	  }]);

	  return EventsTimeline;
	})(_react.Component);

	function select(state) {
	  return {
	    events: state.events
	  };
	}

	exports['default'] = (0, _reactRedux.connect)(select)(EventsTimeline);
	module.exports = exports['default'];

/***/ },

/***/ 262:
/***/ function(module, exports) {

	// because timeline3 does not support npm install

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function () {
	  var link = document.createElement('link');
	  link.setAttribute('rel', 'stylesheet');
	  link.setAttribute('href', 'http://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css');

	  var script = document.createElement('script');
	  script.setAttribute('type', 'text/javascript');
	  script.setAttribute('src', 'http://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js');

	  var head = document.querySelector('head');
	  head.appendChild(link);
	  head.appendChild(script);
	};

	module.exports = exports['default'];

/***/ }

});