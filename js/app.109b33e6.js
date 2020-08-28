(function(e){function t(t){for(var r,n,o=t[0],d=t[1],u=t[2],c=0,p=[];c<o.length;c++)n=o[c],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],r=!0,o=1;o<s.length;o++){var d=s[o];0!==a[d]&&(r=!1)}r&&(i.splice(t--,1),e=n(n.s=s[0]))}return e}var r={},a={app:0},i=[];function n(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=r,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=d;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var r=s("85ec"),a=s.n(r);a.a},"0d46":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("FormComponent")],1)},i=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form_block"},[s("div",{staticClass:"container"},[s("h2",[e._v("Форма регистрации")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[s("div",{staticClass:"form_container"},[s("div",{staticClass:"field"},[s("label",{attrs:{for:"firstName"}},[e._v("Имя")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],staticClass:"field-control",class:{"is-invalid":e.$v.user.firstName.$error},attrs:{type:"text",id:"firstName",name:"firstName"},domProps:{value:e.user.firstName},on:{input:[function(t){t.target.composing||e.$set(e.user,"firstName",t.target.value)},function(t){return e.$v.user.firstName.$touch()}]}}),e.$v.user.firstName.$error?s("div",{staticClass:"invalid-feedback"},[e.$v.user.firstName.required?e._e():s("div",[e._v("Введите имя ")])]):e._e()]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"lastName"}},[e._v("Фамилия")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],staticClass:"field-control",class:{"is-invalid":e.$v.user.lastName.$error},attrs:{type:"text",id:"lastName",name:"lastName"},domProps:{value:e.user.lastName},on:{input:[function(t){t.target.composing||e.$set(e.user,"lastName",t.target.value)},function(t){return e.$v.user.lastName.$touch()}]}}),e.$v.user.lastName.$error?s("div",[e.$v.user.lastName.required?e._e():s("div",{staticClass:"invalid-feedback"},[e._v("Введите фамилию ")])]):e._e()])]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"secondName"}},[e._v("Отчество")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.secondName,expression:"user.secondName"}],staticClass:"field-control",attrs:{type:"text",id:"secondName",name:"secondName"},domProps:{value:e.user.secondName},on:{input:function(t){t.target.composing||e.$set(e.user,"secondName",t.target.value)}}})]),s("div",{staticClass:"form_container"},[s("div",{staticClass:"field"},[s("label",{attrs:{for:"secondName"}},[e._v("Дата рождения")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.dateOfBirth,expression:"user.dateOfBirth"}],staticClass:"field-control",class:{"is-invalid":e.$v.user.dateOfBirth.$error},attrs:{type:"date",id:"dateOfBirth",name:"dateOfBirth"},domProps:{value:e.user.dateOfBirth},on:{input:[function(t){t.target.composing||e.$set(e.user,"dateOfBirth",t.target.value)},function(t){return e.$v.user.dateOfBirth.$touch()}]}}),e.$v.user.dateOfBirth.$error?s("div",{staticClass:"invalid-feedback"},[e.$v.user.dateOfBirth.required?e._e():s("span",[e._v("Введите день рождения")])]):e._e()]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"secondName"}},[e._v("Номер телефона")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phoneNumber,expression:"user.phoneNumber"}],staticClass:"field-control",class:{"is-invalid":e.$v.user.phoneNumber.$error},attrs:{type:"text",id:"phoneNumber",name:"phoneNumber"},domProps:{value:e.user.phoneNumber},on:{keypress:function(t){return e.checkEventValueType(t)},keydown:function(t){return e.dontRemoveFirstVal(t)},input:[function(t){t.target.composing||e.$set(e.user,"phoneNumber",t.target.value)},function(t){return e.$v.user.phoneNumber.$touch()}]}}),e.$v.user.phoneNumber.$error?s("div",{staticClass:"invalid-feedback"},[e.$v.user.phoneNumber.required?e._e():s("span",[e._v("Введите номер телефона")]),e.$v.user.phoneNumber.minLength?e._e():s("span",[e._v("Длина номера должна составить 11 цифров")]),e.$v.user.phoneNumber.maxLength?e._e():s("span",[e._v("Длина номера должна составить 11 цифров")])]):e._e()])]),s("div",{staticClass:"form_container"},[s("div",{staticClass:"field"},[s("label",[e._v("Группа клиентов")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.user.customerGroup,expression:"user.customerGroup"}],staticClass:"field-control",attrs:{multiple:""},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.user,"customerGroup",t.target.multiple?s:s[0])},function(t){return e.$v.user.customerGroup.$touch()}]}},[s("option",[e._v("VIP")]),s("option",[e._v("Проблемные")]),s("option",[e._v("ОМС")])]),e.$v.user.customerGroup.$error?s("div",{staticClass:"invalid-feedback"},[e.$v.user.customerGroup.required?e._e():s("span",[e._v("Введите группу")])]):e._e()]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"attendingDoctor"}},[e._v("Лечащий врач")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.user.attendingDoctor,expression:"user.attendingDoctor"}],staticClass:"field-control",attrs:{id:"attendingDoctor"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.user,"attendingDoctor",t.target.multiple?s:s[0])}}},[s("option",{attrs:{disabled:"",value:""}},[e._v("Выберите один из вариантов")]),s("option",[e._v("Иванов")]),s("option",[e._v("Захаров")]),s("option",[e._v("Чернышева")])])])]),s("div",{staticClass:"form_container"},[s("div",{staticClass:"field"},[s("label",{attrs:{for:"secondName"}},[e._v("Пол")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.gender,expression:"user.gender"}],staticClass:"field-control",attrs:{type:"text",id:"gender",name:"gender"},domProps:{value:e.user.gender},on:{input:function(t){t.target.composing||e.$set(e.user,"gender",t.target.value)}}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"checkbox"}},[e._v("Не отправлять СМС")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.sendSms,expression:"user.sendSms"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.user.sendSms)?e._i(e.user.sendSms,null)>-1:e.user.sendSms},on:{change:function(t){var s=e.user.sendSms,r=t.target,a=!!r.checked;if(Array.isArray(s)){var i=null,n=e._i(s,i);r.checked?n<0&&e.$set(e.user,"sendSms",s.concat([i])):n>-1&&e.$set(e.user,"sendSms",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.user,"sendSms",a)}}})])]),s("h3",[e._v("Адрес")]),s("div",{staticClass:"form_container"},[s("div",{staticClass:"field"},[s("label",{attrs:{for:"index"}},[e._v("Индекс")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.index,expression:"address.index"}],staticClass:"field-control",attrs:{type:"text",id:"index",name:"index"},domProps:{value:e.address.index},on:{input:function(t){t.target.composing||e.$set(e.address,"index",t.target.value)}}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"country"}},[e._v("Страна ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.country,expression:"address.country"}],staticClass:"field-control",attrs:{type:"text",id:"country",name:"country"},domProps:{value:e.address.country},on:{input:function(t){t.target.composing||e.$set(e.address,"country",t.target.value)}}})])]),s("div",{staticClass:"form_container"},[s("div",{staticClass:"field"},[s("label",{attrs:{for:"region"}},[e._v("Область ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.region,expression:"address.region"}],staticClass:"field-control",attrs:{type:"text",id:"region",name:"region"},domProps:{value:e.address.region},on:{input:function(t){t.target.composing||e.$set(e.address,"region",t.target.value)}}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"city"}},[e._v("Город")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.city,expression:"address.city"}],staticClass:"field-control",class:{"is-invalid":e.$v.address.city.$error},attrs:{type:"text",id:"city",name:"city"},domProps:{value:e.address.city},on:{input:[function(t){t.target.composing||e.$set(e.address,"city",t.target.value)},function(t){return e.$v.address.city.$touch()}]}}),e.$v.address.city.$error?s("div",{staticClass:"invalid-feedback"},[e.$v.address.city.required?e._e():s("span",[e._v("Введите город")])]):e._e()])]),s("div",{staticClass:"form_container"},[s("div",{staticClass:"field"},[s("label",{attrs:{for:"street"}},[e._v("Улица ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.street,expression:"address.street"}],staticClass:"field-control",attrs:{type:"text",id:"street",name:"street"},domProps:{value:e.address.street},on:{input:function(t){t.target.composing||e.$set(e.address,"street",t.target.value)}}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"home"}},[e._v("Дом ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.home,expression:"address.home"}],staticClass:"field-control",attrs:{type:"text",id:"home",name:"home"},domProps:{value:e.address.home},on:{input:function(t){t.target.composing||e.$set(e.address,"home",t.target.value)}}})])]),s("h3",[e._v("Паспорт")]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"documentType"}},[e._v("Тип документа")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.passport.type,expression:"passport.type"}],staticClass:"field-control",class:{"is-invalid":e.$v.passport.type.$error},attrs:{id:"documentType"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.passport,"type",t.target.multiple?s:s[0])},function(t){return e.$v.passport.type.$touch()}]}},[s("option",{attrs:{disabled:"",value:""}},[e._v("Выберите один из вариантов")]),s("option",[e._v("Паспорт")]),s("option",[e._v("Свидетельство о рождении")]),s("option",[e._v("Вод. удостоверение")])]),e.$v.passport.type.$error?s("div",{staticClass:"invalid-feedback"},[e.$v.passport.type.required?e._e():s("span",[e._v("Введите тип документа")])]):e._e()]),s("div",{staticClass:"form_container"},[s("div",{staticClass:"field"},[s("label",{attrs:{for:"series"}},[e._v("Серия ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passport.series,expression:"passport.series"}],staticClass:"field-control",attrs:{type:"text",id:"series",name:"series"},domProps:{value:e.passport.series},on:{input:function(t){t.target.composing||e.$set(e.passport,"series",t.target.value)}}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"number"}},[e._v("Номер ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passport.number,expression:"passport.number"}],staticClass:"field-control",attrs:{type:"text",id:"number",name:"number"},domProps:{value:e.passport.number},on:{input:function(t){t.target.composing||e.$set(e.passport,"number",t.target.value)}}})])]),s("div",{staticClass:"form_container"},[s("div",{staticClass:"field"},[s("label",{attrs:{for:"issuedBy"}},[e._v("Кем выдан ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passport.issuedBy,expression:"passport.issuedBy"}],staticClass:"field-control",attrs:{type:"text",id:"issuedBy",name:"issuedBy"},domProps:{value:e.passport.issuedBy},on:{input:function(t){t.target.composing||e.$set(e.passport,"issuedBy",t.target.value)}}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"dateOfIssue"}},[e._v("Дата выдачи")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passport.dateOfIssue,expression:"passport.dateOfIssue"}],staticClass:"field-control",class:{"is-invalid":e.$v.passport.dateOfIssue.$error},attrs:{type:"date",id:"dateOfIssue",name:"dateOfIssue"},domProps:{value:e.passport.dateOfIssue},on:{input:[function(t){t.target.composing||e.$set(e.passport,"dateOfIssue",t.target.value)},function(t){return e.$v.passport.dateOfIssue.$touch()}]}}),e.$v.passport.dateOfIssue.$error?s("div",{staticClass:"invalid-feedback"},[e.$v.passport.dateOfIssue.required?e._e():s("span",[e._v("Введите дату выдачу документа")])]):e._e()])]),e._m(0)])])])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"field"},[s("button",[e._v("Регистрация")])])}],d=(s("a9e3"),s("b5ae")),u={name:"FormComponent",data:function(){return{user:{firstName:"",lastName:"",secondName:"",dateOfBirth:"",phoneNumber:"7",gender:"",customerGroup:[],attendingDoctor:"",sendSms:!1},address:{index:"",country:"",region:"",city:"",street:"",home:""},passport:{type:"",series:"",number:"",issuedBy:"",dateOfIssue:""},submitted:!1}},validations:{user:{firstName:{required:d["required"]},lastName:{required:d["required"]},dateOfBirth:{required:d["required"],minLength:Object(d["minLength"])(6)},phoneNumber:{required:d["required"],minLength:Object(d["minLength"])(11),maxLength:Object(d["maxLength"])(11)},customerGroup:{required:d["required"]}},address:{city:{required:d["required"]}},passport:{type:{required:d["required"]},dateOfIssue:{required:d["required"]}}},methods:{submitForm:function(){this.$v.$invalid?this.$v.$touch():alert("Новый пользователь успешно создан")},checkEventValueType:function(e){8!==e.which&&isNaN(Number(String.fromCharCode(e.which)))&&e.preventDefault()},dontRemoveFirstVal:function(e){8==e.keyCode&&1===this.user.phoneNumber.length&&e.preventDefault()}}},l=u,c=(s("8083"),s("2877")),p=Object(c["a"])(l,n,o,!1,null,"6b20c607",null),v=p.exports,m={name:"App",components:{FormComponent:v}},f=m,g=(s("034f"),Object(c["a"])(f,a,i,!1,null,null,null)),h=g.exports,_=s("1dce"),b=s.n(_);r["a"].config.productionTip=!1,r["a"].use(b.a),new r["a"]({render:function(e){return e(h)}}).$mount("#app")},8083:function(e,t,s){"use strict";var r=s("0d46"),a=s.n(r);a.a},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.109b33e6.js.map