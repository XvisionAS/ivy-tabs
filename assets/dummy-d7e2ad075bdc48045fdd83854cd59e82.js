"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,a,n){Object.defineProperty(e,"__esModule",{value:!0})
var l
l=Ember.Application.extend({Resolver:t.default,modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix}),(0,a.default)(l,n.default.modulePrefix),e.default=l}),define("dummy/components/ivy-tabs-tab",["exports","ivy-tabs/components/ivy-tabs-tab"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/ivy-tabs-tablist",["exports","ivy-tabs/components/ivy-tabs-tablist"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/ivy-tabs-tabpanel",["exports","ivy-tabs/components/ivy-tabs-tabpanel"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/ivy-tabs",["exports","ivy-tabs/components/ivy-tabs"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/dynamic-tabs",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({actions:{addItem:function(){this.get("model").pushObject(Ember.Object.create({checked:!1,index:this.incrementProperty("nextIndex")}))},removeItem:function(e){this.get("model").removeObject(e)},removeSelected:function(){this.get("model").removeObjects(this.get("checkedItems"))}},checkedItems:Ember.computed.filterBy("model","checked",!0),nextIndex:0,noCheckedItems:Ember.computed.empty("checkedItems")})}),define("dummy/controllers/query-params",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({queryParams:["selection"]})}),define("dummy/helpers/app-version",["exports","dummy/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=l
var n=t.default.APP.version
function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?n.match(a.versionRegExp)[0]:t.hideVersion?n.match(a.shaRegExp)[0]:n}e.default=Ember.Helper.helper(l)}),define("dummy/helpers/eq",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=function(){return function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0
try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&o.return&&o.return()}finally{if(l)throw r}}return a}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()
e.default=Ember.Helper.helper(function(e){var a=t(e,2)
return a[0]===a[1]})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=void 0,l=void 0
a.default.APP&&(n=a.default.APP.name,l=a.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(n,l)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function a(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var n,l=t.default.exportApplicationGlobal
n="string"==typeof l?l:Ember.String.classify(t.default.modulePrefix),a[n]||(a[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
a.map(function(){this.route("dynamic-tabs"),this.route("query-params")}),e.default=a}),define("dummy/routes/dynamic-tabs",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(){return Ember.A()}})}),define("dummy/routes/query-params",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({queryParams:{selection:{as:"tab",replace:!0}}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"ZfXiru19",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","container"],[7],[0,"\\n  "],[6,"div"],[9,"class","page-header"],[7],[0,"\\n    "],[6,"h1"],[7],[0,"ivy-tabs"],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","row"],[7],[0,"\\n    "],[6,"div"],[9,"class","col-sm-9"],[7],[0,"\\n      "],[1,[18,"outlet"],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","col-sm-3"],[7],[0,"\\n      "],[6,"div"],[9,"class","list-group"],[7],[0,"\\n        "],[4,"link-to",["index"],[["class"],["list-group-item"]],{"statements":[[0,"Basic Example"]],"parameters":[]},null],[0,"\\n        "],[4,"link-to",["query-params"],[["class"],["list-group-item"]],{"statements":[[0,"Query Parameters Example"]],"parameters":[]},null],[0,"\\n        "],[4,"link-to",["dynamic-tabs"],[["class"],["list-group-item"]],{"statements":[[0,"Dynamic Tabs Example"]],"parameters":[]},null],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"hr"],[7],[8],[0,"\\n  "],[6,"p"],[7],[0,"View source on "],[6,"a"],[9,"href","https://github.com/IvyApp/ivy-tabs"],[7],[0,"GitHub"],[8],[0,"."],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/dynamic-tabs",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"vcuHyXhb",block:'{"symbols":["item","tabs","item","tablist","item"],"statements":[[6,"h2"],[7],[0,"Dynamic Tabs Example"],[8],[0,"\\n\\n"],[6,"p"],[7],[0,"Here\'s an example of using "],[6,"code"],[7],[0,"ivy-tabs"],[8],[0," with a dynamic collection of objects. Try clicking the \\"Add an Item\\" button below to add a tab. To remove one, click the "],[6,"strong"],[7],[0,"×"],[8],[0," to the left of the tab\'s name or select its corresponding checkbox and click the \\"Remove Items\\" button."],[8],[0,"\\n\\n"],[6,"div"],[9,"class","example"],[7],[0,"\\n"],[4,"ivy-tabs",null,[["selection"],[[20,["selection"]]]],{"statements":[[4,"component",[[19,2,["tablist"]]],[["class","tagName"],["nav nav-tabs","ul"]],{"statements":[[4,"each",[[20,["model"]]],null,{"statements":[[0,"        "],[6,"li"],[10,"class",[26,[[25,"if",[[25,"eq",[[20,["selection"]],[19,5,["index"]]],null],"active"],null]]]],[9,"role","presentation"],[7],[0,"\\n"],[4,"component",[[19,4,["tab"]],[19,5,["index"]]],[["on-select"],[[25,"action",[[19,0,[]],[25,"mut",[[20,["selection"]]],null]],null]]],{"statements":[[0,"            "],[6,"button"],[9,"class","close"],[9,"type","button"],[3,"action",[[19,0,[]],"removeItem",[19,5,[]]]],[7],[0,"\\n              "],[6,"span"],[9,"aria-hidden","true"],[7],[0,"×"],[8],[0,"\\n            "],[8],[0,"\\n\\n            Item "],[1,[19,5,["index"]],false],[0,"\\n"]],"parameters":[]},null],[0,"        "],[8],[0,"\\n"]],"parameters":[5]},null]],"parameters":[4]},null],[0,"\\n    "],[6,"div"],[9,"class","tab-content"],[7],[0,"\\n"],[4,"each",[[20,["model"]]],null,{"statements":[[4,"component",[[19,2,["tabpanel"]],[19,3,["index"]]],[["class"],["tab-pane"]],{"statements":[[0,"          "],[6,"p"],[7],[0,"Here is some content for Item "],[1,[19,3,["index"]],false],[0,". Kale chips marfa next level hella hot chicken. Post-ironic snackwave dreamcatcher lyft, hot chicken brunch roof party small batch quinoa migas ugh. Live-edge beard leggings affogato, marfa yr brooklyn. Jean shorts artisan cred schlitz gluten-free pour-over distillery sriracha portland iceland, normcore kombucha roof party. Gentrify truffaut hot chicken air plant, hashtag la croix photo booth kogi live-edge. Bitters kogi subway tile tousled offal bushwick narwhal fam. Cray salvia poutine, jianbing ethical hot chicken whatever VHS."],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[3]},null],[0,"    "],[8],[0,"\\n"]],"parameters":[2]},null],[0,"\\n  "],[6,"button"],[9,"class","btn btn-default"],[9,"type","button"],[3,"action",[[19,0,[]],"addItem"]],[7],[0,"\\n    Add an Item\\n  "],[8],[0,"\\n\\n  "],[6,"button"],[9,"class","btn btn-default"],[10,"disabled",[18,"noCheckedItems"],null],[9,"type","button"],[3,"action",[[19,0,[]],"removeSelected"]],[7],[0,"\\n    Remove "],[1,[20,["checkedItems","length"]],false],[0," Item(s)\\n  "],[8],[0,"\\n\\n"],[4,"each",[[20,["model"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"class","checkbox"],[7],[0,"\\n      "],[6,"label"],[7],[0,"\\n        "],[1,[25,"input",null,[["checked","type"],[[19,1,["checked"]],"checkbox"]]],false],[0," Item "],[1,[19,1,["index"]],false],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[1]},null],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/dynamic-tabs.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"aIcwra1x",block:'{"symbols":["tabs","tablist"],"statements":[[6,"h2"],[7],[0,"Basic Example"],[8],[0,"\\n\\n"],[6,"p"],[7],[0,"Here\'s a very basic example of "],[6,"code"],[7],[0,"ivy-tabs"],[8],[0," in action. Here we\'ve defined some tabs and tabpanels directly in our template. We\'ve bound the active selection to a "],[6,"code"],[7],[0,"selection"],[8],[0," property, which is currently set to "],[6,"code"],[7],[1,[18,"selection"],false],[8],[0,"."],[8],[0,"\\n\\n"],[6,"div"],[9,"class","example"],[7],[0,"\\n"],[4,"ivy-tabs",null,[["selection"],[[20,["selection"]]]],{"statements":[[4,"component",[[19,1,["tablist"]]],[["class","id","tagName"],["nav nav-tabs","basic-tablist","ul"]],{"statements":[[0,"      "],[6,"li"],[10,"class",[26,[[25,"if",[[25,"eq",[[20,["selection"]],"A"],null],"active"],null]]]],[9,"role","presentation"],[7],[0,"\\n        "],[4,"component",[[19,2,["tab"]],"A"],[["id","on-select"],["basic-tab-a",[25,"action",[[19,0,[]],[25,"mut",[[20,["selection"]]],null]],null]]],{"statements":[[0,"Tab A"]],"parameters":[]},null],[0,"\\n      "],[8],[0,"\\n      "],[6,"li"],[10,"class",[26,[[25,"if",[[25,"eq",[[20,["selection"]],"B"],null],"active"],null]]]],[9,"role","presentation"],[7],[0,"\\n        "],[4,"component",[[19,2,["tab"]],"B"],[["id","on-select"],["basic-tab-b",[25,"action",[[19,0,[]],[25,"mut",[[20,["selection"]]],null]],null]]],{"statements":[[0,"Tab B"]],"parameters":[]},null],[0,"\\n      "],[8],[0,"\\n      "],[6,"li"],[10,"class",[26,[[25,"if",[[25,"eq",[[20,["selection"]],"C"],null],"active"],null]]]],[9,"role","presentation"],[7],[0,"\\n        "],[4,"component",[[19,2,["tab"]],"C"],[["id","on-select"],["basic-tab-c",[25,"action",[[19,0,[]],[25,"mut",[[20,["selection"]]],null]],null]]],{"statements":[[0,"Tab C"]],"parameters":[]},null],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[2]},null],[0,"\\n    "],[6,"div"],[9,"class","tab-content"],[7],[0,"\\n"],[4,"component",[[19,1,["tabpanel"]],"A"],[["class","id"],["tab-pane","basic-panel-a"]],{"statements":[[0,"        "],[6,"p"],[7],[0,"Kale chips marfa next level hella hot chicken. Post-ironic snackwave dreamcatcher lyft, hot chicken brunch roof party small batch quinoa migas ugh. Live-edge beard leggings affogato, marfa yr brooklyn. Jean shorts artisan cred schlitz gluten-free pour-over distillery sriracha portland iceland, normcore kombucha roof party. Gentrify truffaut hot chicken air plant, hashtag la croix photo booth kogi live-edge. Bitters kogi subway tile tousled offal bushwick narwhal fam. Cray salvia poutine, jianbing ethical hot chicken whatever VHS."],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"component",[[19,1,["tabpanel"]],"B"],[["class","id"],["tab-pane","basic-panel-b"]],{"statements":[[0,"        "],[6,"p"],[7],[0,"Green juice vice PBR&B +1 affogato. Sustainable lumbersexual fam, glossier letterpress mustache street art tilde 3 wolf moon viral. Enamel pin trust fund chia YOLO, PBR&B organic ethical cardigan lomo migas pour-over shoreditch dreamcatcher. Enamel pin kickstarter godard organic authentic, butcher snackwave paleo celiac messenger bag roof party keffiyeh distillery. Direct trade skateboard narwhal thundercats, tumeric fam lumbersexual. Vice helvetica brooklyn, tbh edison bulb authentic austin post-ironic. Organic pickled YOLO godard."],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"component",[[19,1,["tabpanel"]],"C"],[["class","id"],["tab-pane","basic-panel-c"]],{"statements":[[0,"        "],[6,"p"],[7],[0,"Pork belly waistcoat tbh, pour-over lyft intelligentsia man bun sartorial mumblecore live-edge plaid pok pok salvia. Keytar jean shorts distillery, kogi deep v blog hexagon meditation vegan tumblr schlitz mixtape franzen 3 wolf moon. +1 semiotics pork belly cliche food truck, paleo hell of cred vegan polaroid. Microdosing DIY craft beer messenger bag deep v. Live-edge asymmetrical williamsburg vinyl, raw denim dreamcatcher brunch lyft tilde migas glossier hashtag cliche YOLO. Banjo gochujang locavore organic. Wayfarers chambray hammock, scenester direct trade 90\'s disrupt activated charcoal poke kinfolk fanny pack try-hard asymmetrical vaporware."],[8],[0,"\\n"]],"parameters":[]},null],[0,"    "],[8],[0,"\\n"]],"parameters":[1]},null],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/templates/query-params",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"BIRiSymW",block:'{"symbols":["tabs","tablist"],"statements":[[6,"h2"],[7],[0,"Query Parameters Example"],[8],[0,"\\n\\n"],[6,"p"],[7],[0,"Like in the "],[4,"link-to",["index"],null,{"statements":[[0,"Basic Example"]],"parameters":[]},null],[0,", we\'ve bound the selection to a "],[6,"code"],[7],[0,"selection"],[8],[0," property (currently set to "],[6,"code"],[7],[1,[18,"selection"],false],[8],[0,"). We\'ve also told Ember to treat "],[6,"code"],[7],[0,"selection"],[8],[0," as a query parameter, serializing it into the querystring as "],[6,"code"],[7],[0,"tab"],[8],[0,". Notice how the URL changes when you select a new tab? Now try refreshing the page. Neat, huh?"],[8],[0,"\\n\\n"],[6,"div"],[9,"class","example"],[7],[0,"\\n"],[4,"ivy-tabs",null,[["selection"],[[20,["selection"]]]],{"statements":[[4,"component",[[19,1,["tablist"]]],[["class","tagName"],["nav nav-tabs","ul"]],{"statements":[[0,"      "],[6,"li"],[10,"class",[26,[[25,"if",[[25,"eq",[[20,["selection"]],"A"],null],"active"],null]]]],[9,"role","presentation"],[7],[0,"\\n        "],[4,"component",[[19,2,["tab"]],"A"],[["id","on-select"],["query-params-tab-a",[25,"action",[[19,0,[]],[25,"mut",[[20,["selection"]]],null]],null]]],{"statements":[[0,"Tab A"]],"parameters":[]},null],[0,"\\n      "],[8],[0,"\\n      "],[6,"li"],[10,"class",[26,[[25,"if",[[25,"eq",[[20,["selection"]],"B"],null],"active"],null]]]],[9,"role","presentation"],[7],[0,"\\n        "],[4,"component",[[19,2,["tab"]],"B"],[["id","on-select"],["query-params-tab-b",[25,"action",[[19,0,[]],[25,"mut",[[20,["selection"]]],null]],null]]],{"statements":[[0,"Tab B"]],"parameters":[]},null],[0,"\\n      "],[8],[0,"\\n      "],[6,"li"],[10,"class",[26,[[25,"if",[[25,"eq",[[20,["selection"]],"C"],null],"active"],null]]]],[9,"role","presentation"],[7],[0,"\\n        "],[4,"component",[[19,2,["tab"]],"C"],[["id","on-select"],["query-params-tab-c",[25,"action",[[19,0,[]],[25,"mut",[[20,["selection"]]],null]],null]]],{"statements":[[0,"Tab C"]],"parameters":[]},null],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[2]},null],[0,"\\n    "],[6,"div"],[9,"class","tab-content"],[7],[0,"\\n"],[4,"component",[[19,1,["tabpanel"]],"A"],[["class","id"],["tab-pane","query-panel-a"]],{"statements":[[0,"        "],[6,"p"],[7],[0,"Kale chips marfa next level hella hot chicken. Post-ironic snackwave dreamcatcher lyft, hot chicken brunch roof party small batch quinoa migas ugh. Live-edge beard leggings affogato, marfa yr brooklyn. Jean shorts artisan cred schlitz gluten-free pour-over distillery sriracha portland iceland, normcore kombucha roof party. Gentrify truffaut hot chicken air plant, hashtag la croix photo booth kogi live-edge. Bitters kogi subway tile tousled offal bushwick narwhal fam. Cray salvia poutine, jianbing ethical hot chicken whatever VHS."],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"component",[[19,1,["tabpanel"]],"B"],[["class","id"],["tab-pane","query-panel-b"]],{"statements":[[0,"        "],[6,"p"],[7],[0,"Green juice vice PBR&B +1 affogato. Sustainable lumbersexual fam, glossier letterpress mustache street art tilde 3 wolf moon viral. Enamel pin trust fund chia YOLO, PBR&B organic ethical cardigan lomo migas pour-over shoreditch dreamcatcher. Enamel pin kickstarter godard organic authentic, butcher snackwave paleo celiac messenger bag roof party keffiyeh distillery. Direct trade skateboard narwhal thundercats, tumeric fam lumbersexual. Vice helvetica brooklyn, tbh edison bulb authentic austin post-ironic. Organic pickled YOLO godard."],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"component",[[19,1,["tabpanel"]],"C"],[["class","id"],["tab-pane","query-panel-c"]],{"statements":[[0,"        "],[6,"p"],[7],[0,"Pork belly waistcoat tbh, pour-over lyft intelligentsia man bun sartorial mumblecore live-edge plaid pok pok salvia. Keytar jean shorts distillery, kogi deep v blog hexagon meditation vegan tumblr schlitz mixtape franzen 3 wolf moon. +1 semiotics pork belly cliche food truck, paleo hell of cred vegan polaroid. Microdosing DIY craft beer messenger bag deep v. Live-edge asymmetrical williamsburg vinyl, raw denim dreamcatcher brunch lyft tilde migas glossier hashtag cliche YOLO. Banjo gochujang locavore organic. Wayfarers chambray hammock, scenester direct trade 90\'s disrupt activated charcoal poke kinfolk fanny pack try-hard asymmetrical vaporware."],[8],[0,"\\n"]],"parameters":[]},null],[0,"    "],[8],[0,"\\n"]],"parameters":[1]},null],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/query-params.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(unescape(t))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({name:"ivy-tabs",version:"3.2.0+efb49354"})
