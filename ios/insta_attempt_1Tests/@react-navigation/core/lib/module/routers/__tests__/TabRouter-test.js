import _objectSpread from"@babel/runtime/helpers/objectSpread";var _jsxFileName="/Users/satya/Workspace/Callstack/react-navigation-core/src/routers/__tests__/TabRouter-test.js";import React from'react';import TabRouter from'../TabRouter';import*as NavigationActions from'../../NavigationActions';var INIT_ACTION={type:NavigationActions.INIT};var BareLeafRouteConfig={screen:function screen(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:11}});}};describe('TabRouter',function(){it('Handles basic tab logic',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:16}});};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:17}});};var router=TabRouter({Foo:{screen:ScreenA},Bar:{screen:ScreenB}});var state=router.getStateForAction({type:NavigationActions.INIT});var expectedState={index:0,routes:[{key:'Foo',routeName:'Foo'},{key:'Bar',routeName:'Bar'}],isTransitioning:false};expect(state).toEqual(expectedState);var state2=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Bar'},state);var expectedState2={index:1,routes:[{key:'Foo',routeName:'Foo'},{key:'Bar',routeName:'Bar'}],isTransitioning:false};expect(state2).toEqual(expectedState2);expect(router.getComponentForState(expectedState)).toEqual(ScreenA);expect(router.getComponentForState(expectedState2)).toEqual(ScreenB);var state3=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Bar'},state2);expect(state3).toEqual(null);});it('Handles getScreen',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:55}});};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:56}});};var router=TabRouter({Foo:{getScreen:function getScreen(){return ScreenA;}},Bar:{getScreen:function getScreen(){return ScreenB;}}});var state=router.getStateForAction({type:NavigationActions.INIT});var expectedState={index:0,routes:[{key:'Foo',routeName:'Foo'},{key:'Bar',routeName:'Bar'}],isTransitioning:false};expect(state).toEqual(expectedState);var state2=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Bar'},state);var expectedState2={index:1,routes:[{key:'Foo',routeName:'Foo'},{key:'Bar',routeName:'Bar'}],isTransitioning:false};expect(state2).toEqual(expectedState2);expect(router.getComponentForState(expectedState)).toEqual(ScreenA);expect(router.getComponentForState(expectedState2)).toEqual(ScreenB);var state3=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Bar'},state2);expect(state3).toEqual(null);});it('Can set the initial tab',function(){var router=TabRouter({Foo:BareLeafRouteConfig,Bar:BareLeafRouteConfig},{initialRouteName:'Bar'});var state=router.getStateForAction({type:NavigationActions.INIT});expect(state).toEqual({index:1,routes:[{key:'Foo',routeName:'Foo'},{key:'Bar',routeName:'Bar'}],isTransitioning:false});});it('Can set the initial params',function(){var router=TabRouter({Foo:BareLeafRouteConfig,Bar:BareLeafRouteConfig},{initialRouteName:'Bar',initialRouteParams:{name:'Qux'}});var state=router.getStateForAction({type:NavigationActions.INIT});expect(state).toEqual({index:1,routes:[{key:'Foo',routeName:'Foo'},{key:'Bar',routeName:'Bar',params:{name:'Qux'}}],isTransitioning:false});});it('Handles the SetParams action',function(){var router=TabRouter({Foo:{screen:function screen(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:128}});}},Bar:{screen:function screen(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:131}});}}});var state2=router.getStateForAction({type:NavigationActions.SET_PARAMS,params:{name:'Qux'},key:'Foo'});expect(state2&&state2.routes[0].params).toEqual({name:'Qux'});});it('Handles the SetParams action for inactive routes',function(){var router=TabRouter({Foo:{screen:function screen(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:146}});}},Bar:{screen:function screen(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:149}});}}},{initialRouteName:'Bar'});var initialState={index:1,routes:[{key:'RouteA',routeName:'Foo',params:{name:'InitialParam',other:'Unchanged'}},{key:'RouteB',routeName:'Bar',params:{}}]};var state=router.getStateForAction({type:NavigationActions.SET_PARAMS,params:{name:'NewParam'},key:'RouteA'},initialState);expect(state.index).toEqual(1);expect(state.routes[0].params).toEqual({name:'NewParam',other:'Unchanged'});});it('getStateForAction returns null when navigating to same tab',function(){var router=TabRouter({Foo:BareLeafRouteConfig,Bar:BareLeafRouteConfig},{initialRouteName:'Bar'});var state=router.getStateForAction({type:NavigationActions.INIT});var state2=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Bar'},state);expect(state2).toEqual(null);});it('getStateForAction returns initial navigate',function(){var router=TabRouter({Foo:BareLeafRouteConfig,Bar:BareLeafRouteConfig});var state=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Foo'});expect(state&&state.index).toEqual(0);});it('Handles nested tabs and nested actions',function(){var ChildTabNavigator=function ChildTabNavigator(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:208}});};ChildTabNavigator.router=TabRouter({Foo:BareLeafRouteConfig,Bar:BareLeafRouteConfig});var router=TabRouter({Foo:BareLeafRouteConfig,Baz:{screen:ChildTabNavigator},Boo:BareLeafRouteConfig});var action=router.getActionForPathAndParams('Baz/Bar',{foo:'42'});var navAction={type:NavigationActions.NAVIGATE,routeName:'Baz',params:{foo:'42'},action:{type:NavigationActions.NAVIGATE,routeName:'Bar',params:{foo:'42'}}};expect(action).toEqual(navAction);var state=router.getStateForAction(navAction);expect(state).toEqual({index:1,isTransitioning:false,routes:[{key:'Foo',routeName:'Foo'},{index:1,isTransitioning:false,key:'Baz',routeName:'Baz',params:{foo:'42'},routes:[{key:'Foo',routeName:'Foo'},{key:'Bar',routeName:'Bar',params:{foo:'42'}}]},{key:'Boo',routeName:'Boo'}]});});it('Handles passing params to nested tabs',function(){var ChildTabNavigator=function ChildTabNavigator(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:268}});};ChildTabNavigator.router=TabRouter({Boo:BareLeafRouteConfig,Bar:BareLeafRouteConfig});var router=TabRouter({Foo:BareLeafRouteConfig,Baz:{screen:ChildTabNavigator}});var navAction={type:NavigationActions.NAVIGATE,routeName:'Baz'};var state=router.getStateForAction(navAction);expect(state).toEqual({index:1,isTransitioning:false,routes:[{key:'Foo',routeName:'Foo'},{index:0,key:'Baz',routeName:'Baz',isTransitioning:false,routes:[{key:'Boo',routeName:'Boo'},{key:'Bar',routeName:'Bar'}]}]});state=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Bar'},state);state=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Boo'},state);expect(state&&state.routes[1]).toEqual({index:0,isTransitioning:false,key:'Baz',routeName:'Baz',routes:[{key:'Boo',routeName:'Boo'},{key:'Bar',routeName:'Bar'}]});});it('Handles initial deep linking into nested tabs',function(){var ChildTabNavigator=function ChildTabNavigator(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:322}});};ChildTabNavigator.router=TabRouter({Foo:BareLeafRouteConfig,Bar:BareLeafRouteConfig});var router=TabRouter({Foo:BareLeafRouteConfig,Baz:{screen:ChildTabNavigator},Boo:BareLeafRouteConfig});var state=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Bar'});expect(state).toEqual({index:1,isTransitioning:false,routes:[{key:'Foo',routeName:'Foo'},{index:1,key:'Baz',routeName:'Baz',isTransitioning:false,routes:[{key:'Foo',routeName:'Foo'},{key:'Bar',routeName:'Bar'}]},{key:'Boo',routeName:'Boo'}]});var state2=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Foo'},state);expect(state2).toEqual({index:1,isTransitioning:false,routes:[{key:'Foo',routeName:'Foo'},{index:0,key:'Baz',routeName:'Baz',isTransitioning:false,routes:[{key:'Foo',routeName:'Foo'},{key:'Bar',routeName:'Bar'}]},{key:'Boo',routeName:'Boo'}]});var state3=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Foo'},state2);expect(state3).toEqual(null);});it('Handles linking across of deeply nested tabs',function(){var ChildNavigator0=function ChildNavigator0(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:384}});};ChildNavigator0.router=TabRouter({Boo:BareLeafRouteConfig,Baz:BareLeafRouteConfig});var ChildNavigator1=function ChildNavigator1(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:389}});};ChildNavigator1.router=TabRouter({Zoo:BareLeafRouteConfig,Zap:BareLeafRouteConfig});var MidNavigator=function MidNavigator(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:394}});};MidNavigator.router=TabRouter({Fee:{screen:ChildNavigator0},Bar:{screen:ChildNavigator1}});var router=TabRouter({Foo:{screen:MidNavigator},Gah:BareLeafRouteConfig});var state=router.getStateForAction(INIT_ACTION);expect(state).toEqual({index:0,isTransitioning:false,routes:[{index:0,key:'Foo',routeName:'Foo',isTransitioning:false,routes:[{index:0,key:'Fee',routeName:'Fee',isTransitioning:false,routes:[{key:'Boo',routeName:'Boo'},{key:'Baz',routeName:'Baz'}]},{index:0,key:'Bar',routeName:'Bar',isTransitioning:false,routes:[{key:'Zoo',routeName:'Zoo'},{key:'Zap',routeName:'Zap'}]}]},{key:'Gah',routeName:'Gah'}]});var state2=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Zap'},state);expect(state2).toEqual({index:0,isTransitioning:false,routes:[{index:1,key:'Foo',routeName:'Foo',isTransitioning:false,routes:[{index:0,key:'Fee',routeName:'Fee',isTransitioning:false,routes:[{key:'Boo',routeName:'Boo'},{key:'Baz',routeName:'Baz'}]},{index:1,key:'Bar',routeName:'Bar',isTransitioning:false,routes:[{key:'Zoo',routeName:'Zoo'},{key:'Zap',routeName:'Zap'}]}]},{key:'Gah',routeName:'Gah'}]});var state3=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Zap'},state2);expect(state3).toEqual(null);var state4=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'Foo',action:{type:NavigationActions.NAVIGATE,routeName:'Bar',action:{type:NavigationActions.NAVIGATE,routeName:'Zap'}}});expect(state4).toEqual({index:0,isTransitioning:false,routes:[{index:1,key:'Foo',routeName:'Foo',isTransitioning:false,routes:[{index:0,key:'Fee',routeName:'Fee',isTransitioning:false,routes:[{key:'Boo',routeName:'Boo'},{key:'Baz',routeName:'Baz'}]},{index:1,key:'Bar',routeName:'Bar',isTransitioning:false,routes:[{key:'Zoo',routeName:'Zoo'},{key:'Zap',routeName:'Zap'}]}]},{key:'Gah',routeName:'Gah'}]});});it('Handles path configuration',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:533}});};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:534}});};var router=TabRouter({Foo:{path:'f',screen:ScreenA},Bar:{path:'b/:great',screen:ScreenB}});var params={foo:'42'};var action=router.getActionForPathAndParams('b/anything',params);var expectedAction={params:{foo:'42',great:'anything'},routeName:'Bar',type:NavigationActions.NAVIGATE};expect(action).toEqual(expectedAction);var state=router.getStateForAction({type:NavigationActions.INIT});var expectedState={index:0,isTransitioning:false,routes:[{key:'Foo',routeName:'Foo'},{key:'Bar',routeName:'Bar'}]};expect(state).toEqual(expectedState);var state2=router.getStateForAction(expectedAction,state);var expectedState2={index:1,isTransitioning:false,routes:[{key:'Foo',routeName:'Foo',params:undefined},{key:'Bar',routeName:'Bar',params:{foo:'42',great:'anything'}}]};expect(state2).toEqual(expectedState2);expect(router.getComponentForState(expectedState)).toEqual(ScreenA);expect(router.getComponentForState(expectedState2)).toEqual(ScreenB);expect(router.getPathAndParamsForState(expectedState).path).toEqual('f');expect(router.getPathAndParamsForState(expectedState2).path).toEqual('b/anything');});it('Handles default configuration',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:590}});};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:591}});};var router=TabRouter({Foo:{path:'',screen:ScreenA},Bar:{path:'b',screen:ScreenB}});var action=router.getActionForPathAndParams('',{foo:'42'});expect(action).toEqual({params:{foo:'42'},routeName:'Foo',type:NavigationActions.NAVIGATE});});it('Gets deep path',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:613}});};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:614}});};ScreenA.router=TabRouter({Boo:{screen:ScreenB},Baz:{screen:ScreenB}});var router=TabRouter({Foo:{path:'f',screen:ScreenA},Bar:{screen:ScreenB}});var state={index:0,isTransitioning:false,routes:[{index:1,key:'Foo',routeName:'Foo',isTransitioning:false,routes:[{key:'Boo',routeName:'Boo'},{key:'Baz',routeName:'Baz'}]},{key:'Bar',routeName:'Bar'}]};var _router$getPathAndPar=router.getPathAndParamsForState(state),path=_router$getPathAndPar.path;expect(path).toEqual('f/Baz');});it('Can navigate to other tab (no router) with params',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:651}});};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:652}});};var router=TabRouter({a:{screen:ScreenA},b:{screen:ScreenB}});var state0=router.getStateForAction(INIT_ACTION);expect(state0).toEqual({index:0,isTransitioning:false,routes:[{key:'a',routeName:'a'},{key:'b',routeName:'b'}]});var params={key:'value'};var state1=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'b',params:params},state0);expect(state1).toEqual({index:1,isTransitioning:false,routes:[{key:'a',routeName:'a'},{key:'b',routeName:'b',params:params}]});});it('Back actions are not propagated to inactive children',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:685}});};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:686}});};var ScreenC=function ScreenC(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:687}});};var InnerNavigator=function InnerNavigator(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:688}});};InnerNavigator.router=TabRouter({a:{screen:ScreenA},b:{screen:ScreenB}});var router=TabRouter({inner:{screen:InnerNavigator},c:{screen:ScreenC}},{backBehavior:'none'});var state0=router.getStateForAction(INIT_ACTION);var state1=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'b'},state0);var state2=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'c'},state1);var state3=router.getStateForAction({type:NavigationActions.BACK},state2);expect(state3).toEqual(state2);});it('Back behavior initialRoute works',function(){var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:725}});};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:726}});};var router=TabRouter({a:{screen:ScreenA},b:{screen:ScreenB}});var state0=router.getStateForAction(INIT_ACTION);var state1=router.getStateForAction({type:NavigationActions.NAVIGATE,routeName:'b'},state0);var state2=router.getStateForAction({type:NavigationActions.BACK},state1);expect(state2).toEqual(state0);});it('Inner actions are only unpacked if the current tab matches',function(){var PlainScreen=function PlainScreen(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:748}});};var ScreenA=function ScreenA(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:749}});};var ScreenB=function ScreenB(){return React.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:750}});};ScreenB.router=TabRouter({Baz:{screen:PlainScreen},Zoo:{screen:PlainScreen}});ScreenA.router=TabRouter({Bar:{screen:PlainScreen},Boo:{screen:ScreenB}});var router=TabRouter({Foo:{screen:ScreenA}});var screenApreState={index:0,key:'Foo',isTransitioning:false,routeName:'Foo',routes:[{key:'Bar',routeName:'Bar'}]};var preState={index:0,isTransitioning:false,routes:[screenApreState]};var comparable=function comparable(state){var result={};if(typeof state.routeName==='string'){result=_objectSpread({},result,{routeName:state.routeName});}if(state.routes instanceof Array){result=_objectSpread({},result,{routes:state.routes.map(comparable)});}return result;};var action=NavigationActions.navigate({routeName:'Boo',action:NavigationActions.navigate({routeName:'Zoo'})});var expectedState=ScreenA.router.getStateForAction(action,screenApreState);var state=router.getStateForAction(action,preState);var innerState=state?state.routes[0]:state;expect(innerState.routes[1].index).toEqual(1);expect(expectedState&&comparable(expectedState)).toEqual(innerState&&comparable(innerState));var noMatchAction=NavigationActions.navigate({routeName:'Qux',action:NavigationActions.navigate({routeName:'Zoo'})});var expectedState2=ScreenA.router.getStateForAction(noMatchAction,screenApreState);var state2=router.getStateForAction(noMatchAction,preState);var innerState2=state2?state2.routes[0]:state2;expect(innerState2.routes[1].index).toEqual(0);expect(expectedState2&&comparable(expectedState2)).toEqual(innerState2&&comparable(innerState2));});});
//# sourceMappingURL=TabRouter-test.js.map