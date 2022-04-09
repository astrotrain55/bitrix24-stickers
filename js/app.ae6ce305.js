(function(){"use strict";var t={2453:function(t,e,i){var n=i(9242),s=i(3396);const r={class:"header"},l={class:"l-wrapper"},c=(0,s._)("h1",{class:"header__title"},"bitrix24-stickers",-1),o={class:"page"},a={class:"l-wrapper"};function p(t,e,i,n,p,g){const u=(0,s.up)("app-panel"),d=(0,s.up)("app-grid");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("header",r,[(0,s._)("div",l,[(0,s.Wm)(u,{onCopy:g.onCopy,onAdd:g.onAdd},{default:(0,s.w5)((()=>[c])),_:1},8,["onCopy","onAdd"])])]),(0,s._)("main",o,[(0,s._)("div",a,[(0,s.Wm)(d,{title:p.smiles.title,list:p.smiles.list},null,8,["title","list"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(p.stickers,(t=>((0,s.wg)(),(0,s.j4)(d,{key:t.title,title:t.title,list:t.list,link:t.link},null,8,["title","list","link"])))),128))])])],64)}var g=i(1945),u=i.n(g);const d={class:"panel"},k={class:"panel__item left"},m={class:"panel__item right"},b=(0,s.Uk)("Копировать код"),h=(0,s.Uk)("Добавить стикер");function f(t,e,i,n,r,l){const c=(0,s.up)("app-button");return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",k,[(0,s.WI)(t.$slots,"default")]),(0,s._)("div",m,[(0,s.Wm)(c,{onClick:e[0]||(e[0]=e=>t.$emit("copy"))},{default:(0,s.w5)((()=>[b])),_:1}),(0,s.Wm)(c,{icon:"plus",onClick:e[1]||(e[1]=e=>t.$emit("add"))},{default:(0,s.w5)((()=>[h])),_:1})])])}const _={class:"button"};function w(t,e,i,n,r,l){const c=(0,s.up)("app-icon");return(0,s.wg)(),(0,s.iD)("button",_,[i.icon?((0,s.wg)(),(0,s.j4)(c,{key:0,name:i.icon},null,8,["name"])):(0,s.kq)("",!0),(0,s.WI)(t.$slots,"default")])}var v=i(7139);function y(t,e,i,n,r,l){return(0,s.wg)(),(0,s.iD)("span",{class:(0,v.C_)(["mdi",`mdi-${i.name}`])},null,2)}var O={props:{name:{type:String,required:!0}},name:"app-icon"},C=i(89);const S=(0,C.Z)(O,[["render",y]]);var A=S,I={props:{icon:{type:String,default:""}},components:{AppIcon:A},name:"app-button"};const j=(0,C.Z)(I,[["render",w]]);var x=j,z={components:{AppButton:x},name:"app-panel"};const $=(0,C.Z)(z,[["render",f]]);var D=$;const W={class:"grid"},q={class:"grid__title"},T=["href"];function Z(t,e,i,n,r,l){const c=(0,s.up)("app-icon"),o=(0,s.up)("app-card");return(0,s.wg)(),(0,s.iD)("div",W,[(0,s._)("h2",q,[(0,s._)("span",null,(0,v.zw)(i.title),1),i.link?((0,s.wg)(),(0,s.iD)("a",{key:0,href:i.link,target:"_blank"},[(0,s.Wm)(c,{name:"open-in-new"})],8,T)):(0,s.kq)("",!0)]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.list,(t=>((0,s.wg)(),(0,s.j4)(o,{key:t.icon,icon:t.icon,title:t.title,size:t.size,selected:"",class:"grid__item",onClose:e=>l.onClose(t),onToggle:e=>l.onToggle(t,e)},null,8,["icon","title","size","onClose","onToggle"])))),128))])}const E=["title"],H={class:"card__label"},K=["src","alt"],P=["checked"];function Y(t,e,i,r,l,c){const o=(0,s.up)("app-icon");return(0,s.wg)(),(0,s.iD)("div",{class:"card",title:i.title},[(0,s.Wm)(o,{class:"card__close",name:"close-circle",onClick:e[0]||(e[0]=(0,n.iM)((e=>t.$emit("close")),["stop"]))}),(0,s._)("label",H,[(0,s._)("img",{class:"card__image",src:i.icon,alt:i.title},null,8,K),(0,s._)("input",{class:"card__toggle",type:"checkbox",checked:i.selected,onClick:e[1]||(e[1]=e=>t.$emit("toggle",e.target.checked))},null,8,P)])],8,E)}var B={props:{icon:{type:String,required:!0},title:{type:String,required:!0},selected:{type:Boolean,default:!1}},components:{AppIcon:A},name:"app-card"};const M=(0,C.Z)(B,[["render",Y]]);var N=M,U={methods:{onClose(t){console.log("close",t.title)},onToggle(t,e){console.log("toggle",t.title,e)}},props:{title:{type:String,required:!0},list:{type:Array,required:!0},link:{type:String,default:""}},components:{AppCard:N,AppIcon:A},name:"app-grid"};const F=(0,C.Z)(U,[["render",Z]]);var G=F,J=JSON.parse('[{"title":"Смайлы","link":"https://tlgrm.ru/stickers/VKsmilies","list":[{"icon":"https://tlgrm.ru/_/stickers/6b6/819/6b6819f7-d7b1-356a-ba76-e07759a8b31c/2.webp","title":"Улыбка","size":32}]},{"title":"itstickers","link":"https://tgram.ru/stickers/IItstickers","list":[{"icon":"https://tgram.ru/wiki/stickers/img/IItstickers/png/9.png","title":"У меня амнезия, кто вы и какой проект?"},{"icon":"https://tgram.ru/wiki/stickers/img/IItstickers/png/14.png","title":"Ну чё там, чё там? Готово? Готово?"}]},{"title":"terebonk_2","link":"https://tlgrm.ru/stickers/terebonk_2","list":[{"icon":"https://tlgrm.ru/_/stickers/e65/38d/e6538d88-ed55-39d9-a67f-ad97feea9c01/8.webp","title":"Честно сказать ничего не могу сказать"},{"icon":"https://tlgrm.ru/_/stickers/e65/38d/e6538d88-ed55-39d9-a67f-ad97feea9c01/14.webp","title":"Ну ты сказанул ваще"},{"icon":"https://tlgrm.ru/_/stickers/e65/38d/e6538d88-ed55-39d9-a67f-ad97feea9c01/22.webp","title":"С ДР"}]},{"title":"odessastickers","link":"https://tgram.ru/stickers/StickOdessa","list":[{"icon":"https://tgram.ru/wiki/stickers/img/StickOdessa/png/2.png","title":"Ты говоришь обидно"},{"icon":"https://tgram.ru/wiki/stickers/img/StickOdessa/png/4.png","title":"Ой, не надо меня уговаривать, я и так соглашусь"},{"icon":"https://tgram.ru/wiki/stickers/img/StickOdessa/png/22.png","title":"Будем посмотреть"},{"icon":"https://tgram.ru/wiki/stickers/img/StickOdessa/png/23.png","title":"Шо вы мне сердце рвёте?"},{"icon":"https://tgram.ru/wiki/stickers/img/StickOdessa/png/47.png","title":"Оно вам надо?"},{"icon":"https://tgram.ru/wiki/stickers/img/StickOdessa/png/58.png","title":"Я весь одно большое ухо"}]},{"title":"corrections","link":"https://tlgrm.ru/stickers/corrections","list":[{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/1.webp","title":"А есть ещё варианты?"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/2.webp","title":"Где макет?"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/5.webp","title":"Вздыхает"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/7.png","title":"А тебе самому-то нравится?"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/8.png","title":"Есть пара нюансов"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/9.png","title":"Давай подумаем ещё"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/10.png","title":"Ты же профессионал"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/11.png","title":"Как-то грустно"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/12.png","title":"Всё хуйня переделывай"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/14.png","title":"Нужно как у эпл"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/15.png","title":"Нет вау"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/16.png","title":"Ну, такое"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/17.png","title":"Миленько"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/21.png","title":"Принято"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/22.png","title":"Нравится"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/23.png","title":"Спасибо"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/24.png","title":"Услышал"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/25.png","title":"Ясно"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/26.png","title":"Понятно"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/27.png","title":"5 минут"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/28.png","title":"Будет"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/29.png","title":"Сделано"},{"icon":"https://tlgrm.ru/_/stickers/988/e97/988e9751-3dab-3606-902b-230563e114a3/30.png","title":"Сегодня к вечеру"}]},{"title":"websokol","link":"https://tgram.ru/stickers/websokol","list":[{"icon":"https://tgram.ru/wiki/stickers/img/websokol/png/1.png","title":"Ребята совещание"},{"icon":"https://tgram.ru/wiki/stickers/img/websokol/png/2.png","title":"Работаем дальше"},{"icon":"https://tgram.ru/wiki/stickers/img/websokol/png/4.png","title":"У меня есть пара идей"},{"icon":"https://tgram.ru/wiki/stickers/img/websokol/png/5.png","title":"Сайт должен приносить прибыль"}]}]'),V=i.p+"img/crazy2.7180cc7d.gif",L={methods:{getIcon({icon:t,size:e=100,title:i="Noname"}){return`[icon=${t} size=${e} title=${i}]`},onCopy(){u()(this.text)},onAdd(){console.log("add")}},computed:{text(){const t=[];return[this.smiles,...J].forEach((e=>{e.list.forEach((e=>{t.push(this.getIcon(e))}))})),t.join("")}},data(){return{stickers:J,smiles:{title:"Колобки",list:[{title:"crazy2",icon:V,size:27}]}}},components:{AppPanel:D,AppGrid:G},name:"App"};const Q=(0,C.Z)(L,[["render",p]]);var R=Q;(0,n.ri)(R).mount("#app")}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,n,s,r){if(!n){var l=1/0;for(p=0;p<t.length;p++){n=t[p][0],s=t[p][1],r=t[p][2];for(var c=!0,o=0;o<n.length;o++)(!1&r||l>=r)&&Object.keys(i.O).every((function(t){return i.O[t](n[o])}))?n.splice(o--,1):(c=!1,r<l&&(l=r));if(c){t.splice(p--,1);var a=s();void 0!==a&&(e=a)}}return e}r=r||0;for(var p=t.length;p>0&&t[p-1][2]>r;p--)t[p]=t[p-1];t[p]=[n,s,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p=""}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,r,l=n[0],c=n[1],o=n[2],a=0;if(l.some((function(e){return 0!==t[e]}))){for(s in c)i.o(c,s)&&(i.m[s]=c[s]);if(o)var p=o(i)}for(e&&e(n);a<l.length;a++)r=l[a],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(p)},n=self["webpackChunkbitrix24_stickers"]=self["webpackChunkbitrix24_stickers"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(2453)}));n=i.O(n)})();
//# sourceMappingURL=app.ae6ce305.js.map