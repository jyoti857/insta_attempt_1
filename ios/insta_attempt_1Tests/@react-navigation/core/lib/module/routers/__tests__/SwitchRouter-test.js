import _objectSpread from"@babel/runtime/helpers/objectSpread";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";var _jsxFileName="/Users/satya/Workspace/Callstack/react-navigation-core/src/routers/__tests__/SwitchRouter-test.js";import React from'react';import SwitchRouter from'../SwitchRouter';import StackRouter from'../StackRouter';import*as SwitchActions from'../SwitchActions';import*as NavigationActions from'../../NavigationActions';describe('SwitchRouter',function(){it('resets the route when unfocusing a tab by default',function(){var router=getExampleRouter();var state=router.getStateForAction({type:NavigationActions.INIT});var state2=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'A2'},state);expect(state2.routes[0].index).toEqual(1);expect(state2.routes[0].routes.length).toEqual(2);var state3=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'B'},state2);expect(state3.routes[0].index).toEqual(0);expect(state3.routes[0].routes.length).toEqual(1);});it('does not reset the route on unfocus if resetOnBlur is false',function(){var router=getExampleRouter({resetOnBlur:false});var state=router.getStateForAction({type:NavigationActions.INIT});var state2=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'A2'},state);expect(state2.routes[0].index).toEqual(1);expect(state2.routes[0].routes.length).toEqual(2);var state3=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'B'},state2);expect(state3.routes[0].index).toEqual(1);expect(state3.routes[0].routes.length).toEqual(2);});it('ignores back by default',function(){var router=getExampleRouter();var state=router.getStateForAction({type:NavigationActions.INIT});var state2=router.getStateForAction({type:SwitchActions.JUMP_TO,routeName:'B'},state);expect(state2.index).toEqual(1);var state3=router.getStateForAction({type:NavigationActions.BACK},state2);expect(state3.index).toEqual(1);});it('handles initialRoute backBehavior',function(){var router=getExampleRouter({backBehavior:'initialRoute'});var state=router.getStateForAction({type:NavigationActions.INIT});expect(state.routeKeyHistory).toBeUndefined();var state2=router.getStateForAction({type:SwitchActions.JUMP_TO,routeName:'B'},state);expect(state2.index).toEqual(1);var state3=router.getStateForAction({type:NavigationActions.BACK},state2);expect(state3.index).toEqual(0);});it('handles order backBehavior',function(){var routerHelper=new ExampleRouterHelper({backBehavior:'order'});expect(routerHelper.getCurrentState().routeKeyHistory).toBeUndefined();expect(routerHelper.applyAction({type:SwitchActions.JUMP_TO,routeName:'C'})).toMatchObject({index:2});expect(routerHelper.applyAction({type:NavigationActions.BACK})).toMatchObject({index:1});expect(routerHelper.applyAction({type:NavigationActions.BACK})).toMatchObject({index:0});expect(routerHelper.applyAction({type:NavigationActions.BACK})).toMatchObject({index:0});});it('handles history backBehavior',function(){var routerHelper=new ExampleRouterHelper({backBehavior:'history'});expect(routerHelper.getCurrentState().routeKeyHistory).toMatchObject(['A']);expect(routerHelper.applyAction({type:NavigationActions.NAVIGATE,routeName:'B'})).toMatchObject({index:1,routeKeyHistory:['A','B']});expect(routerHelper.applyAction({type:NavigationActions.NAVIGATE,routeName:'A'})).toMatchObject({index:0,routeKeyHistory:['B','A']});expect(routerHelper.applyAction({type:NavigationActions.NAVIGATE,routeName:'C'})).toMatchObject({index:2,routeKeyHistory:['B','A','C']});expect(routerHelper.applyAction({type:NavigationActions.NAVIGATE,routeName:'A'})).toMatchObject({index:0,routeKeyHistory:['B','C','A']});expect(routerHelper.applyAction({type:NavigationActions.BACK})).toMatchObject({index:2,routeKeyHistory:['B','C']});expect(routerHelper.applyAction({type:NavigationActions.BACK})).toMatchObject({index:1,routeKeyHistory:['B']});expect(routerHelper.applyAction({type:NavigationActions.BACK})).toMatchObject({index:1,routeKeyHistory:['B']});});it('handles nested actions',function(){var router=getExampleRouter();var state=router.getStateForAction({type:NavigationActions.INIT});var state2=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'B',action:{type:NavigationActions.NAVIGATE,routeName:'B2'}},state);var subState=state2.routes[state2.index];var activeGrandChildRoute=subState.routes[subState.index];expect(activeGrandChildRoute.routeName).toEqual('B2');});it('handles nested actions and params simultaneously',function(){var router=getExampleRouter();var state=router.getStateForAction({type:NavigationActions.INIT});var state2=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'B',params:{foo:'bar'},action:{type:NavigationActions.NAVIGATE,routeName:'B2'}},state);var subState=state2.routes[state2.index];var activeGrandChildRoute=subState.routes[subState.index];expect(subState.params.foo).toEqual('bar');expect(activeGrandChildRoute.routeName).toEqual('B2');});it('order of handling navigate action is correct for nested switchrouters',function(){var Screen=function Screen(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:192}});};var NestedSwitch=function NestedSwitch(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:193}});};var OtherNestedSwitch=function OtherNestedSwitch(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:194}});};var nestedRouter=SwitchRouter({Foo:Screen,Bar:Screen});var otherNestedRouter=SwitchRouter({Foo:Screen});NestedSwitch.router=nestedRouter;OtherNestedSwitch.router=otherNestedRouter;var router=SwitchRouter({NestedSwitch:NestedSwitch,OtherNestedSwitch:OtherNestedSwitch,Bar:Screen},{initialRouteName:'OtherNestedSwitch'});var state=router.getStateForAction({type:NavigationActions.INIT});expect(state.routes[state.index].routeName).toEqual('OtherNestedSwitch');var state2=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Bar'},state);expect(state2.routes[state2.index].routeName).toEqual('Bar');var state3=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'NestedSwitch'},state2);var state4=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Bar'},state3);var activeState4=state4.routes[state4.index];expect(activeState4.routeName).toEqual('NestedSwitch');expect(activeState4.routes[activeState4.index].routeName).toEqual('Bar');});it('order of handling navigate action is correct for nested stackrouters',function(){var Screen=function Screen(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:245}});};var MainStack=function MainStack(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:246}});};var LoginStack=function LoginStack(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:247}});};MainStack.router=StackRouter({Home:Screen,Profile:Screen});LoginStack.router=StackRouter({Form:Screen,ForgotPassword:Screen});var router=SwitchRouter({Home:Screen,Login:LoginStack,Main:MainStack},{initialRouteName:'Login'});var state=router.getStateForAction({type:NavigationActions.INIT});expect(state.routes[state.index].routeName).toEqual('Login');var state2=router.getStateForAction({type:SwitchActions.JUMP_TO,routeName:'Home'},state);expect(state2.routes[state2.index].routeName).toEqual('Home');});});var ExampleRouterHelper=function ExampleRouterHelper(config){var _this=this;_classCallCheck(this,ExampleRouterHelper);this.applyAction=function(action){_this._currentState=_this._router.getStateForAction(action,_this._currentState);return _this._currentState;};this.getCurrentState=function(){return _this._currentState;};this._router=getExampleRouter(config);this._currentState=this._router.getStateForAction({type:NavigationActions.INIT});};var getExampleRouter=function getExampleRouter(){var config=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var PlainScreen=function PlainScreen(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:299}});};var StackA=function StackA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:300}});};var StackB=function StackB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:301}});};var StackC=function StackC(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:302}});};StackA.router=StackRouter({A1:PlainScreen,A2:PlainScreen});StackB.router=StackRouter({B1:PlainScreen,B2:PlainScreen});StackC.router=StackRouter({C1:PlainScreen,C2:PlainScreen});var router=SwitchRouter({A:{screen:StackA,path:''},B:{screen:StackB,path:'great/path'},C:{screen:StackC,path:'pathC'}},_objectSpread({initialRouteName:'A'},config));return router;};
//# sourceMappingURL=SwitchRouter-test.js.map