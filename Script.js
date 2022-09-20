// ==UserScript==
// @name         Surviv.io Guns Reskin
// @version      1.0.2
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
// @namespace https://greasyfork.org/users/703117
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
		"ak",
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
	survivGuns[gun].worldImg.tint = 0xffffff;

	guns.forEach(function (gun) {
		survivGuns[gun].worldImg.sprite = `${baseURL}${gun}.png`;
		survivGuns[gun].worldImg.tint = 0xffffff;
	});
})();
