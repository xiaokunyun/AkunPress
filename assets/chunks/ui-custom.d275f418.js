import{j as r,i,m as d,r as l,e as _,n as u,o as p,c as m}from"../app.ff95d366.js";const A=r({__name:"VPCarbonAds",setup(f){const{theme:o}=i(),n=o.value.carbonAds,{isAsideEnabled:s}=d(),a=l();let t=!1;function c(){if(!t){t=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${n.code}&placement=${n.placement}`,e.async=!0,a.value.appendChild(e)}}return n&&_(()=>{s.value?c():u(s,e=>e&&c())}),(e,b)=>(p(),m("div",{class:"VPCarbonAds",ref_key:"container",ref:a},null,512))}});export{A as default};
