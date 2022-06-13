// underline hover coding
var item1 = document.getElementById('item1');
var underline1 = document.getElementById('underline1');
item1.addEventListener("mouseover", function handleMouseOver() {
    underline1.classList.add('underLineExtended');
});
item1.addEventListener('mouseout', function handleMouseOut() {
    underline1.classList.remove('underLineExtended');
});


var item2 = document.getElementById('item2');
var underline2 = document.getElementById('underline2');
item2.addEventListener("mouseover", function handleMouseOver() {
    underline2.classList.add('underLineExtended');
});
item2.addEventListener('mouseout', function handleMouseOut() {
    underline2.classList.remove('underLineExtended');
});


var item3 = document.getElementById('item3');
var underline3 = document.getElementById('underline3');
item3.addEventListener("mouseover", function handleMouseOver() {
    underline3.classList.add('underLineExtended');
});
item3.addEventListener('mouseout', function handleMouseOut() {
    underline3.classList.remove('underLineExtended');
});


var item4 = document.getElementById('item4');
var underline4 = document.getElementById('underline4');
item4.addEventListener("mouseover", function handleMouseOver() {
    // console.log('here');
    underline4.classList.add('extended');
});
item4.addEventListener('mouseout', function handleMouseOut() {
    underline4.classList.remove('extended');
});


// onclick of the select reward button

// function selectRewardButtonClicked() {
//     console.log('select reward button clicked');
// }


// bookmarked animation 
onceBookmarked = true;
function bookmarkedButton() {
    var bookmark = document.getElementsByClassName('bookmarked');
    // bmlogoBookmark
    var bmlogo = document.getElementsByClassName('bmlogo');

    for (let i = 0; i < bookmark.length; i++) {
        if (onceBookmarked) {
            bookmark[i].classList.add('bookmark');
            bmlogo[0].classList.add('bmlogoBookmark');
            onceBookmarked = false;
        }
        else { 
            bookmark[i].classList.remove('bookmark');
            bmlogo[0].classList.remove('bmlogoBookmark');

            onceBookmarked = true;
        }
        // bookmark[i].
        // bookmark[i].toggleAttribute('bookmark');
    }
    // bookmark.classList.add("bookmark");
    // bookmark.childList.add('bookmark');
}


// active state open on button pressed  
function openActiveModel() { 
    console.log('active button clicked');
    var activeState = document.getElementsByClassName('activeState');
    for (let i = 0; i < activeState.length; i++) {
        activeState[i].classList.remove('hide');
    }
}

function closeActiveModel() {
    // console.log('active button clicked');
    var activeState = document.getElementsByClassName('activeState');
    for (let i = 0; i < activeState.length; i++) {
        activeState[i].classList.add('hide');
    }
}

// active model select logix

function activeBarToggle(idNum) { 
    // console.log(idNum);
    var parentIds = document.getElementsByClassName('activeModelBar');
    var id = parentIds[idNum];

    if (id.classList.contains('activeModelBarClicked')) {

        id.classList.remove('activeModelBarClicked');
    } else { 
        id.classList.add('activeModelBarClicked');

    }
    
    var pFirst = id.getElementsByClassName('flex')[0].getElementsByClassName('pFirst');
    if (pFirst[0].classList.contains('pClicked')) {

        pFirst[0].classList.remove('pClicked');
    } else {
        pFirst[0].classList.add('pClicked');

    }

    var barClicked = id.getElementsByClassName('flex')[0].getElementsByClassName('barClicked');
    if (barClicked[0].classList.contains('hide')) {

        barClicked[0].classList.remove('hide');
    } else {
        barClicked[0].classList.add('hide');

    }

    var line = id.getElementsByClassName('line');
    if (line[0].classList.contains('hide')) {

        line[0].classList.remove('hide');
    } else {
        line[0].classList.add('hide');

    }

    var inputBar = id.getElementsByClassName('toHideSection');
    if (inputBar[0].classList.contains('hide')) {

        inputBar[0].classList.remove('hide');
    } else {
        inputBar[0].classList.add('hide');

    }
}
