var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=withNavigation;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireDefault(require("react"));var _hoistNonReactStatics=_interopRequireDefault(require("hoist-non-react-statics"));var _invariant=_interopRequireDefault(require("../utils/invariant"));var _NavigationContext=_interopRequireDefault(require("./NavigationContext"));var _jsxFileName="/Users/satya/Workspace/Callstack/react-navigation-core/src/views/withNavigation.js";function withNavigation(Component){var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{forwardRef:true};var ComponentWithNavigation=function(_React$Component){(0,_inherits2.default)(ComponentWithNavigation,_React$Component);function ComponentWithNavigation(){(0,_classCallCheck2.default)(this,ComponentWithNavigation);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ComponentWithNavigation).apply(this,arguments));}(0,_createClass2.default)(ComponentWithNavigation,[{key:"render",value:function render(){var _this=this;var navigationProp=this.props.navigation;return _react.default.createElement(_NavigationContext.default.Consumer,{__source:{fileName:_jsxFileName,lineNumber:17}},function(navigationContext){var navigation=navigationProp||navigationContext;(0,_invariant.default)(!!navigation,'withNavigation can only be used on a view hierarchy of a navigator. The wrapped component is unable to get access to navigation from props or context.');return _react.default.createElement(Component,(0,_extends2.default)({},_this.props,{navigation:navigation,ref:config.forwardRef?_this.props.onRef:undefined,__source:{fileName:_jsxFileName,lineNumber:25}}));});}}]);return ComponentWithNavigation;}(_react.default.Component);ComponentWithNavigation.displayName="withNavigation("+(Component.displayName||Component.name)+")";return(0,_hoistNonReactStatics.default)(ComponentWithNavigation,Component);}
//# sourceMappingURL=withNavigation.js.map