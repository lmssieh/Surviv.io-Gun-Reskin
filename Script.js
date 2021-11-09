// Reskin for guns
(function() {
    'use strict';
 
var tracerColors = ""
var func = {
    webpack_inject3: (w, e, get) => {
        tracerColors = get("ad1c4e70")
    },
};
if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject3"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject3"],
        func,
        [["webpack_inject3"]]
    ]);
}
Object.keys(tracerColors).forEach(function(key3) {
    if(key52.match(/mac10/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/mac10.png"; //yellow
    } else if(key52.match(/glock|glock_dual/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/glock.png";
        } else if(key52.match(/mp5/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/mp5.png";
    } else if(key52.match(/ak/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/ak.png"; //blue
    } else if(key52.match(/scar/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/scar.png";
    } else if(key52.match(/sv98/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/sv98.png";
    } else if(key52.match(/bar/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/bar.png";
    } else if(key52.match(/m39/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/m39.png";
    } else if(key52.match(/spas12/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/spas12.png"; //red
    } else if(key52.match(/m1014/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/m1014.png";
    } else if(key52.match(/l86/g)) { 
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/L86.png"; //green
    } else if(key52.match(/scout_elite/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/scout.png";
    } else if(key52.match(/mk12/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/mk12.png";
    } else if(key52.match(/hk416/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/hk416.png";
    } else if(key52.match(/flare_gun/g)) {
        tracerColors[key3].worldImg.sprite = "https://raw.githubusercontent.com/iBLiSSIN/Surviv.io-Gun-Reskin/main/Skins/flare.png"; //orange
    }
})
})();
