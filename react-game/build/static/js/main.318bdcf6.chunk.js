(this["webpackJsonpreact-game"]=this["webpackJsonpreact-game"]||[]).push([[0],{18:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(12),i=a.n(c),r=a(13),l=a(8),o=a(11),u=a(9),d=a(2),g=a(3),m=a(5),h=a(4),j=(a(18),a.p+"static/media/github-icon.04ed74f3.svg"),b=a.p+"static/media/rsschool.b974d406.svg",p=a(0);var v=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"footer__wrap",children:[Object(p.jsx)("a",{className:"footer__link",href:"https://github.com/Heliken",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("img",{src:j,alt:"github"})}),Object(p.jsx)("div",{className:"footer__year ",children:"2021"}),Object(p.jsx)("a",{className:"footer__link",href:"https://rs.school/",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("img",{src:b,alt:"rolling scopes"})})]})})})},f=(a(20),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props,t=e.changeScreen,a=e.newGame,n=e.hasSavedGame,s=e.vocabulary,c=e.lang;return Object(p.jsxs)("div",{className:"menu__wrap",children:[n&&Object(p.jsx)("div",{className:"menu__unit",children:Object(p.jsx)("span",{className:"underline",onClick:function(){t("game")},children:s[c].continue})}),Object(p.jsx)("div",{className:"menu__unit",children:Object(p.jsx)("span",{className:"underline",onClick:function(){a()},children:s[c].newGame})}),Object(p.jsx)("div",{className:"menu__unit",children:Object(p.jsx)("span",{className:"underline",onClick:function(){t("settings")},children:s[c].settings})}),Object(p.jsx)("div",{className:"menu__unit",children:Object(p.jsx)("span",{className:"underline",onClick:function(){t("records")},children:s[c].records})})]})}}]),a}(n.Component)),O=(a(21),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.name,n=e.options,s=e.changeSetting,c=e.isChecked;return Object(p.jsxs)("div",{className:"settings-toggle",children:[Object(p.jsx)("div",{className:"settings-toggle__title",children:t}),Object(p.jsxs)("div",{className:"settings-toggle__body",children:[Object(p.jsx)("div",{className:"settings-toggle__option",children:n[0]}),Object(p.jsxs)("label",{className:"settings-toggle__label",children:[Object(p.jsx)("input",{name:a,type:"checkbox",checked:c,onChange:s}),Object(p.jsx)("span",{})]}),Object(p.jsx)("div",{className:"settings-toggle__option",children:n[1]})]})]})}}]),a}(n.Component)),y=(a(22),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props,t=e.changeScreen,a=e.changeSetting,n=e.settings,s=e.vocabulary,c=e.lang;return Object(p.jsxs)("div",{className:"menu__wrap",children:[Object(p.jsx)("div",{className:"menu__unit",children:Object(p.jsx)(O,{title:s[c].settingsOptions.theme.title,name:"altMode",options:s[c].settingsOptions.theme.options,changeSetting:a,isChecked:n.altMode})}),Object(p.jsx)("div",{className:"menu__unit",children:Object(p.jsx)(O,{title:s[c].settingsOptions.startAs.title,name:"altStartWith",options:s[c].settingsOptions.startAs.options,changeSetting:a,isChecked:n.altStartWith})}),Object(p.jsx)("div",{className:"menu__unit",children:Object(p.jsx)(O,{title:s[c].settingsOptions.lang.title,name:"lang",options:s[c].settingsOptions.lang.options,isChecked:"ru"===n.lang,changeSetting:a})}),Object(p.jsx)("div",{className:"menu__unit",children:Object(p.jsx)("span",{className:"underline",onClick:function(){return t("menu")},children:s[c].back})})]})}}]),a}(n.Component)),S=(a(23),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"shakeTile",value:function(e){e.target.classList.add("game__field-section--shake"),setTimeout((function(){e.target.classList.remove("game__field-section--shake")}),200)}},{key:"render",value:function(){var e=this,t=this.props,a=t.gameField,n=t.changeScreen,s=t.updateField,c=t.gameMessage,i=t.gameEnded,r=t.elementsToHighlight,l=t.autoplay,o=t.moves,u=t.startedAutoplay,d=t.vocabulary,g=t.lang,m=a.map((function(t,a){var n=!t,c="";switch(t){case"X":c+=" game__field-section--x";break;case"O":c+=" game__field-section--o";break;default:c+=""}return i&&r.indexOf(a)<0&&(c+=" game__field-section--semi-hidden"),Object(p.jsx)("div",{className:"game__field-section".concat(c),onClick:!n||i||u?e.shakeTile:function(){return s(a)}},a)}));return Object(p.jsxs)("div",{className:"game",children:[Object(p.jsxs)("div",{className:"game__header",children:[Object(p.jsx)("div",{className:"game__back underline",onClick:function(){n("menu")},children:d[g].back}),Object(p.jsx)("div",{className:"game__autoplay underline",onClick:function(){l()},children:d[g].autoplay}),Object(p.jsx)("div",{className:"game__stats",children:Object(p.jsx)("div",{className:"game__moves ",children:"".concat(d[g].moves,": ").concat(o)})})]}),Object(p.jsx)("div",{className:"game__field",children:m}),Object(p.jsx)("div",{className:"game__message",children:c})]})}}]),a}(n.Component)),x=(a(24),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.records,n=t.changeScreen,s=t.vocabulary,c=t.lang;return e=a.length<1?Object(p.jsx)("tr",{children:Object(p.jsx)("td",{style:{textAlign:"center"},colSpan:3,children:s[c].table.tableMessage})}):a.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t+1}),Object(p.jsx)("td",{children:"".concat(s[c].player," ").concat(e.player)}),Object(p.jsx)("td",{children:e.moves})]},t)})),Object(p.jsxs)("div",{className:"menu__wrap",children:[Object(p.jsxs)("table",{className:"records",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:s[c].table.tableHeader[0]}),Object(p.jsx)("td",{children:s[c].table.tableHeader[1]}),Object(p.jsx)("td",{children:s[c].table.tableHeader[2]})]})}),Object(p.jsx)("tbody",{children:e})]}),Object(p.jsx)("div",{className:"menu__unit",children:Object(p.jsx)("span",{className:"underline",onClick:function(){return n("menu")},children:"Back"})})]})}}]),a}(n.Component)),_=(a(25),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).toggleFullScreen=function(){var e=document.querySelector(".app");e.requestFullscreen=e.requestFullscreen||e.mozRequestFullscreen||e.msRequestFullscreen||e.webkitRequestFullscreen,document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():e.requestFullscreen().then({}).catch((function(e){alert("Error attempting to enable full-screen mode: ".concat(e.message," (").concat(e.name,")"))}))},e}return Object(g.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props,n=a.activeSection,s=a.hasSavedGame,c=a.changeScreen,i=a.changeSetting,r=a.settings,l=a.gameField,o=a.updateField,u=a.newGame,d=a.gameMessage,g=a.gameEnded,m=a.elementsToHighlight,h=a.autoplay,j=a.moves,b=a.startedAutoplay,v=a.records,O=a.vocabulary,_=a.lang;switch(n){case"main":e=Object(p.jsx)(f,{changeScreen:c,newGame:u,vocabulary:O,lang:_,hasSavedGame:s});break;case"settings":e=Object(p.jsx)(y,{changeScreen:c,settings:r,vocabulary:O,lang:_,changeSetting:i});break;case"game":e=Object(p.jsx)(S,{vocabulary:O,lang:_,changeScreen:c,autoplay:h,moves:j,gameField:l,updateField:o,gameMessage:d,gameEnded:g,startedAutoplay:b,elementsToHighlight:m});break;case"records":e=Object(p.jsx)(x,{vocabulary:O,lang:_,records:v,changeScreen:c});break;default:e=Object(p.jsx)(f,{vocabulary:O,lang:_,changeScreen:c,newGame:u,hasSavedGame:s})}return Object(p.jsxs)("div",{className:"menu",children:[Object(p.jsx)("div",{className:"menu__fullscreen",onClick:function(){t.toggleFullScreen()}}),e]})}}]),a}(n.Component)),k=(a(26),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props,t=e.vocabulary,a=e.lang;return Object(p.jsxs)("div",{className:"hotkeys",children:[Object(p.jsxs)("p",{children:[t[a].hotkeys,":"]}),Object(p.jsxs)("p",{children:[t[a].continue," - C"]}),Object(p.jsxs)("p",{children:[t[a].newGame," - N"]}),Object(p.jsxs)("p",{children:[t[a].back," - B"]}),Object(p.jsxs)("p",{children:[t[a].autoplay," - A"]}),Object(p.jsxs)("p",{children:[t[a].settings," - S"]})]})}}]),a}(n.Component)),N={ru:{player:"\u0418\u0433\u0440\u043e\u043a",hotkeys:"\u0425\u043e\u0442\u043a\u0435\u0438",newGame:"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430",continue:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",back:"\u041d\u0430\u0437\u0430\u0434",settings:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",autoplay:"\u0410\u0432\u0442\u043e\u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u043d\u0438\u0435",moves:"\u0425\u043e\u0434\u044b",playerMessageTemplate:"\u0445\u043e\u0434\u0438\u0442 \u0441\u0435\u0439\u0447\u0430\u0441",tieMessageTemplate:"\u042d\u0442\u043e \u043d\u0438\u0447\u044c\u044f!",winMessage:"\u043f\u043e\u0431\u0435\u0434\u0438\u043b!",records:"\u0420\u0435\u043a\u043e\u0440\u0434\u044b",table:{tableHeader:["\u2116","\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c","\u0425\u043e\u0434\u044b"],tableMessage:"\u041f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"},settingsOptions:{theme:{title:"\u0422\u0435\u043c\u0430",options:["\u0441\u0432\u0435\u0442\u043b\u0430\u044f","\u0442\u0435\u043c\u043d\u0430\u044f"]},startAs:{title:"\u041d\u0430\u0447\u0438\u043d\u0430\u0442\u044c \u043a\u0430\u043a",options:["X","O"]},lang:{title:"\u042f\u0437\u044b\u043a",options:["\u0430\u043d\u0433\u043b","\u0440\u0443\u0441"]}}},en:{player:"Player",hotkeys:"Hotkeys",newGame:"New game",continue:"Continue",back:"Back",settings:"Settings",autoplay:"Autoplay",moves:"Moves",playerMessageTemplate:"player turn",tieMessageTemplate:"It's a tie!",winMessage:"wins!",records:"Records",table:{tableHeader:["\u2116","Winner","Moves"],tableMessage:"No data yet"},settingsOptions:{theme:{title:"Theme",options:["light","dark"]},startAs:{title:"Start as",options:["X","O"]},lang:{title:"Language",options:["en","ru"]}}}},w=(a(27),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).autoplay=function(){e.resetGame(),e.state.startedAutoplay||(e.setState((function(){return{startedAutoplay:!0}}),(function(){e.updateLocalStorage()})),e.autoplayInterval=setInterval((function(){var t=e.getRandomEmptyField();(t||0===t)&&e.updateField(t)}),500))},e.updateLocalStorage=function(){localStorage.setItem("heliken-tic-tac-toe-data",JSON.stringify(e.state))},e.getRandomEmptyField=function(){var t=e.state.field.map((function(e,t){return null===e?t:null})).filter((function(e){return null!==e}));return t[Math.floor(Math.random()*t.length)]},e.newGame=function(){e.resetGame(),e.changeScreen("game")},e.resetGame=function(){e.setState((function(){return{moves:0,startedAutoplay:!1,elementsToHighlight:[],gameEnded:!1,hasSavedGame:!1,currentPlayer:e.state.startPlayer,gameMessage:"".concat(e.state.startPlayer," ").concat(e.state.vocabulary[e.state.settings.lang].playerMessageTemplate),field:new Array(9).fill(null)}}),(function(){e.updateLocalStorage()}))},e.changeScreen=function(t){e.state.startedAutoplay||e.setState((function(){return{activeSection:t}}),(function(){e.updateLocalStorage()}))},e.checkIfRecord=function(t){e.state.records.length>9?t.moves<e.state.records[e.state.records.length-1]&&e.addNewRecord(t):e.addNewRecord(t)},e.addNewRecord=function(t){var a=Object(u.a)(e.state.records);a.push(t),a.sort((function(e,t){return e.moves-t.moves})),e.setState((function(){return{records:a.slice(0,9)}}))},e.updateField=function(t){e.setState((function(a){var n=a.field;return{hasSavedGame:!0,field:[].concat(Object(u.a)(n.slice(0,t)),[e.state.currentPlayer],Object(u.a)(n.slice(t+1)))}}),(function(){e.updateMoves();var t=e.checkWinCondition();t?e.endGame(t):e.state.field.indexOf(null)<0?e.endGame("",!0):e.switchCurrentPlayer(),e.updateLocalStorage()}))},e.updateMoves=function(){e.setState((function(e){return{moves:e.moves+1}}),(function(){e.updateLocalStorage()}))},e.endGame=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.autoplayInterval&&window.clearInterval(e.autoplayInterval),e.setState((function(){return{startedAutoplay:!1,gameEnded:!0,elementsToHighlight:a?[]:t.combination,gameMessage:a?e.state.vocabulary[e.state.settings.lang].tieMessageTemplate:"".concat(t.winner," ").concat(e.state.vocabulary[e.state.settings.lang].winMessage)}}),(function(){!a&&t&&e.checkIfRecord({player:t.winner,moves:e.state.moves}),e.updateLocalStorage()}))},e.switchStartPlayer=function(){e.setState((function(){return{startPlayer:e.state.settings.altStartWith?"O":"X"}}),(function(){e.updateLocalStorage()}))},e.switchTheme=function(){e.setState((function(e){return{theme:"light"===e.theme?"dark":"light"}}),(function(){e.updateLocalStorage()}))},e.switchCurrentPlayer=function(){e.setState((function(t){var a="X"===t.currentPlayer?"O":"X";return{gameMessage:"".concat(a," ").concat(e.state.vocabulary[e.state.settings.lang].playerMessageTemplate),currentPlayer:a}}),(function(){e.updateLocalStorage()}))},e.changeSetting=function(t){e.setState((function(e){var a=e.settings,n=t.target.checked;return"lang"===t.target.name&&(n=t.target.checked?"ru":"en"),{settings:Object(o.a)(Object(o.a)({},a),{},Object(l.a)({},t.target.name,n))}}),(function(){"altStartWith"!==t.target.name&&"withAI"!==t.target.name||e.resetGame(),"altStartWith"===t.target.name&&e.switchStartPlayer(),"altMode"===t.target.name&&e.switchTheme(),e.updateLocalStorage()}))},e.checkWinCondition=function(){for(var t=e.state.field,a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<a.length;n++){var s=Object(r.a)(a[n],3),c=s[0],i=s[1],l=s[2];if(t[c]&&t[c]===t[i]&&t[c]===t[l])return{combination:[c,i,l],winner:t[c]}}return null},e}return Object(g.a)(a,[{key:"componentWillMount",value:function(){var e=this,t={activeSection:"main",hasSavedGame:!1,theme:"light",settings:{altMode:!1,altStartWith:!1,lang:"en"},vocabulary:N,moves:0,startedAutoplay:!1,gameEnded:!1,gameMessage:"X player turn",elementsToHighlight:[],startPlayer:"X",currentPlayer:"X",field:new Array(9).fill(null),records:[],sound:{music:{mute:!1,value:1},effects:{mute:!1,value:1}}},a=JSON.parse(localStorage.getItem("heliken-tic-tac-toe-data")),n=a||t;this.setState((function(){return n}),(function(){e.updateLocalStorage()}))}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",(function(t){switch(t.code){case"KeyB":"main"!==e.state.activeSection&&e.changeScreen("main");break;case"KeyS":"main"===e.state.activeSection&&e.changeScreen("settings");break;case"KeyN":"main"===e.state.activeSection&&e.newGame();break;case"KeyC":"main"===e.state.activeSection&&e.state.hasSavedGame&&e.changeScreen("game");break;case"KeyA":"game"===e.state.activeSection&&e.autoplay()}}))}},{key:"render",value:function(){var e=this.state,t=e.activeSection,a=e.settings,n=e.field,s=e.hasSavedGame,c=e.gameMessage,i=e.gameEnded,r=e.elementsToHighlight,l=e.moves,o=e.theme,u=e.startedAutoplay,d=e.records,g=e.vocabulary,m=this.state.settings.lang;return Object(p.jsxs)("div",{className:"app","data-theme":o,children:[Object(p.jsx)(k,{vocabulary:g,lang:m}),Object(p.jsx)("div",{className:"app__body",children:Object(p.jsx)(_,{gameField:n,updateField:this.updateField,activeSection:t,hasSavedGame:s,changeScreen:this.changeScreen,settings:a,gameEnded:i,elementsToHighlight:r,newGame:this.newGame,autoplay:this.autoplay,moves:l,gameMessage:c,startedAutoplay:u,records:d,vocabulary:g,lang:m,changeSetting:this.changeSetting})}),Object(p.jsx)(v,{})]})}}]),a}(n.Component));i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.318bdcf6.chunk.js.map