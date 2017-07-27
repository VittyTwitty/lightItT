(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var searchopen = document.getElementById('search-open');
var toggleSearch = document.getElementsByClassName('search_hidden')[0];
searchopen.onclick = function () {

    if (toggleSearch.style.display === 'block') {
        toggleSearch.style.display = 'none';
    } else {
        toggleSearch.style.display = 'block';
    }
};

var popoUpButton = document.getElementsByClassName('items-search');
var popoUpWrapper = document.getElementsByClassName('wrapper')[0];
var popBackground = document.getElementsByClassName('pop-background')[0];

// for (let i = 0; i < popoUpButton.length; i++) {
//     popoUpButton[i].onclick = () => {
//         popoUpWrapper.className = (popoUpWrapper.className === 'showPopUp') ? '' : 'showPopUp';
//         popBackground.className = (popBackground.className === 'pop') ? '' : 'pop';
//     }
// }

// popBackground.onclick = () => {
//     popBackground.className = '';
//     popoUpWrapper.className = '';
// }


var accordionElem = document.getElementById('accordion');
var h3 = accordionElem.querySelectorAll('h3');

},{}],2:[function(require,module,exports){
'use strict';

var arrowLeft = document.getElementsByClassName('v-slider_buttons--left')[0];
var arrowRight = document.getElementsByClassName('v-slider_buttons--right')[0];

var vSliderInnerMove = document.getElementsByClassName('v-slider_inner')[0];

var setOfPhotos = document.getElementById('v-slider_mini');

var transitionMove = 100;
var positionMove = 0;

arrowLeft.onclick = function () {
    positionMove += transitionMove;
    console.log(positionMove);
    vSliderInnerMove.style.transform = 'translate(' + positionMove + 'vw)';
};
arrowRight.onclick = function () {
    positionMove -= transitionMove;
    console.log(positionMove);
    vSliderInnerMove.style.transform = 'translateX(' + positionMove + 'vw)';
};

},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYXBwLmpzIiwiYXBwL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLGFBQWEsU0FBUyxjQUFULENBQXdCLGFBQXhCLENBQWpCO0FBQ0EsSUFBSSxlQUFlLFNBQVMsc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQsQ0FBakQsQ0FBbkI7QUFDQSxXQUFXLE9BQVgsR0FBcUIsWUFBTTs7QUFFdkIsUUFBSSxhQUFhLEtBQWIsQ0FBbUIsT0FBbkIsS0FBK0IsT0FBbkMsRUFBNEM7QUFDeEMscUJBQWEsS0FBYixDQUFtQixPQUFuQixHQUE2QixNQUE3QjtBQUNILEtBRkQsTUFFTztBQUNILHFCQUFhLEtBQWIsQ0FBbUIsT0FBbkIsR0FBNkIsT0FBN0I7QUFFSDtBQUVKLENBVEQ7O0FBV0EsSUFBSSxlQUFlLFNBQVMsc0JBQVQsQ0FBZ0MsY0FBaEMsQ0FBbkI7QUFDQSxJQUFJLGdCQUFnQixTQUFTLHNCQUFULENBQWdDLFNBQWhDLEVBQTJDLENBQTNDLENBQXBCO0FBQ0EsSUFBSSxnQkFBZ0IsU0FBUyxzQkFBVCxDQUFnQyxnQkFBaEMsRUFBa0QsQ0FBbEQsQ0FBcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFJLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBcEI7QUFDQSxJQUFJLEtBQUssY0FBYyxnQkFBZCxDQUErQixJQUEvQixDQUFUOzs7OztBQy9CQSxJQUFJLFlBQVksU0FBUyxzQkFBVCxDQUFnQyx3QkFBaEMsRUFBMEQsQ0FBMUQsQ0FBaEI7QUFDQSxJQUFJLGFBQWEsU0FBUyxzQkFBVCxDQUFnQyx5QkFBaEMsRUFBMkQsQ0FBM0QsQ0FBakI7O0FBRUEsSUFBSSxtQkFBbUIsU0FBUyxzQkFBVCxDQUFnQyxnQkFBaEMsRUFBa0QsQ0FBbEQsQ0FBdkI7O0FBRUEsSUFBSSxjQUFjLFNBQVMsY0FBVCxDQUF3QixlQUF4QixDQUFsQjs7QUFHQSxJQUFJLGlCQUFpQixHQUFyQjtBQUNBLElBQUksZUFBZSxDQUFuQjs7QUFFQSxVQUFVLE9BQVYsR0FBb0IsWUFBTTtBQUN0QixvQkFBZ0IsY0FBaEI7QUFDQSxZQUFRLEdBQVIsQ0FBWSxZQUFaO0FBQ0EscUJBQWlCLEtBQWpCLENBQXVCLFNBQXZCLGtCQUFnRCxZQUFoRDtBQUNILENBSkQ7QUFLQSxXQUFXLE9BQVgsR0FBcUIsWUFBTTtBQUN2QixvQkFBZ0IsY0FBaEI7QUFDQSxZQUFRLEdBQVIsQ0FBWSxZQUFaO0FBQ0EscUJBQWlCLEtBQWpCLENBQXVCLFNBQXZCLG1CQUFpRCxZQUFqRDtBQUNILENBSkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHNlYXJjaG9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLW9wZW4nKTtcbmxldCB0b2dnbGVTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2hfaGlkZGVuJylbMF07XG5zZWFyY2hvcGVuLm9uY2xpY2sgPSAoKSA9PiB7XG5cbiAgICBpZiAodG9nZ2xlU2VhcmNoLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgdG9nZ2xlU2VhcmNoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9nZ2xlU2VhcmNoLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgfVxuXG59XG5cbmxldCBwb3BvVXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpdGVtcy1zZWFyY2gnKTtcbmxldCBwb3BvVXBXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3JhcHBlcicpWzBdO1xubGV0IHBvcEJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3AtYmFja2dyb3VuZCcpWzBdO1xuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHBvcG9VcEJ1dHRvbi5sZW5ndGg7IGkrKykge1xuLy8gICAgIHBvcG9VcEJ1dHRvbltpXS5vbmNsaWNrID0gKCkgPT4ge1xuLy8gICAgICAgICBwb3BvVXBXcmFwcGVyLmNsYXNzTmFtZSA9IChwb3BvVXBXcmFwcGVyLmNsYXNzTmFtZSA9PT0gJ3Nob3dQb3BVcCcpID8gJycgOiAnc2hvd1BvcFVwJztcbi8vICAgICAgICAgcG9wQmFja2dyb3VuZC5jbGFzc05hbWUgPSAocG9wQmFja2dyb3VuZC5jbGFzc05hbWUgPT09ICdwb3AnKSA/ICcnIDogJ3BvcCc7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBwb3BCYWNrZ3JvdW5kLm9uY2xpY2sgPSAoKSA9PiB7XG4vLyAgICAgcG9wQmFja2dyb3VuZC5jbGFzc05hbWUgPSAnJztcbi8vICAgICBwb3BvVXBXcmFwcGVyLmNsYXNzTmFtZSA9ICcnO1xuLy8gfVxuXG5cbmxldCBhY2NvcmRpb25FbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY29yZGlvbicpO1xubGV0IGgzID0gYWNjb3JkaW9uRWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdoMycpO1xuXG4iLCJsZXQgYXJyb3dMZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndi1zbGlkZXJfYnV0dG9ucy0tbGVmdCcpWzBdO1xubGV0IGFycm93UmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2LXNsaWRlcl9idXR0b25zLS1yaWdodCcpWzBdO1xuXG5sZXQgdlNsaWRlcklubmVyTW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Ytc2xpZGVyX2lubmVyJylbMF07XG5cbmxldCBzZXRPZlBob3RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2LXNsaWRlcl9taW5pJyk7XG5cblxubGV0IHRyYW5zaXRpb25Nb3ZlID0gMTAwO1xubGV0IHBvc2l0aW9uTW92ZSA9IDA7XG5cbmFycm93TGVmdC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHBvc2l0aW9uTW92ZSArPSB0cmFuc2l0aW9uTW92ZTtcbiAgICBjb25zb2xlLmxvZyhwb3NpdGlvbk1vdmUpO1xuICAgIHZTbGlkZXJJbm5lck1vdmUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uTW92ZX12dylgO1xufVxuYXJyb3dSaWdodC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHBvc2l0aW9uTW92ZSAtPSB0cmFuc2l0aW9uTW92ZTtcbiAgICBjb25zb2xlLmxvZyhwb3NpdGlvbk1vdmUpXG4gICAgdlNsaWRlcklubmVyTW92ZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9uTW92ZX12dylgO1xufVxuXG5cblxuXG5cbiJdfQ==
