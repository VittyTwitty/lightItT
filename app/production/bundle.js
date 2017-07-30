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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGpzXFxhcHAuanMiLCJhcHBcXGpzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxhQUFhLFNBQVMsY0FBVCxDQUF3QixhQUF4QixDQUFqQjtBQUNBLElBQUksZUFBZSxTQUFTLHNCQUFULENBQWdDLGVBQWhDLEVBQWlELENBQWpELENBQW5CO0FBQ0EsV0FBVyxPQUFYLEdBQXFCLFlBQU07O0FBRXZCLFFBQUksYUFBYSxLQUFiLENBQW1CLE9BQW5CLEtBQStCLE9BQW5DLEVBQTRDO0FBQ3hDLHFCQUFhLEtBQWIsQ0FBbUIsT0FBbkIsR0FBNkIsTUFBN0I7QUFDSCxLQUZELE1BRU87QUFDSCxxQkFBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLE9BQTdCO0FBRUg7QUFFSixDQVREOztBQVdBLElBQUksZUFBZSxTQUFTLHNCQUFULENBQWdDLGNBQWhDLENBQW5CO0FBQ0EsSUFBSSxnQkFBZ0IsU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxFQUEyQyxDQUEzQyxDQUFwQjtBQUNBLElBQUksZ0JBQWdCLFNBQVMsc0JBQVQsQ0FBZ0MsZ0JBQWhDLEVBQWtELENBQWxELENBQXBCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBSSxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLFdBQXhCLENBQXBCO0FBQ0EsSUFBSSxLQUFLLGNBQWMsZ0JBQWQsQ0FBK0IsSUFBL0IsQ0FBVDs7Ozs7QUMvQkEsSUFBSSxZQUFZLFNBQVMsc0JBQVQsQ0FBZ0Msd0JBQWhDLEVBQTBELENBQTFELENBQWhCO0FBQ0EsSUFBSSxhQUFhLFNBQVMsc0JBQVQsQ0FBZ0MseUJBQWhDLEVBQTJELENBQTNELENBQWpCOztBQUVBLElBQUksbUJBQW1CLFNBQVMsc0JBQVQsQ0FBZ0MsZ0JBQWhDLEVBQWtELENBQWxELENBQXZCOztBQUVBLElBQUksY0FBYyxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBbEI7O0FBR0EsSUFBSSxpQkFBaUIsR0FBckI7QUFDQSxJQUFJLGVBQWUsQ0FBbkI7O0FBRUEsVUFBVSxPQUFWLEdBQW9CLFlBQU07QUFDdEIsb0JBQWdCLGNBQWhCO0FBQ0EsWUFBUSxHQUFSLENBQVksWUFBWjtBQUNBLHFCQUFpQixLQUFqQixDQUF1QixTQUF2QixrQkFBZ0QsWUFBaEQ7QUFDSCxDQUpEO0FBS0EsV0FBVyxPQUFYLEdBQXFCLFlBQU07QUFDdkIsb0JBQWdCLGNBQWhCO0FBQ0EsWUFBUSxHQUFSLENBQVksWUFBWjtBQUNBLHFCQUFpQixLQUFqQixDQUF1QixTQUF2QixtQkFBaUQsWUFBakQ7QUFDSCxDQUpEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCBzZWFyY2hvcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1vcGVuJyk7XHJcbmxldCB0b2dnbGVTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2hfaGlkZGVuJylbMF07XHJcbnNlYXJjaG9wZW4ub25jbGljayA9ICgpID0+IHtcclxuXHJcbiAgICBpZiAodG9nZ2xlU2VhcmNoLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcclxuICAgICAgICB0b2dnbGVTZWFyY2guc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9nZ2xlU2VhcmNoLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCBwb3BvVXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpdGVtcy1zZWFyY2gnKTtcclxubGV0IHBvcG9VcFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3cmFwcGVyJylbMF07XHJcbmxldCBwb3BCYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncG9wLWJhY2tncm91bmQnKVswXTtcclxuXHJcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wb1VwQnV0dG9uLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICBwb3BvVXBCdXR0b25baV0ub25jbGljayA9ICgpID0+IHtcclxuLy8gICAgICAgICBwb3BvVXBXcmFwcGVyLmNsYXNzTmFtZSA9IChwb3BvVXBXcmFwcGVyLmNsYXNzTmFtZSA9PT0gJ3Nob3dQb3BVcCcpID8gJycgOiAnc2hvd1BvcFVwJztcclxuLy8gICAgICAgICBwb3BCYWNrZ3JvdW5kLmNsYXNzTmFtZSA9IChwb3BCYWNrZ3JvdW5kLmNsYXNzTmFtZSA9PT0gJ3BvcCcpID8gJycgOiAncG9wJztcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gcG9wQmFja2dyb3VuZC5vbmNsaWNrID0gKCkgPT4ge1xyXG4vLyAgICAgcG9wQmFja2dyb3VuZC5jbGFzc05hbWUgPSAnJztcclxuLy8gICAgIHBvcG9VcFdyYXBwZXIuY2xhc3NOYW1lID0gJyc7XHJcbi8vIH1cclxuXHJcblxyXG5sZXQgYWNjb3JkaW9uRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NvcmRpb24nKTtcclxubGV0IGgzID0gYWNjb3JkaW9uRWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdoMycpO1xyXG5cclxuIiwibGV0IGFycm93TGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Ytc2xpZGVyX2J1dHRvbnMtLWxlZnQnKVswXTtcclxubGV0IGFycm93UmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2LXNsaWRlcl9idXR0b25zLS1yaWdodCcpWzBdO1xyXG5cclxubGV0IHZTbGlkZXJJbm5lck1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2LXNsaWRlcl9pbm5lcicpWzBdO1xyXG5cclxubGV0IHNldE9mUGhvdG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Ytc2xpZGVyX21pbmknKTtcclxuXHJcblxyXG5sZXQgdHJhbnNpdGlvbk1vdmUgPSAxMDA7XHJcbmxldCBwb3NpdGlvbk1vdmUgPSAwO1xyXG5cclxuYXJyb3dMZWZ0Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBwb3NpdGlvbk1vdmUgKz0gdHJhbnNpdGlvbk1vdmU7XHJcbiAgICBjb25zb2xlLmxvZyhwb3NpdGlvbk1vdmUpO1xyXG4gICAgdlNsaWRlcklubmVyTW92ZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zaXRpb25Nb3ZlfXZ3KWA7XHJcbn1cclxuYXJyb3dSaWdodC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgcG9zaXRpb25Nb3ZlIC09IHRyYW5zaXRpb25Nb3ZlO1xyXG4gICAgY29uc29sZS5sb2cocG9zaXRpb25Nb3ZlKVxyXG4gICAgdlNsaWRlcklubmVyTW92ZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9uTW92ZX12dylgO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19
