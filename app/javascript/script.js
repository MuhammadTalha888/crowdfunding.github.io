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
    console.log('here');
    underline4.classList.add('extended');
});
item4.addEventListener('mouseout', function handleMouseOut() {
    underline4.classList.remove('extended');
});
