import{g as r,u as i,j as d,r as l,e as u,w as _,o as p,c as f}from"../app.6429e3c2.js";const A=r({__name:"VPCarbonAds",setup(m){const{theme:o}=i(),n=o.value.carbonAds,{isAsideEnabled:a}=d(),s=l();let t=!1;function c(){if(!t){t=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${n.code}&placement=${n.placement}`,e.async=!0,s.value.appendChild(e)}}return n&&u(()=>{a.value?c():_(a,e=>e&&c())}),(e,b)=>(p(),f("div",{class:"VPCarbonAds",ref_key:"container",ref:s},null,512))}});export{A as default};