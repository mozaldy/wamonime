import{r as n,a as c,o as s,h as o,w as m,i as p,b as _,g as u}from"./index-QkvctU9g.js";import{_ as d}from"./ListItem-4q81h1kI.js";import{L as g}from"./Loading-FQKKr2mh.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const f=u("p",{class:"text-h4"},"Top publishing manga",-1),B={__name:"MangaView",setup(h){const t=n(null),i=n(!0);return(async()=>{try{const a=await p.get("https://api.jikan.moe/v4/top/manga?filter=publishing");t.value=a.data.data.map(e=>({id:e.mal_id,title:e.title,media_type:e.type,episode:e.episodes,score:e.score,members:e.members,synopsis:e.synopsis,img_src:e.images.webp.large_image_url,content:"manga"})),i.value=!1}catch(a){console.log(a)}})(),(a,e)=>{const r=c("v-row"),l=c("v-container");return s(),o(l,null,{default:m(()=>[f,i.value?(s(),o(g,{key:0})):(s(),o(r,{key:1},{default:m(()=>[_(d,{items:t.value},null,8,["items"])]),_:1}))]),_:1})}}};export{B as default};
