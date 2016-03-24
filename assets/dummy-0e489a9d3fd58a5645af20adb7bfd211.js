"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("dummy/components/ivy-tab-list",["exports","ivy-tabs/components/ivy-tab-list"],function(e,t){e["default"]=t["default"].extend({tagName:"ul",classNames:["nav","nav-tabs"]})}),define("dummy/components/ivy-tab-panel",["exports","ivy-tabs/components/ivy-tab-panel"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ivy-tab",["exports","ember","ivy-tabs/components/ivy-tab"],function(e,t,n){e["default"]=n["default"].extend({tagName:"li",actions:{select:function(){this.select()}},panelHref:t["default"].computed(function(){return"#"+this.get("aria-controls")}).property("aria-controls")})}),define("dummy/components/ivy-tabs",["exports","ivy-tabs/components/ivy-tabs"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:9,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h1");e.setAttribute(a,"class","page-header");var r=e.createTextNode("ivy-tabs");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("hr");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createTextNode("View source on ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"href","https://github.com/IvyApp/ivy-tabs");var i=e.createTextNode("GitHub");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode(".");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[0]),3,3),a},statements:[["content","outlet",["loc",[null,[4,2],[4,12]]]]],locals:[],templates:[]}}())}),define("dummy/templates/components/ivy-tab",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"modifiers",modifiers:["action"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/ivy-tab.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("a"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=new Array(3);return r[0]=e.createAttrMorph(a,"href"),r[1]=e.createElementMorph(a),r[2]=e.createMorphAt(a,0,0),r},statements:[["attribute","href",["concat",[["get","panelHref",["loc",[null,[1,31],[1,40]]]]]]],["element","action",["select"],[],["loc",[null,[1,3],[1,22]]]],["content","yield",["loc",[null,[1,44],[1,53]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:3,column:4},end:{line:3,column:37}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Tab A");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:4,column:4},end:{line:4,column:37}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Tab B");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:5,column:4},end:{line:5,column:37}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Tab C");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:2,column:2},end:{line:6,column:2}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createMorphAt(t,3,3,n),a[2]=e.createMorphAt(t,5,5,n),a},statements:[["block","ivy-tab",[],["tabList",["subexpr","@mut",[["get","tabList",["loc",[null,[3,23],[3,30]]]]],[],[]]],0,null,["loc",[null,[3,4],[3,49]]]],["block","ivy-tab",[],["tabList",["subexpr","@mut",[["get","tabList",["loc",[null,[4,23],[4,30]]]]],[],[]]],1,null,["loc",[null,[4,4],[4,49]]]],["block","ivy-tab",[],["tabList",["subexpr","@mut",[["get","tabList",["loc",[null,[5,23],[5,30]]]]],[],[]]],2,null,["loc",[null,[5,4],[5,49]]]]],locals:["tabList"],templates:[e,t,n]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:9,column:4},end:{line:20,column:4}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Tab A");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n      ");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n        occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n        mollit anim id est laborum.\n      ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:22,column:4},end:{line:32,column:4}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Tab B");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n      ");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n        Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n        occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n        mollit anim id est laborum.\n      ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:34,column:4},end:{line:44,column:4}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Tab C");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n      ");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n        Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n        occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n        mollit anim id est laborum.\n        Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.\n      ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:46,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","tab-content");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=new Array(4);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(a,1,1),r[2]=e.createMorphAt(a,3,3),r[3]=e.createMorphAt(a,5,5),e.insertBoundary(t,0),r},statements:[["block","ivy-tab-list",[],["tabsContainer",["subexpr","@mut",[["get","tabsContainer",["loc",[null,[2,32],[2,45]]]]],[],[]]],0,null,["loc",[null,[2,2],[6,19]]]],["block","ivy-tab-panel",[],["tabsContainer",["subexpr","@mut",[["get","tabsContainer",["loc",[null,[9,35],[9,48]]]]],[],[]]],1,null,["loc",[null,[9,4],[20,22]]]],["block","ivy-tab-panel",[],["tabsContainer",["subexpr","@mut",[["get","tabsContainer",["loc",[null,[22,35],[22,48]]]]],[],[]]],2,null,["loc",[null,[22,4],[32,22]]]],["block","ivy-tab-panel",[],["tabsContainer",["subexpr","@mut",[["get","tabsContainer",["loc",[null,[34,35],[34,48]]]]],[],[]]],3,null,["loc",[null,[34,4],[44,22]]]]],locals:["tabsContainer"],templates:[e,t,n,a]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:47,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","ivy-tabs",[],[],0,null,["loc",[null,[1,0],[46,13]]]]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ivy-tabs",version:"v1.2.0"});