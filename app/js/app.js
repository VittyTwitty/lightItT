let searchopen = document.getElementById('search-open');
let toggleSearch = document.getElementsByClassName('search_hidden')[0];
searchopen.onclick = () => {

    if (toggleSearch.style.display === 'block') {
        toggleSearch.style.display = 'none';
    } else {
        toggleSearch.style.display = 'block';

    }

}

let popoUpButton = document.getElementsByClassName('items-search');
let popoUpWrapper = document.getElementsByClassName('wrapper')[0];
let popBackground = document.getElementsByClassName('pop-background')[0];

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


let accordionElem = document.getElementById('accordion');
let h3 = accordionElem.querySelectorAll('h3');

