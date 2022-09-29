// ==UserScript==
// @name         Surviv.io Guns Reskin
// @version      1.0.4
// @description  Reskin guns in the game!
// @author       VNBPM on YT, Nguyễn Vân and font script by sk
// @match        *://surviv.io/*
// @match        *://surviv2.io/*
// @match        *://2dbattleroyale.com/*
// @match        *://2dbattleroyale.org/*
// @match        *://piearesquared.info/*
// @match        *://thecircleisclosing.com/*
// @match        *://archimedesofsyracuse.info/*
// @match        *://secantsecant.com/*
// @match        *://parmainitiative.com/*
// @match        *://nevelskoygroup.com/*
// @match        *://kugahi.com/*
// @match        *://chandlertallowmd.com/*
// @match        *://ot38.club/*
// @match        *://kugaheavyindustry.com/*
// @match        *://drchandlertallow.com/*
// @match        *://rarepotato.com/*
// @grant        none
// @namespace    https://greasyfork.org/users/703117
// ==/UserScript==

(function () {
	"use strict";

	var survivGuns = {};
	var func = {
		webpack_inject3: (w, e, get) => {
			survivGuns = get("ad1c4e70");
		},
	};
	if (typeof window.webpackJsonp === "function") {
		window.webpackJsonp([0], func, ["webpack_inject3"]);
	} else {
		window.webpackJsonp.push([
			["webpack_inject3"],
			func,
			[["webpack_inject3"]],
		]);
	}

	const guns = [
		"mac10",
		"glock",
		"mp5",
		"ak47",
		"scar",
		"sv98",
		"bar",
		"m39",
		"spas12",
		"m1014",
		"l86",
		"scout_elite",
		"mk12",
		"hk416",
		"flare_gun",
	];
  
	const baseURL =
		"https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/";

    let gunsInLocalStorage = JSON.parse(localStorage.getItem('gunLinks')) || null;
    let gunLinks = {};
	guns.forEach(function (gun) {
		survivGuns[gun].worldImg.sprite = `${baseURL}${gun}.png`;
		survivGuns[gun].worldImg.tint = 0xffffff;
    if(!gunsInLocalStorage) {
      gunLinks[survivGuns[gun].name] = `${baseURL}${gun}.png`;
    } else {
      gunLinks = gunsInLocalStorage;
    }
	});

    var gunName = ""
    Object.keys(gunLinks).forEach((key, index) => {
      gunName +=  `<tr><td>${key}</td><td contenteditable="true" id="gun_${key}">${gunLinks[key]}</td></tr>`;
    })

    var container = document.createElement("div")
    container.id = "skcontainer"
    container.style = "display:none;position: absolute;z-index: 9999;width:100%;height:100%;width:100%;height:100%;background:rgba(0,0,0,0.5)"
    container.innerHTML = `
        <div style="width: 80%;height: 80%;top: 50%;left: 50%;position: absolute;transform: translate(-50%, -50%);border-radius: 10px;background-color: #111;">
            <div id="skkey" style="padding:30px">
                <div>
                    <h2>Surviv.io Gun Reskin</h2>
                    <p>want to try a different skin? try replacing the gun skin url below with your own link
                    </p>
                </div>
                <table style="width:100%;">
                    <tr>
                        <th style="background:none">Name</th>
                        <th style="background:none">Link</th>
                    </tr>
                    ${gunName}
                </table>
            </div>
        </div>
    `
    container.addEventListener('click', function(evt) {
        var target = evt.target
        if (target.id == "skcontainer") container.style.display = "none"
    }, false)
    document.getElementById('start-menu-wrapper').appendChild(container)

    Object.keys(gunLinks).forEach(function(kusanali, index) {
        document.getElementById(`gun_${kusanali}`).oninput = function() {
            const value = document.getElementById(`gun_${kusanali}`).textContent;
            survivGuns[guns[index]].worldImg.sprite = value;
            gunLinks[kusanali] = value;
            localStorage.setItem('gunLinks', JSON.stringify(gunLinks));
            console.info('changed', `gun_${kusanali}`, gunLinks)
        }
    })

    var parent = document.getElementById('animated-loadout').querySelector('.btns-container');
    parent.querySelector('.account-loadout-link').style = 'width:145px; position:absolute';
    var div = document.createElement('div')
    div.style = "transition: all .25s ease;margin-left: 154px;height: 56px;width: 56px;border-radius: 5px;background-image: url(https://surviv.io/img/loot/loot-weapon-flare-gun.svg);background-size: 40px;background-repeat: no-repeat;background-position: center;-webkit-animation-name: desert-pulse;-webkit-animation-iteration-count: infinite;-webkit-animation-duration: 4s!important;"
    div.onmouseover = function() {div.style.filter = "brightness(0.8)"}
    div.onmouseout = function() {div.style.filter = "brightness(1)"}
    div.onclick = function() {container.style.display = "block"}
    parent.appendChild(div)
})();
