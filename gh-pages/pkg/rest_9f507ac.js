;/*!index.tsx*/
define("8d0e5e4",function(e,t){"use strict";function c(e){u.default.render(r.default.createElement(a.default,null),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.bootstrap=void 0;var o=e("849c8c1"),r=o.__importDefault(e("cc4bbf0")),u=o.__importDefault(e("3c5b02d")),a=o.__importDefault(e("4c5556c"));t.bootstrap=c});
;/*!route/NotFound.tsx*/
define("0d8fb78",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("849c8c1"),f=a.__importDefault(e("cc4bbf0")),l=e("f7998ad"),r=e("167c905");t.default=function(){return f.default.createElement(r.NotFound,{links:f.default.createElement(l.Link,{to:"/",className:"list-group-item"},f.default.createElement("i",{className:"fa fa-chevron-right text-muted"}),f.default.createElement("i",{className:"fa fa-fw fa-mail-forward m-r-xs"}),"去首页"),footerText:""})}});
;/*!component/AMISRenderer.tsx*/
define("bf6b35d",function(e,t){"use strict";function r(e,t,r){void 0===r&&(r="page");var c=function(o){function c(){return null!==o&&o.apply(this,arguments)||this}return n.__extends(c,o),c.prototype.getEnv=function(){var e=this;if(this.env)return this.env;var t=this.props,a=t.store,o=i.getEnv(a),s=function(t,r){if(/^\/api\//.test(t))return t;t=t||"";var n=e.props.history,a=n.location,o=p.default.parse(a.search.substring(1));t=u.filter(t.replace(/\$\$/g,p.default.stringify(o)),o),t&&"#"===t[0]?t=a.pathname+a.search+t:t&&"?"===t[0]&&(t=a.pathname+t);var s=t.indexOf("?"),i=t.indexOf("#"),c=~s?t.substring(0,s):~i?t.substring(0,i):t,d=~s?t.substring(s,~i?i:void 0):"",h=~i?t.substring(i):r?a.hash:"";if(c){if("/"!=c[0]&&!/^\w+\:/.test(c)){var f=a.pathname,l=f.split("/");l.pop();for(var m=void 0;m=/^\.\.?\//.exec(c);)"../"===m[0]&&l.pop(),c=c.substring(m[0].length);c=l.concat(c).join("/")}}else c=a.pathname;return c+d+h},c=function(t){var r=e.props.history,n=s(t),a=r.location,o=n,i="",u=n.indexOf("?");if(~u&&(o=n.substring(0,u),i=n.substring(u)),i){if(o!==a.pathname||!a.search)return!1;var c=p.default.parse(a.search.substring(1)),d=p.default.parse(i.substring(1));return Object.keys(d).every(function(e){return d[e]===c[e]})}return o===a.pathname?!0:!1};return this.env=n.__assign(n.__assign({},o),{session:r,isCurrentUrl:c,updateLocation:t.updateLocation||function(t,r){var n=e.props.history;return"goBack"===t?n.goBack():/^https?\:\/\//.test(t)?window.location.href=t:void n[r?"replace":"push"](s(t,r))},jumpTo:t.jumpTo||function(t,r){var n=e.props.history;return"goBack"===t?n.goBack():(t=s(t),c(t)?void 0:r&&"url"===r.actionType?void(r.blank===!1?window.location.href=t:window.open(t,"_blank")):r&&r.blank?void window.open(t,"_blank"):void(/^https?:\/\//.test(t)?window.location.href=t:n.push(t)))},affixOffsetTop:t.embedMode?0:50,theme:a.theme})},c.prototype.render=function(){var r,o=this.props,s=(o.router,o.match),i=o.location,p=(o.history,o.store),c=o.schema,d=(o.jumpTo,o.updateLocation,o.embedMode,n.__rest(o,["router","match","location","history","store","schema","jumpTo","updateLocation","embedMode"])),h=c||e;return h.type||(h.type="page"),r=u.render(h,n.__assign(n.__assign({location:i,data:u.utils.createObject(n.__assign(n.__assign({},s.params),{amisStore:p,pathname:i.pathname,params:s.params}))},d),{propsTransform:t}),this.getEnv()),a.default.createElement(a.default.Fragment,null,r)},c.displayName="SchemaRenderer",c=n.__decorate([s.inject("store"),s.observer],c)}(a.default.Component);return o.withRouter(c)}Object.defineProperty(t,"__esModule",{value:!0}),t.schema2component=void 0;var n=e("849c8c1"),a=n.__importDefault(e("cc4bbf0")),o=e("6af3be1"),s=e("024943c"),i=e("2426036"),p=n.__importDefault(e("9c65a3c")),u=e("167c905");t.schema2component=r,t.default=r({type:"page",body:"It works"})});
;/*!component/AddPageModal.tsx*/
define("3b1184e",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("849c8c1"),a=e("bf6b35d");t.default=a.schema2component({type:"dialog",title:"新增页面",body:{type:"form",controls:[{type:"text",label:"名称",name:"label",validations:{maxLength:20},required:!0},{type:"text",label:"路径",name:"path",validations:{isUrlPath:!0},required:!0,validate:function(e,t){var n=!!e.pages.filter(function(e){return e.path===t}).length;return n?"当前路径已被占用，请换一个":""}},{type:"icon-picker",label:"图标",name:"icon"}]}},function(e){var t=e.onConfirm,a=e.pages,i=n.__rest(e,["onConfirm","pages"]);return n.__assign(n.__assign({},i),{data:{pages:a},onConfirm:function(e){return t&&t(e[0])}})})});
;/*!route/Preview.tsx*/
define("816c31c",function(e,a){"use strict";function t(e,a){var t=c.matchPath(a.pathname,{path:e?e.replace(/\?.*$/,""):"",exact:!0,strict:!0});return!!t}Object.defineProperty(a,"__esModule",{value:!0});var n=e("849c8c1"),l=n.__importDefault(e("cc4bbf0")),d=e("024943c"),i=e("167c905"),c=e("6af3be1"),s=e("f7998ad"),o=n.__importDefault(e("0d8fb78")),r=n.__importDefault(e("bf6b35d")),u=n.__importDefault(e("3b1184e"));a.default=d.inject("store")(d.observer(function(e){function a(){return l.default.createElement("div",null,l.default.createElement("div",{className:"a-Layout-brandBar"},l.default.createElement("button",{onClick:m.toggleOffScreen,className:"pull-right visible-xs"},l.default.createElement("i",{className:"glyphicon glyphicon-align-justify"})),l.default.createElement("div",{className:"a-Layout-brand"},l.default.createElement("i",{className:"fa fa-paw"}),l.default.createElement("span",{className:"hidden-folded m-l-sm"},"AMIS 编辑器"))),l.default.createElement("div",{className:"a-Layout-headerBar"},l.default.createElement("div",{className:"nav navbar-nav hidden-xs"},l.default.createElement(i.Button,{level:"link",className:"no-shadow navbar-btn",onClick:m.toggleAsideFolded,tooltip:"展开或收起侧边栏",placement:"bottom",iconOnly:!0},l.default.createElement("i",{className:m.asideFolded?"fa fa-indent":"fa fa-dedent"}))),l.default.createElement("div",{className:"hidden-xs p-t-sm pull-right"},l.default.createElement(i.Button,{size:"sm",className:"m-r-xs",level:"success",disabled:!0,disabledTip:"Todo..."},"全部导出"),l.default.createElement(i.Button,{size:"sm",level:"info",onClick:function(){return m.setAddPageIsOpen(!0)}},"新增页面"))))}function d(){var e=m.pages.map(function(e){return{label:e.label,path:"/"+e.path,icon:e.icon}}),a=e.map(function(e){return e.path});return l.default.createElement(i.AsideNav,{key:m.asideFolded?"folded-aside":"aside",navigations:[{label:"导航",children:e}],renderLink:function(e){var t=e.link,n=e.toggleExpand,d=e.classnames,c=e.depth;if(t.hidden)return null;var o=[];return t.children&&o.push(l.default.createElement("span",{key:"expand-toggle",className:d("AsideNav-itemArrow"),onClick:function(e){return n(t,e)}})),t.badge&&o.push(l.default.createElement("b",{key:"badge",className:d("AsideNav-itemBadge",t.badgeClassName||"bg-info")},t.badge)),t.icon?o.push(l.default.createElement("i",{key:"icon",className:d("AsideNav-itemIcon",t.icon)})):m.asideFolded&&1===c&&o.push(l.default.createElement("i",{key:"icon",className:d("AsideNav-itemIcon",t.children?"fa fa-folder":"fa fa-info")})),t.active||o.push(l.default.createElement("i",{key:"delete","data-tooltip":"删除","data-position":"bottom",className:"navbtn fa fa-times",onClick:function(e){e.preventDefault(),i.confirm("确认要删除").then(function(e){e&&m.removePageAt(a.indexOf(t.path))})}})),o.push(l.default.createElement("i",{key:"edit","data-tooltip":"编辑","data-position":"bottom",className:"navbtn fa fa-pencil",onClick:function(e){e.preventDefault(),h.push("/edit/"+a.indexOf(t.path))}})),o.push(l.default.createElement("span",{key:"label",className:d("AsideNav-itemLabel")},t.label)),t.path?t.active?l.default.createElement("a",null,o):l.default.createElement(s.Link,{to:"/"===t.path[0]?t.path:""+t.path},o):l.default.createElement("a",{onClick:t.onClick?t.onClick:t.children?function(){return n(t)}:void 0},o)},isActive:function(e){return t(e.path&&"/"===e.path[0]?e.path:""+e.path,p)}})}function f(e){m.addPage(n.__assign(n.__assign({},e),{schema:{type:"page",title:e.label,body:"这是你刚刚新增的页面。"}})),m.setAddPageIsOpen(!1)}var m=e.store,p=e.location,h=e.history;return l.default.createElement(i.Layout,{aside:d(),header:a(),folded:m.asideFolded,offScreen:m.offScreen},l.default.createElement(c.Switch,null,m.pages.map(function(e){return l.default.createElement(c.Route,{key:e.id,path:"/"+e.path,render:function(){return l.default.createElement(r.default,{schema:e.schema})}})}),l.default.createElement(c.Route,{component:o.default})),l.default.createElement(u.default,{show:m.addPageIsOpen,onClose:function(){return m.setAddPageIsOpen(!1)},onConfirm:f,pages:m.pages.concat()}))}))});
;/*!renderer/MyRenderer.tsx*/
define("de955de",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("849c8c1"),n=e("167c905"),u=r.__importDefault(e("cc4bbf0")),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e=this.props.target;return u.default.createElement("p",null,"Hello ",e,"!")},t.defaultProps={target:"world"},t=r.__decorate([n.Renderer({test:/\bmy-renderer$/,name:"my-renderer"})],t)}(u.default.Component);t.default=d});
;/*!editor/MyRenderer.tsx*/
define("bef2b8d",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("849c8c1"),n=e("39ea9ea"),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tipName="自定义组件",t.settingsSchema={title:"自定义组件配置",controls:[{type:"tabs",tabsMode:"line",className:"m-t-n-xs",contentClassName:"no-border p-l-none p-r-none",tabs:[{title:"常规",controls:[{name:"target",label:"Target",type:"text"}]},{title:"外观",controls:[]}]}]},t}return r.__extends(t,e),t=r.__decorate([n.RendererEditor("my-renderer",{name:"自定义渲染器",description:"这只是个示例",type:"my-renderer",previewSchema:{type:"my-renderer",target:"demo"},scaffold:{type:"my-renderer",target:"233"}})],t)}(n.BasicEditor);t.default=a});
;/*!route/Editor.tsx*/
define("218f7cb",function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=e("849c8c1"),n=t.__importDefault(e("cc4bbf0")),c=e("39ea9ea"),i=e("024943c"),r=e("167c905");e("de955de"),e("bef2b8d");var s=-1,l=window.location.protocol+"//"+window.location.host;/^\/amis/.test(window.location.pathname)&&(l+="/amis");var o=l+"/schema.json";a.default=i.inject("store")(i.observer(function(e){function a(){l.updatePageSchemaAt(u),r.toast.success("保存成功","提示")}function t(){d.push("/"+l.pages[u].path)}function i(){return n.default.createElement("div",{className:"editor-header clearfix box-shadow bg-dark"},n.default.createElement("div",{className:"navbar-brand text-lt font-thin"},"AMis 编辑器"),n.default.createElement("div",{className:"editor-preview"},"预览"," ",n.default.createElement(r.Switch,{value:l.preview,onChange:function(e){return l.setPreview(e)},className:"m-l-xs",inline:!0})),n.default.createElement("div",{className:"editor-header-btns"},n.default.createElement("div",{className:r.classnames("btn-item"),onClick:a},"保存"),n.default.createElement("div",{className:"btn-item",onClick:t},"退出")))}var l=e.store,d=(e.location,e.history),m=e.match,u=parseInt(m.params.id,10);return u!==s&&(s=u,l.updateSchema(l.pages[u].schema)),n.default.createElement(r.Layout,{header:i()},n.default.createElement(c.Editor,{theme:"default",preview:l.preview,value:l.schema,onChange:function(e){return l.updateSchema(e)},className:"is-fixed",$schemaUrl:o}))}))});