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

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExampleReactNpmModule;
var _react = _interopRequireWildcard(require("react"));
require("./index.css");
var _wagmi = require("wagmi");
var _chains = require("viem/chains");
var _react2 = require("@web3modal/wagmi/react");
var _ethers = require("ethers");
var _viem = require("viem");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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

// export default function ExampleReactNpmModule({ backgroundColor, height }) {

//     console.log('goerli', goerli);

//     const projectId = 'ec34b7ce08621ea43343eaf71e71e86b';
//     // // createWeb3Modal()
//     const metadata = {
//       name: 'Web3Modal',
//       description: 'Web3Modal Example',
//       url: 'https://web3modal.com',
//       icons: ['https://avatars.githubusercontent.com/u/37784886']
//     }

//     const chains = [mainnet, goerli]

//     const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
//     createWeb3Modal({ wagmiConfig, projectId, chains })
//     // const { open, selectedNetworkId } = useWeb3ModalState()

//     const style = {
//         background: backgroundColor,
//         margin: 'auto',
//         width: '40rem',
//         minHeight: height,
//         border: '3px solid',
//         marginTop: '2rem',
//     }

//     return (
//         <WagmiConfig config={wagmiConfig} >

//         <div style={style} >
//             <h1 style={{
//                 alignSelf: 'flex-start',
//                 marginBottom: 'var(--dl-space-space-halfunit)',
//                 textAlign: 'center'

//             }} >Transfer funds connect button :)</h1>
//             <br />
//             <div style={{
//                 float: 'left',
//             }}>
//                 <span style={{ fontSize: '1.7rem', fontWeight: '500', paddingLeft: '0.4rem', fontStyle: 'normal' }} >Token A</span>
//                 <input
//                     type="number"
//                     // value={amountA}
//                     style={{
//                         color: 'black',
//                         width: 'var(--dl-size-size-xxlarge)',
//                         backgroundColor: 'var(--dl-color-gray-900)',
//                         width: '18rem',
//                         height: '2rem',
//                         borderRadius: '5px',
//                         marginLeft: '3rem'
//                     }}
//                     onChange={(e) => {
//                         console.log('change')
//                         console.log('e', e)
//                         // setAmountA(e.target.value)
//                     }}
//                 />
//                 <button
//                     style={{
//                         width: 'var(--dl-size-size-large)',
//                         height: '36px',
//                         fontSize: '24px',
//                         backgroundColor: 'var(--dl-color-gray-900)',
//                         marginLeft: '2.2rem',
//                         borderRadius: '5px',
//                         width: '9rem'

//                     }}
//                     onClick={() => console.log('amount', amountA)}

//                 >Send</button>
//             </div>
//             <ConnectButton />
//         {/* <button onClick={() => {console.log('state of wallet', open, selectedNetworkId)}} >Get wallet details</button>
//         <h4>network id: {selectedNetworkId}</h4> */}

//         </div>
//         </WagmiConfig>

//     )
// }

// this code is working ethreum provider not for wagmi
function ExampleReactNpmModule(_ref) {
  var address = _ref.address,
    backgroundColor = _ref.backgroundColor,
    height = _ref.height,
    publicClient = _ref.publicClient;
  console.log('address', address);

  // console.log('provider', provider);

  // window ethereum
  // const sendTxUsingProvider = async () => {
  //     const accounts = await ethereumProvider.request({ method: 'eth_requestAccounts' });

  //     // Get the first account (you can choose the account based on your requirements)
  //     const fromAddress = accounts[0];

  //     // Your transaction data
  //     const transactionData = {
  //       from: fromAddress,
  //       to: '0xc38B74526c8Bf385111E75C5230388b7ec4E8D72', // Replace with the recipient's Ethereum address
  //       value: '100', // Replace with the amount to send in Wei
  //       gas: '100000', // Replace with the gas limit
  //       gasPrice: '100000', // Replace with the gas price
  //     };

  //     // Send the transaction
  //     const transactionHash = await ethereumProvider.request({
  //       method: 'eth_sendTransaction',
  //       params: [transactionData],
  //     });
  //     console.log('tx hash', transactionHash)
  // }

  var sendTxUsingProvider = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var contractAddress, contractABI, provider, contract, name, symbol, signer2, accounts, txRes;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            contractAddress = '0x9D233A907E065855D2A9c7d4B552ea27fB2E5a36';
            contractABI = [{
              "inputs": [{
                "internalType": "string",
                "name": "name",
                "type": "string"
              }, {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
              }, {
                "internalType": "uint8",
                "name": "decimals",
                "type": "uint8"
              }, {
                "internalType": "uint256",
                "name": "initialSupply",
                "type": "uint256"
              }],
              "stateMutability": "nonpayable",
              "type": "constructor"
            }, {
              "anonymous": false,
              "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              }, {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
              }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }],
              "name": "Approval",
              "type": "event"
            }, {
              "anonymous": false,
              "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
              }, {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }],
              "name": "OwnershipTransferred",
              "type": "event"
            }, {
              "anonymous": false,
              "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              }, {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }],
              "name": "Transfer",
              "type": "event"
            }, {
              "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
              }, {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              }],
              "name": "allowance",
              "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }],
              "stateMutability": "view",
              "type": "function"
            }, {
              "inputs": [{
                "internalType": "address",
                "name": "spender",
                "type": "address"
              }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }],
              "name": "approve",
              "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }],
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "inputs": [{
                "internalType": "address",
                "name": "account",
                "type": "address"
              }],
              "name": "balanceOf",
              "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }],
              "stateMutability": "view",
              "type": "function"
            }, {
              "inputs": [{
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }],
              "name": "burn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "inputs": [{
                "internalType": "address",
                "name": "account",
                "type": "address"
              }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }],
              "name": "burnFrom",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "inputs": [],
              "name": "decimals",
              "outputs": [{
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
              }],
              "stateMutability": "view",
              "type": "function"
            }, {
              "inputs": [{
                "internalType": "address",
                "name": "spender",
                "type": "address"
              }, {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
              }],
              "name": "decreaseAllowance",
              "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }],
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "inputs": [{
                "internalType": "address",
                "name": "spender",
                "type": "address"
              }, {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
              }],
              "name": "increaseAllowance",
              "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }],
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "inputs": [{
                "internalType": "address",
                "name": "to",
                "type": "address"
              }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }],
              "name": "mint",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "inputs": [],
              "name": "name",
              "outputs": [{
                "internalType": "string",
                "name": "",
                "type": "string"
              }],
              "stateMutability": "view",
              "type": "function"
            }, {
              "inputs": [],
              "name": "owner",
              "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
              }],
              "stateMutability": "view",
              "type": "function"
            }, {
              "inputs": [],
              "name": "renounceOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "inputs": [],
              "name": "symbol",
              "outputs": [{
                "internalType": "string",
                "name": "",
                "type": "string"
              }],
              "stateMutability": "view",
              "type": "function"
            }, {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }],
              "stateMutability": "view",
              "type": "function"
            }, {
              "inputs": [{
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }],
              "name": "transfer",
              "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }],
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "inputs": [{
                "internalType": "address",
                "name": "sender",
                "type": "address"
              }, {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }],
              "name": "transferFrom",
              "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }],
              "stateMutability": "nonpayable",
              "type": "function"
            }, {
              "inputs": [{
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }];
            _context.prev = 2;
            _context.next = 5;
            return window.ethereum.enable();
          case 5:
            console.log('npm here send tx', address);
            // const { transport } = ethereumProvider;

            console.log('eth provider 1', transport);
            provider = new _ethers.providers.Web3Provider(transport);
            console.log('provider', provider);
            contract = new _ethers.ethers.Contract(contractAddress, contractABI, provider);
            console.log('contract ins', contract);
            _context.next = 13;
            return contract.name();
          case 13:
            name = _context.sent;
            console.log('contract name', name);
            _context.next = 17;
            return contract.symbol();
          case 17:
            symbol = _context.sent;
            console.log('contract symbol', symbol);
            _context.next = 21;
            return provider.getSigner(address);
          case 21:
            signer2 = _context.sent;
            console.log('signer 2', signer2);
            console.log('signer 2 ka addr', signer2._address);
            _context.next = 26;
            return provider.listAccounts();
          case 26:
            accounts = _context.sent;
            console.log('list accounts', accounts);
            _context.next = 30;
            return signer2.sendTransaction({
              to: '0x12F10F35F3816A0003720a326038E18573af0829',
              value: _ethers.utils.parseEther('0.01'),
              gasLimit: 10000000,
              from: signer2._address
            });
          case 30:
            txRes = _context.sent;
            // console.log('txRes', txRes)

            // const nonce = await provider.getTransactionCount(address);
            // console.log('nonce', nonce);

            // console.log('Parsed value:', utils.parseEther('0.1'));

            // const signer = await provider.getSigner()

            // console.log('Signer Address 1:', signer);
            // console.log('Signer Address 2:', signer2);

            // const signer2 = await provider.getSigner()
            // console.log('signer from metamask', signer2);

            // console.log('parsed value', utils.parseEther('0.1'));

            // const txRes = await signer2.signMessage('hello')

            // seed phrase
            // this is working fine
            // const privateKey = '0xe054928eaeddbf4b681d7aca27338e63f950dfd75d4a782b2b8569ce18cc15b6';
            // const signer = new Wallet(privateKey, provider);
            // const txRes = await signer.sendTransaction({
            //     to: '0x12F10F35F3816A0003720a326038E18573af0829',
            //     value: utils.parseEther('0.001'),
            //     gasLimit: 10000000
            // })
            console.log('tx res', txRes);
            console.log('hash', txRes.hash);
            _context.next = 38;
            break;
          case 35:
            _context.prev = 35;
            _context.t0 = _context["catch"](2);
            console.log('error', _context.t0);
          case 38:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 35]]);
    }));
    return function sendTxUsingProvider() {
      return _ref2.apply(this, arguments);
    };
  }();
  var txUsingEthersWithWagmi = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _chain$contracts, chain, _transport, network, provider, signer, txRes;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            chain = publicClient.chain, _transport = publicClient.transport;
            console.log('chain and transport', chain, _transport);
            network = {
              chainId: chain.id,
              name: chain.name,
              ensAddress: (_chain$contracts = chain.contracts) === null || _chain$contracts === void 0 || (_chain$contracts = _chain$contracts.ensRegistry) === null || _chain$contracts === void 0 ? void 0 : _chain$contracts.address
            }; // const provider = new providers.JsonRpcProvider(transport.url, network)
            provider = new _ethers.providers.Web3Provider(_transport, network);
            console.log('provider', provider);
            signer = provider.getSigner(address);
            console.log('signer', signer);
            _context2.next = 10;
            return signer.sendTransaction({
              to: '0x12F10F35F3816A0003720a326038E18573af0829',
              value: _ethers.utils.parseEther('0.01'),
              gasLimit: 10000000,
              from: signer._address
            });
          case 10:
            txRes = _context2.sent;
            console.log('tx res', txRes);
            console.log('hash', txRes.hash);
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            console.log('error', _context2.t0);
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 15]]);
    }));
    return function txUsingEthersWithWagmi() {
      return _ref3.apply(this, arguments);
    };
  }();
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
  }, "Tx using provider :)"), /*#__PURE__*/_react["default"].createElement("p", null, "Address $", address), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: txUsingEthersWithWagmi
  }, "Wagmi"));
}
