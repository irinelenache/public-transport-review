(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),c=n(30),r=n.n(c),a=n(13),u=n(9),b=n(10),l=n(12),o=n(11),d=n(2),h=(n(38),n(39),n(3)),v=n(31),j=n.n(v).a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}}),m=new(function(){function e(){Object(u.a)(this,e)}return Object(b.a)(e,[{key:"getAll",value:function(){return j.get("/reviews")}},{key:"get",value:function(e){return j.get("/reviews/".concat(e))}},{key:"create",value:function(e){return j.post("/reviews",e)}},{key:"update",value:function(e,t){return j.put("/reviews/".concat(e),t)}},{key:"delete",value:function(e){return j.delete("/reviews/".concat(e))}},{key:"deleteAll",value:function(){return j.delete("/reviews")}},{key:"findBybusNumber",value:function(e){return j.get("/reviews?busNumber=".concat(e))}}]),e}()),p=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).onChangebusNumber=s.onChangebusNumber.bind(Object(h.a)(s)),s.onChangeDescription=s.onChangeDescription.bind(Object(h.a)(s)),s.saveReview=s.saveReview.bind(Object(h.a)(s)),s.newReview=s.newReview.bind(Object(h.a)(s)),s.state={id:null,busNumber:"",description:"",published:!1,submitted:!1},s}return Object(b.a)(n,[{key:"onChangebusNumber",value:function(e){this.setState({busNumber:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"saveReview",value:function(){var e=this,t={busNumber:this.state.busNumber,description:this.state.description};m.create(t).then((function(t){e.setState({id:t.data.id,busNumber:t.data.busNumber,description:t.data.description,published:t.data.published,submitted:!0}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"newReview",value:function(){this.setState({id:null,busNumber:"",description:"",published:!1,submitted:!1})}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"submit-form",children:this.state.submitted?Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"You submitted successfully!"}),Object(s.jsx)("button",{className:"btn btn-success",onClick:this.newReview,children:"Add"})]}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"busNumber",children:"Bus Number"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"busNumber",required:!0,value:this.state.busNumber,onChange:this.onChangebusNumber,name:"busNumber"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"description",children:"Description"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"description",required:!0,value:this.state.description,onChange:this.onChangeDescription,name:"description"})]}),Object(s.jsx)("button",{onClick:this.saveReview,className:"btn btn-success",children:"Submit"})]})})}}]),n}(i.Component),O=n(15),g=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).onChangebusNumber=s.onChangebusNumber.bind(Object(h.a)(s)),s.onChangeDescription=s.onChangeDescription.bind(Object(h.a)(s)),s.getReview=s.getReview.bind(Object(h.a)(s)),s.updatePublished=s.updatePublished.bind(Object(h.a)(s)),s.updateReview=s.updateReview.bind(Object(h.a)(s)),s.deleteReview=s.deleteReview.bind(Object(h.a)(s)),s.state={currentReview:{id:null,busNumber:"",description:"",published:!1},message:""},s}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getReview(this.props.match.params.id)}},{key:"onChangebusNumber",value:function(e){var t=e.target.value;this.setState((function(e){return{currentReview:Object(O.a)(Object(O.a)({},e.currentTutorial),{},{busNumber:t})}}))}},{key:"onChangeDescription",value:function(e){var t=e.target.value;this.setState((function(e){return{currentReview:Object(O.a)(Object(O.a)({},e.currentReview),{},{description:t})}}))}},{key:"getReview",value:function(e){var t=this;m.get(e).then((function(e){t.setState({currentReview:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updatePublished",value:function(e){var t=this,n={id:this.state.currentReview.id,busNumber:this.state.currentReview.busNumber,description:this.state.currentReview.description,published:e};m.update(this.state.currentReview.id,n).then((function(n){t.setState((function(t){return{currentReview:Object(O.a)(Object(O.a)({},t.currentReview),{},{published:e})}})),console.log(n.data)})).catch((function(e){console.log(e)}))}},{key:"updateReview",value:function(){var e=this;m.update(this.state.currentReview.id,this.state.currentReview).then((function(t){console.log(t.data),e.setState({message:"The review was updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"deleteReview",value:function(){var e=this;m.delete(this.state.currentReview.id).then((function(t){console.log(t.data),e.props.history.push("/reviews")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.currentReview;return Object(s.jsx)("div",{children:t?Object(s.jsxs)("div",{className:"edit-form",children:[Object(s.jsx)("h4",{children:"Review"}),Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"busNumber",children:"Bus Number"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"busNumber",value:t.busNumber,onChange:this.onChangebusNumber})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"description",children:"Description"}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"description",value:t.description,onChange:this.onChangeDescription})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:Object(s.jsx)("strong",{children:"Status:"})}),t.published?"Published":"Pending"]})]}),t.published?Object(s.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updatePublished(!1)},children:"UnPublish"}):Object(s.jsx)("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updatePublished(!0)},children:"Publish"}),Object(s.jsx)("button",{className:"badge badge-danger mr-2",onClick:this.deleteReview,children:"Delete"}),Object(s.jsx)("button",{type:"submit",className:"badge badge-success",onClick:this.updateReview,children:"Update"}),Object(s.jsx)("p",{children:this.state.message})]}):Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Please click on a Review..."})]})})}}]),n}(i.Component),f=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).onChangeSearchbusNumber=s.onChangeSearchbusNumber.bind(Object(h.a)(s)),s.retrieveReviews=s.retrieveReviews.bind(Object(h.a)(s)),s.refreshList=s.refreshList.bind(Object(h.a)(s)),s.setActiveReview=s.setActiveReview.bind(Object(h.a)(s)),s.removeAllReviews=s.removeAllReviews.bind(Object(h.a)(s)),s.searchbusNumber=s.searchbusNumber.bind(Object(h.a)(s)),s.state={reviews:[],currentReview:null,currentIndex:-1,searchbusNumber:""},s}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.retrieveReviews()}},{key:"onChangeSearchbusNumber",value:function(e){var t=e.target.value;this.setState({searchbusNumber:t})}},{key:"retrieveReviews",value:function(){var e=this;m.getAll().then((function(t){e.setState({reviews:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveReviews(),this.setState({currentReview:null,currentIndex:-1})}},{key:"setActiveReview",value:function(e,t){this.setState({currentReview:e,currentIndex:t})}},{key:"removeAllReviews",value:function(){var e=this;m.deleteAll().then((function(t){console.log(t.data),e.refreshList()})).catch((function(e){console.log(e)}))}},{key:"searchbusNumber",value:function(){var e=this;m.findBybusNumber(this.state.searchbusNumber).then((function(t){e.setState({reviews:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchbusNumber,i=t.reviews,c=t.currentReview,r=t.currentIndex;return Object(s.jsxs)("div",{className:"list row",children:[Object(s.jsx)("div",{className:"col-md-8",children:Object(s.jsxs)("div",{className:"input-group mb-3",children:[Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by BusNumber",value:n,onChange:this.onChangeSearchbusNumber}),Object(s.jsx)("div",{className:"input-group-append",children:Object(s.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.searchbusNumber,children:"Search"})})]})}),Object(s.jsxs)("div",{className:"col-md-6",children:[Object(s.jsx)("h4",{children:"Reviews List"}),Object(s.jsx)("ul",{className:"list-group",children:i&&i.map((function(t,n){return Object(s.jsx)("li",{className:"list-group-item "+(n===r?"active":""),onClick:function(){return e.setActiveReview(t,n)},children:t.busNumber},n)}))}),Object(s.jsx)("button",{className:"m-3 btn btn-sm btn-danger",onClick:this.removeAllReviews,children:"Remove All"})]}),Object(s.jsx)("div",{className:"col-md-6",children:c?Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Review"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:Object(s.jsx)("strong",{children:"Bus Number:"})})," ",c.busNumber]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:Object(s.jsx)("strong",{children:"Description:"})})," ",c.description]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{children:Object(s.jsx)("strong",{children:"Status:"})})," ",c.published?"Published":"Pending"]}),Object(s.jsx)(a.b,{to:"/reviews/"+c.id,className:"badge badge-warning",children:"Edit"})]}):Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Please click on a Review..."})]})})]})}}]),n}(i.Component),w=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(s.jsx)("a",{href:"/reviews",className:"navbar-brand",children:"BusReview"}),Object(s.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(a.b,{to:"/reviews",className:"nav-link",children:"Reviews"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(a.b,{to:"/add",className:"nav-link",children:"Add"})})]})]}),Object(s.jsx)("div",{className:"container mt-3",children:Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{exact:!0,path:["/","/reviews"],component:f}),Object(s.jsx)(d.a,{exact:!0,path:"/add",component:p}),Object(s.jsx)(d.a,{path:"/reviews/:id",component:g})]})})]})}}]),n}(i.Component);r.a.render(Object(s.jsx)(a.a,{children:Object(s.jsx)(w,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.431448ac.chunk.js.map