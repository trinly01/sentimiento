webpackJsonp([12],{463:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(495),s=n(540),i=n(210)(o.a,s.a,!1,null,null,null);e.default=i.exports},495:function(t,e,n){"use strict";e.a={data:function(){return{attachment:{name:null,files:null}}},methods:{onFileChange:function(t){this.files=t.target.files,console.log(this.files)},upload:function(){for(var t=new FormData,e=0;e<this.files.length;e++)t.append("uri",this.files[e],this.files[e].name);t.append("test","test"),console.log(t),this.$axios.post("http://localhost:3030/uploads",t,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){return console.log(100*t.loaded/t.total)}}).then(function(t){return console.log(t)}).catch(function(t){return console.error(t)})}}}},540:function(t,e,n){"use strict";var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{attrs:{type:"file",multiple:""},on:{change:this.onFileChange}}),this._v(" "),e("input",{attrs:{type:"submit",value:"Upload Image",name:"submit"},on:{click:this.upload}}),this._v(" "),e("div",{attrs:{id:"qwe"}})])},staticRenderFns:[]};e.a=o}});