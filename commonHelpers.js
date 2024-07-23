import{S as c,i as l}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(o,t){t.innerHTML="";const s=o.map(f).join("");t.insertAdjacentHTML("beforeend",s)}function f({webformatURL:o,largeImageURL:t,tags:s,likes:i,views:e,comments:r,downloads:n}){return`
    <li class="photo-card">
      <a class="gallery-link" href="${t}">
        <img class="image"
          src="${o}"
          alt="${s}"
          loading="lazy"
        />
      </a>
      <div class="wrapper">
        <div class="info">
          <b class="student-info"><span class="atribute">Likes:</span> ${i}</b>
          <b class="student-info"><span class="atribute">Views:</span> ${e}</b>
          <b class="student-info"><span class="atribute">Comments:</span> ${r}</b>
          <b class="student-info"><span class="atribute">Downloads:</span> ${n}</b>
        </div>
      </div>
    </li>
  `}const d="44985278-910018cc950880488ff0b70a1";function p(o){const t=`https://pixabay.com/api/?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()})}const a={searchFormRef:document.querySelector(".searchForm"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.searchFormRef.addEventListener("submit",h);let m=new c(".gallery a",{captionsData:"alt"});function h(o){o.preventDefault(),a.galleryEl.innerHTML="",a.loader.style.display="block";const t=o.target.elements.search.value.trim();t!==""&&p(t).then(s=>{s.hits.length>0?(u(s.hits,a.galleryEl),a.searchFormRef.reset(),m.refresh()):l.error({title:"",message:`<div>Sorry, there are no images matching</div> 
          <div>your search query. 
          Please try again!</div>`,position:"topRight",color:"#ef4040",messageColor:" #fafafb",messageSize:"16",iconColor:"white",maxWidth:"432px  ",close:!0,closeOnClick:!0})}).catch(s=>{l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",color:"red"})}).finally(()=>{a.loader.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
