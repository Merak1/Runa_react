(this.webpackJsonpruna=this.webpackJsonpruna||[]).push([[0],{51:function(e,t,a){e.exports=a(81)},56:function(e,t,a){},57:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),c=a.n(s),o=(a(56),a(26)),i=a(7),l=a(8),u=a(10),p=a(9),d=a(11),h=(a(57),a(31)),m=a(24),f=a.n(m),b=a(36),g=a(27),O=a.n(g),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("img",{src:this.props.source,className:this.props.class,onClick:function(){e.props.send(e.props.index,e.props.title,e.props.source,e.props.genre,e.props.label,e.props.style)},alt:this.props.title})}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:!0===this.props.display?"modal display-block":"modal display-none"},r.a.createElement("section",{className:"modal-main"},r.a.createElement("div",{className:"modal-container"},r.a.createElement("button",{className:"modal-button close",onClick:function(){e.props.closeModal()}},"  X "),r.a.createElement("h2",null," ",this.props.info.src," "),r.a.createElement("p",null," ",this.props.info.genre," "),r.a.createElement("p",null," ",this.props.info.label," "),r.a.createElement("p",null," ",this.props.info.style," "),r.a.createElement(v,{source:this.props.info.title,class:"album-display unclick"}))))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={display:!1,info:{index:0,title:"",src:"",genre:[],label:[],style:[]}},a.showModal=function(e,t,n,r,s,c){a.setState({display:!0}),a.setState({info:{src:t,title:n,genre:r,label:s,style:c}}),console.log("index",e)},a.closeModal=function(){a.setState({display:!1})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"albums"},this.props.artistData.map((function(t,a){return r.a.createElement("div",{className:"album-display",key:t.id},r.a.createElement(y,{info:e.state.info,display:e.state.display,closeModal:e.closeModal}),r.a.createElement(v,{index:a,title:t.title,source:t.cover_image,genre:t.genre,label:t.label,style:t.style,send:e.showModal,class:"album-display"}),r.a.createElement("h3",null," ",t.title," "),r.a.createElement("p",null," ",e.index," "),r.a.createElement("p",null," ",t.genre,"  "),r.a.createElement("p",null," ",t.year,"  "))})))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={input:""},a.Value=function(e){var t=e.target.value;return 0===t.length?a.setState((function(){return{input:[]}})):a.setState({input:t}),t},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Search"},r.a.createElement("div",{className:"search-header"},r.a.createElement("h3",null,"Discogs "),r.a.createElement("h2",null,this.props.input," "),r.a.createElement("input",{onChange:this.Value,type:"text"}),r.a.createElement("button",{onClick:function(){e.props.getSearchedBand(e.state.input)}}," buscar ")),r.a.createElement("div",{className:"Sections"},r.a.createElement(j,{artistData:this.props.artistData})))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={input:"",artistData:[]},a.getAllBands=Object(b.a)(f.a.mark((function e(){var t,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.discogs.com/database/search?artist=306&token=gQSRUSJcpTLakilhMvhtYwsNHtcwCMaKGeEqZPJh");case 2:return t=e.sent,console.log("res, first data",t),e.next=6,t.data;case 6:n=e.sent,r=n.results,n.pagination,a.setState({artistData:r});case 10:case"end":return e.stop()}}),e)}))),a.getSearchedBand=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.discogs.com/database/search?artist=".concat(t,"&token=gQSRUSJcpTLakilhMvhtYwsNHtcwCMaKGeEqZPJh"));case 2:return n=e.sent,console.log("res",n),console.log("artist",t),e.next=7,n.data;case 7:return r=e.sent,s=r.results,r.pagination,console.log("Searched band ",s),a.setState({artistData:s}),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getAllBands()}},{key:"componentDidUpdate",value:function(){console.log("artistData from update",this.state.artistData),console.log("resource_url from update",this.state.artistData.resource_url)}},{key:"getRandom",value:function(){var e=Math.floor(1001*Math.random());return console.log(e),e}},{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(E,{input:this.state.input,artistData:this.state.artistData,getSearchedBand:this.getSearchedBand,getRandomBand:this.getRandomBand}))}}]),t}(n.Component);var k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))}}]),t}(n.Component),S=k=Object(h.b)((function(e){return{isPinging:e.isPinging}}),{ping:function(){return{type:"PING"}}})(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(15),P=a(84);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isPinging:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PING":return{isPinging:!0};case"PONG":return{isPinging:!1};default:return e}},A=(Object(D.c)({artistDataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ARTIST_DATA":return C({},e);case"FETCH_ARTIST_DATA_FAIL":return{};default:return e}},pingpong:x}),a(49)),M=a(85),B=a(83),T=Object(P.a)(),R=Object(D.d)(x,Object(D.a)(T));T.run((function(e){return e.pipe(Object(A.a)("PING"),Object(M.a)(1e3),Object(B.a)({type:"PONG"}))})),c.a.render(r.a.createElement(h.a,{store:R},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.a30a8017.chunk.js.map