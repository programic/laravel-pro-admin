import{r as G,o,c as j,a as Q,d as f,b as u,e as r,f as c,w as _,u as p,G as H,Q as N,_ as q,g as t,h as Y,F as w,i as L,Y as V,j as W,k as X,R as A,n as M,l as E,m as k,t as l,p as Z,q as tt,s as et,v as st,x as ot,y as S,z as at,A as z,B as nt,C as it,D as lt,E as y,H as P,I as rt,J as dt,K as U,L as ct,M as pt,N as mt,O as ut,P as xt}from"./vendor.js";const _t=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const m of n)if(m.type==="childList")for(const d of m.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const m={};return n.integrity&&(m.integrity=n.integrity),n.referrerpolicy&&(m.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?m.credentials="include":n.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(n){if(n.ep)return;n.ep=!0;const m=a(n);fetch(n.href,m)}};_t();var D=(e,i)=>{const a=e.__vccOpts||e;for(const[s,n]of i)a[s]=n;return a};const ht={};function ft(e,i){const a=G("router-view");return o(),j(a)}var gt=D(ht,[["render",ft]]);const yt=Q({state:{},getters:{},actions:{},mutations:{},modules:{}}),vt={class:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800"},bt={class:"absolute top-0 right-0 -mr-12 pt-2"},$t=t("span",{class:"sr-only"},"Close sidebar",-1),wt=t("div",{class:"flex-shrink-0 flex items-center px-4"},null,-1),kt={class:"mt-5 flex-1 h-0 overflow-y-auto"},jt={class:"px-2 space-y-1"},Ct=t("div",{class:"flex-shrink-0 w-14","aria-hidden":"true"},null,-1),Mt={class:"hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0"},Lt={class:"flex-1 flex flex-col min-h-0 bg-gray-800"},Nt=t("div",{class:"flex items-center h-16 flex-shrink-0 px-4 bg-gray-900"},null,-1),Tt={class:"flex-1 flex flex-col overflow-y-auto"},At={class:"flex-1 px-2 py-4 space-y-1"},Et={class:"md:pl-64 flex flex-col"},St={class:"sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow"},Pt=t("span",{class:"sr-only"},"Open sidebar",-1),Dt={class:"flex-1 px-4 flex justify-between"},Ot=t("div",null,null,-1),Ft={class:"ml-4 flex items-center md:ml-6"},Jt={href:"/",class:"bg-white p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2"},Bt=t("span",{class:"sr-only"},"Exit",-1),zt={class:"flex-1"},It={class:"py-6"},Rt=f({setup(e){const i=[{label:"Dashboard",name:"Dashboard",icon:Z,current:!1},{label:"Notifications",name:"Notifications",icon:tt,current:!1},{label:"Failed jobs",name:"FailedJobs",icon:et,current:!1},{label:"Logs",name:"Logs",icon:st,current:!1}],a=u(!1);return(s,n)=>{const m=G("router-view");return o(),r("div",null,[c(p(V),{as:"template",show:a.value},{default:_(()=>[c(p(H),{as:"div",class:"fixed inset-0 flex z-40 md:hidden",onClose:n[1]||(n[1]=d=>a.value=!1)},{default:_(()=>[c(p(N),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:_(()=>[c(p(q),{class:"fixed inset-0 bg-gray-600 bg-opacity-75"})]),_:1}),c(p(N),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:_(()=>[t("div",vt,[c(p(N),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:_(()=>[t("div",bt,[t("button",{type:"button",class:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:n[0]||(n[0]=d=>a.value=!1)},[$t,c(p(Y),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),wt,t("div",kt,[t("nav",jt,[(o(),r(w,null,L(i,d=>c(p(A),{key:d.name,to:{name:d.name},class:M([d.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","group flex items-center px-2 py-2 text-base font-medium rounded-md"])},{default:_(()=>[(o(),j(E(d.icon),{class:M([d.current?"text-gray-300":"text-gray-400 group-hover:text-gray-300","mr-4 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),k(" "+l(d.label),1)]),_:2},1032,["to","class"])),64))])])])]),_:1}),Ct]),_:1})]),_:1},8,["show"]),t("div",Mt,[t("div",Lt,[Nt,t("div",Tt,[t("nav",At,[(o(),r(w,null,L(i,d=>c(p(A),{key:d.name,to:{name:d.name},class:M([d.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","group flex items-center px-2 py-2 text-sm font-medium rounded-md"])},{default:_(()=>[(o(),j(E(d.icon),{class:M([d.current?"text-gray-300":"text-gray-400 group-hover:text-gray-300","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),k(" "+l(d.label),1)]),_:2},1032,["to","class"])),64))])])])]),t("div",Et,[t("div",St,[t("button",{type:"button",class:"px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",onClick:n[2]||(n[2]=d=>a.value=!0)},[Pt,c(p(W),{class:"h-6 w-6","aria-hidden":"true"})]),t("div",Dt,[Ot,t("div",Ft,[t("a",Jt,[Bt,c(p(X),{class:"h-7 w-7","aria-hidden":"true"})])])])]),t("main",zt,[t("div",It,[c(m)])])])])}}}),Gt=t("div",{class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},[t("h1",{class:"text-2xl font-semibold text-gray-900"}," Dashboard ")],-1),Ht={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},qt={class:"px-4 py-6 sm:px-0"},Vt=f({setup(e){const i=u("test");async function a(){const n=await(await fetch("http://127.0.0.1:8000/pro-admin/api/pro-admin",{headers:{"Content-Type":"application/json",Accepts:"application/json"},method:"GET"})).json();i.value=n.data}return(s,n)=>(o(),r(w,null,[Gt,t("div",Ht,[t("div",qt,[t("button",{onClick:a}," get data "),t("p",null,l(i.value),1)])])],64))}}),Ut={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},Kt=t("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"\u200B",-1),Qt={class:"relative inline-block align-bottom max-w-6xl bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6"},Yt={class:"mt-3 text-center sm:mt-5"},T=f({props:{title:null},setup(e,{expose:i}){const a=u(!1);function s(){a.value=!0}function n(){a.value=!1}return i({open:s}),(m,d)=>(o(),j(p(V),{as:"template",show:a.value},{default:_(()=>[c(p(H),{as:"div",class:"fixed z-10 inset-0 overflow-y-auto",onClose:n},{default:_(()=>[t("div",Ut,[c(p(N),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:_(()=>[c(p(q),{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]),_:1}),Kt,c(p(N),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:_(()=>[t("div",Qt,[t("div",null,[t("div",Yt,[c(p(ot),{as:"h3",class:"text-lg leading-6 font-medium text-gray-900"},{default:_(()=>[k(l(e.title),1)]),_:1}),S(m.$slots,"default")])]),t("div",{class:"mt-5 w-full flex justify-center sm:mt-6"},[t("button",{type:"button",class:"inline-flex justify-center max-w-sm w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm",onClick:n}," Close ")])])]),_:3})])]),_:3})]),_:3},8,["show"]))}}),Wt={},Xt={class:"flex w-full h-full justify-center items-center"},Zt=t("div",{class:"w-16 h-16 bg-black flex justify-center items-center animate-spin"},[t("span",{class:"text-white block font-extrabold tracking-wider text-lg"},"PRO")],-1),te=[Zt];function ee(e,i){return o(),r("div",Xt,te)}var O=D(Wt,[["render",ee]]);const se={class:"rounded-md bg-red-50 p-4"},oe={class:"flex"},ae={class:"flex-shrink-0"},ne={class:"ml-3"},ie={class:"text-sm font-medium text-red-800"},le={class:"mt-2 text-sm text-red-700"},F=f({props:{title:null},setup(e){return(i,a)=>(o(),r("div",se,[t("div",oe,[t("div",ae,[c(p(at),{class:"h-5 w-5 text-red-400","aria-hidden":"true"})]),t("div",ne,[t("h3",ie,l(e.title),1),t("div",le,[S(i.$slots,"default")])])])]))}}),I=f({props:{active:{type:Boolean},disabled:{type:Boolean}},setup(e){return(i,a)=>(o(),j(E("a"),{class:M([{"bg-gray-100 border-gray-400 text-gray-700":e.active,"bg-white border-gray-300 text-gray-500 hover:bg-gray-100":!e.active,"cursor-not-allowed":e.disabled},"hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"]),href:"#"},{default:_(()=>[S(i.$slots,"default")]),_:3},8,["class"]))}}),re={class:"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"},de={class:"flex-1 flex items-center justify-between"},ce={class:"text-sm text-gray-700"},pe=k(" Showing "+l(" ")+" "),me={class:"font-medium"},ue=k(" "+l(" ")+" to "+l(" ")+" "),xe={class:"font-medium"},_e=k(" "+l(" ")+" of "+l(" ")+" "),he={class:"font-medium"},fe=k(" "+l(" ")+" results "),ge={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},ye=t("span",{class:"sr-only"},"Previous",-1),ve=lt('<a href="#" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a><a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a><a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a><span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span><a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a><a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a><a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>',7),be=t("span",{class:"sr-only"},"Next",-1),$e=f({props:{jobs:null},emits:["paginate"],setup(e,{emit:i}){const a=e,s=z(()=>{const d=a.jobs.current_page-1;return d>0?d:null}),n=z(()=>{const d=a.jobs.current_page+1;return d<=a.jobs.last_page?d:null});function m(d){d&&i("paginate",d)}return(d,x)=>(o(),r("div",re,[t("div",de,[t("div",null,[t("p",ce,[pe,t("span",me,l(e.jobs.from),1),ue,t("span",xe,l(e.jobs.to),1),_e,t("span",he,l(e.jobs.total),1),fe])]),t("div",null,[t("nav",ge,[c(I,{disabled:p(s)===null,class:"rounded-l-md",onClick:x[0]||(x[0]=h=>m(p(s)))},{default:_(()=>[ye,c(p(nt),{class:"h-5 w-5","aria-hidden":"true"})]),_:1},8,["disabled"]),ve,c(I,{disabled:p(n)===null,class:"rounded-r-md",onClick:x[1]||(x[1]=h=>m(p(n)))},{default:_(()=>[be,c(p(it),{class:"h-5 w-5","aria-hidden":"true"})]),_:1},8,["disabled"])])])])]))}}),we={class:"px-4 sm:px-6 lg:px-8"},ke={class:"mt-8 flex flex-col"},je={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Ce={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Me={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Le={class:"min-w-full divide-y divide-gray-300"},Ne=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}," id "),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," display name "),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," command name "),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," time "),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," info ")])],-1),Te={class:"divide-y divide-gray-200 bg-white"},Ae={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},Ee={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},Se={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},Pe={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},De={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},Oe=["onClick"],Fe=k(" Exception "),Je=f({props:{jobs:null},emits:["openModal","paginate"],setup(e){return(i,a)=>(o(),r("div",we,[t("div",ke,[t("div",je,[t("div",Ce,[t("div",Me,[t("table",Le,[Ne,t("tbody",Te,[(o(!0),r(w,null,L(e.jobs.data,s=>(o(),r("tr",{key:s.id},[t("td",Ae,[t("p",null,l(s.id),1)]),t("td",Ee,[t("p",null,l(s.payload.displayName),1)]),t("td",Se,[t("p",null,l(s.payload.data.commandName),1)]),t("td",Pe,[t("p",null,l(s.failed_at),1)]),t("td",De,[t("button",{class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-slate-100 hover:bg-gray-50 focus:outline-none",onClick:n=>i.$emit("openModal",s)}," Info ",8,Oe),c(p(A),{to:{name:"FailedJobException",params:{exception:s.exception}},class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-slate-100 hover:bg-gray-50 focus:outline-none"},{default:_(()=>[Fe]),_:2},1032,["to"])])]))),128))])]),c($e,{jobs:e.jobs,onPaginate:a[0]||(a[0]=s=>i.$emit("paginate",s))},null,8,["jobs"])])])])])]))}}),Be={class:"mt-2"},ze={class:"mt-8 flex flex-col"},Ie={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},Re={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Ge={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},He={class:"min-w-full divide-y divide-gray-300"},qe={class:"bg-gray-50"},Ve={class:"divide-x divide-gray-200"},Ue={scope:"col",colspan:"2",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"},Ke={class:"divide-y divide-gray-200 bg-white"},Qe={class:"divide-x divide-gray-200"},Ye=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," id ",-1),We={class:"whitespace-nowrap p-4 text-sm text-gray-500"},Xe={class:"divide-x divide-gray-200"},Ze=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," connection ",-1),ts={class:"whitespace-nowrap p-4 text-sm text-gray-500"},es={class:"divide-x divide-gray-200"},ss=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," queue ",-1),os={class:"whitespace-nowrap p-4 text-sm text-gray-500"},as={class:"divide-x divide-gray-200"},ns=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," job ",-1),is={class:"whitespace-nowrap p-4 text-sm text-gray-500"},ls={class:"divide-x divide-gray-200"},rs=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," command name ",-1),ds={class:"whitespace-nowrap p-4 text-sm text-gray-500"},cs={key:0,class:"divide-x divide-gray-200"},ps=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," max tries ",-1),ms={class:"whitespace-nowrap p-4 text-sm text-gray-500"},us={key:1,class:"divide-x divide-gray-200"},xs=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," delay ",-1),_s={class:"whitespace-nowrap p-4 text-sm text-gray-500"},hs={key:2,class:"divide-x divide-gray-200"},fs=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," timeout ",-1),gs={class:"whitespace-nowrap p-4 text-sm text-gray-500"},ys={key:3,class:"divide-x divide-gray-200"},vs=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," timeout at ",-1),bs={class:"whitespace-nowrap p-4 text-sm text-gray-500"},$s={class:"divide-x divide-gray-200"},ws=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," failed at ",-1),ks={class:"whitespace-nowrap p-4 text-sm text-gray-500"},js=f({props:{job:null},setup(e,{expose:i}){const a=u(null);function s(){a.value.open()}return i({open:s}),(n,m)=>(o(),j(p(T),{ref_key:"modal",ref:a,title:"Info"},{default:_(()=>[t("div",Be,[t("div",ze,[t("div",Ie,[t("div",Re,[t("div",Ge,[t("table",He,[t("thead",qe,[t("tr",Ve,[t("th",Ue,l(e.job.payload.displayName),1)])]),t("tbody",Ke,[t("tr",Qe,[Ye,t("td",We,l(e.job.id),1)]),t("tr",Xe,[Ze,t("td",ts,l(e.job.connection),1)]),t("tr",es,[ss,t("td",os,l(e.job.queue),1)]),t("tr",as,[ns,t("td",is,l(e.job.payload.job),1)]),t("tr",ls,[rs,t("td",ds,l(e.job.payload.data.commandName),1)]),e.job.payload.maxTries?(o(),r("tr",cs,[ps,t("td",ms,l(e.job.payload.maxTries),1)])):y("",!0),e.job.payload.delay?(o(),r("tr",us,[xs,t("td",_s,l(e.job.payload.delay),1)])):y("",!0),e.job.payload.timeout?(o(),r("tr",hs,[fs,t("td",gs,l(e.job.payload.timeout),1)])):y("",!0),e.job.payload.timeoutAt?(o(),r("tr",ys,[vs,t("td",bs,l(e.job.payload.timeoutAt),1)])):y("",!0),t("tr",$s,[ws,t("td",ks,l(e.job.failed_at),1)])])])])])])])])]),_:1},512))}}),Cs={class:"max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8"},Ms=t("h1",{class:"text-2xl font-semibold text-gray-900"}," Failed jobs ",-1),Ls=k(" Refresh "),Ns={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},Ts={key:0,class:"mt-8"},As={key:1,class:"mt-8"},Es={key:2,class:"mt-16"},Ss={class:"text-center"},Ps=t("h3",{class:"mt-2 text-sm font-medium text-gray-900"}," No failed jobs ",-1),Ds=t("p",{class:"mt-1 text-sm text-gray-500"}," There are no failed jobs to report ",-1),Os={key:3},Fs=f({setup(e){const i=u(!1),a=u(null),s=u(null),n=u(null),m=u(null);async function d(h=1){i.value=!0,a.value=null;try{const b=await(await fetch(`/pro-admin/api/jobs?page=${h}`,{headers:{"Content-Type":"application/json",Accepts:"application/json"},method:"GET"})).json();n.value=b.failedJobs}catch(g){let b;g instanceof Error?b=g.message:b=String(g),a.value=b}finally{i.value=!1}}function x(h){m.value=h,s.value.open()}return d(),(h,g)=>(o(),r(w,null,[t("div",Cs,[Ms,t("button",{type:"button",class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:g[0]||(g[0]=()=>d())},[c(p(P),{class:"h-4 w-4 mr-1","aria-hidden":"true"}),Ls])]),t("div",Ns,[i.value?(o(),r("div",Ts,[c(p(O))])):a.value?(o(),r("div",As,[c(p(F),{title:"Error during data fetching"},{default:_(()=>[t("p",null,l(a.value),1)]),_:1})])):n.value&&n.value.data.length===0?(o(),r("div",Es,[t("div",Ss,[c(p(rt),{class:"mx-auto text-gray-400 w-12 h-12"}),Ps,Ds])])):(o(),r("div",Os,[c(Je,{jobs:n.value,onOpenModal:x,onPaginate:d},null,8,["jobs"])]))]),c(js,{ref_key:"failedJobsModal",ref:s,job:m.value},null,8,["job"])],64))}});const Js={class:"relative inline-block"},Bs={class:"tooltip"},zs=f({props:{tooltip:null},setup(e){return(i,a)=>(o(),r("div",Js,[c(p(dt),{class:"h-4 w-4 inline-block tooltip-icon"}),t("div",Bs,[t("span",null,l(e.tooltip),1)])]))}});var Is=D(zs,[["__scopeId","data-v-b26847d0"]]);const Rs={class:"px-4 sm:px-6 lg:px-8"},Gs={class:"mt-8 flex flex-col"},Hs={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},qs={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},Vs={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},Us={class:"min-w-full divide-y divide-gray-300"},Ks=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}," Name "),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Channels "),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Preview ")])],-1),Qs={class:"divide-y divide-gray-200 bg-white"},Ys={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},Ws={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},Xs={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},Zs=["onClick"],to=["onClick"],eo=["onClick"],so=["onClick"],oo=f({props:{notifications:null},emits:["openModal"],setup(e){return(i,a)=>(o(),r("div",Rs,[t("div",Gs,[t("div",Hs,[t("div",qs,[t("div",Vs,[t("table",Us,[Ks,t("tbody",Qs,[(o(!0),r(w,null,L(e.notifications,s=>(o(),r("tr",{key:s.name},[t("td",Ys,[t("p",null,[s.description?(o(),j(Is,{key:0,tooltip:s.description},null,8,["tooltip"])):y("",!0),k(" "+l(s.name),1)])]),t("td",Ws,[(o(!0),r(w,null,L(s.channels,n=>(o(),r("p",{key:n},l(n),1))),128))]),t("td",Xs,[s.mail?(o(),r("button",{key:0,class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-slate-100 hover:bg-gray-50 focus:outline-none",onClick:n=>i.$emit("openModal","mail",s)}," Mail ",8,Zs)):y("",!0),s.array?(o(),r("button",{key:1,class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-slate-100 hover:bg-gray-50 focus:outline-none",onClick:n=>i.$emit("openModal","database",s)}," database ",8,to)):y("",!0),s.sms?(o(),r("button",{key:2,class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-slate-100 hover:bg-gray-50 focus:outline-none",onClick:n=>i.$emit("openModal","sms",s)}," Sms ",8,eo)):y("",!0),s.fcm?(o(),r("button",{key:3,class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-slate-100 hover:bg-gray-50 focus:outline-none",onClick:n=>i.$emit("openModal","fcm",s)}," Fcm ",8,so)):y("",!0)])]))),128))])])])])])])]))}}),ao={class:"mt-2"},no={class:"mt-8 flex flex-col"},io={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},lo={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},ro={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},co={class:"min-w-full divide-y divide-gray-300"},po={class:"bg-gray-50"},mo={class:"divide-x divide-gray-200"},uo={scope:"col",colspan:"2",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"},xo={class:"divide-y divide-gray-200 bg-white"},_o={class:"divide-x divide-gray-200"},ho=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," Level ",-1),fo={class:"whitespace-nowrap p-4 text-sm text-gray-500"},go={class:"divide-x divide-gray-200"},yo=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," Subject ",-1),vo={class:"whitespace-nowrap p-4 text-sm text-gray-500"},bo={key:0,class:"divide-x divide-gray-200"},$o=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," Message ",-1),wo={class:"whitespace-nowrap p-4 text-sm text-gray-500"},ko={key:1,class:"divide-x divide-gray-200"},jo=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," Outro message ",-1),Co={class:"whitespace-nowrap p-4 text-sm text-gray-500"},Mo={class:"divide-x divide-gray-200"},Lo=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," Action text ",-1),No={class:"whitespace-nowrap p-4 text-sm text-gray-500"},To={class:"divide-x divide-gray-200"},Ao=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," Action url ",-1),Eo={class:"whitespace-nowrap p-4 text-sm text-gray-500"},So={key:2,class:"divide-x divide-gray-200"},Po=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," App action url ",-1),Do={class:"whitespace-nowrap p-4 text-sm text-gray-500"},Oo=f({props:{notification:null},setup(e,{expose:i}){const a=u(null);function s(){a.value.open()}return i({open:s}),(n,m)=>(o(),j(p(T),{ref_key:"modal",ref:a,title:"Database"},{default:_(()=>{var d,x,h,g,b,$,v;return[t("div",ao,[t("div",no,[t("div",io,[t("div",lo,[t("div",ro,[t("table",co,[t("thead",po,[t("tr",mo,[t("th",uo,l(e.notification.name),1)])]),t("tbody",xo,[t("tr",_o,[ho,t("td",fo,l((d=e.notification.array)==null?void 0:d.level),1)]),t("tr",go,[yo,t("td",vo,l((x=e.notification.array)==null?void 0:x.subject),1)]),e.notification.array.introLines.length>0?(o(),r("tr",bo,[$o,t("td",wo,[(o(!0),r(w,null,L((h=e.notification.array)==null?void 0:h.introLines,C=>(o(),r("p",{key:C},l(C),1))),128))])])):y("",!0),e.notification.array.outroLines.length>0?(o(),r("tr",ko,[jo,t("td",Co,[(o(!0),r(w,null,L((g=e.notification.array)==null?void 0:g.outroLines,C=>(o(),r("p",{key:C},l(C),1))),128))])])):y("",!0),t("tr",Mo,[Lo,t("td",No,l((b=e.notification.array)==null?void 0:b.actionText),1)]),t("tr",To,[Ao,t("td",Eo,l(($=e.notification.array)==null?void 0:$.actionUrl),1)]),"appActionUrl"in e.notification.array?(o(),r("tr",So,[Po,t("td",Do,l((v=e.notification.array)==null?void 0:v.appActionUrl),1)])):y("",!0)])])])])])])])]}),_:1},512))}}),Fo={class:"mt-2 border-2 border-slate-200"},Jo=["innerHTML"],Bo=f({props:{notification:null},setup(e,{expose:i}){const a=u(null);function s(){a.value.open()}return i({open:s}),(n,m)=>(o(),j(p(T),{ref_key:"modal",ref:a,title:"Email"},{default:_(()=>[t("div",Fo,[t("div",{innerHTML:e.notification.mail},null,8,Jo)])]),_:1},512))}});const zo={class:"bg-blue-500 smsMessage before:bg-blue-500"},Io={class:"text-white"},Ro=f({props:{notification:null},setup(e,{expose:i}){const a=u(null);function s(){a.value.open()}return i({open:s}),(n,m)=>(o(),j(T,{ref_key:"modal",ref:a,title:"Sms"},{default:_(()=>[t("div",zo,[t("p",Io,l(e.notification.sms),1)])]),_:1},512))}});const Go={class:"hidden sm:block"},Ho={class:"border-b border-gray-200"},qo={class:"-mb-px flex","aria-label":"Tabs"},Vo={key:0},Uo={class:"modal-preview"},Ko={class:"modal-preview-dialog"},Qo={class:"dialog-box p-bottom-10"},Yo=t("div",{class:"background-blur"},null,-1),Wo={class:"header"},Xo={class:"contents"},Zo={class:"left"},ta={class:"app-name"},ea=t("div",{class:"right"}," Nu ",-1),sa={class:"contents main-content pull-left",style:{"padding-left":"0px","padding-right":"0px","padding-bottom":"0px"}},oa={class:"text-left",style:{padding:"0px 5px"}},aa={style:{"white-space":"pre-line","letter-spacing":".1px"}},na=["innerHTML"],ia={key:1},la={class:"mt-2"},ra={class:"mt-8 flex flex-col"},da={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},ca={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},pa={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},ma={class:"min-w-full divide-y divide-gray-300"},ua={class:"bg-gray-50"},xa={class:"divide-x divide-gray-200"},_a={scope:"col",colspan:"2",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"},ha={class:"divide-y divide-gray-200 bg-white"},fa={class:"divide-x divide-gray-200"},ga=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," Title ",-1),ya={class:"whitespace-nowrap p-4 text-sm text-gray-500"},va={class:"divide-x divide-gray-200"},ba=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," Content ",-1),$a={class:"whitespace-nowrap p-4 text-sm text-gray-500"},wa={class:"divide-x divide-gray-200"},ka=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," Image ",-1),ja={class:"whitespace-nowrap p-4 text-sm text-gray-500"},Ca={class:"divide-x divide-gray-200"},Ma=t("td",{class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6"}," Url ",-1),La={class:"whitespace-nowrap p-4 text-sm text-gray-500"},Na=f({props:{notification:null},setup(e,{expose:i}){var x;const a=u(null),s=u("table"),n=(x=window.ProDashboard.config.appName)!=null?x:"App Name";function m(h){s.value=h}function d(){a.value.open()}return i({open:d}),(h,g)=>(o(),j(p(T),{ref_key:"modal",ref:a,title:"Fcm"},{default:_(()=>{var b,$,v,C,J,B;return[t("div",null,[t("div",Go,[t("div",Ho,[t("nav",qo,[t("a",{class:M([s.value=="ios"?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer"]),onClick:g[0]||(g[0]=K=>m("ios"))}," IOS ",2),t("a",{class:M([s.value=="table"?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer"]),onClick:g[1]||(g[1]=K=>m("table"))}," Table ",2)])])])]),s.value=="ios"?(o(),r("div",Vo,[t("div",Uo,[t("div",Ko,[t("div",Qo,[Yo,t("div",Wo,[t("div",Xo,[t("div",Zo,[t("span",ta,l(p(n)),1)]),ea])]),t("div",sa,[t("div",oa,[t("strong",aa,l((b=e.notification.fcm)==null?void 0:b.notification.title),1)]),t("div",{class:"truncate-overflow text-left",style:{padding:"0px 5px","white-space":"pre-line","letter-spacing":".1px",overflow:"hidden"},innerHTML:($=e.notification.fcm)==null?void 0:$.notification.body},null,8,na)])])])])])):y("",!0),s.value=="table"?(o(),r("div",ia,[t("div",la,[t("div",ra,[t("div",da,[t("div",ca,[t("div",pa,[t("table",ma,[t("thead",ua,[t("tr",xa,[t("th",_a,l(e.notification.name),1)])]),t("tbody",ha,[t("tr",fa,[ga,t("td",ya,l((v=e.notification.fcm)==null?void 0:v.notification.title),1)]),t("tr",va,[ba,t("td",$a,l((C=e.notification.fcm)==null?void 0:C.notification.body),1)]),t("tr",wa,[ka,t("td",ja,l((J=e.notification.fcm)==null?void 0:J.notification.image),1)]),t("tr",Ca,[Ma,t("td",La,l((B=e.notification.fcm)==null?void 0:B.data.url),1)])])])])])])])])])):y("",!0)]}),_:1},512))}}),Ta={class:"max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8"},Aa=t("h1",{class:"text-2xl font-semibold text-gray-900"}," Notifications ",-1),Ea=k(" Refresh "),Sa={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},Pa={key:0,class:"mt-8"},Da={key:1,class:"mt-8"},Oa={key:2,class:"mt-16"},Fa={class:"text-center"},Ja=t("h3",{class:"mt-2 text-sm font-medium text-gray-900"}," No notifications found ",-1),Ba=t("p",{class:"mt-1 text-sm text-gray-500"}," There are currently no notifications send by the application ",-1),za={key:3},Ia=f({setup(e){const i=u(!1),a=u(null),s=u(null),n=u(null),m=u(null),d=u(null),x=u([]),h=u(null);async function g(){i.value=!0,a.value=null;try{const v=await(await fetch("/pro-admin/api/notifications",{headers:{"Content-Type":"application/json",Accepts:"application/json"},method:"GET"})).json();x.value=v.notifications}catch($){let v;$ instanceof Error?v=$.message:v=String($),a.value=v}finally{i.value=!1}}function b($,v){switch(h.value=v,$){case"mail":{n.value.open();break}case"database":{s.value.open();break}case"sms":{m.value.open();break}case"fcm":{d.value.open();break}default:throw TypeError}}return g(),($,v)=>(o(),r(w,null,[t("div",Ta,[Aa,t("button",{type:"button",class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:g},[c(p(P),{class:"h-4 w-4 mr-1","aria-hidden":"true"}),Ea])]),t("div",Sa,[i.value?(o(),r("div",Pa,[c(p(O))])):a.value?(o(),r("div",Da,[c(p(F),{title:"Error during data fetching"},{default:_(()=>[t("p",null,l(a.value),1)]),_:1})])):x.value.length===0?(o(),r("div",Oa,[t("div",Fa,[c(p(U),{class:"mx-auto text-gray-400 w-12 h-12"}),Ja,Ba])])):(o(),r("div",za,[c(oo,{notifications:x.value,onOpenModal:b},null,8,["notifications"])]))]),c(Oo,{ref_key:"databaseModal",ref:s,notification:h.value},null,8,["notification"]),c(Bo,{ref_key:"mailModal",ref:n,notification:h.value},null,8,["notification"]),c(Ro,{ref_key:"smsModal",ref:m,notification:h.value},null,8,["notification"]),c(Na,{ref_key:"fcmModal",ref:d,notification:h.value},null,8,["notification"])],64))}}),Ra={class:"max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8"},Ga=k(" Back "),Ha={class:"max-w-full mx-auto px-4 sm:px-6 md:px-8 mt-10"},qa={class:"overflow-auto bg-black text-white"},Va=f({props:{exception:null},setup(e){return(i,a)=>(o(),r(w,null,[t("div",Ra,[c(p(A),{to:{name:"FailedJobs"},type:"button",class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:_(()=>[Ga]),_:1})]),t("div",Ha,[t("pre",qa,l(e.exception),1)])],64))}}),Ua={class:"lg:col-span-3 xl:col-span-3"},Ka={"aria-label":"Sidebar",class:"top-6 divide-y divide-gray-300 overflow-y-scroll",style:{height:"calc(100vh - 13em)"}},Qa={class:"bg-white shadow overflow-hidden sm:rounded-md"},Ya={role:"list",class:"divide-y divide-gray-200"},Wa=["onClick"],Xa={class:"flex items-center px-4 py-4 sm:px-6"},Za={class:"min-w-0 flex-1 flex items-center"},tn={class:"flex-shrink-0"},en={class:"min-w-0 px-4"},sn={class:"text-sm font-medium truncate"},on=f({props:{logs:null,activeLog:null},emits:["setActiveLog"],setup(e){return(i,a)=>(o(),r("div",Ua,[t("nav",Ka,[t("div",Qa,[t("ul",Ya,[(o(!0),r(w,null,L(e.logs,s=>(o(),r("li",{key:s.name},[t("div",{onClick:n=>i.$emit("setActiveLog",s),class:M([e.activeLog&&e.activeLog.name===s.name?"bg-gray-100":"hover:bg-gray-50","block cursor-pointer"])},[t("div",Xa,[t("div",Za,[t("div",tn,[c(p(ct),{class:"h-10 w-10 text-gray-400"})]),t("div",en,[t("div",null,[t("p",sn,l(s.name),1)])])]),t("div",null,[c(p(pt),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])])],10,Wa)]))),128))])])])]))}}),an={class:"lg:col-span-9 xl:col-span-9 border-2 border-gray-300 overflow-scroll",style:{height:"calc(100vh - 13em)"}},nn={key:0,class:"p-6"},ln=f({props:{activeLog:null},setup(e){return(i,a)=>(o(),r("main",an,[e.activeLog?(o(),r("pre",nn,"      "+l(e.activeLog.content)+`
    `,1)):y("",!0)]))}}),rn={class:"max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8"},dn=t("h1",{class:"text-2xl font-semibold text-gray-900"}," Logs ",-1),cn=k(" Refresh "),pn={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"},mn={key:0,class:"mt-8"},un={key:1,class:"mt-8"},xn={key:2,class:"mt-16"},_n={class:"text-center"},hn=t("h3",{class:"mt-2 text-sm font-medium text-gray-900"}," No logs ",-1),fn=t("p",{class:"mt-1 text-sm text-gray-500"}," There are no logs to show ",-1),gn={key:3},yn={class:"py-6"},vn={class:"max-w-3xl mx-auto lg:max-w-7xl lg:grid lg:grid-cols-12 lg:gap-4"},bn=f({setup(e){const i=u(!1),a=u(null),s=u([]),n=u(null);async function m(){i.value=!0,a.value=null;try{const x=await(await fetch("/pro-admin/api/logs",{headers:{"Content-Type":"application/json",Accepts:"application/json"},method:"GET"})).json();s.value=x.logs}catch(d){let x;d instanceof Error?x=d.message:x=String(d),a.value=x}finally{i.value=!1}}return m(),(d,x)=>(o(),r(w,null,[t("div",rn,[dn,t("button",{type:"button",class:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:m},[c(p(P),{class:"h-4 w-4 mr-1","aria-hidden":"true"}),cn])]),t("div",pn,[i.value?(o(),r("div",mn,[c(p(O))])):a.value?(o(),r("div",un,[c(p(F),{title:"Error during data fetching"},{default:_(()=>[t("p",null,l(a.value),1)]),_:1})])):s.value.length===0?(o(),r("div",xn,[t("div",_n,[c(p(U),{class:"mx-auto text-gray-400 w-12 h-12"}),hn,fn])])):(o(),r("div",gn,[t("div",yn,[t("div",vn,[c(on,{logs:s.value,"active-log":n.value,onSetActiveLog:x[0]||(x[0]=h=>n.value=h)},null,8,["logs","active-log"]),c(ln,{"active-log":n.value},null,8,["active-log"])])])]))])],64))}});var R;const $n=[{path:`/${(R=window.ProDashboard.config.path)!=null?R:"pro-admin"}`,component:Rt,children:[{path:"",name:"Dashboard",component:Vt},{path:"notifications",name:"Notifications",component:Ia},{path:"jobs",name:"FailedJobs",component:Fs},{path:"jobs/exception",name:"FailedJobException",component:Va,props:!0},{path:"logs",name:"Logs",component:bn}]}],wn=mt({history:ut(),routes:$n});xt(gt).use(yt).use(wn).mount("#app");
