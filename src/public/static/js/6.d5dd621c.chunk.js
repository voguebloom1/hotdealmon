(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{324:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",function(){return n})},326:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(324);function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.forEach(function(t){Object(n.a)(e,t,a[t])})}return e}},347:function(e,t,a){"use strict";a.r(t);var n=a(324),o=a(326),l=a(100),r=a(101),m=a(103),c=a(102),s=a(104),u=a(0),p=a.n(u),i=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),u=0;u<r;u++)s[u]=arguments[u];return(a=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={food:{caffeine:"0",calorie:"0",carbohydrate:"0",cholesterol:"0",fat:"0",food_group:"",food_name:"",protein:"0",salt:"0",saturaated_fat:"0",calcium:"0",size:"0",unit:"",sugars:"0",trans_fat:"0",year:"2019"}},a.handleChange=function(e){var t=a.state.food;a.setState({food:Object(o.a)({},t,Object(n.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.food);var t=a.state.food;fetch("/svc/foods/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.text()}).then(function(e){return console.log(e)})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.food;return p.a.createElement("div",null,p.a.createElement("div",{className:"form-row"},p.a.createElement("div",{className:"form-group col-md-6"},p.a.createElement("label",{htmlFor:"exampleFormControlInput1"},"\uc2dd\ud488\uad70"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",name:"food_group",value:t.food_group,onChange:this.handleChange})),p.a.createElement("div",{className:"form-group col-md-6"},p.a.createElement("label",{htmlFor:"exampleFormControlInput2"},"\uc2dd\ud488 \uc774\ub984"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput2",name:"food_name",value:t.food_name,onChange:this.handleChange}))),p.a.createElement("div",{className:"form-row"},p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput3"},"1\ud68c \uc81c\uacf5\ub7c9 (g)"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput3",name:"size",value:t.size,onChange:this.handleChange})),p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput15"},"\ub2e8\uc704"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput15",name:"unit",value:t.unit,onChange:this.handleChange}))),p.a.createElement("div",{className:"form-row"},p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput4"},"\uce7c\ub85c\ub9ac (kcal)"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput4",name:"calorie",value:t.calorie,onChange:this.handleChange})),p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput5"},"\ud0c4\uc218\ud654\ubb3c"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput5",name:"carbohydrate",value:t.carbohydrate,onChange:this.handleChange})),p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput6"},"\ub2e8\ubc31\uc9c8"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput6",name:"protein",value:t.protein,onChange:this.handleChange})),p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput7"},"\uc9c0\ubc29 (g)"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput7",name:"fat",value:t.fat,onChange:this.handleChange}))),p.a.createElement("div",{className:"form-row"},p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput8"},"\ub2f9\ub958 (g)"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput8",name:"sugars",value:t.sugars,onChange:this.handleChange})),p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput9"},"\ub098\ud2b8\ub968 (mg)"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput9",name:"salt",value:t.salt,onChange:this.handleChange})),p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput10"},"\ucf5c\ub808\uc2a4\ud1a8 (mg)"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput10",name:"cholesterol",value:t.cholesterol,onChange:this.handleChange})),p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput11"},"\ud3ec\ud654\uc9c0\ubc29\uc0b0 (g)"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput11",name:"saturaated_fat",value:t.saturaated_fat,onChange:this.handleChange}))),p.a.createElement("div",{className:"form-row"},p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput12"},"\ud2b8\ub79c\uc2a4 \uc9c0\ubc29\uc0b0(g)"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput12",name:"trans_fat",value:t.trans_fat,onChange:this.handleChange})),p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput13"},"\uce74\ud398\uc778 (mg)"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput13",name:"caffeine",value:t.caffeine,onChange:this.handleChange})),p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput15"},"\uce7c\uc298 (mg)"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput15",name:"calcium",value:t.calcium,onChange:this.handleChange})),p.a.createElement("div",{className:"form-group col-md-3"},p.a.createElement("label",{htmlFor:"exampleFormControlInput14"},"\ucd9c\uc2dc\uc5f0\ub3c4"),p.a.createElement("input",{type:"text",className:"form-control",id:"exampleFormControlInput14",name:"year",value:t.year,onChange:this.handleChange}))),p.a.createElement("div",{className:"col-auto my-1"},p.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return window.confirm("\uc5c5\ub370\uc774\ud2b8 \ud560\uaebc\ub0d0?")&&e.handleSubmit(t)}},"Submit")))}}]),t}(u.Component);t.default=i}}]);
//# sourceMappingURL=6.d5dd621c.chunk.js.map