"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerStreamable"],{

/***/ "./node_modules/react-player/lazy/players/Streamable.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-player/lazy/players/Streamable.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/react-player/lazy/utils.js\");\n\nvar _patterns = __webpack_require__(/*! ../patterns */ \"./node_modules/react-player/lazy/patterns.js\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';\nvar SDK_GLOBAL = 'playerjs';\n\nvar Streamable = /*#__PURE__*/function (_Component) {\n  _inherits(Streamable, _Component);\n\n  var _super = _createSuper(Streamable);\n\n  function Streamable() {\n    var _this;\n\n    _classCallCheck(this, Streamable);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"callPlayer\", _utils.callPlayer);\n\n    _defineProperty(_assertThisInitialized(_this), \"duration\", null);\n\n    _defineProperty(_assertThisInitialized(_this), \"currentTime\", null);\n\n    _defineProperty(_assertThisInitialized(_this), \"secondsLoaded\", null);\n\n    _defineProperty(_assertThisInitialized(_this), \"mute\", function () {\n      _this.callPlayer('mute');\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"unmute\", function () {\n      _this.callPlayer('unmute');\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"ref\", function (iframe) {\n      _this.iframe = iframe;\n    });\n\n    return _this;\n  }\n\n  _createClass(Streamable, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.onMount && this.props.onMount(this);\n    }\n  }, {\n    key: \"load\",\n    value: function load(url) {\n      var _this2 = this;\n\n      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {\n        if (!_this2.iframe) return;\n        _this2.player = new playerjs.Player(_this2.iframe);\n\n        _this2.player.setLoop(_this2.props.loop);\n\n        _this2.player.on('ready', _this2.props.onReady);\n\n        _this2.player.on('play', _this2.props.onPlay);\n\n        _this2.player.on('pause', _this2.props.onPause);\n\n        _this2.player.on('seeked', _this2.props.onSeek);\n\n        _this2.player.on('ended', _this2.props.onEnded);\n\n        _this2.player.on('error', _this2.props.onError);\n\n        _this2.player.on('timeupdate', function (_ref) {\n          var duration = _ref.duration,\n              seconds = _ref.seconds;\n          _this2.duration = duration;\n          _this2.currentTime = seconds;\n        });\n\n        _this2.player.on('buffered', function (_ref2) {\n          var percent = _ref2.percent;\n\n          if (_this2.duration) {\n            _this2.secondsLoaded = _this2.duration * percent;\n          }\n        });\n\n        if (_this2.props.muted) {\n          _this2.player.mute();\n        }\n      }, this.props.onError);\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      this.callPlayer('play');\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.callPlayer('pause');\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {// Nothing to do\n    }\n  }, {\n    key: \"seekTo\",\n    value: function seekTo(seconds) {\n      var keepPlaying = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      this.callPlayer('setCurrentTime', seconds);\n\n      if (!keepPlaying) {\n        this.pause();\n      }\n    }\n  }, {\n    key: \"setVolume\",\n    value: function setVolume(fraction) {\n      this.callPlayer('setVolume', fraction * 100);\n    }\n  }, {\n    key: \"setLoop\",\n    value: function setLoop(loop) {\n      this.callPlayer('setLoop', loop);\n    }\n  }, {\n    key: \"getDuration\",\n    value: function getDuration() {\n      return this.duration;\n    }\n  }, {\n    key: \"getCurrentTime\",\n    value: function getCurrentTime() {\n      return this.currentTime;\n    }\n  }, {\n    key: \"getSecondsLoaded\",\n    value: function getSecondsLoaded() {\n      return this.secondsLoaded;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var id = this.props.url.match(_patterns.MATCH_URL_STREAMABLE)[1];\n      var style = {\n        width: '100%',\n        height: '100%'\n      };\n      return /*#__PURE__*/_react[\"default\"].createElement(\"iframe\", {\n        ref: this.ref,\n        src: \"https://streamable.com/o/\".concat(id),\n        frameBorder: \"0\",\n        scrolling: \"no\",\n        style: style,\n        allow: \"encrypted-media; autoplay; fullscreen;\"\n      });\n    }\n  }]);\n\n  return Streamable;\n}(_react.Component);\n\nexports[\"default\"] = Streamable;\n\n_defineProperty(Streamable, \"displayName\", 'Streamable');\n\n_defineProperty(Streamable, \"canPlay\", _patterns.canPlay.streamable);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xhenkvcGxheWVycy9TdHJlYW1hYmxlLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLHdCQUF3QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUVwVyw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBa0I7O0FBRWxCLHFDQUFxQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVwRCxhQUFhLG1CQUFPLENBQUMsMkRBQVU7O0FBRS9CLGdCQUFnQixtQkFBTyxDQUFDLGlFQUFhOztBQUVyQyxzQ0FBc0MsZ0RBQWdELDJCQUEyQixpRUFBaUUsaUJBQWlCOztBQUVuTSx3Q0FBd0MsNkJBQTZCLGNBQWMsOEVBQThFLFNBQVMsb0JBQW9CLHdDQUF3QywrQkFBK0IseUJBQXlCLGlCQUFpQixzRkFBc0YsdUJBQXVCLHNEQUFzRCxxRkFBcUYsc0NBQXNDLDRDQUE0QyxPQUFPLDhCQUE4Qix5QkFBeUIsYUFBYSwwQkFBMEI7O0FBRTl0QixrREFBa0QsMENBQTBDOztBQUU1Riw0Q0FBNEMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RDs7QUFFL1AsOERBQThELHNFQUFzRSw4REFBOEQ7O0FBRWxNLDJDQUEyQywrREFBK0QsNkVBQTZFLHlFQUF5RSxlQUFlLHVEQUF1RCxHQUFHOztBQUV6VSxpQ0FBaUMsNEVBQTRFLGlCQUFpQixhQUFhOztBQUUzSSxpQ0FBaUMsNkRBQTZELHlDQUF5Qyw4Q0FBOEMsaUNBQWlDLG1EQUFtRCwyREFBMkQsT0FBTyx5Q0FBeUM7O0FBRXBYLGtEQUFrRCwwRUFBMEUsZUFBZTs7QUFFM0ksd0NBQXdDLHVCQUF1Qix5RkFBeUY7O0FBRXhKLHVDQUF1Qyx3RUFBd0UsMENBQTBDLDhDQUE4QyxNQUFNLHVFQUF1RSxJQUFJLGVBQWUsWUFBWTs7QUFFblQsOEJBQThCLGdHQUFnRyxtREFBbUQ7O0FBRWpMLDRDQUE0QyxrQkFBa0Isa0NBQWtDLG9FQUFvRSxLQUFLLE9BQU8sb0JBQW9COztBQUVwTTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3RUFBd0UsYUFBYTtBQUNyRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVSxXQUFXO0FBQ3RELE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELGtCQUFrQjs7QUFFbEI7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9sYXp5L3BsYXllcnMvU3RyZWFtYWJsZS5qcz9kNmE4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5cbnZhciBfcGF0dGVybnMgPSByZXF1aXJlKFwiLi4vcGF0dGVybnNcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBTREtfVVJMID0gJ2h0dHBzOi8vY2RuLmVtYmVkLmx5L3BsYXllci0wLjEuMC5taW4uanMnO1xudmFyIFNES19HTE9CQUwgPSAncGxheWVyanMnO1xuXG52YXIgU3RyZWFtYWJsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3RyZWFtYWJsZSwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTdHJlYW1hYmxlKTtcblxuICBmdW5jdGlvbiBTdHJlYW1hYmxlKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHJlYW1hYmxlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2FsbFBsYXllclwiLCBfdXRpbHMuY2FsbFBsYXllcik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZHVyYXRpb25cIiwgbnVsbCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY3VycmVudFRpbWVcIiwgbnVsbCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2Vjb25kc0xvYWRlZFwiLCBudWxsKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJtdXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNhbGxQbGF5ZXIoJ211dGUnKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ1bm11dGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2FsbFBsYXllcigndW5tdXRlJyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVmXCIsIGZ1bmN0aW9uIChpZnJhbWUpIHtcbiAgICAgIF90aGlzLmlmcmFtZSA9IGlmcmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdHJlYW1hYmxlLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCh1cmwpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAoMCwgX3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCkudGhlbihmdW5jdGlvbiAocGxheWVyanMpIHtcbiAgICAgICAgaWYgKCFfdGhpczIuaWZyYW1lKSByZXR1cm47XG4gICAgICAgIF90aGlzMi5wbGF5ZXIgPSBuZXcgcGxheWVyanMuUGxheWVyKF90aGlzMi5pZnJhbWUpO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIuc2V0TG9vcChfdGhpczIucHJvcHMubG9vcCk7XG5cbiAgICAgICAgX3RoaXMyLnBsYXllci5vbigncmVhZHknLCBfdGhpczIucHJvcHMub25SZWFkeSk7XG5cbiAgICAgICAgX3RoaXMyLnBsYXllci5vbigncGxheScsIF90aGlzMi5wcm9wcy5vblBsYXkpO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ3BhdXNlJywgX3RoaXMyLnByb3BzLm9uUGF1c2UpO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ3NlZWtlZCcsIF90aGlzMi5wcm9wcy5vblNlZWspO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ2VuZGVkJywgX3RoaXMyLnByb3BzLm9uRW5kZWQpO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ2Vycm9yJywgX3RoaXMyLnByb3BzLm9uRXJyb3IpO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgIHZhciBkdXJhdGlvbiA9IF9yZWYuZHVyYXRpb24sXG4gICAgICAgICAgICAgIHNlY29uZHMgPSBfcmVmLnNlY29uZHM7XG4gICAgICAgICAgX3RoaXMyLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgX3RoaXMyLmN1cnJlbnRUaW1lID0gc2Vjb25kcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMyLnBsYXllci5vbignYnVmZmVyZWQnLCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICB2YXIgcGVyY2VudCA9IF9yZWYyLnBlcmNlbnQ7XG5cbiAgICAgICAgICBpZiAoX3RoaXMyLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpczIuc2Vjb25kc0xvYWRlZCA9IF90aGlzMi5kdXJhdGlvbiAqIHBlcmNlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoX3RoaXMyLnByb3BzLm11dGVkKSB7XG4gICAgICAgICAgX3RoaXMyLnBsYXllci5tdXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMucHJvcHMub25FcnJvcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBsYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGxheScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwYXVzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGF1c2UnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkgey8vIE5vdGhpbmcgdG8gZG9cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2Vla1RvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlZWtUbyhzZWNvbmRzKSB7XG4gICAgICB2YXIga2VlcFBsYXlpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3NldEN1cnJlbnRUaW1lJywgc2Vjb25kcyk7XG5cbiAgICAgIGlmICgha2VlcFBsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRWb2x1bWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3NldFZvbHVtZScsIGZyYWN0aW9uICogMTAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0TG9vcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRMb29wKGxvb3ApIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2V0TG9vcCcsIGxvb3ApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXREdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmR1cmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDdXJyZW50VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTZWNvbmRzTG9hZGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlY29uZHNMb2FkZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWNvbmRzTG9hZGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGlkID0gdGhpcy5wcm9wcy51cmwubWF0Y2goX3BhdHRlcm5zLk1BVENIX1VSTF9TVFJFQU1BQkxFKVsxXTtcbiAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImlmcmFtZVwiLCB7XG4gICAgICAgIHJlZjogdGhpcy5yZWYsXG4gICAgICAgIHNyYzogXCJodHRwczovL3N0cmVhbWFibGUuY29tL28vXCIuY29uY2F0KGlkKSxcbiAgICAgICAgZnJhbWVCb3JkZXI6IFwiMFwiLFxuICAgICAgICBzY3JvbGxpbmc6IFwibm9cIixcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBhbGxvdzogXCJlbmNyeXB0ZWQtbWVkaWE7IGF1dG9wbGF5OyBmdWxsc2NyZWVuO1wiXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RyZWFtYWJsZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU3RyZWFtYWJsZTtcblxuX2RlZmluZVByb3BlcnR5KFN0cmVhbWFibGUsIFwiZGlzcGxheU5hbWVcIiwgJ1N0cmVhbWFibGUnKTtcblxuX2RlZmluZVByb3BlcnR5KFN0cmVhbWFibGUsIFwiY2FuUGxheVwiLCBfcGF0dGVybnMuY2FuUGxheS5zdHJlYW1hYmxlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-player/lazy/players/Streamable.js\n"));

/***/ })

}]);