import{a as p,S as m,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function y(t,o){const a=t.map(h).join("");o.insertAdjacentHTML("beforeend",a)}function h({webformatURL:t,largeImageURL:o,tags:a,likes:n,views:e,comments:r,downloads:i}){return`
    <li class="photo-card">
      <a class="gallery-link" href="${o}">
        <img class="image"
          src="${t}"
          alt="${a}"
          loading="lazy"
        />
      </a>
      <div class="wrapper">
        <div class="info">
          <b class="student-info"><span class="atribute">Likes:</span> ${n}</b>
          <b class="student-info"><span class="atribute">Views:</span> ${e}</b>
          <b class="student-info"><span class="atribute">Comments:</span> ${r}</b>
          <b class="student-info"><span class="atribute">Downloads:</span> ${i}</b>
        </div>
      </div>
    </li>
  `}const g="44985278-910018cc950880488ff0b70a1",b="https://pixabay.com/api/";async function v(t,o=1,a=15){const n={key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:a};return(await p.get(b,{params:n})).data}const s={searchFormRef:document.querySelector(".searchForm"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")};let u="",l=1;const d=15;let w=new m(".gallery a",{captionsData:"alt"});s.searchFormRef.addEventListener("submit",S);s.loadMoreBtn.addEventListener("click",L);async function S(t){t.preventDefault(),u=t.target.elements.search.value.trim(),l=1,s.galleryEl.innerHTML="",s.searchFormRef.reset(),s.loadMoreBtn.style.display="none",u!==""&&await f()}async function L(){l+=1,await f(),E()}async function f(){s.loader.style.display="block";try{const t=await v(u,l,d);t.hits.length>0?(y(t.hits,s.galleryEl),w.refresh(),s.loadMoreBtn.style.display=t.totalHits>l*d?"block":"none",l*d>=t.totalHits&&c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"})):c.error({title:"",message:`<div>Sorry, there are no images matching</div> 
                  <div>your search query. 
                  Please try again!</div>`,position:"topRight",color:"#ef4040",messageColor:" #fafafb",messageSize:"16",iconColor:"white",maxWidth:"432px",close:!0,closeOnClick:!0})}catch{c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",color:"red"})}finally{s.loader.style.display="none"}}function E(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
