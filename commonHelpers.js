(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const n={openModalHeaderBtn:document.querySelector("[data-open-order-header]"),openModalHeroBtn:document.querySelector("[data-open-order-hero]"),closeModalBtn:document.querySelector("[data-close-modal]"),backdrop:document.querySelector("[data-backdrop]")};n.openModalHeaderBtn.addEventListener("click",c);n.openModalHeroBtn.addEventListener("click",c);n.closeModalBtn.addEventListener("click",c);function c(){n.backdrop.classList.toggle("is-open")}const m=document.querySelector(".mail-form"),f=document.querySelector(".modal-form");function i(t){t.preventDefault(),t.target.elements.email?(console.log("User email:",t.target.elements.email.value),t.target.reset()):(console.log("User name:",t.target.elements.user_name.value),console.log("User phone:",t.target.elements.user_phone.value),console.log("User email:",t.target.elements.user_email.value),t.target.reset())}m.addEventListener("submit",i);f.addEventListener("submit",i);const g=document.querySelector(".burger-btn"),d=document.querySelector(".mobile-menu");g.addEventListener("click",()=>u(d));d.addEventListener("click",p);function u(t){t.classList.toggle("is-open")}function p(t){if(!t.target.closest(".modal-btn"))return;const l=t.currentTarget;u(l)}
//# sourceMappingURL=commonHelpers.js.map