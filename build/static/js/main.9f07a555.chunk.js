(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={text:"Statistics_text__33se4",number:"Statistics_number__1JYvH"}},,function(e,t,a){e.exports={button:"FeedbackOptions_button__3sbdY"}},,function(e,t,a){e.exports={app:"App_app__1EDOx",appHeader:"App_appHeader__-4mdM"}},,,,function(e,t,a){e.exports={title:"Section_title__5_L6z"}},function(e,t,a){e.exports={message:"Notification_message__1N6xT"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(6),r=a.n(s),o=(a(17),a(7)),i=a(8),b=a(12),d=a(11),u=a(9),l=a.n(u),j=a(0),p=function(e){var t=e.title;return Object(j.jsx)("h2",{className:l.a.title,children:t})},x=a(3),h=a.n(x),m=function(e){var t=e.onLeaveFeedbackGood,a=e.onLeaveFeedbackNeutral,n=e.onLeaveFeedbackBad;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:"button",className:h.a.button,onClick:t,children:"\u0425\u043e\u0440\u043e\u0448\u043e"}),Object(j.jsx)("button",{type:"button",className:h.a.button,onClick:a,children:"\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e"}),Object(j.jsx)("button",{type:"button",className:h.a.button,onClick:n,children:"\u041f\u043b\u043e\u0445\u043e"})]})},O=a(1),v=a.n(O),f=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.positivePercentage;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{className:v.a.text,children:["\u0425\u043e\u0440\u043e\u0448\u043e: ",Object(j.jsxs)("span",{className:v.a.number,children:[t," "]})]}),Object(j.jsxs)("p",{className:v.a.text,children:["\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e: ",Object(j.jsxs)("span",{className:v.a.number,children:[a," "]})]}),Object(j.jsxs)("p",{className:v.a.text,children:["\u041f\u043b\u043e\u0445\u043e: ",Object(j.jsxs)("span",{className:v.a.number,children:[n," "]})]}),Object(j.jsxs)("p",{className:v.a.text,children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0437\u044b\u0432\u043e\u0432: ",Object(j.jsxs)("span",{className:v.a.number,children:[c," "]})]}),Object(j.jsxs)("p",{className:v.a.text,children:["\u041f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u044b\u0445 \u043e\u0442\u0437\u044b\u0432\u043e\u0432:"," ",Object(j.jsxs)("span",{className:v.a.number,children:[s," "]})," %"]})]})},N=a(10),_=a.n(N),k=function(e){var t=e.message;return Object(j.jsx)("h2",{className:_.a.message,children:t})};var g=a(5),F=a.n(g),L=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedbackGood=function(){e.setState((function(e){return{good:e.good+1}}))},e.onLeaveFeedbackNeutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.onLeaveFeedbackBad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=function(e,t,a){return e+t+a}(t,a,n),s=function(e,t){return Math.round(e/t*100)}(t,c);return Object(j.jsx)("div",{className:F.a.app,children:Object(j.jsxs)("header",{className:F.a.appHeader,children:[Object(j.jsx)(p,{title:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043e\u0442\u0437\u044b\u0432"}),Object(j.jsx)(m,{onLeaveFeedbackGood:this.onLeaveFeedbackGood,onLeaveFeedbackNeutral:this.onLeaveFeedbackNeutral,onLeaveFeedbackBad:this.onLeaveFeedbackBad}),!c&&Object(j.jsx)(k,{message:"\u041e\u0442\u0437\u044b\u0432\u043e\u0432 \u043d\u0435\u0442"}),c&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043e\u0442\u0437\u044b\u0432\u043e\u0432"}),Object(j.jsx)(f,{good:t,neutral:a,bad:n,total:c,positivePercentage:s})]})]})})}}]),a}(n.Component),y=L;r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.9f07a555.chunk.js.map