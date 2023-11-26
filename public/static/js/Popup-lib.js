window.popup = [
    {
        enable: true,
        functionName: "popupTest1",
        html: `<div class="popup">
                <div class="img-wrapper"><img src="https://png.pngtree.com/thumb_back/fw800/background/20221116/pngtree-isolated-white-background-with-a-vertical-red-gift-bow-photo-image_677817.jpg" alt="Anh"></div>
                <div class="content">
                    <p class="popup-heading">Save up to</p>
                    <h1 class="popup-offer">30% OFF</h1>
                    <p class="popup-desc">In your next holiday offer</p>
                
                    <form action="POST" class="popup-form">
                        <input class="email" type="email" placeholder="Please enter your email">
                        <input class="submit" type="button" value="Get it now">
                    </form>
                
                    <button class="refuse btnClosePopup">No, thanks</button>
                </div>
            </div>`,
        namePopup: "Test-saas-popup-1",
        condition: {
            existClass: {
                enable: true,
            },
            existCookie: {
                enable: false,
            }
        },
        behaviors: {
            open: {
                scrollToXPercent: {
                    enable: false,
                    percent: 50,
                },
                visitWebAfterXSeconds: {
                    enable: false,
                    seconds: 3000,
                },
                onClickItem: {
                    enable: true,
                },
                afterViewXPage: {
                    enable: false,
                    NumPage: 3,
                }
            },
            close: {
                closeAfterXSeconds: {
                    enable: false,
                    seconds: 3000,
                },
                closeClickButton: {
                    enable: true,
                },
                closeClickOutside: {
                    enable: true,
                },
            }
        },
        design: {
            positionPopup: {
                width: 500,
                height: 400,
                x: 50,
                y: 50,
            },
            overlayPopup: {
                enable: true,
            },
        },
        animations: {
            appear: {
                enableAnimation: true,
                moveFromTop: {
                    enable: false,
                    duration: 400,
                    easing: "ease-in",
                    movingLength: 100,
                },
                horizontalMove: {
                    enable: false,
                    duration: 400,
                    easing: "ease-in",
                    movingFrom: 'right',
                    movingLength: 10,
                },
                zoomIn: {
                    enable: true,
                    duration: 300,
                    easing: "linear",
                    fromPercent: 80,
                },
                fadeIn: {
                    enable: false,
                    duration: 300,
                    easing: "ease-in",
                }
            },
            disappear: {
                enableAnimation: true,
                zoomOut: {
                    enable: false,
                    duration: 200,
                    easing: "ease-out",
                },
                fadeOut: {
                    enable: true,
                    duration: 500,
                    easing: "ease-out",
                },
                moveToTop: {
                    enable: false,
                    duration: 300,
                    easing: "ease-out",
                    movingLength: 50,
                },
                horizontalMove: {
                    enable: false,
                    duration: 400,
                    easing: "ease-out",
                    movingTo: 'right',
                    movingLength: 20,
                },
            },
        }
    },
    {
        enable: true,
        functionName: "popupTest2",
        html: `<div class="popup">
                <div style="display: flex;align-items: center; justify-content: center;">
                    <img style="width: 48px; height: 48px; margin: 0 16px;" src="https://ich.edu.vn/App_Files/Upload/2019/icon-thanh-cong.png" alt="icon">
                    <p>Đã thanh toán thành công</p>
                    <button class="refuse btnClosePopup">No, thanks</button>
                </div>
            </div>`,
        namePopup: "Test-saas-popup-2",
        condition: {
            existClass: {
                enable: true,
            },
            existCookie: {
                enable: false,
            }
        },
        behaviors: {
            open: {
                scrollToXPercent: {
                    enable: false,
                    percent: 50,
                },
                visitWebAfterXSeconds: {
                    enable: false,
                    seconds: 3000,
                },
                onClickItem: {
                    enable: true,
                },
                afterViewXPage: {
                    enable: false,
                    NumPage: 3,
                }
            },
            close: {
                closeAfterXSeconds: {
                    enable: false,
                    seconds: 3000,
                },
                closeClickButton: {
                    enable: true,
                },
                closeClickOutside: {
                    enable: true,
                },
            }
        },
        design: {
            positionPopup: {
                width: 500,
                height: 400,
                x: 0,
                y: 50,
            },
            overlayPopup: {
                enable: true,
            },
        },
        animations: {
            appear: {
                enableAnimation: true,
                moveFromTop: {
                    enable: false,
                    duration: 400,
                    easing: "ease-in",
                    movingLength: 100,
                },
                horizontalMove: {
                    enable: false,
                    duration: 400,
                    easing: "ease-in",
                    movingFrom: 'right',
                    movingLength: 10,
                },
                zoomIn: {
                    enable: true,
                    duration: 300,
                    easing: "linear",
                    fromPercent: 80,
                },
                fadeIn: {
                    enable: false,
                    duration: 300,
                    easing: "ease-in",
                }
            },
            disappear: {
                enableAnimation: true,
                zoomOut: {
                    enable: false,
                    duration: 200,
                    easing: "ease-out",
                },
                fadeOut: {
                    enable: true,
                    duration: 500,
                    easing: "ease-out",
                },
                moveToTop: {
                    enable: false,
                    duration: 300,
                    easing: "ease-out",
                    movingLength: 50,
                },
                horizontalMove: {
                    enable: false,
                    duration: 400,
                    easing: "ease-out",
                    movingTo: 'right',
                    movingLength: 20,
                },
            },
        }
    }
];

(()=>{"use strict";var t={331:()=>{},87:(t,e,o)=>{o.d(e,{Z:()=>c});var n=o(919),s=o(384),i=o(555),r=o(123),a=o(214);const c=class{constructor(t,e,o){this.config=t,this.keyPopup=e,this.html=o}findKeysWithEnableTrue(t){const e=[];for(const o in t)if("object"==typeof t[o]){const n=this.findKeysWithEnableTrue(t[o]);n.length>0&&e.push(...n.map((t=>`${o}.${t}`)))}else"enable"===o&&!0===t[o]&&e.push(o);return e}splitStringToArray(t){return t.split(".")}filterEnabledElements(t){return t.filter((t=>"enable"!==t))}functionPopupEnabled=()=>{const t=this.findKeysWithEnableTrue(this.config);var e=["positionPopup"];return t.forEach((t=>{let o=this.filterEnabledElements(this.splitStringToArray(t)),n=o.length;n>0&&e.push(o[n-1])})),e};show(){new a.Z("my-popup",this.html,this.keyPopup,this.functionPopupEnabled()).innerPopup();const t=new s.Z(this.config.condition);t.getStatus(),!1!==t.getStatus()&&!0===t.getStatus()&&!0===this.config.enable&&(new r.Z(this.config.animations,this.keyPopup),new n.Z(this.config.behaviors,this.keyPopup),new i.Z(this.config.design,this.keyPopup))}}},544:(t,e,o)=>{var n=o(87);window.popup.forEach((t=>{if(!0===(e=t).enable&&document.body.classList.contains(e.namePopup)&&1==t.enable){const e=document.createElement("div");e.classList.add("my-popup",t.functionName),document.body.appendChild(e),new n.Z(t,t.functionName,t.html).show()}var e}))},505:(t,e,o)=>{o.d(e,{Z:()=>n});const n=class{constructor(t){this.config=t,this.Conditions=[]}readConfig(t,e,o,n){return e.forEach((e=>{void 0!==t[e]&&1==o[e](t[e],n)&&this.Conditions.pop()})),0==this.Conditions.length}activeConditions(t,e){e.forEach((e=>{1==t[e].enable&&this.Conditions.push(e)}))}}},227:()=>{},214:(t,e,o)=>{o.d(e,{Z:()=>n});const n=class{constructor(t,e,o,n){this.className=t,this.html=e,this.idPopup=o,this.classList=n}innerPopup(){const t=document.createElement("div");t.innerHTML=this.html,t.style.setProperty("display","none"),t.style.setProperty("background-color","#fff","important");for(let e of this.classList)t.classList.add(e);t.style.setProperty("position","fixed","important");let e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="../../src/core/core.css",document.head.appendChild(e),document.querySelector(`.${this.idPopup}`).appendChild(t)}}},123:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(294),s=o(388);const i=class{constructor(t,e){this.optionAppear=t.appear,this.optionDisAppear=t.disappear,this.keyPopup=e,this.init()}init(){new n.Z(this.optionAppear,this.keyPopup),new s.Z(this.optionDisAppear,this.keyPopup)}}},294:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(519),s=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}isEnableAnimations(){return this.options.enableAnimation}init(){this.isEnableAnimations()&&this.isOpenPopup()}isOpenPopup(){return(new s.Z).readConfig(this.options,["moveFromTop","horizontalMove","zoomIn","fadeIn"],n.Z,this.keyPopup)}}},708:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(1==t.enable){const o=t.easing,n=document.querySelector(`.${e}`).querySelector(".fadeIn");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&n.classList.contains("active")){const e=[{opacity:0},{opacity:1}],s={duration:t.duration,iterations:1,easing:o};n.animate(e,s)}}))})).observe(n,{attributes:!0})}}},45:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=window.innerWidth,s="left"==t.movingFrom.toLowerCase()?-n*(t.movingLength/100):n*(t.movingLength/100),i=document.querySelector(`.${e}`).querySelector(".horizontalMove");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&i.classList.contains("active")){const e=[{transform:`translateX(${s}px)`,opacity:0},{transform:"translateX(0px)",opacity:1}],n={duration:t.duration,iterations:1,easing:o};i.animate(e,n)}}))})).observe(i,{attributes:!0})}}},960:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=window.innerHeight*(t.movingLength/100),s=document.querySelector(`.${e}`).querySelector(".moveFromTop");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&s.classList.contains("active")){const e=[{transform:`translateY(-${n}px)`,opacity:0},{transform:"translateY(0px)",opacity:1}],i={duration:t.duration,iterations:1,easing:o};s.animate(e,i)}}))})).observe(s,{attributes:!0})}}},501:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=document.querySelector(`.${e}`).querySelector(".zoomIn");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&n.classList.contains("active")){const e=[{transform:`scale(${t.fromPercent/100})`,opacity:0},{transform:"scale(1)",opacity:1}],s={duration:t.duration,iterations:1,easing:o};n.animate(e,s)}}))})).observe(n,{attributes:!0})}}},519:(t,e,o)=>{o.d(e,{Z:()=>a});var n=o(960),s=o(45),i=o(501),r=o(708);const a={moveFromTop:n.Z,horizontalMove:s.Z,zoomIn:i.Z,fadeIn:r.Z}},388:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(413),s=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}isDisnableAnimations(){return this.options.enableAnimation}init(){this.isDisnableAnimations()&&this.isClosePopup()}isClosePopup(){(new s.Z).readConfig(this.options,["zoomOut","fadeOut","moveToTop","horizontalMove"],n.Z,this.keyPopup)}}},193:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=document.querySelector(`.${e}`).querySelector(".fadeOut");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!n.classList.contains("active")){async function s(){1==await new Promise((e=>{const s={duration:t.duration,iterations:1,easing:o};n.animate([{opacity:1},{opacity:0}],s).onfinish=()=>{e(!0)}}))&&n.style.setProperty("display","none")}n.style.setProperty("display","block","important"),s()}}))})).observe(n,{attributes:!0})}}},967:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=window.innerWidth,s="left"==t.movingTo.toLowerCase()?-n*(t.movingLength/100):n*(t.movingLength/100),i=document.querySelector(`.${e}`).querySelector(".horizontalMove");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!i.classList.contains("active")){async function n(){1==await new Promise((e=>{const n=[{transform:"translateX(0px)",opacity:1},{transform:`translateX(${s}px)`,opacity:0}],r={duration:t.duration,iterations:1,easing:o};i.animate(n,r).onfinish=()=>{e(!0)}}))&&i.style.setProperty("display","none")}i.style.setProperty("display","block","important"),n()}}))})).observe(i,{attributes:!0})}}},996:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=window.innerHeight*(t.movingLength/100),s=document.querySelector(`.${e}`).querySelector(".moveToTop");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!s.classList.contains("active")){async function i(){1==await new Promise((e=>{const i=[{transform:"translateY(0px)",opacity:1},{transform:`translateY(-${n}px)`,opacity:0}],r={duration:t.duration,iterations:1,easing:o};s.animate(i,r).onfinish=()=>{e(!0)}}))&&s.style.setProperty("display","none")}s.style.setProperty("display","block","important"),i()}}))})).observe(s,{attributes:!0})}}},307:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const o=t.easing,n=document.querySelector(`.${e}`).querySelector(".zoomOut");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName&&!n.classList.contains("active")){async function s(){1==await new Promise((e=>{const s={duration:t.duration,iterations:1,easing:o};n.animate([{transform:"scale(1)"},{transform:"scale(0)"}],s).onfinish=()=>{e(!0)}}))&&n.style.setProperty("display","none")}n.style.setProperty("display","block","important"),s()}}))})).observe(n,{attributes:!0})}}},413:(t,e,o)=>{o.d(e,{Z:()=>a});var n=o(307),s=o(193),i=o(996),r=o(967);const a={zoomOut:n.Z,fadeOut:s.Z,moveToTop:i.Z,horizontalMove:r.Z}},919:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(806),s=o(535);const i=class{constructor(t,e){this.optionOpen=t.open,this.optionClose=t.close,this.keyPopup=e,this.init()}init(){new s.Z(this.optionOpen,this.keyPopup),new n.Z(this.optionClose,this.keyPopup)}}},806:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(646),s=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}init(){(new s.Z).readConfig(this.options,["closeAfterXSeconds","closeClickButton","closeClickOutside"],n.Z,this.keyPopup)}}},879:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(1==t.enable){const o=document.querySelector(`.${e}`).querySelector(".closeAfterXSeconds");new MutationObserver((e=>{let n;e.forEach((e=>{"attributes"===e.type&&"class"===e.attributeName&&(o.classList.contains("active")?n=setTimeout((()=>{o.classList.remove("active"),o.style.setProperty("display","none")}),t.seconds):clearTimeout(n))}))})).observe(o,{attributes:!0})}}},190:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!0===t.enable){const t=document.querySelector(`.${e}`);t.querySelector(".btnClosePopup").onclick=()=>{t.querySelector(".closeClickButton").classList.remove("active")}}}},418:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(1==t.enable){function o(t){if(t.stopPropagation(),t.target!=document.body){let e=t.target.parentElement;for(;e!==document.body;){if(e.classList.contains("closeClickOutside")||e.classList.contains("activePopup"))return e;e=e.parentElement}return null}return!0}let n=document.querySelector(`.${e}`);n=n.children[0],document.addEventListener("click",(t=>{if(console.log(!n.classList.contains("active")),n.classList.contains("active"))return console.log(t.target!=document.querySelector(".btn"+e)),t.target!=document.querySelector(".btn"+e)?1==o(t)?void console.log(t.target):null==o(t)?void n.classList.remove("active"):void 0:void 0}))}}},646:(t,e,o)=>{o.d(e,{Z:()=>r});var n=o(879),s=o(190),i=o(418);const r={closeAfterXSeconds:n.Z,closeClickButton:s.Z,closeClickOutside:i.Z}},535:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(553),s=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}init(){this.isOpenPopup()}isOpenPopup(){return(new s.Z).readConfig(this.options,["scrollToXPercent","visitWebAfterXSeconds","onClickItem","afterViewXPage"],n.Z,this.keyPopup)}}},178:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(1==t.enable){var o=localStorage.getItem(`${e}`);null==o&&(o=0),o++,localStorage.setItem(`${e}`,o),o===t.NumPage&&document.querySelector(`.${e}`).querySelector(".afterViewXPage").classList.add("active")}}},10:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(console.log("aaaaaa"),1==t.enable){if(null==document.querySelector(`.btn${e}`))return;document.querySelector(`.btn${e}`).onclick=()=>{document.querySelector(`.${e}`).querySelector(".onClickItem").classList.add("active")}}}},376:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(!t.enable)return!1;window.addEventListener("scroll",(function(){const o=window.scrollY;console.log("Giá trị đã cuộn: "+o);const n=document.body.scrollHeight-window.innerHeight;console.log("Chiều cao page: "+n);let s=sessionStorage.getItem(e);console.log(t.percent/100*n),o>=t.percent/100*n&&null===s&&(document.querySelector(`.${e}`).querySelector(".scrollToXPercent").classList.add("active"),sessionStorage.setItem(e,1))}))}},57:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(1==t.enable){const o=document.querySelector(`.${e}`).querySelector(".visitWebAfterXSeconds");setTimeout((()=>{o.classList.add("active")}),t.seconds)}}},553:(t,e,o)=>{o.d(e,{Z:()=>a});var n=o(376),s=o(57),i=o(10),r=o(178);const a={scrollToXPercent:n.Z,visitWebAfterXSeconds:s.Z,onClickItem:i.Z,afterViewXPage:r.Z}},384:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(34),s=o(505);const i=class{constructor(t){this.options=t}getStatus(){const t=new s.Z,e=["existClass","existCookie"];return t.activeConditions(this.options,e),t.readConfig(this.options,e,n.Z)}}},497:(t,e,o)=>{o.d(e,{Z:()=>n});const n=t=>!0===t.enable&&document.body.classList.contains("saas-popup")},610:(t,e,o)=>{o.d(e,{Z:()=>n});const n=t=>{if(!0===t.enable){return 1==(t=>{let e=t+"=",o=decodeURIComponent(document.cookie).split(";"),n=o.length;for(let t=0;t<n;t++){let n=o[t];for(;" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return""})("saas-popup")}return!1}},34:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(497),s=o(610);const i={existClass:n.Z,existCookie:s.Z}},30:(t,e,o)=>{o.d(e,{Z:()=>n});const n=function(t,e){if(!0===t.enable){let t=!1;const o=document.querySelector(`.${e}`).querySelector(".overlayPopup");new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"class"===e.attributeName)if(o.classList.contains("active")&&!1===t){let e=document.createElement("div");e.classList.add("overlay"),document.querySelector("body").appendChild(e),t=!0}else if(!o.classList.contains("active")){let e=document.querySelector(".overlay");e&&document.querySelector("body").removeChild(e),t=!1}}))})).observe(o,{attributes:!0})}}},236:(t,e,o)=>{o.d(e,{Z:()=>n});const n=(t,e)=>{if(null!=t.width&&null!=t.height){var o=document.documentElement.clientWidth,n=document.documentElement.clientHeight,s=t.width,i=t.height;o<=360?(s*=.4,i*=.4):o<=480?(s*=.5,i*=.5):o<=640?(s*=.7,i*=.7):o<=768&&(s*=.8,i*=.8);var r=(o-s)/o*100,a=(n-i)/n*100,c=o*(t.x/100)*(r/100),l=n*(t.y/100)*(a/100);let u=document.querySelector(`.${e}`).querySelector(".positionPopup");u.style.setProperty("width",`${s}px`,"important"),u.style.setProperty("height",`${i}px`,"important"),u.style.setProperty("left",`${c}px`,"important"),u.style.setProperty("top",`${l}px`,"important")}}},555:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(496),s=o(505);const i=class{constructor(t,e){this.options=t,this.keyPopup=e,this.init()}init(){(new s.Z).readConfig(this.options,["overlayPopup","positionPopup"],n.Z,this.keyPopup)}}},496:(t,e,o)=>{o.d(e,{Z:()=>i});var n=o(236),s=o(30);const i={positionPopup:n.Z,overlayPopup:s.Z}}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(544),o(505),o(227),o(331),o(87),o(214),o(708),o(45),o(960),o(501),o(294),o(519),o(193),o(967),o(996),o(307),o(388),o(413),o(123),o(879),o(190),o(418),o(806),o(646),o(178),o(10),o(376),o(57),o(535),o(553),o(919),o(497),o(610),o(384),o(34),o(30),o(236),o(555),o(496)})();

(()=>{"use strict";var n={331:()=>{},87:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(919),i=e(384),r=e(555),s=e(123),a=e(214);const c=class{constructor(n,t,e){this.config=n,this.keyPopup=t,this.html=e}findKeysWithEnableTrue(n){const t=[];for(const e in n)if("object"==typeof n[e]){const o=this.findKeysWithEnableTrue(n[e]);o.length>0&&t.push(...o.map((n=>`${e}.${n}`)))}else"enable"===e&&!0===n[e]&&t.push(e);return t}splitStringToArray(n){return n.split(".")}filterEnabledElements(n){return n.filter((n=>"enable"!==n))}functionPopupEnabled=()=>{const n=this.findKeysWithEnableTrue(this.config);var t=["positionPopup"];return n.forEach((n=>{let e=this.filterEnabledElements(this.splitStringToArray(n)),o=e.length;o>0&&t.push(e[o-1])})),t};show(){new a.Z("my-popup",this.html,this.keyPopup,this.functionPopupEnabled()).innerPopup();const n=new i.Z(this.config.condition);n.getStatus(),!1!==n.getStatus()&&!0===n.getStatus()&&!0===this.config.enable&&(new s.Z(this.config.animations,this.keyPopup),new o.Z(this.config.behaviors,this.keyPopup),new r.Z(this.config.design,this.keyPopup))}}},589:(n,t,e)=>{var o,i,r=e(87);o=window.popup,i=document.createElement("style"),document.head.appendChild(i),i.appendChild(document.createTextNode("\n    .my-popup {\n        position: absolute;\n        z-index: 10 !important;\n    }\n    \n    .active {\n        display: block !important;\n    }\n    \n    .closePopup {\n        display: none;\n    }\n    \n    .overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.4);\n        z-index: 0;\n    }\n    \n    .popup {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        border-radius: 16px;\n        overflow: hidden;\n        box-shadow: 2px 3px 3px 2px #ccc;\n    }\n    \n    .img-wrapper {\n        height: 100%;\n        width: 45%;\n    }\n    \n    .popup img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n    \n    .content {\n        flex-grow: 1;\n        text-align: center;\n        background-color: #fff;\n    }\n    \n    .content .popup-heading {\n        font-size: 160%;\n        line-height: 100%;\n        height: 10%;\n        font-weight: 700;\n        color: #bbb;\n        margin-top: 10%;\n        margin-bottom: 0;\n    }\n    \n    .content .popup-offer {\n        font-size: 180%;\n        margin-top: 4%;\n        margin-bottom: 0;\n    }\n    \n    .content .popup-desc {\n        font-size: 130%;\n        color: #bbb;\n        margin-top: 4%;\n    }\n    \n    .content .popup-form {\n        margin-top: 20%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    \n    .content .popup-form .email {\n        width: 70%;\n        padding: 4% 8%;\n        border-radius: 20px;\n        border: 1px solid #ccc;\n        background-color: #ddd;\n        outline: none;\n        margin-bottom: 10%;\n    }\n    \n    .content .popup-form .submit {\n        width: 70%;\n        padding: 2% 8%;\n        border-radius: 20px;\n        border: none;\n        background-color: red;\n        color: #fff;\n        font-size: 150%;\n        font-weight: bold;\n        outline: none;\n        margin-bottom: 10%;\n    }\n    \n    .content .popup-form .submit:hover {\n        cursor: pointer;\n        opacity: 0.8;\n    }\n    \n    .content .refuse {\n        border: none;\n        background-color: transparent;\n        text-decoration: underline;\n        cursor: pointer;\n        padding: 1.5%;\n    }\n    \n    /* Responsive */\n    @media screen and (max-width: 768px) {\n        .popup {\n            width: 100%;\n            height: 100%;\n            display: flex;\n            border-radius: 16px;\n            overflow: hidden;\n            box-shadow: 2px 3px 3px 2px #ccc;\n        }\n    \n        .content .popup-heading {\n            font-size: 150%;\n            line-height: 100%;\n            height: 10%;\n            font-weight: 700;\n            color: #bbb;\n            margin-top: 10%;\n            margin-bottom: 0;\n        }\n        \n        .content .popup-offer {\n            font-size: 150%;\n            margin-top: 4%;\n            margin-bottom: 0;\n        }\n        \n        .content .popup-desc {\n            font-size: 130%;\n            color: #bbb;\n            margin-top: 4%;\n        }\n        \n        .content .popup-form {\n            margin-top: 16%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n    \n        .content .popup-form .email {\n            width: 60%;\n            padding: 3% 8%;\n            border-radius: 20px;\n            border: 1px solid #ccc;\n            background-color: #ddd;\n            outline: none;\n            margin-bottom: 10%;\n        }\n        \n        .content .popup-form .submit {\n            width: 60%;\n            padding: 2% 8%;\n            border-radius: 20px;\n            border: none;\n            background-color: red;\n            color: #fff;\n            font-size: 150%;\n            font-weight: bold;\n            outline: none;\n            margin-bottom: 10%;\n        }\n    }\n    \n    @media screen and (max-width: 640px) {\n        .popup {\n            width: 100%;\n            height: 100%;\n            display: flex;\n            border-radius: 16px;\n            overflow: hidden;\n            box-shadow: 2px 3px 3px 2px #ccc;\n        }\n    \n        .content .popup-heading {\n            font-size: 130%;\n            line-height: 100%;\n            height: 10%;\n            font-weight: 700;\n            color: #bbb;\n            margin-top: 10%;\n            margin-bottom: 0;\n        }\n        \n        .content .popup-offer {\n            font-size: 150%;\n            margin-top: 4%;\n            margin-bottom: 0;\n        }\n        \n        .content .popup-desc {\n            font-size: 120%;\n            color: #bbb;\n            margin-top: 4%;\n        }\n        \n        .content .popup-form {\n            margin-top: 16%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n    \n        .content .popup-form .email {\n            width: 60%;\n            padding: 3% 8%;\n            border-radius: 20px;\n            border: 1px solid #ccc;\n            background-color: #ddd;\n            outline: none;\n            margin-bottom: 10%;\n        }\n        \n        .content .popup-form .submit {\n            width: 60%;\n            padding: 2% 8%;\n            border-radius: 20px;\n            border: none;\n            background-color: red;\n            color: #fff;\n            font-size: 120%;\n            font-weight: bold;\n            outline: none;\n            margin-bottom: 10%;\n        }\n    }\n    \n    @media screen and (max-width: 480px) {\n        .popup {\n            width: 100%;\n            height: 100%;\n            display: flex;\n            border-radius: 16px;\n            overflow: hidden;\n            box-shadow: 2px 3px 3px 2px #ccc;\n        }\n    \n        .content .popup-heading {\n            font-size: 100%;\n            line-height: 100%;\n            height: 10%;\n            font-weight: 700;\n            color: #bbb;\n            margin-top: 8%;\n            margin-bottom: 0;\n        }\n        \n        .content .popup-offer {\n            font-size: 120%;\n            margin-top: 4%;\n            margin-bottom: 0;\n        }\n        \n        .content .popup-desc {\n            font-size: 90%;\n            color: #bbb;\n            margin-top: 4%;\n        }\n        \n        .content .popup-form {\n            margin-top: 16%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n    \n        .content .popup-form .email {\n            width: 70%;\n            font-size: 60%;\n            padding: 3% 8%;\n            border-radius: 20px;\n            border: 1px solid #ccc;\n            background-color: #ddd;\n            outline: none;\n            margin-bottom: 6%;\n        }\n        \n        .content .popup-form .submit {\n            width: 70%;\n            padding: 2% 4%;\n            border-radius: 20px;\n            border: none;\n            background-color: red;\n            color: #fff;\n            font-size: 80%;\n            font-weight: bold;\n            outline: none;\n            margin-bottom: 8%;\n        }\n    }\n    \n    @media screen and (max-width: 360px) {\n        .popup {\n            width: 100%;\n            height: 100%;\n            display: flex;\n            border-radius: 16px;\n            overflow: hidden;\n            box-shadow: 2px 3px 3px 2px #ccc;\n        }\n    \n        .content .popup-heading {\n            font-size: 90%;\n            line-height: 90%;\n            height: 10%;\n            font-weight: 700;\n            color: #bbb;\n            margin-top: 8%;\n            margin-bottom: 0;\n        }\n        \n        .content .popup-offer {\n            font-size: 100%;\n            margin-top: 4%;\n            margin-bottom: 0;\n        }\n        \n        .content .popup-desc {\n            font-size: 70%;\n            color: #bbb;\n            margin-top: 4%;\n        }\n        \n        .content .popup-form {\n            margin-top: 12%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n    \n        .content .popup-form .email {\n            width: 70%;\n            font-size: 50%;\n            padding: 2% 6%;\n            border-radius: 20px;\n            border: 1px solid #ccc;\n            background-color: #ddd;\n            outline: none;\n            margin-bottom: 6%;\n        }\n        \n        .content .popup-form .submit {\n            width: 70%;\n            padding: 2% 6%;\n            border-radius: 20px;\n            border: none;\n            background-color: red;\n            color: #fff;\n            font-size: 70%;\n            font-weight: bold;\n            outline: none;\n            margin-bottom: 6%;\n        }\n    \n        .content .refuse {\n            font-size: 60%;\n            border: none;\n            background-color: transparent;\n            text-decoration: underline;\n            cursor: pointer;\n            padding: 1.5%;\n        }\n    }\n    ")),o.forEach((n=>{if(!0===(t=n).enable&&document.body.classList.contains(t.namePopup)&&1==n.enable){const t=document.createElement("div");t.classList.add("my-popup",n.functionName),document.body.appendChild(t),new r.Z(n,n.functionName,n.html).show()}var t}))},505:(n,t,e)=>{e.d(t,{Z:()=>o});const o=class{constructor(n){this.config=n,this.Conditions=[]}readConfig(n,t,e,o){return t.forEach((t=>{void 0!==n[t]&&1==e[t](n[t],o)&&this.Conditions.pop()})),0==this.Conditions.length}activeConditions(n,t){t.forEach((t=>{1==n[t].enable&&this.Conditions.push(t)}))}}},227:()=>{},214:(n,t,e)=>{e.d(t,{Z:()=>o});const o=class{constructor(n,t,e,o){this.className=n,this.html=t,this.idPopup=e,this.classList=o}innerPopup(){const n=document.createElement("div");n.innerHTML=this.html,n.style.setProperty("display","none"),n.style.setProperty("background-color","#fff","important");for(let t of this.classList)n.classList.add(t);n.style.setProperty("position","fixed","important"),document.querySelector(`.${this.idPopup}`).appendChild(n)}}},123:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(294),i=e(388);const r=class{constructor(n,t){this.optionAppear=n.appear,this.optionDisAppear=n.disappear,this.keyPopup=t,this.init()}init(){new o.Z(this.optionAppear,this.keyPopup),new i.Z(this.optionDisAppear,this.keyPopup)}}},294:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(519),i=e(505);const r=class{constructor(n,t){this.options=n,this.keyPopup=t,this.init()}isEnableAnimations(){return this.options.enableAnimation}init(){this.isEnableAnimations()&&this.isOpenPopup()}isOpenPopup(){return(new i.Z).readConfig(this.options,["moveFromTop","horizontalMove","zoomIn","fadeIn"],o.Z,this.keyPopup)}}},708:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(1==n.enable){const e=n.easing,o=document.querySelector(`.${t}`).querySelector(".fadeIn");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&o.classList.contains("active")){const t=[{opacity:0},{opacity:1}],i={duration:n.duration,iterations:1,easing:e};o.animate(t,i)}}))})).observe(o,{attributes:!0})}}},45:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(!0===n.enable){const e=n.easing,o=window.innerWidth,i="left"==n.movingFrom.toLowerCase()?-o*(n.movingLength/100):o*(n.movingLength/100),r=document.querySelector(`.${t}`).querySelector(".horizontalMove");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&r.classList.contains("active")){const t=[{transform:`translateX(${i}px)`,opacity:0},{transform:"translateX(0px)",opacity:1}],o={duration:n.duration,iterations:1,easing:e};r.animate(t,o)}}))})).observe(r,{attributes:!0})}}},960:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(!0===n.enable){const e=n.easing,o=window.innerHeight*(n.movingLength/100),i=document.querySelector(`.${t}`).querySelector(".moveFromTop");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&i.classList.contains("active")){const t=[{transform:`translateY(-${o}px)`,opacity:0},{transform:"translateY(0px)",opacity:1}],r={duration:n.duration,iterations:1,easing:e};i.animate(t,r)}}))})).observe(i,{attributes:!0})}}},501:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(!0===n.enable){const e=n.easing,o=document.querySelector(`.${t}`).querySelector(".zoomIn");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&o.classList.contains("active")){const t=[{transform:`scale(${n.fromPercent/100})`,opacity:0},{transform:"scale(1)",opacity:1}],i={duration:n.duration,iterations:1,easing:e};o.animate(t,i)}}))})).observe(o,{attributes:!0})}}},519:(n,t,e)=>{e.d(t,{Z:()=>a});var o=e(960),i=e(45),r=e(501),s=e(708);const a={moveFromTop:o.Z,horizontalMove:i.Z,zoomIn:r.Z,fadeIn:s.Z}},388:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(413),i=e(505);const r=class{constructor(n,t){this.options=n,this.keyPopup=t,this.init()}isDisnableAnimations(){return this.options.enableAnimation}init(){this.isDisnableAnimations()&&this.isClosePopup()}isClosePopup(){(new i.Z).readConfig(this.options,["zoomOut","fadeOut","moveToTop","horizontalMove"],o.Z,this.keyPopup)}}},193:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(!0===n.enable){const e=n.easing,o=document.querySelector(`.${t}`).querySelector(".fadeOut");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&!o.classList.contains("active")){async function i(){1==await new Promise((t=>{const i={duration:n.duration,iterations:1,easing:e};o.animate([{opacity:1},{opacity:0}],i).onfinish=()=>{t(!0)}}))&&o.style.setProperty("display","none")}o.style.setProperty("display","block","important"),i()}}))})).observe(o,{attributes:!0})}}},967:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(!0===n.enable){const e=n.easing,o=window.innerWidth,i="left"==n.movingTo.toLowerCase()?-o*(n.movingLength/100):o*(n.movingLength/100),r=document.querySelector(`.${t}`).querySelector(".horizontalMove");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&!r.classList.contains("active")){async function o(){1==await new Promise((t=>{const o=[{transform:"translateX(0px)",opacity:1},{transform:`translateX(${i}px)`,opacity:0}],s={duration:n.duration,iterations:1,easing:e};r.animate(o,s).onfinish=()=>{t(!0)}}))&&r.style.setProperty("display","none")}r.style.setProperty("display","block","important"),o()}}))})).observe(r,{attributes:!0})}}},996:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(!0===n.enable){const e=n.easing,o=window.innerHeight*(n.movingLength/100),i=document.querySelector(`.${t}`).querySelector(".moveToTop");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&!i.classList.contains("active")){async function r(){1==await new Promise((t=>{const r=[{transform:"translateY(0px)",opacity:1},{transform:`translateY(-${o}px)`,opacity:0}],s={duration:n.duration,iterations:1,easing:e};i.animate(r,s).onfinish=()=>{t(!0)}}))&&i.style.setProperty("display","none")}i.style.setProperty("display","block","important"),r()}}))})).observe(i,{attributes:!0})}}},307:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(!0===n.enable){const e=n.easing,o=document.querySelector(`.${t}`).querySelector(".zoomOut");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName&&!o.classList.contains("active")){async function i(){1==await new Promise((t=>{const i={duration:n.duration,iterations:1,easing:e};o.animate([{transform:"scale(1)"},{transform:"scale(0)"}],i).onfinish=()=>{t(!0)}}))&&o.style.setProperty("display","none")}o.style.setProperty("display","block","important"),i()}}))})).observe(o,{attributes:!0})}}},413:(n,t,e)=>{e.d(t,{Z:()=>a});var o=e(307),i=e(193),r=e(996),s=e(967);const a={zoomOut:o.Z,fadeOut:i.Z,moveToTop:r.Z,horizontalMove:s.Z}},919:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(806),i=e(535);const r=class{constructor(n,t){this.optionOpen=n.open,this.optionClose=n.close,this.keyPopup=t,this.init()}init(){new i.Z(this.optionOpen,this.keyPopup),new o.Z(this.optionClose,this.keyPopup)}}},806:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(646),i=e(505);const r=class{constructor(n,t){this.options=n,this.keyPopup=t,this.init()}init(){(new i.Z).readConfig(this.options,["closeAfterXSeconds","closeClickButton","closeClickOutside"],o.Z,this.keyPopup)}}},879:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(1==n.enable){const e=document.querySelector(`.${t}`).querySelector(".closeAfterXSeconds");new MutationObserver((t=>{let o;t.forEach((t=>{"attributes"===t.type&&"class"===t.attributeName&&(e.classList.contains("active")?o=setTimeout((()=>{e.classList.remove("active"),e.style.setProperty("display","none")}),n.seconds):clearTimeout(o))}))})).observe(e,{attributes:!0})}}},190:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(!0===n.enable){const n=document.querySelector(`.${t}`);n.querySelector(".btnClosePopup").onclick=()=>{n.querySelector(".closeClickButton").classList.remove("active")}}}},418:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(1==n.enable){function e(n){if(n.stopPropagation(),n.target!=document.body){let t=n.target.parentElement;for(;t!==document.body;){if(t.classList.contains("closeClickOutside")||t.classList.contains("activePopup"))return t;t=t.parentElement}return null}return!0}let o=document.querySelector(`.${t}`);o=o.children[0],document.addEventListener("click",(n=>{if(console.log(!o.classList.contains("active")),o.classList.contains("active"))return console.log(n.target!=document.querySelector(".btn"+t)),n.target!=document.querySelector(".btn"+t)?1==e(n)?void console.log(n.target):null==e(n)?void o.classList.remove("active"):void 0:void 0}))}}},646:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(879),i=e(190),r=e(418);const s={closeAfterXSeconds:o.Z,closeClickButton:i.Z,closeClickOutside:r.Z}},535:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(553),i=e(505);const r=class{constructor(n,t){this.options=n,this.keyPopup=t,this.init()}init(){this.isOpenPopup()}isOpenPopup(){return(new i.Z).readConfig(this.options,["scrollToXPercent","visitWebAfterXSeconds","onClickItem","afterViewXPage"],o.Z,this.keyPopup)}}},178:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(1==n.enable){var e=localStorage.getItem(`${t}`);null==e&&(e=0),e++,localStorage.setItem(`${t}`,e),e===n.NumPage&&document.querySelector(`.${t}`).querySelector(".afterViewXPage").classList.add("active")}}},10:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(console.log("aaaaaa"),1==n.enable){if(null==document.querySelector(`.btn${t}`))return;document.querySelector(`.btn${t}`).onclick=()=>{document.querySelector(`.${t}`).querySelector(".onClickItem").classList.add("active")}}}},376:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(!n.enable)return!1;window.addEventListener("scroll",(function(){const e=window.scrollY;console.log("Giá trị đã cuộn: "+e);const o=document.body.scrollHeight-window.innerHeight;console.log("Chiều cao page: "+o);let i=sessionStorage.getItem(t);console.log(n.percent/100*o),e>=n.percent/100*o&&null===i&&(document.querySelector(`.${t}`).querySelector(".scrollToXPercent").classList.add("active"),sessionStorage.setItem(t,1))}))}},57:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(1==n.enable){const e=document.querySelector(`.${t}`).querySelector(".visitWebAfterXSeconds");setTimeout((()=>{e.classList.add("active")}),n.seconds)}}},553:(n,t,e)=>{e.d(t,{Z:()=>a});var o=e(376),i=e(57),r=e(10),s=e(178);const a={scrollToXPercent:o.Z,visitWebAfterXSeconds:i.Z,onClickItem:r.Z,afterViewXPage:s.Z}},384:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(34),i=e(505);const r=class{constructor(n){this.options=n}getStatus(){const n=new i.Z,t=["existClass","existCookie"];return n.activeConditions(this.options,t),n.readConfig(this.options,t,o.Z)}}},497:(n,t,e)=>{e.d(t,{Z:()=>o});const o=n=>!0===n.enable&&document.body.classList.contains("saas-popup")},610:(n,t,e)=>{e.d(t,{Z:()=>o});const o=n=>{if(!0===n.enable){return 1==(n=>{let t=n+"=",e=decodeURIComponent(document.cookie).split(";"),o=e.length;for(let n=0;n<o;n++){let o=e[n];for(;" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""})("saas-popup")}return!1}},34:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(497),i=e(610);const r={existClass:o.Z,existCookie:i.Z}},30:(n,t,e)=>{e.d(t,{Z:()=>o});const o=function(n,t){if(!0===n.enable){let n=!1;const e=document.querySelector(`.${t}`).querySelector(".overlayPopup");new MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"class"===t.attributeName)if(e.classList.contains("active")&&!1===n){let t=document.createElement("div");t.classList.add("overlay"),document.querySelector("body").appendChild(t),n=!0}else if(!e.classList.contains("active")){let t=document.querySelector(".overlay");t&&document.querySelector("body").removeChild(t),n=!1}}))})).observe(e,{attributes:!0})}}},236:(n,t,e)=>{e.d(t,{Z:()=>o});const o=(n,t)=>{if(null!=n.width&&null!=n.height){var e=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=n.width,r=n.height;e<=360?(i*=.4,r*=.4):e<=480?(i*=.5,r*=.5):e<=640?(i*=.7,r*=.7):e<=768&&(i*=.8,r*=.8);var s=(e-i)/e*100,a=(o-r)/o*100,c=e*(n.x/100)*(s/100),p=o*(n.y/100)*(a/100);let l=document.querySelector(`.${t}`).querySelector(".positionPopup");l.style.setProperty("width",`${i}px`,"important"),l.style.setProperty("height",`${r}px`,"important"),l.style.setProperty("left",`${c}px`,"important"),l.style.setProperty("top",`${p}px`,"important")}}},555:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(496),i=e(505);const r=class{constructor(n,t){this.options=n,this.keyPopup=t,this.init()}init(){(new i.Z).readConfig(this.options,["overlayPopup","positionPopup"],o.Z,this.keyPopup)}}},496:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(236),i=e(30);const r={positionPopup:o.Z,overlayPopup:i.Z}}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return n[o](r,r.exports,e),r.exports}e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e(589),e(505),e(227),e(331),e(87),e(214),e(708),e(45),e(960),e(501),e(294),e(519),e(193),e(967),e(996),e(307),e(388),e(413),e(123),e(879),e(190),e(418),e(806),e(646),e(178),e(10),e(376),e(57),e(535),e(553),e(919),e(497),e(610),e(384),e(34),e(30),e(236),e(555),e(496)})();