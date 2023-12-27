"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExampleReactNpmModule;
var _react = _interopRequireWildcard(require("react"));
require("./index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ExampleReactNpmModule(_ref) {
  var backgroundColor = _ref.backgroundColor,
    height = _ref.height;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    amountA = _useState2[0],
    setAmountA = _useState2[1];
  console.log('amount a', amountA);
  var style = {
    background: backgroundColor,
    margin: 'auto',
    width: '40rem',
    minHeight: height,
    border: '3px solid',
    marginTop: '2rem'
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    style: {
      alignSelf: 'flex-start',
      marginBottom: 'var(--dl-space-space-halfunit)',
      textAlign: 'center'
    }
  }, "Transfer funds :)"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      "float": 'left'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '1.7rem',
      fontWeight: '500',
      paddingLeft: '0.4rem',
      fontStyle: 'normal'
    }
  }, "Token A"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "number"
    // value={amountA}
    ,
    style: _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      color: 'black',
      width: 'var(--dl-size-size-xxlarge)',
      backgroundColor: 'var(--dl-color-gray-900)'
    }, "width", '18rem'), "height", '2rem'), "borderRadius", '5px'), "marginLeft", '3rem'),
    onChange: function onChange(e) {
      console.log('e', e);
      // setAmountA(e.target.value)
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    style: _defineProperty({
      width: 'var(--dl-size-size-large)',
      height: '36px',
      fontSize: '24px',
      backgroundColor: 'var(--dl-color-gray-900)',
      marginLeft: '2.2rem',
      borderRadius: '5px'
    }, "width", '9rem'),
    onClick: function onClick() {
      return console.log('amount', amountA);
    }
  }, "Send")));
}
