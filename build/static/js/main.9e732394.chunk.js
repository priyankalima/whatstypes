(this.webpackJsonpmyfirstapp=this.webpackJsonpmyfirstapp||[]).push([[0],{41:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),c=s(17),o=s.n(c),l=s(3),i=s(4),r=s(6),d=s(5),h=s(18),j=s(8),b=s.n(j),m=s.p+"static/media/img2.f86e55f1.svg",p=(s(41),s.p,s(0)),u=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={show:!1,title:"",body:"",posts:[]},e.componentDidMount=function(){e.getBlogPost()},e.getBlogPost=function(){b.a.get("http://localhost:4000/api").then((function(t){var s=t.data;e.setState({posts:s}),console.log("data received")})).catch((function(e){alert("getting errors")}))},e.handleChange=function(t){var s=t.target,n=s.name,a=s.value;e.setState(Object(h.a)({},n,a))},e.submitForm=function(t){t.preventDefault();var s={title:e.state.title,body:e.state.body};b()({url:"http://localhost:4000/api/save",method:"POST",data:s}).then((function(){console.log("data has been sent to the server"),e.resetUserInput(),e.getBlogPost(),document.getElementById("success").innerHTML="Post Submited Successfuly"})).catch((function(){console.log("somethings went wrong please try after some time"),document.getElementById("failed").innerHTML="Something Went Wrong Please try again"}))},e.resetUserInput=function(){e.setState({title:"",body:""})},e.displayBlogPost=function(e){return e.length?e.map((function(e,t){return Object(p.jsxs)("div",{className:"map",children:[Object(p.jsx)("h3",{children:e.title}),Object(p.jsx)("p",{className:"preTag",children:e.body})]},t)})):null},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return console.log("State",this.state),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("nav",{className:"navbar",children:Object(p.jsxs)("div",{className:"container nav-demo",children:[Object(p.jsxs)("div",{className:"text",children:["Whats",Object(p.jsx)("span",{className:"span1",children:"?"}),"Type",Object(p.jsx)("span",{className:"span1",children:"!"})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"button-float-create",onClick:function(){e.setState({show:!e.state.show})},children:"+"})})]})}),this.state.show?Object(p.jsxs)("div",{className:"header",id:"demo",children:[Object(p.jsx)("div",{className:"content container",children:Object(p.jsxs)("div",{className:"row container ",children:[Object(p.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-6 content-left",children:Object(p.jsx)("img",{src:m,className:"res-img",width:"400",alt:"blog"})}),Object(p.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-6 content-right",children:Object(p.jsxs)("form",{onSubmit:this.submitForm,children:[Object(p.jsxs)("div",{class:"mb-3",children:[Object(p.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:Object(p.jsx)("b",{children:"Titles"})}),Object(p.jsx)("input",{type:"text",name:"title",class:"form-control",id:"exampleFormControlInput1",placeholder:"enter your title",value:this.state.title,onChange:this.handleChange})]}),Object(p.jsxs)("div",{class:"mb-3",children:[Object(p.jsx)("label",{for:"exampleFormControlTextarea1",class:"form-label",children:Object(p.jsx)("b",{children:"Express Anythings "})}),Object(p.jsx)("textarea",{name:"body",class:"form-control",id:"exampleFormControlTextarea1",placeholder:"write somethings (Jocks,Motivations,Stories and More)",rows:"3",value:this.state.body,onChange:this.handleChange})]}),Object(p.jsx)("button",{type:"submit",class:"btn btn-secondary",children:"Submit Post"}),Object(p.jsx)("button",{type:"submit",class:"btn btn-secondary",style:{marginLeft:"5px"},children:Object(p.jsx)("a",{href:"#content",style:{color:"#fff",textDecoration:"none"},children:"Go To Posts"})}),Object(p.jsx)("p",{style:{padding:"10px 0",color:"green",fontWeight:"bold"},id:"success"}),Object(p.jsx)("p",{style:{padding:"10px 0",color:"red",fontWeight:"bold"},id:"failed"})]})})]})}),Object(p.jsx)("div",{class:"custom-shape-divider-bottom-1613638069",children:Object(p.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(p.jsx)("path",{d:"M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z",class:"shape-fill"})})})]}):null,Object(p.jsx)("div",{className:"section",id:"content",children:Object(p.jsxs)("div",{className:"container-dianamic",children:[Object(p.jsxs)("div",{style:{position:"relative"},children:[Object(p.jsx)("button",{className:"button-float",children:"Posts"}),Object(p.jsx)("span",{children:"Hello Folks,Have a Good Day:)"}),Object(p.jsx)("div",{className:"height-content"})]}),Object(p.jsx)("div",{className:"post-contents",children:this.displayBlogPost(this.state.posts)})]})})]})}}]),s}(a.a.Component),x=function(e){Object(r.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(u,{})})}}]),s}(a.a.Component);o.a.render(Object(p.jsx)(x,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9e732394.chunk.js.map