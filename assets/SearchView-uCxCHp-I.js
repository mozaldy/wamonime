import{r as f,a as t,o as l,b as d,w as s,e,t as i,f as c,i as S,g as w,v as C,j as V,u as j,d as B,c as D,h as N,F as $}from"./index-Tf0J6x0L.js";const q={__name:"ItemCard",props:["title","media_type","episode","score","members","img_src","synopsis","id"],setup(a){const _=f(!1);return(g,m)=>{const u=t("v-img"),h=t("router-link"),p=t("v-card-title"),r=t("v-card-subtitle"),o=t("v-btn"),v=t("v-spacer"),x=t("v-card-actions"),y=t("v-divider"),b=t("v-card-text"),n=t("v-expand-transition"),k=t("v-card");return l(),d(k,{class:"my-5 mx-auto","max-width":"344"},{default:s(()=>[e(h,{to:`/anime/${a.id}`},{default:s(()=>[e(u,{src:a.img_src,height:"300px",cover:"",draggable:"false"},null,8,["src"])]),_:1},8,["to"]),e(h,{class:"text-decoration-none font-weight-bold text-blue-darken-4",to:`/anime/${a.id}`},{default:s(()=>[a.title!==""?(l(),d(p,{key:0},{default:s(()=>[c(i(a.title||"-"),1)]),_:1})):S("",!0)]),_:1},8,["to"]),e(r,null,{default:s(()=>[c(i(a.media_type)+" ("+i(a.episode)+" eps)",1)]),_:1}),e(r,null,{default:s(()=>[c(" Score: "+i(a.score),1)]),_:1}),e(r,null,{default:s(()=>[c(" Members: "+i(a.members),1)]),_:1}),e(x,null,{default:s(()=>[e(o,{color:"orange-lighten-2",variant:"text"},{default:s(()=>[c(" Synopsis ")]),_:1}),e(v),e(o,{icon:_.value?"mdi-chevron-up":"mdi-chevron-down",onClick:m[0]||(m[0]=I=>_.value=!_.value)},null,8,["icon"])]),_:1}),e(n,null,{default:s(()=>[V(w("div",null,[e(y),e(b,null,{default:s(()=>[c(i(a.synopsis),1)]),_:1})],512),[[C,_.value]])]),_:1})]),_:1})}}},E={class:"text-h4"},F={class:"font-weight-bold"},z={__name:"SearchView",setup(a){const _=j(),g=f(_.params.q),m=f(!0),u=f([]);return(async p=>{try{const r=await B.get("https://api.jikan.moe/v4/anime",{params:{q:p,sfw:!0}});u.value=r.data.data.map(o=>({id:o.mal_id,title:o.title,media_type:o.type,episode:o.episodes,score:o.score,members:o.members,synopsis:o.synopsis,img_src:o.images.webp.large_image_url})),m.value=!1}catch{console.log("Error fetching APIs!")}})(g.value),(p,r)=>{const o=t("v-progress-circular"),v=t("v-col"),x=t("v-row"),y=t("v-container"),b=t("v-app");return l(),d(b,null,{default:s(()=>[e(y,null,{default:s(()=>[w("p",E,[c(' Search result for "'),w("span",F,i(g.value),1),c('" ')]),m.value?(l(),d(v,{key:0,cols:"12 d-flex justify-center"},{default:s(()=>[e(o,{width:"10",size:"250",indeterminate:"",color:"primary",class:"text-center"})]),_:1})):(l(),d(x,{key:1},{default:s(()=>[(l(!0),D($,null,N(u.value,n=>(l(),d(v,{class:"justify-center",cols:"12",sm:"6",md:"4"},{default:s(()=>[e(q,{title:n.title,episode:n.episode,score:n.score,members:n.members,media_type:n.media_type,synopsis:n.synopsis,img_src:n.img_src,id:n.id},null,8,["title","episode","score","members","media_type","synopsis","img_src","id"])]),_:2},1024))),256))]),_:1}))]),_:1})]),_:1})}}};export{z as default};
