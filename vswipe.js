/*
 * Vswipe.js
 * A super simple and quick swipe detection library for vanillaJS.
 *
 * License: MIT
*/
(function(window){

  this.config = {
    sensitivity: 100
  }

  this.attach = function(elementId,funcOnComplete) {
    var element = document.getElementById(elementId);
    var config = {
      x: 0,
      y: 0
    };

    //Hook ontouch, mousedown etc.
    element.onmousedown = function(e) {
      window.swipe.start(element,config,e);
    }
    element.ontouchstart = function(e) {
      window.swipe.start(element,config,e);
    }
    element.onmouseup = function(e) {
      window.swipe.end(element,config,e,funcOnComplete);
    }
    element.ontouchend = function(e) {
      window.swipe.end(element,config,e,funcOnComplete);
    }
    element.ontouchcancel = function(e) {
      window.swipe.end(element,config,e,funcOnComplete);
    }
  }

  this.start = function(element,config,e) {

    if (typeof e.clientX !== "undefined") {
      config.x = e.clientX;
    } else {
      config.x = e.targetTouches[0].pageX;
    }

    if (typeof e.clientY !== "undefined") {
      config.y = e.clientY;
    } else {
      config.y = e.targetTouches[0].pageY;
    }

  }

  this.end = function(element,config,e,funcOnComplete) {

    var newX =  0;
    var newY =  0;

    if (typeof e.clientX !== "undefined") {
      newX = e.clientX;
    } else {
      newX = e.changedTouches[0].pageX;
    }

    if (typeof e.clientY !== "undefined") {
      newY = e.clientY;
    } else {
      newY = e.changedTouches[0].pageY;
    }

    var diff_x = config.x - newX;
    var diff_y = config.y - newY;

    var point_left = window.swipe.config.sensitivity;
    var point_right = window.swipe.config.sensitivity * -1;

    var swipeDir = 0;

    if (diff_x >= point_left) {
      //Swipe left.
      swipeDir = 1;
    }
    if (diff_x <= point_right) {
      //Swipe right.
      swipeDir = 2;
    }
    if (diff_y >= point_left) {
      //Swipe up.
      swipeDir = 3;
    }
    if (diff_y <= point_right) {
      //Swipe down.
      swipeDir = 4;
    }

    if (swipeDir !== 0) {
      funcOnComplete(swipeDir);
    }

  }

  window.swipe = this;

})(window);
