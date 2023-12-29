// import { useWeb3Modal } from '@web3modal/wagmi/react'
// import { useAccount } from 'wagmi';

// export default function ConnectButton() {
//   // 4. Use modal hook
//   const { open } = useWeb3Modal()
//    const { address } = useAccount()
//   console.log('account', address)

//   return (
//     <>
//       <button onClick={() => open()}>Open Connect Modal</button>
//       <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
//       <h4>Address: {address}</h4>
//     </>
//   )
// }
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExampleReactNpmModule;
var _react = _interopRequireWildcard(require("react"));
require("./index.css");
var _wagmi = require("wagmi");
var _chains = require("viem/chains");
var _react2 = require("@web3modal/wagmi/react");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function ConnectButton() {
  // 4. Use modal hook
  var _useWeb3Modal = (0, _react2.useWeb3Modal)(),
    open = _useWeb3Modal.open;
  var _useAccount = (0, _wagmi.useAccount)(),
    address = _useAccount.address;
  var _useWeb3ModalState = (0, _react2.useWeb3ModalState)(),
    selectedNetworkId = _useWeb3ModalState.selectedNetworkId;
  console.log('account', address, selectedNetworkId);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      open();
      console.log('address click', address);
    }
  }, "Open Connect Modal"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return open({
        view: 'Networks'
      });
    }
  }, "Open Network Modal"), /*#__PURE__*/_react["default"].createElement("h4", null, "Address: ", address), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      console.log('details', address, selectedNetworkId);
    }
  }, "Get details"));
}
function ExampleReactNpmModule(_ref) {
  var backgroundColor = _ref.backgroundColor,
    height = _ref.height;
  console.log('goerli', _chains.goerli);
  var projectId = 'ec34b7ce08621ea43343eaf71e71e86b';
  // // createWeb3Modal()
  var metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  };
  var chains = [_chains.mainnet, _chains.goerli];
  var wagmiConfig = (0, _react2.defaultWagmiConfig)({
    chains: chains,
    projectId: projectId,
    metadata: metadata
  });
  (0, _react2.createWeb3Modal)({
    wagmiConfig: wagmiConfig,
    projectId: projectId,
    chains: chains
  });
  // const { open, selectedNetworkId } = useWeb3ModalState()

  var style = {
    background: backgroundColor,
    margin: 'auto',
    width: '40rem',
    minHeight: height,
    border: '3px solid',
    marginTop: '2rem'
  };
  return /*#__PURE__*/_react["default"].createElement(_wagmi.WagmiConfig, {
    config: wagmiConfig
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: style
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    style: {
      alignSelf: 'flex-start',
      marginBottom: 'var(--dl-space-space-halfunit)',
      textAlign: 'center'
    }
  }, "Transfer funds connect button :)"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
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
      console.log('change');
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
  }, "Send")), /*#__PURE__*/_react["default"].createElement(ConnectButton, null)));
}
