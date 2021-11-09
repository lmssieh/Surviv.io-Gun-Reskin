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
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img"; //yellow
    } else if(key52.match(/glock|glock_dual/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img";
        } else if(key52.match(/mp5/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img";
    } else if(key52.match(/ak/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img"; //blue
    } else if(key52.match(/scar/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img";
    } else if(key52.match(/sv98/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img";
    } else if(key52.match(/bar/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img";
    } else if(key52.match(/scar/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img";
    } else if(key52.match(/m39/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img";
    } else if(key52.match(/spas12/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img"; //red
    } else if(key52.match(/m1014/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img";
    } else if(key52.match(/l86/g)) { 
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img"; //green
    } else if(key52.match(/scout_elite/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img";
    } else if(key52.match(/mk12/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img";
    } else if(key52.match(/hk416/g)) {
        tracerColors[key3].worldImg.sprite = "gun-m9a17-01.img";
    }
})
})();
