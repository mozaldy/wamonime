import{r as p,u as y,l as b,a as s,o as g,c as w,b as a,w as n,m as k,_ as j,g as _}from"./index-8EpdaYFQ.js";import{a as V}from"./axios-G2rPRu76.js";const C=_("p",{class:"text-h2"},"WM",-1),q=_("p",{class:"text-h3 font-weight-black"},"Wamonime",-1),M={__name:"IndexView",setup(B){const e=p(null),r=p([]),c=y(),f=async t=>{try{const o=await V.get("https://api.jikan.moe/v4/anime",{params:{q:t,limit:3,sfw:!0}});r.value=o.data.data.map(l=>({title:l.title,id:l.mal_id}))}catch{console.log("error fetching data!")}};let m;b(e,t=>{clearTimeout(m),m=setTimeout(()=>{t!==null&&f(t.title||t)},200)});const u=()=>{e.value&&typeof e.value=="object"&&e.value.id&&c.push({name:"anime_item",params:{id:e.value.id}})},d=()=>{e.value&&(typeof e.value=="string"?c.push({name:"search",params:{q:e.value}}):c.push({name:"anime_item",params:{id:e.value.id}}))};return(t,o)=>{const l=s("v-avatar"),i=s("v-col"),v=s("v-combobox"),h=s("v-container");return g(),w("main",null,[a(h,{class:"d-flex flex-wrap justify-center"},{default:n(()=>[a(i,{cols:"12",class:"justify-center d-flex"},{default:n(()=>[a(l,{color:"blue-darken-4 pa-2 col-12",size:"150"},{default:n(()=>[C]),_:1})]),_:1}),a(i,{cols:"12",class:"justify-center d-flex"},{default:n(()=>[q]),_:1}),a(i,{cols:"12",class:"justify-center d-flex"},{default:n(()=>[a(v,{modelValue:e.value,"onUpdate:modelValue":[o[0]||(o[0]=x=>e.value=x),u],items:r.value,variant:"solo-filled",label:"Search Anime or Manga","append-inner-icon":"mdi-magnify",rounded:"xl","single-line":"",clearable:"",onKeyup:k(d,["enter"]),"onClick:appendInner":d,"onClick:item":u},null,8,["modelValue","items"])]),_:1}),a(j)]),_:1})])}}};export{M as default};
