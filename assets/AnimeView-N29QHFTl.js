import{a as l}from"./axios-G2rPRu76.js";import{_}from"./ListItem-2W7JaYhJ.js";import{L as d}from"./Loading-Gi4nThXM.js";import{r as n,a as m,o,h as a,w as r,b as u,g as f}from"./index-8EpdaYFQ.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const g=f("p",{class:"text-h4"},"Top Airing Anime",-1),B={__name:"AnimeView",setup(v){const t=n(null),i=n(!0);return(async()=>{try{const s=await l.get("https://api.jikan.moe/v4/top/anime?filter=airing");t.value=s.data.data.map(e=>({id:e.mal_id,title:e.title,media_type:e.type,episode:e.episodes,score:e.score,members:e.members,synopsis:e.synopsis,img_src:e.images.webp.large_image_url,content:"anime"})),i.value=!1}catch(s){console.log(s)}})(),(s,e)=>{const c=m("v-row"),p=m("v-container");return o(),a(p,null,{default:r(()=>[g,i.value?(o(),a(d,{key:0})):(o(),a(c,{key:1},{default:r(()=>[u(_,{items:t.value},null,8,["items"])]),_:1}))]),_:1})}}};export{B as default};
